(() => {
  const STORAGE_KEY = 'yspeed_rate';
  const DEFAULT_RATE = 1.0;
  const MIN_RATE = 0.1;
  const MAX_RATE = 10.0;
  const STEP = 0.05;

  let currentRate = DEFAULT_RATE;
  let videoEl = null;
  let ui = null;
  let navListenerAttached = false;

  function clamp(val, min, max) {
    return Math.min(max, Math.max(min, val));
  }

  function formatRate(rate) {
    return rate.toFixed(2).replace(/0+$/, '').replace(/\.$/, '');
  }

  function findVideo() {
    const v = document.querySelector('video');
    return v || null;
  }

  function applyRate(rate) {
    currentRate = clamp(rate, MIN_RATE, MAX_RATE);
    if (videoEl && typeof videoEl.playbackRate === 'number') {
      try {
        videoEl.playbackRate = currentRate;
      } catch (_) {
        // ignore
      }
    }
    updateUi(currentRate);
  }

  function updateUi(rate) {
    if (!ui) return;
    const range = ui.querySelector('input[type="range"]');
    const number = ui.querySelector('input[type="number"]');
    const badge = ui.querySelector('.yspeed-badge');
    if (range) range.value = String(rate);
    if (number) number.value = String(Number(rate.toFixed(2)));
    if (badge) badge.textContent = `${formatRate(rate)}x`;
  }

  function saveRate(rate) {
    try {
      chrome.storage && chrome.storage.sync
        ? chrome.storage.sync.set({ [STORAGE_KEY]: rate })
        : localStorage.setItem(STORAGE_KEY, String(rate));
    } catch (_) {
      // ignore storage failures
    }
  }

  function loadRate() {
    return new Promise((resolve) => {
      try {
        if (chrome.storage && chrome.storage.sync) {
          chrome.storage.sync.get([STORAGE_KEY], (res) => {
            const r = res && typeof res[STORAGE_KEY] === 'number' ? res[STORAGE_KEY] : DEFAULT_RATE;
            resolve(clamp(r, MIN_RATE, MAX_RATE));
          });
        } else {
          const v = parseFloat(localStorage.getItem(STORAGE_KEY));
          resolve(Number.isFinite(v) ? clamp(v, MIN_RATE, MAX_RATE) : DEFAULT_RATE);
        }
      } catch (_) {
        resolve(DEFAULT_RATE);
      }
    });
  }

  function createUi() {
    if (ui) return ui;
    const container = document.createElement('div');
    container.className = 'yspeed-container';

    const header = document.createElement('button');
    header.className = 'yspeed-toggle';
    header.setAttribute('title', 'Toggle speed controls');
    const badge = document.createElement('span');
    badge.className = 'yspeed-badge';
    badge.textContent = `${formatRate(currentRate)}x`;
    header.appendChild(badge);

    const panel = document.createElement('div');
    panel.className = 'yspeed-panel';

    const range = document.createElement('input');
    range.type = 'range';
    range.min = String(MIN_RATE);
    range.max = String(MAX_RATE);
    range.step = String(STEP);
    range.value = String(currentRate);
    range.className = 'yspeed-range';

    const number = document.createElement('input');
    number.type = 'number';
    number.min = String(MIN_RATE);
    number.max = String(MAX_RATE);
    number.step = '0.01';
    number.value = String(Number(currentRate.toFixed(2)));
    number.className = 'yspeed-number';

    const minus = document.createElement('button');
    minus.textContent = '−';
    minus.className = 'yspeed-step';
    minus.setAttribute('title', `Decrease ${STEP}x (Alt+,)`);

    const plus = document.createElement('button');
    plus.textContent = '+';
    plus.className = 'yspeed-step';
    plus.setAttribute('title', `Increase ${STEP}x (Alt+.)`);

    const reset = document.createElement('button');
    reset.textContent = '1x';
    reset.className = 'yspeed-reset';
    reset.setAttribute('title', 'Reset to 1.0x');

    const controls = document.createElement('div');
    controls.className = 'yspeed-controls';
    controls.append(minus, range, plus, number, reset);

    panel.appendChild(controls);
    container.append(header, panel);

    header.addEventListener('click', () => {
      container.classList.toggle('open');
    });

    function setRateFrom(val) {
      const r = clamp(parseFloat(val), MIN_RATE, MAX_RATE);
      applyRate(r);
      saveRate(r);
    }

    range.addEventListener('input', (e) => {
      setRateFrom(e.target.value);
    });

    number.addEventListener('change', (e) => {
      setRateFrom(e.target.value);
    });

    minus.addEventListener('click', () => {
      setRateFrom((currentRate - STEP).toFixed(2));
    });
    plus.addEventListener('click', () => {
      setRateFrom((currentRate + STEP).toFixed(2));
    });
    reset.addEventListener('click', () => {
      setRateFrom(1.0);
    });

    // Keyboard shortcuts: Alt + . increase, Alt + , decrease
    document.addEventListener('keydown', (e) => {
      const inEditable = e.target && ((e.target.tagName === 'INPUT') || (e.target.tagName === 'TEXTAREA') || e.target.isContentEditable);
      if (inEditable) return;
      if (e.altKey && !e.shiftKey && !e.ctrlKey && !e.metaKey) {
        if (e.code === 'Period') {
          e.preventDefault();
          setRateFrom((currentRate + STEP).toFixed(2));
        } else if (e.code === 'Comma') {
          e.preventDefault();
          setRateFrom((currentRate - STEP).toFixed(2));
        }
      }
    }, { passive: false });

    document.documentElement.appendChild(container);
    ui = container;
    return ui;
  }

  function onVideoReady(v) {
    if (!v) return;
    if (videoEl === v) return;
    if (videoEl) {
      try {
        videoEl.removeEventListener('ratechange', handleRateChange);
      } catch (_) {}
    }
    videoEl = v;
    try {
      videoEl.addEventListener('ratechange', handleRateChange);
    } catch (_) {}
    // Ensure our rate is applied after YouTube sets its defaults
    setTimeout(() => applyRate(currentRate), 50);
  }

  function handleRateChange() {
    const r = clamp(videoEl.playbackRate || currentRate, MIN_RATE, MAX_RATE);
    currentRate = r;
    updateUi(r);
    saveRate(r);
  }

  async function init() {
    currentRate = await loadRate();
    createUi();

    // Observe for video element changes (SPA navigation)
    const observer = new MutationObserver(() => {
      const v = findVideo();
      if (v) onVideoReady(v);
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });

    // Initial video check
    onVideoReady(findVideo());

    // YouTube SPA event
    if (!navListenerAttached) {
      window.addEventListener('yt-navigate-finish', () => {
        // Re-apply when navigation finishes
        onVideoReady(findVideo());
        applyRate(currentRate);
      });
      navListenerAttached = true;
    }

    // Fallback: periodically ensure we control the rate on new videos
    setInterval(() => {
      const v = findVideo();
      if (v && v !== videoEl) {
        onVideoReady(v);
      }
      if (v) {
        if (Math.abs((v.playbackRate || 1) - currentRate) > 0.001) {
          v.playbackRate = currentRate;
        }
      }
    }, 1000);
  }

  // Run only on top-level document
  if (window.top === window) {
    init().catch(() => {});
  }

  // Messaging: allow popup to get/set rate
  try {
    chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
      if (!msg || !msg.type) return; 
      if (msg.type === 'YSPEED_GET') {
        sendResponse({
          rate: currentRate,
          min: MIN_RATE,
          max: MAX_RATE,
          step: STEP
        });
      } else if (msg.type === 'YSPEED_SET') {
        const r = clamp(parseFloat(msg.rate), MIN_RATE, MAX_RATE);
        applyRate(r);
        saveRate(r);
        sendResponse({ ok: true, rate: currentRate });
      }
      return true;
    });
  } catch (_) {
    // ignore; not in extension context
  }
})();

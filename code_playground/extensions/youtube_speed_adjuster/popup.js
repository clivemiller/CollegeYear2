function formatRate(r){
  const s = Number(r).toFixed(2).replace(/0+$/,'').replace(/\.$/,'');
  return s + 'x';
}

async function getActiveTab() {
  return new Promise((resolve) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      resolve(tabs && tabs[0]);
    });
  });
}

async function send(tabId, msg) {
  return new Promise((resolve) => {
    chrome.tabs.sendMessage(tabId, msg, (res) => resolve(res));
  });
}

(async function init(){
  const badge = document.getElementById('badge');
  const range = document.getElementById('range');
  const number = document.getElementById('number');
  const minus = document.getElementById('minus');
  const plus = document.getElementById('plus');
  const reset = document.getElementById('reset');
  const ui = document.getElementById('ui');
  const notYoutube = document.getElementById('not-youtube');

  const tab = await getActiveTab();
  const isYouTube = tab && tab.url && /https?:\/\/(www\.)?(m\.)?(youtube\.com|youtu\.be)\//i.test(tab.url);
  if (!isYouTube) {
    notYoutube.classList.remove('hidden');
    return;
  }

  const info = await send(tab.id, { type: 'YSPEED_GET' });
  if (!info) {
    notYoutube.textContent = 'Could not connect to the page. Refresh and try again.';
    notYoutube.classList.remove('hidden');
    return;
  }

  const state = {
    rate: info.rate,
    min: info.min,
    max: info.max,
    step: info.step
  };

  function render() {
    badge.textContent = formatRate(state.rate);
    range.min = state.min;
    range.max = state.max;
    range.step = state.step;
    range.value = state.rate;
    number.min = state.min;
    number.max = state.max;
    number.step = 0.01;
    number.value = Number(state.rate).toFixed(2);
  }

  async function setRate(next){
    const r = Math.min(state.max, Math.max(state.min, parseFloat(next)));
    const res = await send(tab.id, { type: 'YSPEED_SET', rate: r });
    if (res && res.ok) {
      state.rate = res.rate;
      render();
    }
  }

  minus.addEventListener('click', () => setRate((state.rate - state.step).toFixed(2)));
  plus.addEventListener('click', () => setRate((state.rate + state.step).toFixed(2)));
  reset.addEventListener('click', () => setRate(1.0));
  range.addEventListener('input', (e) => setRate(e.target.value));
  number.addEventListener('change', (e) => setRate(e.target.value));

  ui.classList.remove('hidden');
  render();
})();


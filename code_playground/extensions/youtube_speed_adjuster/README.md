YouTube Speed Adjuster (Chrome Extension)

Features
- Adjust playback speed from 0.1x to 10x.
- Slider, number input, quick +/- buttons, and reset to 1x.
- Keyboard shortcuts: Alt + . to increase, Alt + , to decrease.
- Persists your preferred speed across videos using chrome.storage.

Install (Load Unpacked)
1. Open Chrome and go to chrome://extensions.
2. Enable "Developer mode" (top-right).
3. Click "Load unpacked".
4. Select the folder: code_playground/extensions/youtube_speed_adjuster
5. Open a YouTube video; you should see a small "badge" near the top-left showing the speed (e.g., 1.00x). Click it to open the controls.

Notes
- Runs on https://www.youtube.com/*, https://youtube.com/*, https://m.youtube.com/*, and https://youtu.be/*.
- If YouTube navigates within the app (SPA), the extension re-applies your preferred speed automatically.
- If you change the speed using YouTube’s own menu, the extension will notice and sync the UI and stored value.


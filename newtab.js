const messageHere = document.getElementById('message-here');
messageHere.textContent = localStorage.getItem('alarmMessage');


window.addEventListener('load', () => {
    const alarmSound = localStorage.getItem('alarmSound');
    new Audio(chrome.runtime.getURL(`audios/${alarmSound}`)).play();
});


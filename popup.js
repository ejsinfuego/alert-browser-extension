document.getElementById('set-time-btn').addEventListener('click', () => {
    const time = document.getElementById('time-input').value;
    if (time) {
        const [hours, minutes] = time.split(':');
        const now = new Date();
        const alarmTime = new Date();
        alarmTime.setHours(hours, minutes, 0, 0);

        if (alarmTime < now) {
            alarmTime.setDate(alarmTime.getDate() + 1); // set for the next day if time has passed
        }

        const displayTime = alarmTime.toLocaleTimeString();
        document.getElementById('set-time-display').textContent = `Alarm set for: ${displayTime}`;

        const message = document.getElementById('message-input').value;
        if (message) {
            localStorage.setItem('alarmMessage', message);
        }

         // save the set time to local storage
        localStorage.setItem('alarmTime', displayTime);

        const delayInMinutes = (alarmTime - now) / 1000 / 60;
        chrome.runtime.sendMessage({ delay: delayInMinutes });
    }
});

window.addEventListener('load', () => {
    const savedTime = localStorage.getItem('alarmTime');
    //set width of the body
    document.body.style.width = '300px';
    if (savedTime) {
      document.getElementById('set-time-display').textContent = `Alarm set at: ${savedTime}`;
    }
  });


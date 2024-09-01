chrome.runtime.onMessage.addListener((message) => {
    if (message.delay) {
        chrome.alarms.create('openTabAlarm', { delayInMinutes: message.delay });
    }
});

chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'openTabAlarm') {
        chrome.tabs.create({ url: 'newtab.html' })
    }
});

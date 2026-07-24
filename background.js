const NEWS_URL = 'https://dokkaninfo.com/news';

async function checkForNewNews(isTesting = false) {
  console.log("1. Background check started... isTesting:", isTesting);
  
  try {
    const response = await fetch(NEWS_URL, { cache: 'no-store' });
    const html = await response.text();

    const jsonMatch = html.match(/v-bind:news_json="([^"]+)"/);
    
    if (!jsonMatch) {
      console.error("ERROR: No JSON data found.");
      return;
    }

    const rawJsonString = jsonMatch[1].replace(/&quot;/g, '"');
    const newsData = JSON.parse(rawJsonString);

    if (!newsData.data || newsData.data.length === 0) {
       console.error("ERROR: JSON is empty.");
       return;
    }

    const latestNewsItem = newsData.data[0];
    const fullLink = NEWS_URL + "/" + latestNewsItem.id;
    const currentNews = latestNewsItem.title.replace(/\r?\n/g, ' ').trim();

    console.log("2. JSON decoded! Latest news:", currentNews);

    chrome.storage.local.get(['lastNews'], (result) => {
      const lastNews = result.lastNews || "";

      if (currentNews !== lastNews || isTesting) {
        console.log("3. -> NEW NEWS FOUND, firing notification!");
        chrome.storage.local.set({ lastNews: currentNews });

        chrome.notifications.create(fullLink + "?" + Date.now(), {
          type: "basic",
          iconUrl: "icon.png", 
          title: "New Dokkan News! 🔥",
          message: currentNews,
          priority: 2,
          requireInteraction: true 
        }, (notificationId) => {
          if (chrome.runtime.lastError) {
            console.error("NOTIFICATION ERROR:", chrome.runtime.lastError.message);
          } else {
            console.log("4. Notification successful! ID:", notificationId);
          }
        });
      } else {
         console.log("3. -> Same news, no notification.");
      }
    });

  } catch (error) {
    console.error("NETWORK ERROR:", error);
  }
}

chrome.notifications.onClicked.addListener((notificationId) => {
  if (notificationId && notificationId.startsWith("http")) {
    const realLink = notificationId.split("?")[0];
    chrome.tabs.create({ url: realLink });
  }
});

function resetAlarm(minutes) {
  chrome.alarms.clear("checkDokkan", () => {
    chrome.alarms.create("checkDokkan", { periodInMinutes: minutes });
  });
}

chrome.runtime.onInstalled.addListener(() => {
  checkForNewNews();
  chrome.storage.local.get(["interval"], res => {
    resetAlarm(res.interval || 15);
  });
});

chrome.alarms.onAlarm.addListener(alarm => {
  if (alarm.name === "checkDokkan") checkForNewNews();
});

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === "SET_INTERVAL") {
    resetAlarm(msg.value);
    checkForNewNews(true); 
  }
});
const newsListDiv = document.getElementById("news-list");
const intervalSelect = document.getElementById("interval");
const btnOpen = document.getElementById("btn-open");

const ENGLISH_URL = "https://dokkaninfo.com/news";

chrome.storage.local.get(["interval"], res => {
  intervalSelect.value = res.interval || 15;
});

async function fetchAndDisplayNews() {
  try {
    const res = await fetch(ENGLISH_URL + "?t=" + Date.now());
    const html = await res.text();
    
    const jsonMatch = html.match(/v-bind:news_json="([^"]+)"/);
    if (!jsonMatch) {
      newsListDiv.innerHTML = "<div class='loading'>Cannot load data from the website.</div>";
      return;
    }

    const rawJsonString = jsonMatch[1].replace(/&quot;/g, '"');
    const newsData = JSON.parse(rawJsonString);
    
    newsListDiv.innerHTML = ""; 
    
    if (!newsData.data || newsData.data.length === 0) {
      newsListDiv.innerHTML = "<div class='loading'>No news found.</div>";
      return;
    }

    const maxItems = Math.min(newsData.data.length, 8);
    
    for (let i = 0; i < maxItems; i++) {
      const item = newsData.data[i];
      const link = ENGLISH_URL + "/" + item.id;
      const imgSrc = item.banner ? ("https://dokkaninfo.com" + item.banner) : "icon.png";
      const titleText = item.title.replace(/\r?\n/g, ' ').trim();
      const dateObj = new Date(item.start_at * 1000);
      

      const dateString = dateObj.toLocaleDateString('en-US');

      const itemDiv = document.createElement("div");
      itemDiv.className = "news-item";
      itemDiv.innerHTML = `
        <img src="${imgSrc}" class="news-img" onerror="this.src='icon.png'" />
        <div class="news-info">
          <div class="news-title">${titleText}</div>
          <div class="news-date">📅 ${dateString}</div>
        </div>
      `;
      
      itemDiv.addEventListener("click", () => chrome.tabs.create({ url: link }));
      newsListDiv.appendChild(itemDiv);
    }
  } catch (error) {
    newsListDiv.innerHTML = "<div class='loading'>Network error. Please try again!</div>";
  }
}

fetchAndDisplayNews();

const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

intervalSelect.addEventListener("change", () => {
  const value = Number(intervalSelect.value);
  chrome.storage.local.set({ interval: value });
  chrome.runtime.sendMessage({ type: "SET_INTERVAL", value });
});

btnOpen.addEventListener("click", () => chrome.tabs.create({ url: ENGLISH_URL }));
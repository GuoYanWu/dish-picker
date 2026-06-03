const dishes = [
  "酸辣土豆丝",
  "干煸杏鲍菇",
  "茄汁西葫芦",
  "双椒鸡丁",
  "小白菜炒平菇",
  "红烧茄子",
  "豆角炒肉",
  "杏鲍菇炒鸡蛋",
  "酸辣包菜",
  "鱼香肉丝",
  "清炒豌豆尖",
  "清炒四季豆丝",
  "土豆焖豆角",
  "火腿片炒土豆片",
  "辣椒炒肉",
  "酸辣鸡腿",
  "洋葱炒鸡肉",
  "木须肉",
  "番茄炒蛋",
  "椒盐鸡翅",
  "可乐鸡翅",
  "干锅花菜",
  "干煸豆角",
  "荷兰豆炒腊肠",
  "西芹炒鸡胸肉",
  "蒜薹炒肉丝",
  "青椒炒香菇",
  "照烧鸡腿肉",
  "酸辣藕丁",
  "蚝油生菜",
  "肉末豆角",
  "蒜蓉娃娃菜",
  "孜然火腿土豆",
  "糖醋樱桃肉",
  "红烧排骨",
  "大盘鸡",
  "口水鸡",
  "蜜汁青椒酿肉",
  "红烧肉土豆",
  "宫保鸡丁",
  "辣炒腐竹",
  "茄辣西",
  "红烧猪蹄",
  "辣子鸡丁",
  "毛血旺",
  "酱香鸡蛋",
  "蒜蓉大虾",
  "水煮肉片",
  "牛肉娃娃菜",
  "孜然牛肉",
  "孜然羊肉",
  "葱烧鸡",
  "小鸡炖蘑菇",
  "糖醋排骨",
  "麻辣香锅",
  "黄瓜鸡蛋炒火腿片",
  "土豆炒腊肠",
  "话梅鸡翅"
];

const resultEl = document.getElementById("result");
const pickBtn = document.getElementById("pickBtn");
const rerollBtn = document.getElementById("rerollBtn");
const copyBtn = document.getElementById("copyBtn");
const menuListEl = document.getElementById("menuList");
const countEl = document.getElementById("count");
const historyListEl = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistoryBtn");
const template = document.getElementById("menuItemTemplate");

const HISTORY_KEY = "dish-picker-history";
const MAX_HISTORY = 8;

let currentDish = "";
let rollingTimer = null;
let history = loadHistory();

function renderMenu() {
  const fragment = document.createDocumentFragment();

  dishes.forEach((dish) => {
    const item = template.content.firstElementChild.cloneNode(true);
    item.textContent = dish;
    item.dataset.dish = dish;
    fragment.appendChild(item);
  });

  menuListEl.innerHTML = "";
  menuListEl.appendChild(fragment);
  countEl.textContent = `${dishes.length} 道菜`;
}

function renderHistory() {
  historyListEl.innerHTML = "";

  if (history.length === 0) {
    const empty = document.createElement("li");
    empty.className = "empty";
    empty.textContent = "还没抽过，今天第一道菜等你来定。";
    historyListEl.appendChild(empty);
    return;
  }

  history.forEach((dish, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${dish}`;
    historyListEl.appendChild(li);
  });
}

function loadHistory() {
  try {
    const stored = localStorage.getItem(HISTORY_KEY);
    const parsed = stored ? JSON.parse(stored) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveHistory() {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

function highlightDish(dish) {
  document.querySelectorAll(".menu-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.dish === dish);
  });
}

function drawDish() {
  const index = Math.floor(Math.random() * dishes.length);
  return dishes[index];
}

function stopRolling(finalDish) {
  if (rollingTimer) {
    clearInterval(rollingTimer);
    rollingTimer = null;
  }

  currentDish = finalDish;
  resultEl.classList.remove("is-rolling");
  resultEl.textContent = finalDish;
  highlightDish(finalDish);

  history = [finalDish, ...history.filter((dish) => dish !== finalDish)].slice(0, MAX_HISTORY);
  saveHistory();
  renderHistory();
}

function pickDish() {
  pickBtn.disabled = true;
  rerollBtn.disabled = true;
  resultEl.classList.add("is-rolling");

  let ticks = 0;
  rollingTimer = setInterval(() => {
    const previewDish = drawDish();
    resultEl.textContent = previewDish;
    highlightDish(previewDish);
    ticks += 1;

    if (ticks >= 16) {
      stopRolling(drawDish());
      pickBtn.disabled = false;
      rerollBtn.disabled = false;
    }
  }, 90);
}

async function copyCurrentDish() {
  if (!currentDish) {
    resultEl.textContent = "先抽一道，再复制结果。";
    return;
  }

  try {
    await navigator.clipboard.writeText(currentDish);
    copyBtn.textContent = "已复制";
    window.setTimeout(() => {
      copyBtn.textContent = "复制结果";
    }, 1200);
  } catch {
    copyBtn.textContent = "复制失败";
    window.setTimeout(() => {
      copyBtn.textContent = "复制结果";
    }, 1200);
  }
}

function clearHistory() {
  history = [];
  saveHistory();
  renderHistory();
}

pickBtn.addEventListener("click", pickDish);
rerollBtn.addEventListener("click", pickDish);
copyBtn.addEventListener("click", copyCurrentDish);
clearHistoryBtn.addEventListener("click", clearHistory);

renderMenu();
renderHistory();

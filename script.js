const dishes = [
  { name: "酸辣土豆丝", tags: ["素菜", "重口"] },
  { name: "干煸杏鲍菇", tags: ["素菜", "重口"] },
  { name: "茄汁西葫芦", tags: ["素菜"] },
  { name: "双椒鸡丁", tags: ["鸡肉", "重口"] },
  { name: "小白菜炒平菇", tags: ["素菜"] },
  { name: "红烧茄子", tags: ["素菜", "重口"] },
  { name: "豆角炒肉", tags: ["猪肉"] },
  { name: "杏鲍菇炒鸡蛋", tags: ["素菜"] },
  { name: "酸辣包菜", tags: ["素菜", "重口"] },
  { name: "鱼香肉丝", tags: ["猪肉", "重口"] },
  { name: "清炒豌豆尖", tags: ["素菜"] },
  { name: "清炒四季豆丝", tags: ["素菜"] },
  { name: "土豆焖豆角", tags: ["素菜"] },
  { name: "火腿片炒土豆片", tags: ["猪肉"] },
  { name: "辣椒炒肉", tags: ["猪肉", "重口"] },
  { name: "酸辣鸡腿", tags: ["鸡肉", "重口"] },
  { name: "洋葱炒鸡肉", tags: ["鸡肉"] },
  { name: "木须肉", tags: ["猪肉"] },
  { name: "番茄炒蛋", tags: ["素菜"] },
  { name: "椒盐鸡翅", tags: ["鸡肉"] },
  { name: "可乐鸡翅", tags: ["鸡肉"] },
  { name: "干锅花菜", tags: ["素菜", "重口"] },
  { name: "干煸豆角", tags: ["素菜", "重口"] },
  { name: "荷兰豆炒腊肠", tags: ["猪肉"] },
  { name: "西芹炒鸡胸肉", tags: ["鸡肉"] },
  { name: "蒜薹炒肉丝", tags: ["猪肉"] },
  { name: "青椒炒香菇", tags: ["素菜"] },
  { name: "照烧鸡腿肉", tags: ["鸡肉"] },
  { name: "酸辣藕丁", tags: ["素菜", "重口"] },
  { name: "蚝油生菜", tags: ["素菜"] },
  { name: "肉末豆角", tags: ["猪肉"] },
  { name: "蒜蓉娃娃菜", tags: ["素菜"] },
  { name: "孜然火腿土豆", tags: ["猪肉", "重口"] },
  { name: "糖醋樱桃肉", tags: ["猪肉"] },
  { name: "红烧排骨", tags: ["猪肉"] },
  { name: "大盘鸡", tags: ["鸡肉", "重口"] },
  { name: "口水鸡", tags: ["鸡肉", "重口"] },
  { name: "蜜汁青椒酿肉", tags: ["猪肉"] },
  { name: "红烧肉土豆", tags: ["猪肉"] },
  { name: "宫保鸡丁", tags: ["鸡肉", "重口"] },
  { name: "辣炒腐竹", tags: ["素菜", "重口"] },
  { name: "茄辣西", tags: ["素菜"] },
  { name: "红烧猪蹄", tags: ["猪肉"] },
  { name: "辣子鸡丁", tags: ["鸡肉", "重口"] },
  { name: "毛血旺", tags: ["猪肉", "重口"] },
  { name: "酱香鸡蛋", tags: ["素菜"] },
  { name: "蒜蓉大虾", tags: ["海鲜"] },
  { name: "水煮肉片", tags: ["猪肉", "重口"] },
  { name: "牛肉娃娃菜", tags: ["牛羊肉"] },
  { name: "孜然牛肉", tags: ["牛羊肉", "重口"] },
  { name: "孜然羊肉", tags: ["牛羊肉", "重口"] },
  { name: "葱烧鸡", tags: ["鸡肉"] },
  { name: "小鸡炖蘑菇", tags: ["鸡肉"] },
  { name: "糖醋排骨", tags: ["猪肉"] },
  { name: "麻辣香锅", tags: ["重口"] },
  { name: "黄瓜鸡蛋炒火腿片", tags: ["猪肉"] },
  { name: "土豆炒腊肠", tags: ["猪肉"] },
  { name: "话梅鸡翅", tags: ["鸡肉"] }
];

const resultEl = document.getElementById("result");
const resultMetaEl = document.getElementById("resultMeta");
const pickBtn = document.getElementById("pickBtn");
const rerollBtn = document.getElementById("rerollBtn");
const copyBtn = document.getElementById("copyBtn");
const menuListEl = document.getElementById("menuList");
const countEl = document.getElementById("count");
const historyListEl = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistoryBtn");
const filtersEl = document.getElementById("filters");
const avoidRecentCheckbox = document.getElementById("avoidRecentCheckbox");
const toggleMenuBtn = document.getElementById("toggleMenuBtn");
const template = document.getElementById("menuItemTemplate");
const filterTemplate = document.getElementById("filterTemplate");

const HISTORY_KEY = "dish-picker-history";
const MAX_HISTORY = 8;
const RECENT_AVOID_COUNT = 3;
const filters = ["全部", "素菜", "鸡肉", "猪肉", "牛羊肉", "海鲜", "重口"];

let currentDish = "";
let rollingTimer = null;
let history = loadHistory();
let activeFilter = "全部";
let menuExpanded = false;

function renderMenu() {
  const fragment = document.createDocumentFragment();

  dishes.forEach((dish) => {
    const item = template.content.firstElementChild.cloneNode(true);
    item.textContent = dish.name;
    item.dataset.dish = dish.name;
    item.dataset.tags = dish.tags.join(",");
    fragment.appendChild(item);
  });

  menuListEl.innerHTML = "";
  menuListEl.appendChild(fragment);
  updateMenuVisibility();
}

function renderFilters() {
  const fragment = document.createDocumentFragment();

  filters.forEach((filterName) => {
    const chip = filterTemplate.content.firstElementChild.cloneNode(true);
    chip.textContent = filterName;
    chip.dataset.filter = filterName;
    chip.classList.toggle("active", filterName === activeFilter);
    chip.addEventListener("click", () => {
      activeFilter = filterName;
      renderFilters();
      updateMenuVisibility();
      syncResultMeta();
    });
    fragment.appendChild(chip);
  });

  filtersEl.innerHTML = "";
  filtersEl.appendChild(fragment);
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

function getFilteredDishes() {
  let list = dishes;

  if (activeFilter !== "全部") {
    list = list.filter((dish) => dish.tags.includes(activeFilter));
  }

  if (avoidRecentCheckbox.checked) {
    const recentSet = new Set(history.slice(0, RECENT_AVOID_COUNT));
    const trimmed = list.filter((dish) => !recentSet.has(dish.name));
    if (trimmed.length > 0) {
      list = trimmed;
    }
  }

  return list;
}

function updateMenuVisibility() {
  const filteredNames = new Set(getFilteredDishes().map((dish) => dish.name));

  document.querySelectorAll(".menu-item").forEach((item) => {
    item.classList.toggle("is-hidden", !filteredNames.has(item.dataset.dish));
  });

  countEl.textContent = `${filteredNames.size} / ${dishes.length} 道菜`;
  menuListEl.classList.toggle("is-collapsed", !menuExpanded);
  toggleMenuBtn.textContent = menuExpanded ? "收起菜单" : "展开全部菜单";
}

function syncResultMeta() {
  const pool = getFilteredDishes();
  const filterText = activeFilter === "全部" ? "全部菜单" : `${activeFilter}分类`;
  resultMetaEl.textContent = `${filterText}可选 ${pool.length} 道菜${avoidRecentCheckbox.checked ? "，已尽量避开最近 3 次" : ""}。`;
}

function drawDish() {
  const pool = getFilteredDishes();
  if (pool.length === 0) {
    return null;
  }

  const index = Math.floor(Math.random() * pool.length);
  return pool[index];
}

function stopRolling(finalDish) {
  if (rollingTimer) {
    clearInterval(rollingTimer);
    rollingTimer = null;
  }

  resultEl.classList.remove("is-rolling");

  if (!finalDish) {
    currentDish = "";
    resultEl.textContent = "当前筛选下没有可抽的菜";
    resultMetaEl.textContent = "可以切回“全部”，或关闭避开最近 3 次后再试。";
    highlightDish("");
    return;
  }

  currentDish = finalDish.name;
  resultEl.textContent = finalDish.name;
  resultMetaEl.textContent = `${finalDish.tags.join(" / ")}${avoidRecentCheckbox.checked ? " · 已避开最近 3 次" : ""}`;
  highlightDish(finalDish.name);

  history = [finalDish.name, ...history.filter((dish) => dish !== finalDish.name)].slice(0, MAX_HISTORY);
  saveHistory();
  renderHistory();
  updateMenuVisibility();
}

function pickDish() {
  pickBtn.disabled = true;
  rerollBtn.disabled = true;
  resultEl.classList.add("is-rolling");

  let ticks = 0;
  rollingTimer = setInterval(() => {
    const previewDish = drawDish();
    resultEl.textContent = previewDish ? previewDish.name : "当前筛选下没有可抽的菜";
    highlightDish(previewDish ? previewDish.name : "");
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
  updateMenuVisibility();
  syncResultMeta();
}

pickBtn.addEventListener("click", pickDish);
rerollBtn.addEventListener("click", pickDish);
copyBtn.addEventListener("click", copyCurrentDish);
clearHistoryBtn.addEventListener("click", clearHistory);
avoidRecentCheckbox.addEventListener("change", () => {
  updateMenuVisibility();
  syncResultMeta();
});
toggleMenuBtn.addEventListener("click", () => {
  menuExpanded = !menuExpanded;
  updateMenuVisibility();
});

renderMenu();
renderFilters();
renderHistory();
syncResultMeta();

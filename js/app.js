// ═══════════════════════════════════════════
//  AI HUB — APPLICATION LOGIC & VIBE FARSI UI
// ═══════════════════════════════════════════

// ═══════════════════════════════════════════
//  PERSIAN NUMBERS
// ═══════════════════════════════════════════
function toPersianNum(num) {
  const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
  return String(num).replace(/\d/g, d => persianDigits[d]);
}


let wizardState = { step: 1, task: null, level: null, budget: null };

function renderWizardOptions() {
  const container = document.getElementById('wizardOptions');
  const result = document.getElementById('wizardResult');
  result.classList.remove('show');

  let items = [];
  if (wizardState.step === 1) items = wizardData.tasks;
  else if (wizardState.step === 2) items = wizardData.levels;
  else if (wizardState.step === 3) items = wizardData.budgets;

  container.innerHTML = items.map(item =>
    `<button class="wizard-option" onclick="wizardSelect(${wizardState.step}, '${item.id}', '${item.category || ''}')">${item.label}</button>`
  ).join('');

  updateStepIndicators();
}

function wizardSelect(step, id, category) {
  if (step === 1) { wizardState.task = id; wizardState.category = category; wizardState.step = 2; }
  else if (step === 2) { wizardState.level = id; wizardState.step = 3; }
  else if (step === 3) {
    wizardState.budget = id;
    showRecommendations();
    return;
  }
  renderWizardOptions();
}

function updateStepIndicators() {
  for (let i = 1; i <= 3; i++) {
    const num = document.getElementById(`step${i}Num`);
    const label = document.getElementById(`step${i}Label`);
    num.className = 'step-num';
    label.className = 'step-label';
    if (i < wizardState.step) { num.className = 'step-num done'; num.textContent = '✓'; }
    else if (i === wizardState.step) { num.className = 'step-num active'; label.className = 'step-label active'; }
  }
}

function showRecommendations() {
  const cat = categories.find(c => c.id === wizardState.category);
  if (!cat) return;

  let filtered = cat.tools.filter(t => {
    if (wizardState.level !== 'any' && t.level !== wizardState.level && t.level !== 'beginner') return false;
    if (wizardState.budget === 'free' && t.pricing === 'paid') return false;
    return true;
  });

  if (filtered.length === 0) filtered = cat.tools.slice(0, 3);

  const container = document.getElementById('recommendationCards');
  container.innerHTML = filtered.slice(0, 3).map(tool => `
    <div class="rec-card">
      <div class="rec-card-name">${tool.icon} ${tool.name}</div>
      <div class="rec-card-desc">${tool.desc}</div>
      <a href="${tool.url}" target="_blank" class="rec-card-link">مشاهده →</a>
    </div>
  `).join('');

  document.getElementById('wizardResult').classList.add('show');
  document.getElementById('step3Num').className = 'step-num done';
  document.getElementById('step3Num').textContent = '✓';
}

// ═══════════════════════════════════════════
//  CATEGORIES
// ═══════════════════════════════════════════
function renderCategories() {
  const grid = document.getElementById('categoryGrid');
  const countEl = document.getElementById('categoryCount');
  if (countEl) countEl.textContent = toPersianNum(categories.length) + ' دسته';
  grid.innerHTML = categories.map((cat, i) => `
    <div class="category-card animate-in" onclick="openCategory('${cat.id}')" style="animation-delay: ${i * 0.05}s">
      <span class="category-emoji">${cat.emoji}</span>
      <div class="category-name">${cat.name}</div>
      <div class="category-desc">${cat.desc}</div>
      <div class="category-tools">
        ${cat.tools.slice(0, 4).map(t => `<span class="tool-tag">${t.name}</span>`).join('')}
        ${cat.tools.length > 4 ? `<span class="tool-tag">+${toPersianNum(cat.tools.length - 4)}</span>` : ''}
      </div>
    </div>
  `).join('');

  const totalTools = categories.reduce((sum, c) => sum + c.tools.length, 0);
  const freeTools = categories.reduce((sum, c) => sum + c.tools.filter(t => t.pricing === 'free' || t.pricing === 'freemium').length, 0);
  const statToolsEl = document.getElementById('statTools');
  const statCatsEl = document.getElementById('statCats');
  const statFreeEl = document.getElementById('statFree');
  if (statToolsEl) statToolsEl.textContent = toPersianNum(totalTools);
  if (statCatsEl) statCatsEl.textContent = toPersianNum(categories.length);
  if (statFreeEl) statFreeEl.textContent = toPersianNum(freeTools);
}

function openCategory(catId) {
  const cat = categories.find(c => c.id === catId);
  if (!cat) return;

  document.getElementById('toolsPanelTitle').innerHTML = `${cat.emoji} ${cat.name}`;

  const filterBar = document.getElementById('filterBar');
  filterBar.innerHTML = `
    <button class="filter-btn active" onclick="filterTools('all', this)">همه</button>
    <button class="filter-btn" onclick="filterTools('free', this)">رایگان</button>
    <button class="filter-btn" onclick="filterTools('paid', this)">پولی</button>
    <button class="filter-btn" onclick="filterTools('beginner', this)">مبتدی</button>
    <button class="filter-btn" onclick="filterTools('pro', this)">حرفه‌ای</button>
  `;

  renderToolsList(cat.tools, 'all');
  document.getElementById('toolsOverlay').classList.add('show');
  document.body.style.overflow = 'hidden';
}

function renderToolsList(tools, filter) {
  let filtered = tools;
  if (filter === 'free') filtered = tools.filter(t => t.pricing === 'free' || t.pricing === 'freemium');
  else if (filter === 'paid') filtered = tools.filter(t => t.pricing === 'paid');
  else if (filter === 'beginner') filtered = tools.filter(t => t.level === 'beginner');
  else if (filter === 'pro') filtered = tools.filter(t => t.level === 'pro');
  document.getElementById('toolsList').innerHTML = filtered.map(tool => {
    const isInCompare = compareList.some(c => c.name === tool.name);
    return `
      <div class="tool-card">
        <div class="tool-icon">${tool.icon}</div>
        <div class="tool-info">
          <span class="tool-icon-mobile">${tool.icon}</span>
          <div>
            <h4>${tool.name}</h4>
            <p>${tool.desc}</p>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px;">
          <div class="tool-meta">
            <span class="tool-badge badge-${tool.pricing}">${tool.pricing === 'free' ? 'رایگان' : tool.pricing === 'freemium' ? 'freemium' : 'پولی'}</span>
            <span class="tool-badge badge-${tool.level}">${tool.level === 'beginner' ? 'مبتدی' : 'حرفه‌ای'}</span>
          </div>
          <div style="display:flex;gap:8px;align-items:center;">
            ${tool.installGuide ? `<button class="tool-visit" style="background:var(--bg-surface);border:1px solid var(--border-light);color:var(--text-secondary);" onclick="event.stopPropagation();openInstall('${tool.name.replace(/'/g, "\\'")}')">📚 آموزش نصب</button>` : ''}
            <div class="tooltip-wrapper" data-tooltip="افزودن به علاقه‌مندی">
              <button class="fav-btn ${isFavorite(tool.name) ? 'active' : ''}" onclick="event.stopPropagation();toggleFavorite('${tool.name}','${tool.icon}','${tool.desc.replace(/'/g,"\\'")}','${tool.url}','')">⭐</button>
            </div>
            <div class="tooltip-wrapper" data-tooltip="${isInCompare ? 'حذف از مقایسه' : 'افزودن به مقایسه'}">
              <button class="tool-compare-btn ${isInCompare ? 'added' : ''}" onclick="event.stopPropagation();toggleCompare('${tool.name}','${tool.icon}','${tool.desc}','${tool.url}')">⚖️</button>
            </div>
            <a href="${tool.url}" target="_blank" class="tool-visit">مشاهده →</a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function filterTools(filter, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const catId = document.getElementById('toolsPanelTitle').textContent.trim();
  const cat = categories.find(c => catId.includes(c.name));
  if (cat) renderToolsList(cat.tools, filter);
}

function closeTools(e) {
  if (e && e.target !== document.getElementById('toolsOverlay')) return;
  document.getElementById('toolsOverlay').classList.remove('show');
  document.body.style.overflow = '';
}

// ═══════════════════════════════════════════
//  SEARCH
// ═══════════════════════════════════════════
function handleSearch(query) {
  if (!query.trim()) { renderCategories(); return; }
  const q = query.toLowerCase();
  const grid = document.getElementById('categoryGrid');

  const matched = categories.filter(c =>
    c.name.includes(q) || c.desc.includes(q) ||
    c.tools.some(t => t.name.toLowerCase().includes(q) || t.desc.includes(q))
  );

  if (matched.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--text-muted);">
      <div style="font-size:48px;margin-bottom:16px;">🔍</div>
      <div style="font-size:16px;">نتیجه‌ای برای "${query}" پیدا نشد</div>
    </div>`;
    return;
  }

  grid.innerHTML = matched.map((cat, i) => `
    <div class="category-card animate-in" onclick="openCategory('${cat.id}')" style="animation-delay: ${i * 0.05}s">
      <span class="category-emoji">${cat.emoji}</span>
      <div class="category-name">${cat.name}</div>
      <div class="category-desc">${cat.desc}</div>
      <div class="category-tools">
        ${cat.tools.slice(0, 4).map(t => `<span class="tool-tag">${t.name}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

// ═══════════════════════════════════════════
//  NAV
// ═══════════════════════════════════════════
function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  document.getElementById('navLinks').classList.remove('open');
}

function showHome() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ═══════════════════════════════════════════
//  COMPARE SYSTEM
// ═══════════════════════════════════════════
let compareList = []; // max 2 items

// Toast notification
let toastTimeout = null;
function showToast(icon, text) {
  const toast = document.getElementById('toast');
  const toastIcon = document.getElementById('toastIcon');
  const toastText = document.getElementById('toastText');
  toastIcon.textContent = icon;
  toastText.textContent = text;
  toast.classList.add('show');
  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 2200);
}

function toggleCompare(name, icon, desc, url) {
  const idx = compareList.findIndex(c => c.name === name);
  if (idx > -1) {
    compareList.splice(idx, 1);
    showToast('🗑️', `${name} از مقایسه حذف شد`);
  } else {
    if (compareList.length >= 2) {
      compareList.shift(); // remove first if full
      showToast('🔄', `${compareList[0]?.name || name} جایگزین شد`);
    }
    compareList.push({ name, icon, desc, url });
    if (compareList.length <= 2) {
      showToast('✅', `${name} به مقایسه اضافه شد — ${toPersianNum(compareList.length)}/۲`);
    }
  }
  renderCompareTray();
  // re-render current tools list to update button states
  const catTitle = document.getElementById('toolsPanelTitle')?.textContent || '';
  const cat = categories.find(c => catTitle.includes(c.name));
  if (cat) {
    const activeFilter = document.querySelector('.filter-btn.active')?.textContent || 'همه';
    const filterMap = {'همه':'all','رایگان':'free','پولی':'paid','مبتدی':'beginner','حرفه‌ای':'pro'};
    renderToolsList(cat.tools, filterMap[activeFilter] || 'all');
  }
}

function renderCompareTray() {
  const tray = document.getElementById('compareTray');
  const items = document.getElementById('compareTrayItems');
  const goBtn = document.getElementById('compareGoBtn');

  if (compareList.length === 0) {
    tray.classList.remove('show');
    return;
  }

  tray.classList.add('show');
  let html = '';
  compareList.forEach((item, i) => {
    html += `
      <div class="tray-item">
        <span class="tray-item-icon">${item.icon}</span>
        <span class="tray-item-name">${item.name}</span>
        <button class="tray-item-remove" onclick="removeFromCompare(${i})">✕</button>
      </div>`;
  });
  if (compareList.length < 2) {
    html += `<div class="tray-slot-empty">+ ابزار دوم</div>`;
  }
  items.innerHTML = html;
  goBtn.disabled = compareList.length < 2;
}

function removeFromCompare(idx) {
  compareList.splice(idx, 1);
  renderCompareTray();
  // re-render tools list
  const catTitle = document.getElementById('toolsPanelTitle')?.textContent || '';
  const cat = categories.find(c => catTitle.includes(c.name));
  if (cat) {
    const activeFilter = document.querySelector('.filter-btn.active')?.textContent || 'همه';
    const filterMap = {'همه':'all','رایگان':'free','پولی':'paid','مبتدی':'beginner','حرفه‌ای':'pro'};
    renderToolsList(cat.tools, filterMap[activeFilter] || 'all');
  }
}

function clearCompare() {
  compareList = [];
  renderCompareTray();
  const catTitle = document.getElementById('toolsPanelTitle')?.textContent || '';
  const cat = categories.find(c => catTitle.includes(c.name));
  if (cat) {
    const activeFilter = document.querySelector('.filter-btn.active')?.textContent || 'همه';
    const filterMap = {'همه':'all','رایگان':'free','پولی':'paid','مبتدی':'beginner','حرفه‌ای':'pro'};
    renderToolsList(cat.tools, filterMap[activeFilter] || 'all');
  }
}

function openCompareModal() {
  if (compareList.length < 2) return;
  const [a, b] = compareList;
  const ra = defaultRatings[a.name] || [7,7,7,7,7];
  const rb = defaultRatings[b.name] || [7,7,7,7,7];
  const scoreA = Math.round(ra.reduce((s,v)=>s+v,0) / ra.length * 10);
  const scoreB = Math.round(rb.reduce((s,v)=>s+v,0) / rb.length * 10);
  const winner = scoreA >= scoreB ? 'a' : 'b';

  const pricingLabel = (t) => t === 'free' ? 'رایگان' : t === 'freemium' ? 'Freemium' : 'پولی';

  const body = document.getElementById('compareModalBody');
  body.innerHTML = `
    <!-- Tool Cards -->
    <div class="compare-header-cards">
      <div class="compare-tool-card ${winner === 'a' ? 'winner' : ''}">
        <span class="compare-tool-icon">${a.icon}</span>
        <div class="compare-tool-name">${a.name}</div>
        <div class="compare-tool-desc">${a.desc}</div>
        <div class="compare-tool-badges">
          <span class="tool-badge badge-free">رایگان</span>
        </div>
        <a href="${a.url}" target="_blank" class="compare-tool-link">مشاهده →</a>
      </div>
      <div class="compare-vs">VS</div>
      <div class="compare-tool-card ${winner === 'b' ? 'winner' : ''}">
        <span class="compare-tool-icon">${b.icon}</span>
        <div class="compare-tool-name">${b.name}</div>
        <div class="compare-tool-desc">${b.desc}</div>
        <div class="compare-tool-badges">
          <span class="tool-badge badge-free">رایگان</span>
        </div>
        <a href="${b.url}" target="_blank" class="compare-tool-link">مشاهده →</a>
      </div>
    </div>

    <!-- Score Circles -->
    <div class="score-section">
      <div class="score-circle-wrapper">
        <div class="score-circle">
          <svg viewBox="0 0 100 100">
            <circle class="score-circle-bg" cx="50" cy="50" r="45"/>
            <circle class="score-circle-fill ${winner === 'a' ? 'winner' : ''}" cx="50" cy="50" r="45" id="scoreCircleA"/>
          </svg>
          <div class="score-number" id="scoreNumA">0</div>
        </div>
        <div class="score-label">${a.name}</div>
      </div>
      <div class="score-vs-label">امتیاز کل</div>
      <div class="score-circle-wrapper">
        <div class="score-circle">
          <svg viewBox="0 0 100 100">
            <circle class="score-circle-bg" cx="50" cy="50" r="45"/>
            <circle class="score-circle-fill ${winner === 'b' ? 'winner' : ''}" cx="50" cy="50" r="45" id="scoreCircleB"/>
          </svg>
          <div class="score-number" id="scoreNumB">0</div>
        </div>
        <div class="score-label">${b.name}</div>
      </div>
    </div>

    <!-- Rating Bars -->
    <div class="rating-bars" id="ratingBars">
      ${ratingLabels.map((label, i) => `
        <div class="bar-group">
          <div class="bar-label">${label}</div>
          <div class="bar-tracks">
            <div class="bar-track"><div class="bar-fill tool-a" id="barA${i}"></div></div>
            <div class="bar-track"><div class="bar-fill tool-b" id="barB${i}"></div></div>
          </div>
          <div class="bar-values">
            <span class="bar-value tool-a" id="barVA${i}">0</span>
            <span class="bar-value tool-b" id="barVB${i}">0</span>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Features -->
    <div class="features-comparison">
      <div class="features-title">✨ ویژگی‌ها</div>
      <div class="features-grid">
        <div class="features-col">
          <div class="features-col-title">${a.icon} ${a.name}</div>
          <ul class="features-list" id="featuresA"></ul>
        </div>
        <div class="features-col">
          <div class="features-col-title">${b.icon} ${b.name}</div>
          <ul class="features-list" id="featuresB"></ul>
        </div>
      </div>
    </div>

    <!-- Winner Banner -->
    <div class="winner-banner" id="winnerBanner">
      <div class="winner-banner-text">🏆 برنده: ${winner === 'a' ? a.name : b.name}</div>
      <div class="winner-banner-sub">بر اساس امتیاز کل ${toPersianNum(Math.max(scoreA, scoreB))} از ۱۰۰</div>
    </div>
  `;

  document.getElementById('compareModalOverlay').classList.add('show');
  document.body.style.overflow = 'hidden';

  // Populate features
  const catA = categories.find(c => c.tools.some(t => t.name === a.name));
  const catB = categories.find(c => c.tools.some(t => t.name === b.name));
  const toolA = catA?.tools.find(t => t.name === a.name);
  const toolB = catB?.tools.find(t => t.name === b.name);
  if (toolA) document.getElementById('featuresA').innerHTML = toolA.features.map(f => `<li>${f}</li>`).join('');
  if (toolB) document.getElementById('featuresB').innerHTML = toolB.features.map(f => `<li>${f}</li>`).join('');

  // Animate after small delay
  setTimeout(() => {
    // Score circles
    const circumference = 283;
    document.getElementById('scoreCircleA').style.strokeDashoffset = circumference - (circumference * scoreA / 100);
    document.getElementById('scoreCircleB').style.strokeDashoffset = circumference - (circumference * scoreB / 100);
    animateNumber('scoreNumA', scoreA);
    animateNumber('scoreNumB', scoreB);

    // Rating bars
    ra.forEach((v, i) => {
      document.getElementById('barA' + i).style.width = (v * 10) + '%';
      document.getElementById('barB' + i).style.width = (rb[i] * 10) + '%';
      animateNumber('barVA' + i, v);
      animateNumber('barVB' + i, rb[i]);
    });
  }, 100);
}

function animateNumber(id, target) {
  const el = document.getElementById(id);
  if (!el) return;
  let current = 0;
  const step = Math.max(1, Math.floor(target / 20));
  const interval = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(interval); }
    el.textContent = toPersianNum(current);
  }, 30);
}

function closeCompareModal(e) {
  if (e && e.target !== document.getElementById('compareModalOverlay')) return;
  document.getElementById('compareModalOverlay').classList.remove('show');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeTools();
    closeCompareModal();
    closeHelp();
    closeOnboarding();
    closeInstall();
    closeShortcuts();
    closeAdvancedFilter();
    closeRoadmap();
  }
});

// ═══════════════════════════════════════════
//  ONBOARDING
// ═══════════════════════════════════════════
function checkOnboarding() {
  if (!localStorage.getItem('aihub_onboarded')) {
    document.getElementById('onboardingOverlay').classList.add('show');
  }
}
function closeOnboarding() {
  document.getElementById('onboardingOverlay').classList.remove('show');
  localStorage.setItem('aihub_onboarded', '1');
}

// ═══════════════════════════════════════════
//  HELP MODAL
// ═══════════════════════════════════════════
function openHelp() {
  document.getElementById('helpOverlay').classList.add('show');
  document.body.style.overflow = 'hidden';
}
function closeHelp(e) {
  if (e && e.target !== document.getElementById('helpOverlay')) return;
  document.getElementById('helpOverlay').classList.remove('show');
  document.body.style.overflow = '';
}

// ═══════════════════════════════════════════
//  FAVORITES (localStorage)
// ═══════════════════════════════════════════
function getFavorites() {
  try { return JSON.parse(localStorage.getItem('aihub_favorites') || '[]'); }
  catch { return []; }
}
function saveFavorites(favs) {
  localStorage.setItem('aihub_favorites', JSON.stringify(favs));
}
function isFavorite(name) {
  return getFavorites().some(f => f.name === name);
}
function toggleFavorite(name, icon, desc, url, catName) {
  const favs = getFavorites();
  const idx = favs.findIndex(f => f.name === name);
  if (idx > -1) {
    favs.splice(idx, 1);
    showToast('💔', `${name} از علاقه‌مندی‌ها حذف شد`);
  } else {
    favs.push({ name, icon, desc, url, catName });
    showToast('⭐', `${name} به علاقه‌مندی‌ها اضافه شد`);
  }
  saveFavorites(favs);
  renderFavorites();
  // re-render tools list to update star buttons
  const catTitle = document.getElementById('toolsPanelTitle')?.textContent || '';
  const cat = categories.find(c => catTitle.includes(c.name));
  if (cat) {
    const activeFilter = document.querySelector('.filter-btn.active')?.textContent || 'همه';
    const filterMap = {'همه':'all','رایگان':'free','پولی':'paid','مبتدی':'beginner','حرفه‌ای':'pro'};
    renderToolsList(cat.tools, filterMap[activeFilter] || 'all');
  }
}
function renderFavorites() {
  const favs = getFavorites();
  const section = document.getElementById('favoritesSection');
  const grid = document.getElementById('favoritesGrid');
  const hint = document.getElementById('favHint');
  const count = document.getElementById('favCount');

  if (favs.length === 0) {
    section.classList.remove('show');
    return;
  }
  section.classList.add('show');
  hint.style.display = 'none';
  count.textContent = toPersianNum(favs.length) + ' ابزار';

  grid.innerHTML = favs.map(f => `
    <div class="fav-card" onclick="window.open('${f.url}', '_blank')">
      <span class="fav-card-icon">${f.icon}</span>
      <div class="fav-card-info">
        <div class="fav-card-name">${f.name}</div>
        <div class="fav-card-cat">${f.catName || ''}</div>
      </div>
      <button class="fav-card-remove" onclick="event.stopPropagation();toggleFavorite('${f.name.replace(/'/g,"\\'")}','${f.icon}','${f.desc.replace(/'/g,"\\'")}','${f.url}','${f.catName||''}')">✕</button>
    </div>
  `).join('');
}

// ═══════════════════════════════════════════
//  KEYBOARD SHORTCUTS
// ═══════════════════════════════════════════
function openShortcuts() {
  document.getElementById('shortcutsOverlay').classList.add('show');
  document.body.style.overflow = 'hidden';
}
function closeShortcuts(e) {
  if (e && e.target !== document.getElementById('shortcutsOverlay')) return;
  document.getElementById('shortcutsOverlay').classList.remove('show');
  document.body.style.overflow = '';
}

// ═══════════════════════════════════════════
//  SHARE
// ═══════════════════════════════════════════
function shareTool(name, url) {
  const text = `🤖 ${name} — AI Hub\n${url}`;
  if (navigator.share) {
    navigator.share({ title: name, text, url });
  } else {
    navigator.clipboard.writeText(text).then(() => {
      showToast('📤', 'لینک کپی شد!');
    });
  }
}
function shareCompare() {
  if (compareList.length < 2) return;
  const text = `⚖️ مقایسه: ${compareList[0].name} vs ${compareList[1].name}\n🤖 AI Hub`;
  if (navigator.share) {
    navigator.share({ title: 'مقایسه AI Hub', text });
  } else {
    navigator.clipboard.writeText(text).then(() => {
      showToast('📤', 'لینک مقایسه کپی شد!');
    });
  }
}

// ═══════════════════════════════════════════
//  RANDOM TOOL
// ═══════════════════════════════════════════
function randomTool() {
  const allTools = categories.flatMap(c => c.tools.map(t => ({ ...t, catName: c.name })));
  const tool = allTools[Math.floor(Math.random() * allTools.length)];
  if (tool) {
    showToast(tool.icon, `${tool.name} — ${tool.catName}`);
    window.open(tool.url, '_blank');
  }
}

// ═══════════════════════════════════════════
//  ADVANCED FILTER
// ═══════════════════════════════════════════
function openAdvancedFilter() {
  // Populate category dropdown
  const catSelect = document.getElementById('filterCategory');
  if (catSelect && catSelect.options.length <= 1) {
    categories.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.id;
      opt.textContent = c.emoji + ' ' + c.name;
      catSelect.appendChild(opt);
    });
  }
  document.getElementById('filterOverlay').classList.add('show');
  document.body.style.overflow = 'hidden';
}
function closeAdvancedFilter(e) {
  if (e && e.target !== document.getElementById('filterOverlay')) return;
  document.getElementById('filterOverlay').classList.remove('show');
  document.body.style.overflow = '';
}
// ═══════════════════════════════════════════
function applyAdvancedFilter() {
  const pricing = document.getElementById('filterPricing')?.value || 'all';
  const level = document.getElementById('filterLevel')?.value || 'all';
  const catId = document.getElementById('filterCategory')?.value || 'all';

  let toolsToShow = [];
  if (catId === 'all') {
    toolsToShow = categories.flatMap(c => c.tools.map(t => ({ ...t, catName: c.name, catEmoji: c.emoji })));
  } else {
    const cat = categories.find(c => c.id === catId);
    if (cat) toolsToShow = cat.tools.map(t => ({ ...t, catName: cat.name, catEmoji: cat.emoji }));
  }

  if (pricing !== 'all') {
    toolsToShow = toolsToShow.filter(t => t.pricing === pricing);
  }
  if (level !== 'all') {
    toolsToShow = toolsToShow.filter(t => t.level === level);
  }

  // Show results in categories overlay
  document.getElementById('toolsPanelTitle').innerHTML = `🔍 نتیجه فیلتر (${toPersianNum(toolsToShow.length)} ابزار)`;
  document.getElementById('filterBar').innerHTML = '';

  const isInCompare = (name) => compareList.some(c => c.name === name);
  document.getElementById('toolsList').innerHTML = toolsToShow.map(tool => `
    <div class="tool-card">
      <div class="tool-icon">${tool.icon}</div>
      <div class="tool-info">
        <h4>${tool.name} <span style="font-size:11px;color:var(--text-dim);">${tool.catEmoji || ''} ${tool.catName || ''}</span></h4>
        <p>${tool.desc}</p>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px;">
        <div class="tool-meta">
          <span class="tool-badge badge-${tool.pricing}">${tool.pricing === 'free' ? 'رایگان' : tool.pricing === 'freemium' ? 'freemium' : 'پولی'}</span>
          <span class="tool-badge badge-${tool.level}">${tool.level === 'beginner' ? 'مبتدی' : 'حرفه‌ای'}</span>
        </div>
        <div style="display:flex;gap:8px;align-items:center;">
          ${tool.installGuide ? `<button class="tool-visit" style="background:var(--bg-surface);border:1px solid var(--border-light);color:var(--text-secondary);" onclick="event.stopPropagation();openInstall('${tool.name.replace(/'/g, "\\'")}')">📚 آموزش نصب</button>` : ''}
          <div class="tooltip-wrapper" data-tooltip="افزودن به علاقه‌مندی">
            <button class="fav-btn ${isInCompare(tool.name) ? 'active' : ''}" onclick="event.stopPropagation();toggleFavorite('${tool.name}','${tool.icon}','${tool.desc.replace(/'/g,"\\'")}','${tool.url}','${tool.catName||''}')">⭐</button>
          </div>
          <div class="tooltip-wrapper" data-tooltip="${isInCompare(tool.name) ? 'حذف از مقایسه' : 'افزودن به مقایسه'}">
            <button class="tool-compare-btn ${isInCompare(tool.name) ? 'added' : ''}" onclick="event.stopPropagation();toggleCompare('${tool.name}','${tool.icon}','${tool.desc}','${tool.url}')">⚖️</button>
          </div>
          <a href="${tool.url}" target="_blank" class="tool-visit">مشاهده →</a>
        </div>
      </div>
    </div>
  `).join('');

  document.getElementById('toolsOverlay').classList.add('show');
  document.body.style.overflow = 'hidden';
}

// ═══════════════════════════════════════════
//  INSTALL GUIDE
// ═══════════════════════════════════════════
function openInstall(toolName) {
  // find tool across all categories
  let tool = null;
  for (const cat of categories) {
    tool = cat.tools.find(t => t.name === toolName);
    if (tool) break;
  }
  if (!tool || !tool.installGuide) return;

  const guide = tool.installGuide;
  document.getElementById('installTitle').innerHTML = `${tool.icon} آموزش نصب ${tool.name}`;

  let html = '';
  guide.steps.forEach((step, i) => {
    html += `
      <div class="install-step">
        <div class="install-step-num">${toPersianNum(i + 1)}</div>
        <div class="install-step-content">
          <div class="install-step-desc">${step.desc}</div>
          <div class="install-cmd">
            <code>${step.cmd}</code>
            <button class="install-cmd-copy" onclick="copyCmd(this, '${step.cmd.replace(/'/g, "\\'")}')">کپی</button>
          </div>
        </div>
      </div>`;
  });

  if (guide.tips && guide.tips.length) {
    html += `<div class="install-tips"><div class="install-tips-title">💡 نکات</div><ul>`;
    guide.tips.forEach(t => html += `<li>${t}</li>`);
    html += `</ul></div>`;
  }

  if (guide.connect) {
    html += `<div class="install-connect"><strong>🔗 نحوه اتصال:</strong> ${guide.connect}</div>`;
  }

  document.getElementById('installBody').innerHTML = html;
  document.getElementById('installOverlay').classList.add('show');
  document.body.style.overflow = 'hidden';
}

function copyCmd(btn, cmd) {
  navigator.clipboard.writeText(cmd).then(() => {
    btn.textContent = 'کپی شد! ✓';
    setTimeout(() => btn.textContent = 'کپی', 1500);
  });
}

function closeInstall(e) {
  if (e && e.target !== document.getElementById('installOverlay')) return;
  document.getElementById('installOverlay').classList.remove('show');
  document.body.style.overflow = '';
}

// ═══════════════════════════════════════════
//  ROADMAP SYSTEM

let roadmapState = { step: 1, category: null, level: null, budget: null };

function openRoadmap() {
  roadmapState = { step: 1, category: null, level: null, budget: null };
  renderRoadmapWizard();
  document.getElementById('roadmapOverlay').classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeRoadmap(e) {
  if (e && e.target !== document.getElementById('roadmapOverlay')) return;
  document.getElementById('roadmapOverlay').classList.remove('show');
  document.body.style.overflow = '';
}

function renderRoadmapWizard() {
  const container = document.getElementById('roadmapWizard');
  const result = document.getElementById('roadmapResult');
  result.classList.remove('show');

  let html = '<div class="roadmap-steps">';

  // Step indicators
  for (let i = 1; i <= 3; i++) {
    const numClass = i < roadmapState.step ? 'done' : i === roadmapState.step ? 'active' : '';
    const label = i === 1 ? 'دسته‌بندی' : i === 2 ? 'سطح تجربه' : 'بودجه';
    html += `<div class="wizard-step"><div class="step-num ${numClass}" id="rmStep${i}Num">${i < roadmapState.step ? '✓' : i}</div><span class="step-label ${i === roadmapState.step ? 'active' : ''}" id="rmStep${i}Label">${label}</span></div>`;
  }
  html += '</div>';

  // Options
  html += '<div class="wizard-options" id="roadmapOptions">';

  if (roadmapState.step === 1) {
    const catOptions = [
      { id: 'coding', label: '🖥️ برنامه‌نویسی', category: 'coding' },
      { id: 'image', label: '🎨 طراحی عکس', category: 'image' },
      { id: 'video', label: '🎬 ساخت ویدیو', category: 'video' },
      { id: 'audio', label: '🎵 صدا و موزیک', category: 'audio' },
      { id: 'text', label: '✍️ نوشتن', category: 'text' },
      { id: 'data', label: '📊 تحلیل داده', category: 'data' },
      { id: 'agents', label: '🤖 اتوماسیون', category: 'agents' },
      { id: 'search', label: '🔍 جستجو', category: 'search' },
      { id: 'platforms', label: '🏗️ پلتفرم مدل', category: 'platforms' },
      { id: 'agents-pro', label: '🛠️ ایجنت حرفه‌ای', category: 'agents-pro' },
      { id: 'hidden-gems', label: '💎 گنج‌های پنهان', category: 'hidden-gems' }
    ];
    html += catOptions.map(opt => `<button class="wizard-option" onclick="roadmapSelect(1, '${opt.id}', '${opt.category}')">${opt.label}</button>`).join('');
  } else if (roadmapState.step === 2) {
    html += `<button class="wizard-option" onclick="roadmapSelect(2, 'beginner')">مبتدی 🌱</button>`;
    html += `<button class="wizard-option" onclick="roadmapSelect(2, 'pro')">حرفه‌ای 🔥</button>`;
  } else if (roadmapState.step === 3) {
    html += `<button class="wizard-option" onclick="roadmapSelect(3, 'free')">رایگان 🆓</button>`;
    html += `<button class="wizard-option" onclick="roadmapSelect(3, 'any')">فرقی نمیکنه 💰</button>`;
  }

  html += '</div>';
  container.innerHTML = html;
}

function roadmapSelect(step, value, category) {
  if (step === 1) { roadmapState.category = category; roadmapState.step = 2; }
  else if (step === 2) { roadmapState.level = value; roadmapState.step = 3; }
  else if (step === 3) {
    roadmapState.budget = value;
    showRoadmapResult();
    return;
  }
  renderRoadmapWizard();
}

function showRoadmapResult() {
  const roadmap = roadmapData[roadmapState.category]?.[roadmapState.level]?.[roadmapState.budget];
  if (!roadmap) {
    document.getElementById('roadmapResult').innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-muted);">مسیری برای این ترکیب پیدا نشد 😔</div>';
    document.getElementById('roadmapResult').classList.add('show');
    return;
  }

  const catNames = {
    'coding': 'برنامه‌نویسی', 'image': 'طراحی عکس', 'video': 'ساخت ویدیو',
    'audio': 'صدا و موزیک', 'text': 'نوشتن', 'data': 'تحلیل داده',
    'agents': 'اتوماسیون', 'search': 'جستجو', 'platforms': 'پلتفرم مدل',
    'agents-pro': 'ایجنت حرفه‌ای', 'hidden-gems': 'گنج‌های پنهان'
  };

  let html = `<div class="roadmap-result-header">
    <div class="roadmap-result-title">🎯 مسیر یادگیری ${catNames[roadmapState.category] || ''}</div>
    <div class="roadmap-result-sub">${roadmapState.level === 'beginner' ? 'مبتدی 🌱' : 'حرفه‌ای 🔥'} • ${roadmapState.budget === 'free' ? 'رایگان 🆓' : 'همه بودجه 💰'}</div>
  </div>`;

  html += '<div class="roadmap-timeline">';

  roadmap.forEach((item, i) => {
    const toolInfo = item.tool ? categories.flatMap(c => c.tools).find(t => t.name === item.tool) : null;
    const hasInstall = toolInfo?.installGuide;

    html += `<div class="roadmap-step" style="animation-delay: ${i * 0.1}s">
      <div class="roadmap-step-connector">
        <div class="roadmap-step-number">${item.step}</div>
        ${i < roadmap.length - 1 ? '<div class="roadmap-step-line"></div>' : ''}
      </div>
      <div class="roadmap-step-content">
        <div class="roadmap-step-header">
          <span class="roadmap-step-icon">${item.icon}</span>
          <div class="roadmap-step-title">${item.title}</div>
        </div>
        <div class="roadmap-step-desc">${item.desc}</div>
        ${item.tool ? `<div class="roadmap-step-tool">
          <span class="roadmap-tool-name">${item.tool}</span>
          ${hasInstall ? `<button class="roadmap-install-btn" onclick="event.stopPropagation();openInstall('${item.tool.replace(/'/g, "\\'")}')">📚 آموزش نصب</button>` : ''}
          ${item.url ? `<a href="${item.url}" target="_blank" class="roadmap-link-btn">مشاهده →</a>` : ''}
        </div>` : ''}
        ${item.tip ? `<div class="roadmap-step-tip">💡 ${item.tip}</div>` : ''}
      </div>
    </div>`;
  });

  html += '</div>';

  // Action buttons
  html += `<div class="roadmap-actions">
    <button onclick="closeRoadmap()" class="roadmap-action-btn roadmap-action-secondary">بازگشت</button>
    <button onclick="roadmapState={step:1,category:null,level:null,budget:null};renderRoadmapWizard();" class="roadmap-action-btn roadmap-action-primary">مسیر جدید 🔄</button>
  </div>`;

  document.getElementById('roadmapResult').innerHTML = html;
  document.getElementById('roadmapResult').classList.add('show');

  // Animate steps
  setTimeout(() => {
    document.querySelectorAll('.roadmap-step').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 150);
    });
  }, 100);
}

// ═══════════════════════════════════════════
//  MOBILE NAV
// ═══════════════════════════════════════════
function mobileNavTo(section, btn) {
  document.querySelectorAll('.mobile-nav-item').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  if (section === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ═══════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════
renderWizardOptions();
renderCategories();
renderFavorites();
checkOnboarding();

// Keyboard shortcuts
document.addEventListener('keydown', e => {
  // Don't trigger if typing in input
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  if (e.key === '/') { e.preventDefault(); document.getElementById('searchInput')?.focus(); }
  else if (e.key === 'h' || e.key === 'H') { window.scrollTo({ top: 0, behavior: 'smooth' }); }
  else if (e.key === 'c' || e.key === 'C') { scrollToSection('categories'); }
  else if (e.key === '?') { openHelp(); }
  else if (e.key === 'r' || e.key === 'R') { randomTool(); }
});

// ═══════════════════════════════════════════
//  VIBE FARSI — SPOTLIGHT CARDS
// ═══════════════════════════════════════════
function initSpotlight() {
  document.addEventListener('pointermove', (e) => {
    const cards = document.querySelectorAll('.category-card, .tool-card, .stat-card, .wizard-card, .wizard-option, .shortcut-row, .modal-panel, .step-card, .roadmap-step');
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x >= -60 && x <= rect.width + 60 && y >= -60 && y <= rect.height + 60) {
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      }
    });
  });
}

initSpotlight();



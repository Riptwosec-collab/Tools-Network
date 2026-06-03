/* ─── Data ──────────────────────────────────────────────────────────── */
const CATEGORIES = [
  { id: 'dns',       icon: '🌐', label: 'DNS Tools' },
  { id: 'whois',     icon: '🔍', label: 'WHOIS / Domain' },
  { id: 'bgp',       icon: '🗺️',  label: 'BGP / Routing' },
  { id: 'ip',        icon: '📡', label: 'IP / Geolocation' },
  { id: 'leak',      icon: '🛡️',  label: 'IP Leak / Privacy' },
  { id: 'speed',     icon: '⚡', label: 'Speed Test' },
  { id: 'diag',      icon: '🔧', label: 'Network Diagnostics' },
  { id: 'cert',      icon: '🔐', label: 'SSL / Certificates' },
  { id: 'port',      icon: '🚪', label: 'Port Scanner' },
  { id: 'email',     icon: '📧', label: 'Email / SPF / DKIM' },
];

const TOOLS = [
  /* DNS */
  { id: 't01', cat: 'dns', icon: '🌐', name: 'MXToolbox DNS Lookup',   url: 'https://mxtoolbox.com/DNSLookup.aspx',          desc: 'ค้นหา DNS Record ทุกชนิด (A, MX, NS, TXT, CNAME)', tags: ['dns','lookup'],   functions: ['A Record','MX Record','NS Record','TXT Record','CNAME','SOA'] },
  { id: 't02', cat: 'dns', icon: '🌐', name: 'DNS Checker',             url: 'https://dnschecker.org/',                        desc: 'ตรวจสอบ DNS Propagation จากหลาย Location ทั่วโลก',   tags: ['dns','propagation'], functions: ['Global DNS Check','A','MX','NS','TXT','AAAA'] },
  { id: 't03', cat: 'dns', icon: '🌐', name: 'Google DNS Toolbox',      url: 'https://toolbox.googleapps.com/apps/dig/',       desc: 'DIG tool ของ Google ใช้งานง่าย ไม่ต้อง install',     tags: ['dns','dig'],      functions: ['DIG Query','A','MX','NS','TXT','CNAME','PTR'] },
  { id: 't04', cat: 'dns', icon: '🌐', name: 'IntoDNS',                 url: 'https://intodns.com/',                           desc: 'วิเคราะห์ DNS configuration และหาปัญหาโดยอัตโนมัติ', tags: ['dns','analysis'], functions: ['NS Check','MX Check','DNS Health','SOA Check'] },
  { id: 't05', cat: 'dns', icon: '🌐', name: 'ViewDNS.info',            url: 'https://viewdns.info/',                          desc: 'รวมเครื่องมือ DNS หลายอย่างในที่เดียว',              tags: ['dns','multi'],    functions: ['Reverse DNS','IP History','Ping','Traceroute','Whois'] },

  /* WHOIS */
  { id: 't06', cat: 'whois', icon: '🔍', name: 'ICANN Lookup',          url: 'https://lookup.icann.org/',                      desc: 'WHOIS Official จาก ICANN ข้อมูลถูกต้องที่สุด',       tags: ['whois','domain'], functions: ['Domain WHOIS','Registrar Info','Expiry Date','Name Servers'] },
  { id: 't07', cat: 'whois', icon: '🔍', name: 'Whois.domaintools.com', url: 'https://whois.domaintools.com/',                 desc: 'WHOIS พร้อม Reverse Lookup และ History',             tags: ['whois','history'], functions: ['WHOIS','Reverse IP','Domain History','DNS History'] },
  { id: 't08', cat: 'whois', icon: '🔍', name: 'who.is',                url: 'https://who.is/',                                desc: 'WHOIS สะอาด อ่านง่าย พร้อม IP WHOIS',              tags: ['whois','ip'],     functions: ['Domain WHOIS','IP WHOIS','ASN Lookup'] },
  { id: 't09', cat: 'whois', icon: '🔍', name: 'DomainBigData',         url: 'https://domainbigdata.com/',                     desc: 'ค้นหา Domain ที่ใช้ IP / NS เดียวกัน',              tags: ['whois','reverse'], functions: ['Reverse IP','Reverse NS','Domain Age','Host History'] },

  /* BGP */
  { id: 't10', cat: 'bgp', icon: '🗺️', name: 'BGP.he.net',             url: 'https://bgp.he.net/',                            desc: 'Hurricane Electric BGP Toolkit ข้อมูล ASN/Prefix', tags: ['bgp','asn'],      functions: ['ASN Lookup','Prefix Lookup','Route Map','Peering','IPv6'] },
  { id: 't11', cat: 'bgp', icon: '🗺️', name: 'BGPView',                url: 'https://bgpview.io/',                            desc: 'วิเคราะห์ BGP Route, ASN, Prefix แบบ Realtime',    tags: ['bgp','route'],    functions: ['ASN Info','IP Prefix','Peers','Upstreams','Downstreams','IXs'] },
  { id: 't12', cat: 'bgp', icon: '🗺️', name: 'RIPE NCC RIPEstat',      url: 'https://stat.ripe.net/',                         desc: 'สถิติ BGP จาก RIPE NCC พร้อม Graph ย้อนหลัง',      tags: ['bgp','ripe'],     functions: ['Routing History','BGP Updates','RIS Peers','Visibility'] },
  { id: 't13', cat: 'bgp', icon: '🗺️', name: 'PeeringDB',              url: 'https://www.peeringdb.com/',                     desc: 'ฐานข้อมูล Peering ของ Network และ IXP ทั่วโลก',    tags: ['bgp','peering'],  functions: ['Network Info','IXP','Facilities','Contacts'] },

  /* IP */
  { id: 't14', cat: 'ip', icon: '📡', name: 'ipinfo.io',                url: 'https://ipinfo.io/',                             desc: 'ข้อมูล IP, ASN, ประเทศ, City, Org แบบ JSON',       tags: ['ip','geo'],       functions: ['IP Geolocation','ASN','Hostname','Org','Timezone','Map'] },
  { id: 't15', cat: 'ip', icon: '📡', name: 'ip-api.com',               url: 'http://ip-api.com/',                             desc: 'Geolocation API ฟรี รวดเร็ว พร้อม Batch Mode',     tags: ['ip','api'],       functions: ['Country','Region','City','ISP','Lat/Lon','Timezone'] },
  { id: 't16', cat: 'ip', icon: '📡', name: 'MaxMind GeoIP Demo',       url: 'https://www.maxmind.com/en/geoip-demo',          desc: 'ทดสอบ GeoIP Database ของ MaxMind',                  tags: ['ip','maxmind'],   functions: ['Country','City','Postal','ISP','Connection Type'] },
  { id: 't17', cat: 'ip', icon: '📡', name: 'AbuseIPDB',                url: 'https://www.abuseipdb.com/',                     desc: 'ตรวจสอบว่า IP นั้นถูก Report ว่าเป็น Malicious',   tags: ['ip','abuse'],     functions: ['IP Reputation','Report History','Categories','Confidence Score'] },
  { id: 't18', cat: 'ip', icon: '📡', name: 'Shodan',                   url: 'https://www.shodan.io/',                         desc: 'Search engine สำหรับ Internet-connected devices',   tags: ['ip','scan'],      functions: ['Port Scan','Banner','Services','Vulnerabilities','Org'] },

  /* Leak / Privacy */
  { id: 't19', cat: 'leak', icon: '🛡️', name: 'ipleak.net',             url: 'https://ipleak.net/',                            desc: 'ตรวจ WebRTC Leak, DNS Leak, IPv6 Leak',            tags: ['leak','webrtc'],  functions: ['IP Leak','WebRTC Leak','DNS Leak','IPv6','Torrent Leak'] },
  { id: 't20', cat: 'leak', icon: '🛡️', name: 'dnsleaktest.com',        url: 'https://www.dnsleaktest.com/',                   desc: 'ทดสอบ DNS Leak ทั้งแบบ Standard และ Extended',     tags: ['leak','dns'],     functions: ['Standard Test','Extended Test','DNS Server List'] },
  { id: 't21', cat: 'leak', icon: '🛡️', name: 'browserleaks.com',       url: 'https://browserleaks.com/',                      desc: 'ตรวจสอบข้อมูล Browser ที่หลุดออกไปได้',            tags: ['leak','browser'], functions: ['WebRTC','Canvas','Font','WebGL','Geolocation','Features'] },
  { id: 't22', cat: 'leak', icon: '🛡️', name: 'whatismyipaddress.com',  url: 'https://whatismyipaddress.com/',                  desc: 'เช็ค Public IP พร้อม Blacklist Check',              tags: ['leak','ip'],      functions: ['My IP','Blacklist Check','ISP Info','Map'] },

  /* Speed Test */
  { id: 't23', cat: 'speed', icon: '⚡', name: 'Speedtest by Ookla',    url: 'https://www.speedtest.net/',                     desc: 'วัด Download/Upload/Ping มาตรฐานจาก Ookla',        tags: ['speed','ookla'],  functions: ['Download','Upload','Ping','Jitter','Server Selection'] },
  { id: 't24', cat: 'speed', icon: '⚡', name: 'Fast.com (Netflix)',     url: 'https://fast.com/',                              desc: 'วัด Download Speed จาก Netflix CDN เรียบง่าย',     tags: ['speed','netflix'], functions: ['Download Speed','Upload Speed','Latency'] },
  { id: 't25', cat: 'speed', icon: '⚡', name: 'Cloudflare Speed Test',  url: 'https://speed.cloudflare.com/',                  desc: 'Speed Test จาก Cloudflare พร้อม Network Latency',  tags: ['speed','cf'],     functions: ['Download','Upload','Latency','Jitter','Packet Loss','Score'] },
  { id: 't26', cat: 'speed', icon: '⚡', name: 'nperf Speed Test',       url: 'https://www.nperf.com/en/',                      desc: 'วัดความเร็วและคุณภาพ Internet พร้อม Map',          tags: ['speed','nperf'],  functions: ['Download','Upload','Ping','Route','Coverage Map'] },

  /* Diagnostics */
  { id: 't27', cat: 'diag', icon: '🔧', name: 'Network-Tools.com',      url: 'https://network-tools.com/',                     desc: 'Ping, Traceroute, NSLookup, Whois ในที่เดียว',     tags: ['diag','multi'],   functions: ['Ping','Traceroute','NSLookup','Whois','Finger','HTTP'] },
  { id: 't28', cat: 'diag', icon: '🔧', name: 'UltraTools',             url: 'https://www.ultratools.com/',                    desc: 'เครื่องมือ Network Diagnostic ครอบคลุมที่สุด',     tags: ['diag','ultra'],   functions: ['DNS','WHOIS','Ping','Traceroute','BGP','Blacklist'] },
  { id: 't29', cat: 'diag', icon: '🔧', name: 'Ping.eu',                url: 'https://ping.eu/',                               desc: 'Ping และ Port Scan จาก Server ในยุโรป',            tags: ['diag','ping'],    functions: ['Ping','Traceroute','Port Check','HTTP Headers','Whois'] },
  { id: 't30', cat: 'diag', icon: '🔧', name: 'GlobalPing by jsDelivr', url: 'https://www.jsdelivr.com/globalping',            desc: 'Ping/Traceroute/DNS จาก Node ทั่วโลกแบบ Realtime', tags: ['diag','global'],  functions: ['Ping','Traceroute','DNS Resolve','HTTP','MTR'] },

  /* SSL / Cert */
  { id: 't31', cat: 'cert', icon: '🔐', name: 'SSL Labs (Qualys)',       url: 'https://www.ssllabs.com/ssltest/',               desc: 'ทดสอบ SSL/TLS Configuration ให้คะแนน A-F',        tags: ['ssl','grade'],    functions: ['TLS Version','Cipher Suites','HSTS','Certificate Chain','Grade'] },
  { id: 't32', cat: 'cert', icon: '🔐', name: 'crt.sh',                 url: 'https://crt.sh/',                                desc: 'ค้นหา Certificate Transparency Log ทั้งหมด',       tags: ['ssl','ct'],       functions: ['Cert History','Subdomain Discovery','Issuer','Expiry'] },
  { id: 't33', cat: 'cert', icon: '🔐', name: 'SSL Shopper Checker',    url: 'https://www.sslshopper.com/ssl-checker.html',    desc: 'ตรวจสอบ Certificate Chain และ Expiry Date',        tags: ['ssl','chain'],    functions: ['Chain Check','Expiry','Issuer','SANs','Protocol'] },
  { id: 't34', cat: 'cert', icon: '🔐', name: 'Observatory (Mozilla)',  url: 'https://observatory.mozilla.org/',               desc: 'ตรวจสอบ Web Security Headers (HSTS, CSP, etc.)',   tags: ['ssl','headers'],  functions: ['Security Headers','HSTS','CSP','X-Frame','Cookies','Score'] },

  /* Port Scanner */
  { id: 't35', cat: 'port', icon: '🚪', name: 'YouGetSignal Port Check', url: 'https://www.yougetsignal.com/tools/open-ports/', desc: 'ตรวจสอบว่า Port เปิดอยู่หรือไม่จาก External',     tags: ['port','check'],   functions: ['Open Port Check','Common Ports','Custom Port'] },
  { id: 't36', cat: 'port', icon: '🚪', name: 'CanYouSeeMe.org',        url: 'https://canyouseeme.org/',                       desc: 'เช็ค Port forwarding ว่า Outside เห็นได้ไหม',      tags: ['port','forward'], functions: ['Port Check','IP Detection'] },
  { id: 't37', cat: 'port', icon: '🚪', name: 'Pentest-Tools Port Scan', url: 'https://pentest-tools.com/network-vulnerability-scanning/tcp-port-scanner-online-nmap', desc: 'Port Scan ด้วย Nmap Online', tags: ['port','nmap'], functions: ['TCP Scan','Service Detection','OS Detection','Top Ports'] },

  /* Email */
  { id: 't38', cat: 'email', icon: '📧', name: 'MXToolbox Email Health', url: 'https://mxtoolbox.com/emailhealth/',             desc: 'ตรวจสอบ SPF, DKIM, DMARC, Blacklist ครบครัน',     tags: ['email','spf'],    functions: ['SPF Check','DKIM','DMARC','MX Lookup','Blacklist','SMTP Diag'] },
  { id: 't39', cat: 'email', icon: '📧', name: 'Mail-Tester.com',        url: 'https://www.mail-tester.com/',                   desc: 'ส่ง Email มาแล้วให้ Score ความน่าเชื่อถือ 1-10',  tags: ['email','score'],  functions: ['Spam Score','SPF','DKIM','DMARC','Content Analysis'] },
  { id: 't40', cat: 'email', icon: '📧', name: 'DMARC Analyzer',         url: 'https://dmarcian.com/dmarc-inspector/',          desc: 'ตรวจสอบ DMARC Record และให้คำแนะนำ',              tags: ['email','dmarc'],  functions: ['DMARC Record','Policy','Alignment','Reporting URIs'] },
];

/* ─── State ─────────────────────────────────────────────────────────── */
let state = {
  category: null,
  tool: null,
  tab: 'info',
  search: '',
  favorites: JSON.parse(localStorage.getItem('ntpro_favs') || '[]'),
  history: JSON.parse(localStorage.getItem('ntpro_history') || '[]'),
  theme: localStorage.getItem('ntpro_theme') || 'dark',
};

/* ─── Init ──────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(state.theme);
  buildNav();
  renderFavNav();
  // Select first category by default
  selectCategory(CATEGORIES[0].id);
});

/* ─── Theme ─────────────────────────────────────────────────────────── */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  document.getElementById('theme-icon').textContent = theme === 'dark' ? '☀️' : '🌙';
  state.theme = theme;
  localStorage.setItem('ntpro_theme', theme);
}

function toggleTheme() {
  applyTheme(state.theme === 'dark' ? 'light' : 'dark');
}

/* ─── Mobile Sidebar ────────────────────────────────────────────────── */
function openSidebar() {
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');
  sidebar.classList.add('open');
  backdrop.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeSidebar() {
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');
  sidebar.classList.remove('open');
  backdrop.style.display = 'none';
  document.body.style.overflow = '';
}

/* ─── Build Nav ─────────────────────────────────────────────────────── */
function buildNav() {
  const nav = document.getElementById('nav-list');
  nav.innerHTML = '';
  CATEGORIES.forEach(cat => {
    const count = TOOLS.filter(t => t.cat === cat.id).length;
    const el = document.createElement('div');
    el.className = 'nav-item';
    el.id = `nav-${cat.id}`;
    el.innerHTML = `
      <span class="nav-icon">${cat.icon}</span>
      <span>${cat.label}</span>
      <span class="nav-count">${count}</span>
    `;
    el.onclick = () => {
      selectCategory(cat.id);
      closeSidebar();
    };
    nav.appendChild(el);
  });
}

/* ─── Favorites Nav ─────────────────────────────────────────────────── */
function renderFavNav() {
  const section = document.getElementById('favorites-section');
  const nav = document.getElementById('fav-nav-list');
  const favTools = TOOLS.filter(t => state.favorites.includes(t.id));

  if (favTools.length === 0) {
    section.hidden = true;
    return;
  }
  section.hidden = false;
  nav.innerHTML = '';
  favTools.forEach(tool => {
    const el = document.createElement('div');
    el.className = 'nav-item';
    el.innerHTML = `<span class="nav-icon">${tool.icon}</span><span>${tool.name}</span>`;
    el.onclick = () => { openTool(tool); closeSidebar(); };
    nav.appendChild(el);
  });
}

/* ─── Category ──────────────────────────────────────────────────────── */
function selectCategory(catId) {
  state.category = catId;
  state.tool = null;

  // Update nav active
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  const navEl = document.getElementById(`nav-${catId}`);
  if (navEl) navEl.classList.add('active');

  const cat = CATEGORIES.find(c => c.id === catId);
  const tools = TOOLS.filter(t => t.cat === catId);

  // Update topbar
  document.getElementById('page-title').textContent = `${cat.icon} ${cat.label}`;
  document.getElementById('page-sub').textContent = `${tools.length} เครื่องมือ`;

  // Show grid
  showGridView();
  renderGrid(tools);
}

/* ─── Grid ──────────────────────────────────────────────────────────── */
function renderGrid(tools, container = document.getElementById('tools-grid'), labelEl = document.getElementById('grid-category-label')) {
  container.innerHTML = '';

  if (tools.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔭</div>
        <p>ไม่พบเครื่องมือที่ตรงกับการค้นหา</p>
      </div>`;
    return;
  }

  tools.forEach(tool => {
    const isFav = state.favorites.includes(tool.id);
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.innerHTML = `
      <button class="tool-card-fav ${isFav ? 'active' : ''}" title="${isFav ? 'ลบออกจากรายการโปรด' : 'เพิ่มในรายการโปรด'}" onclick="event.stopPropagation();toggleFavorite('${tool.id}',this)">
        ${isFav ? '⭐' : '☆'}
      </button>
      <div class="tool-card-icon">${tool.icon}</div>
      <div class="tool-card-name">${tool.name}</div>
      <div class="tool-card-desc">${tool.desc}</div>
      <div class="tool-card-tag">${tool.tags[0]}</div>
    `;
    card.addEventListener('click', () => openTool(tool));
    container.appendChild(card);
  });
}

/* ─── Show / Hide Panels ────────────────────────────────────────────── */
function showGridView() {
  document.getElementById('grid-wrap').hidden = false;
  document.getElementById('detail-panel').hidden = true;
  document.getElementById('search-results-wrap').hidden = true;
  document.getElementById('btn-back').hidden = true;
}

function showDetailView() {
  document.getElementById('grid-wrap').hidden = true;
  document.getElementById('search-results-wrap').hidden = true;
  document.getElementById('detail-panel').hidden = false;
  document.getElementById('btn-back').hidden = false;
}

function backToGrid() {
  if (state.search) {
    showSearchResults(state.search);
  } else {
    selectCategory(state.category || CATEGORIES[0].id);
  }
}

/* ─── Open Tool ─────────────────────────────────────────────────────── */
function openTool(tool) {
  state.tool = tool;

  // Update topbar
  document.getElementById('page-title').textContent = tool.name;
  document.getElementById('page-sub').textContent = tool.url;

  // Track history
  state.history = [tool.id, ...state.history.filter(id => id !== tool.id)].slice(0, 20);
  localStorage.setItem('ntpro_history', JSON.stringify(state.history));

  // Build Info tab
  const isFav = state.favorites.includes(tool.id);
  document.getElementById('info-content').innerHTML = `
    <div class="tool-title">
      <span>${tool.icon}</span> ${tool.name}
    </div>
    <div class="tool-url">${tool.url}</div>
    <div class="tool-desc">${tool.desc}</div>
    <div class="tags">${tool.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    <div class="action-row">
      <button class="btn primary" onclick="switchTab('iframe')">🌐 เปิดในแอป</button>
      <button class="btn ghost" onclick="openInNewTab()">↗ Tab ใหม่</button>
      <button class="btn ghost" onclick="copyCurrentUrl()">📋 คัดลอก URL</button>
      <button class="btn ghost" id="info-fav-btn" onclick="toggleFavoriteFromInfo()">
        ${isFav ? '⭐ ลบจากโปรด' : '☆ เพิ่มในโปรด'}
      </button>
    </div>
  `;

  // Build Functions tab
  document.getElementById('function-docs').innerHTML = (tool.functions || []).map(fn => `
    <div class="function-item">
      <div class="function-item-name">✅ ${fn}</div>
    </div>
  `).join('');

  // Reset iframe
  const iframe = document.getElementById('main-iframe');
  iframe.src = 'about:blank';
  document.getElementById('iframe-url-display').textContent = tool.url;
  document.getElementById('iframe-loading').style.display = 'none';
  document.getElementById('iframe-blocked').hidden = true;

  switchTab('info');
  showDetailView();
}

/* ─── Tabs ──────────────────────────────────────────────────────────── */
function switchTab(tabName) {
  state.tab = tabName;
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  document.getElementById(`tab-${tabName}-btn`).classList.add('active');
  document.getElementById(`tab-${tabName}`).classList.add('active');

  if (tabName === 'iframe' && state.tool) {
    loadIframe(state.tool.url);
  }
}

/* ─── Iframe ────────────────────────────────────────────────────────── */
function loadIframe(url) {
  const iframe = document.getElementById('main-iframe');
  const loading = document.getElementById('iframe-loading');
  const blocked = document.getElementById('iframe-blocked');

  iframe.src = 'about:blank';
  blocked.hidden = true;
  loading.style.display = 'flex';

  setTimeout(() => {
    iframe.src = url;
  }, 100);

  // Timeout fallback — if 8s pass and still loading, assume blocked
  clearTimeout(window._iframeTimeout);
  window._iframeTimeout = setTimeout(() => {
    if (loading.style.display !== 'none') {
      loading.style.display = 'none';
      blocked.hidden = false;
    }
  }, 8000);
}

function iframeLoaded() {
  const iframe = document.getElementById('main-iframe');
  const loading = document.getElementById('iframe-loading');
  const blocked = document.getElementById('iframe-blocked');
  clearTimeout(window._iframeTimeout);

  // Try to detect if it's actually blocked (blank page after load)
  try {
    const loc = iframe.contentWindow.location.href;
    if (loc === 'about:blank') return; // ignore initial blank
  } catch(e) {
    // Cross-origin: cannot read — means it loaded, probably OK
  }

  loading.style.display = 'none';
  blocked.hidden = true;
}

function iframeError() {
  clearTimeout(window._iframeTimeout);
  document.getElementById('iframe-loading').style.display = 'none';
  document.getElementById('iframe-blocked').hidden = false;
}

function reloadIframe() {
  if (state.tool) loadIframe(state.tool.url);
}

function openInNewTab() {
  if (state.tool) window.open(state.tool.url, '_blank', 'noopener,noreferrer');
}

function openCurrentTool() {
  if (state.tool) {
    window.open(state.tool.url, '_blank', 'noopener,noreferrer');
  }
}

/* ─── Copy URL ──────────────────────────────────────────────────────── */
function copyCurrentUrl() {
  if (!state.tool) return;
  navigator.clipboard.writeText(state.tool.url).then(() => {
    showToast('✅', 'คัดลอก URL แล้ว');
  }).catch(() => {
    // Fallback
    const ta = document.createElement('textarea');
    ta.value = state.tool.url;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
    showToast('✅', 'คัดลอก URL แล้ว');
  });
}

/* ─── Toast ─────────────────────────────────────────────────────────── */
let toastEl = null;
let toastTimer = null;

function showToast(icon, message, type = 'success') {
  if (!toastEl) {
    toastEl = document.createElement('div');
    toastEl.className = 'toast';
    document.body.appendChild(toastEl);
  }
  toastEl.innerHTML = `<span class="toast-icon">${icon}</span> ${message}`;
  toastEl.className = `toast ${type}`;

  // Force reflow
  void toastEl.offsetWidth;
  toastEl.classList.add('show');

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastEl.classList.remove('show');
  }, 2500);
}

/* ─── Favorites ─────────────────────────────────────────────────────── */
function toggleFavorite(toolId, btnEl) {
  const idx = state.favorites.indexOf(toolId);
  if (idx === -1) {
    state.favorites.push(toolId);
    btnEl.classList.add('active');
    btnEl.textContent = '⭐';
    btnEl.title = 'ลบออกจากรายการโปรด';
    showToast('⭐', 'เพิ่มในรายการโปรดแล้ว');
  } else {
    state.favorites.splice(idx, 1);
    btnEl.classList.remove('active');
    btnEl.textContent = '☆';
    btnEl.title = 'เพิ่มในรายการโปรด';
    showToast('🗑️', 'ลบออกจากรายการโปรดแล้ว');
  }
  localStorage.setItem('ntpro_favs', JSON.stringify(state.favorites));
  renderFavNav();
}

function toggleFavoriteFromInfo() {
  if (!state.tool) return;
  const toolId = state.tool.id;
  const idx = state.favorites.indexOf(toolId);
  const btn = document.getElementById('info-fav-btn');
  if (idx === -1) {
    state.favorites.push(toolId);
    if (btn) btn.innerHTML = '⭐ ลบจากโปรด';
    showToast('⭐', 'เพิ่มในรายการโปรดแล้ว');
  } else {
    state.favorites.splice(idx, 1);
    if (btn) btn.innerHTML = '☆ เพิ่มในโปรด';
    showToast('🗑️', 'ลบออกจากรายการโปรดแล้ว');
  }
  localStorage.setItem('ntpro_favs', JSON.stringify(state.favorites));
  renderFavNav();
}

/* ─── Search ────────────────────────────────────────────────────────── */
function handleSearch(query) {
  state.search = query.trim();
  const clearBtn = document.getElementById('search-clear');
  clearBtn.hidden = !state.search;

  if (!state.search) {
    // Restore previous category view
    if (state.category) selectCategory(state.category);
    return;
  }

  showSearchResults(state.search);
}

function showSearchResults(query) {
  const q = query.toLowerCase();
  const results = TOOLS.filter(t =>
    t.name.toLowerCase().includes(q) ||
    t.desc.toLowerCase().includes(q) ||
    t.tags.some(tag => tag.includes(q)) ||
    (t.functions || []).some(fn => fn.toLowerCase().includes(q))
  );

  // Update topbar
  document.getElementById('page-title').textContent = `🔍 ค้นหา: "${query}"`;
  document.getElementById('page-sub').textContent = `พบ ${results.length} เครื่องมือ`;

  // Show search results panel
  document.getElementById('grid-wrap').hidden = true;
  document.getElementById('detail-panel').hidden = true;
  document.getElementById('search-results-wrap').hidden = false;
  document.getElementById('btn-back').hidden = true;

  document.getElementById('search-results-label').textContent = `พบ ${results.length} รายการสำหรับ "${query}"`;

  const grid = document.getElementById('search-results-grid');
  renderGrid(results, grid, document.getElementById('search-results-label'));

  // Highlight matching text in cards
  if (results.length > 0) {
    grid.querySelectorAll('.tool-card-name, .tool-card-desc').forEach(el => {
      el.innerHTML = el.innerHTML.replace(
        new RegExp(`(${escapeRegex(query)})`, 'gi'),
        '<mark class="highlight">$1</mark>'
      );
    });
  }
}

function clearSearch() {
  const input = document.getElementById('tool-search');
  input.value = '';
  handleSearch('');
  input.focus();
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/* ─── Keyboard shortcuts ────────────────────────────────────────────── */
document.addEventListener('keydown', e => {
  // Ctrl/Cmd + K → focus search
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    const input = document.getElementById('tool-search');
    input.focus();
    input.select();
  }
  // Escape → clear search or close sidebar
  if (e.key === 'Escape') {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('open')) {
      closeSidebar();
    } else {
      clearSearch();
    }
  }
});

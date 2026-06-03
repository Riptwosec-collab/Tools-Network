/* ═══════════════════════════════════════════════════════
   NetTools Pro — script.js
   Features: Categories, Tools, Search, Favorites, Pinned,
   History/Recent, Dark/Light, Mobile Sidebar, Iframe,
   Copy URL, Share Link, Compare Mode, Subnet Calc,
   Tool Stats, Notes, List/Grid View, Skeleton, Toast,
   Keyboard Shortcuts, PWA, URL Params
═══════════════════════════════════════════════════════ */

/* ─── Data ──────────────────────────────────────────── */
const CATEGORIES = [
  { id:'dns',    icon:'🌐', label:'DNS Tools' },
  { id:'whois',  icon:'🔍', label:'WHOIS / Domain' },
  { id:'bgp',    icon:'🗺️',  label:'BGP / Routing' },
  { id:'ip',     icon:'📡', label:'IP / Geolocation' },
  { id:'leak',   icon:'🛡️',  label:'IP Leak / Privacy' },
  { id:'speed',  icon:'⚡', label:'Speed Test' },
  { id:'diag',   icon:'🔧', label:'Network Diagnostics' },
  { id:'cert',   icon:'🔐', label:'SSL / Certificates' },
  { id:'port',   icon:'🚪', label:'Port Scanner' },
  { id:'email',  icon:'📧', label:'Email / SPF / DKIM' },
  { id:'cdn',    icon:'🔁', label:'CDN / HTTP Headers' },
  { id:'subnet', icon:'🧮', label:'ASN / Subnet / MAC' },
];

const TOOLS = [
  /* DNS */
  { id:'t01', cat:'dns',   icon:'🌐', name:'MXToolbox DNS Lookup',    url:'https://mxtoolbox.com/DNSLookup.aspx',           desc:'ค้นหา DNS Record ทุกชนิด (A, MX, NS, TXT, CNAME)', tags:['dns','lookup'],    functions:['A Record','MX Record','NS Record','TXT Record','CNAME','SOA'] },
  { id:'t02', cat:'dns',   icon:'🌐', name:'DNS Checker',              url:'https://dnschecker.org/',                         desc:'ตรวจสอบ DNS Propagation จากหลาย Location ทั่วโลก',  tags:['dns','propagation'],functions:['Global DNS Check','A','MX','NS','TXT','AAAA'] },
  { id:'t03', cat:'dns',   icon:'🌐', name:'Google DNS Toolbox',       url:'https://toolbox.googleapps.com/apps/dig/',        desc:'DIG tool ของ Google ใช้งานง่าย ไม่ต้อง install',    tags:['dns','dig'],       functions:['DIG Query','A','MX','NS','TXT','CNAME','PTR'] },
  { id:'t04', cat:'dns',   icon:'🌐', name:'IntoDNS',                  url:'https://intodns.com/',                            desc:'วิเคราะห์ DNS configuration และหาปัญหาโดยอัตโนมัติ',tags:['dns','analysis'],  functions:['NS Check','MX Check','DNS Health','SOA Check'] },
  { id:'t05', cat:'dns',   icon:'🌐', name:'ViewDNS.info',             url:'https://viewdns.info/',                           desc:'รวมเครื่องมือ DNS หลายอย่างในที่เดียว',             tags:['dns','multi'],     functions:['Reverse DNS','IP History','Ping','Traceroute','Whois'] },
  { id:'t06', cat:'dns',   icon:'🌐', name:'DNS Spy',                  url:'https://dnsspy.io/',                              desc:'Monitor DNS records & get alerts เมื่อมีการเปลี่ยน', tags:['dns','monitor'],   functions:['DNS Monitor','Alert','History','A','MX','NS'] },

  /* WHOIS */
  { id:'t07', cat:'whois', icon:'🔍', name:'ICANN Lookup',             url:'https://lookup.icann.org/',                       desc:'WHOIS Official จาก ICANN ข้อมูลถูกต้องที่สุด',      tags:['whois','domain'],  functions:['Domain WHOIS','Registrar Info','Expiry Date','Name Servers'] },
  { id:'t08', cat:'whois', icon:'🔍', name:'Whois DomainTools',        url:'https://whois.domaintools.com/',                  desc:'WHOIS พร้อม Reverse Lookup และ History',            tags:['whois','history'], functions:['WHOIS','Reverse IP','Domain History','DNS History'] },
  { id:'t09', cat:'whois', icon:'🔍', name:'who.is',                   url:'https://who.is/',                                 desc:'WHOIS สะอาด อ่านง่าย พร้อม IP WHOIS',             tags:['whois','ip'],      functions:['Domain WHOIS','IP WHOIS','ASN Lookup'] },
  { id:'t10', cat:'whois', icon:'🔍', name:'DomainBigData',            url:'https://domainbigdata.com/',                      desc:'ค้นหา Domain ที่ใช้ IP / NS เดียวกัน',             tags:['whois','reverse'], functions:['Reverse IP','Reverse NS','Domain Age','Host History'] },

  /* BGP */
  { id:'t11', cat:'bgp',   icon:'🗺️', name:'BGP.he.net',              url:'https://bgp.he.net/',                             desc:'Hurricane Electric BGP Toolkit ข้อมูล ASN/Prefix',  tags:['bgp','asn'],       functions:['ASN Lookup','Prefix Lookup','Route Map','Peering','IPv6'] },
  { id:'t12', cat:'bgp',   icon:'🗺️', name:'BGPView',                 url:'https://bgpview.io/',                             desc:'วิเคราะห์ BGP Route, ASN, Prefix แบบ Realtime',     tags:['bgp','route'],     functions:['ASN Info','IP Prefix','Peers','Upstreams','Downstreams','IXs'] },
  { id:'t13', cat:'bgp',   icon:'🗺️', name:'RIPE NCC RIPEstat',       url:'https://stat.ripe.net/',                          desc:'สถิติ BGP จาก RIPE NCC พร้อม Graph ย้อนหลัง',       tags:['bgp','ripe'],      functions:['Routing History','BGP Updates','RIS Peers','Visibility'] },
  { id:'t14', cat:'bgp',   icon:'🗺️', name:'PeeringDB',               url:'https://www.peeringdb.com/',                      desc:'ฐานข้อมูล Peering ของ Network และ IXP ทั่วโลก',     tags:['bgp','peering'],   functions:['Network Info','IXP','Facilities','Contacts'] },

  /* IP */
  { id:'t15', cat:'ip',    icon:'📡', name:'ipinfo.io',                url:'https://ipinfo.io/',                              desc:'ข้อมูล IP, ASN, ประเทศ, City, Org แบบ JSON',        tags:['ip','geo'],        functions:['IP Geolocation','ASN','Hostname','Org','Timezone','Map'] },
  { id:'t16', cat:'ip',    icon:'📡', name:'ip-api.com',               url:'http://ip-api.com/',                              desc:'Geolocation API ฟรี รวดเร็ว พร้อม Batch Mode',      tags:['ip','api'],        functions:['Country','Region','City','ISP','Lat/Lon','Timezone'] },
  { id:'t17', cat:'ip',    icon:'📡', name:'AbuseIPDB',                url:'https://www.abuseipdb.com/',                      desc:'ตรวจสอบว่า IP นั้นถูก Report ว่าเป็น Malicious',    tags:['ip','abuse'],      functions:['IP Reputation','Report History','Categories','Confidence Score'] },
  { id:'t18', cat:'ip',    icon:'📡', name:'Shodan',                   url:'https://www.shodan.io/',                          desc:'Search engine สำหรับ Internet-connected devices',    tags:['ip','scan'],       functions:['Port Scan','Banner','Services','Vulnerabilities','Org'] },
  { id:'t19', cat:'ip',    icon:'📡', name:'VirusTotal IP',            url:'https://www.virustotal.com/gui/home/search',      desc:'ตรวจสอบ IP/Domain/URL ว่าเป็น Malware หรือ Phishing',tags:['ip','malware'],    functions:['IP Scan','Domain Scan','URL Scan','File Hash','WHOIS'] },

  /* Leak */
  { id:'t20', cat:'leak',  icon:'🛡️', name:'ipleak.net',              url:'https://ipleak.net/',                             desc:'ตรวจ WebRTC Leak, DNS Leak, IPv6 Leak',             tags:['leak','webrtc'],   functions:['IP Leak','WebRTC Leak','DNS Leak','IPv6','Torrent Leak'] },
  { id:'t21', cat:'leak',  icon:'🛡️', name:'dnsleaktest.com',         url:'https://www.dnsleaktest.com/',                    desc:'ทดสอบ DNS Leak ทั้งแบบ Standard และ Extended',      tags:['leak','dns'],      functions:['Standard Test','Extended Test','DNS Server List'] },
  { id:'t22', cat:'leak',  icon:'🛡️', name:'browserleaks.com',        url:'https://browserleaks.com/',                       desc:'ตรวจสอบข้อมูล Browser ที่หลุดออกไปได้',             tags:['leak','browser'],  functions:['WebRTC','Canvas','Font','WebGL','Geolocation','Features'] },
  { id:'t23', cat:'leak',  icon:'🛡️', name:'whatismyipaddress.com',   url:'https://whatismyipaddress.com/',                   desc:'เช็ค Public IP พร้อม Blacklist Check',               tags:['leak','ip'],       functions:['My IP','Blacklist Check','ISP Info','Map'] },

  /* Speed */
  { id:'t24', cat:'speed', icon:'⚡', name:'Speedtest by Ookla',       url:'https://www.speedtest.net/',                      desc:'วัด Download/Upload/Ping มาตรฐานจาก Ookla',         tags:['speed','ookla'],   functions:['Download','Upload','Ping','Jitter','Server Selection'] },
  { id:'t25', cat:'speed', icon:'⚡', name:'Fast.com (Netflix)',        url:'https://fast.com/',                               desc:'วัด Download Speed จาก Netflix CDN เรียบง่าย',      tags:['speed','netflix'], functions:['Download Speed','Upload Speed','Latency'] },
  { id:'t26', cat:'speed', icon:'⚡', name:'Cloudflare Speed Test',    url:'https://speed.cloudflare.com/',                   desc:'Speed Test จาก Cloudflare พร้อม Network Latency',   tags:['speed','cf'],      functions:['Download','Upload','Latency','Jitter','Packet Loss','Score'] },
  { id:'t27', cat:'speed', icon:'⚡', name:'nperf Speed Test',         url:'https://www.nperf.com/en/',                       desc:'วัดความเร็วและคุณภาพ Internet พร้อม Map',           tags:['speed','nperf'],   functions:['Download','Upload','Ping','Route','Coverage Map'] },

  /* Diag */
  { id:'t28', cat:'diag',  icon:'🔧', name:'Network-Tools.com',        url:'https://network-tools.com/',                      desc:'Ping, Traceroute, NSLookup, Whois ในที่เดียว',      tags:['diag','multi'],    functions:['Ping','Traceroute','NSLookup','Whois','Finger','HTTP'] },
  { id:'t29', cat:'diag',  icon:'🔧', name:'UltraTools',               url:'https://www.ultratools.com/',                     desc:'เครื่องมือ Network Diagnostic ครอบคลุมที่สุด',      tags:['diag','ultra'],    functions:['DNS','WHOIS','Ping','Traceroute','BGP','Blacklist'] },
  { id:'t30', cat:'diag',  icon:'🔧', name:'Ping.eu',                  url:'https://ping.eu/',                                desc:'Ping และ Port Scan จาก Server ในยุโรป',             tags:['diag','ping'],     functions:['Ping','Traceroute','Port Check','HTTP Headers','Whois'] },
  { id:'t31', cat:'diag',  icon:'🔧', name:'GlobalPing by jsDelivr',   url:'https://www.jsdelivr.com/globalping',             desc:'Ping/Traceroute/DNS จาก Node ทั่วโลกแบบ Realtime',  tags:['diag','global'],   functions:['Ping','Traceroute','DNS Resolve','HTTP','MTR'] },
  { id:'t32', cat:'diag',  icon:'🔧', name:'Down For Everyone?',       url:'https://downforeveryoneorjustme.com/',            desc:'เช็คว่าเว็บไซต์ล่มจริง หรือแค่ฝั่งเรา',           tags:['diag','uptime'],   functions:['Site Up/Down','Response Time'] },

  /* Cert */
  { id:'t33', cat:'cert',  icon:'🔐', name:'SSL Labs (Qualys)',         url:'https://www.ssllabs.com/ssltest/',                desc:'ทดสอบ SSL/TLS Configuration ให้คะแนน A-F',          tags:['ssl','grade'],     functions:['TLS Version','Cipher Suites','HSTS','Certificate Chain','Grade'] },
  { id:'t34', cat:'cert',  icon:'🔐', name:'crt.sh',                   url:'https://crt.sh/',                                 desc:'ค้นหา Certificate Transparency Log ทั้งหมด',        tags:['ssl','ct'],        functions:['Cert History','Subdomain Discovery','Issuer','Expiry'] },
  { id:'t35', cat:'cert',  icon:'🔐', name:'SSL Shopper Checker',      url:'https://www.sslshopper.com/ssl-checker.html',     desc:'ตรวจสอบ Certificate Chain และ Expiry Date',         tags:['ssl','chain'],     functions:['Chain Check','Expiry','Issuer','SANs','Protocol'] },
  { id:'t36', cat:'cert',  icon:'🔐', name:'Observatory (Mozilla)',    url:'https://observatory.mozilla.org/',                desc:'ตรวจสอบ Web Security Headers (HSTS, CSP, etc.)',    tags:['ssl','headers'],   functions:['Security Headers','HSTS','CSP','X-Frame','Cookies','Score'] },

  /* Port */
  { id:'t37', cat:'port',  icon:'🚪', name:'YouGetSignal Port Check',  url:'https://www.yougetsignal.com/tools/open-ports/', desc:'ตรวจสอบว่า Port เปิดอยู่หรือไม่จาก External',      tags:['port','check'],    functions:['Open Port Check','Common Ports','Custom Port'] },
  { id:'t38', cat:'port',  icon:'🚪', name:'CanYouSeeMe.org',          url:'https://canyouseeme.org/',                        desc:'เช็ค Port forwarding ว่า Outside เห็นได้ไหม',       tags:['port','forward'],  functions:['Port Check','IP Detection'] },
  { id:'t39', cat:'port',  icon:'🚪', name:'Pentest-Tools Port Scan',  url:'https://pentest-tools.com/network-vulnerability-scanning/tcp-port-scanner-online-nmap', desc:'Port Scan ด้วย Nmap Online', tags:['port','nmap'], functions:['TCP Scan','Service Detection','OS Detection','Top Ports'] },

  /* Email */
  { id:'t40', cat:'email', icon:'📧', name:'MXToolbox Email Health',   url:'https://mxtoolbox.com/emailhealth/',              desc:'ตรวจสอบ SPF, DKIM, DMARC, Blacklist ครบครัน',      tags:['email','spf'],     functions:['SPF Check','DKIM','DMARC','MX Lookup','Blacklist','SMTP Diag'] },
  { id:'t41', cat:'email', icon:'📧', name:'Mail-Tester.com',          url:'https://www.mail-tester.com/',                    desc:'ส่ง Email มาแล้วให้ Score ความน่าเชื่อถือ 1-10',    tags:['email','score'],   functions:['Spam Score','SPF','DKIM','DMARC','Content Analysis'] },
  { id:'t42', cat:'email', icon:'📧', name:'DMARC Inspector',          url:'https://dmarcian.com/dmarc-inspector/',           desc:'ตรวจสอบ DMARC Record และให้คำแนะนำ',               tags:['email','dmarc'],   functions:['DMARC Record','Policy','Alignment','Reporting URIs'] },
  { id:'t43', cat:'email', icon:'📧', name:'Email Header Analyzer',    url:'https://mxtoolbox.com/EmailHeaders.aspx',         desc:'วิเคราะห์ Email Header หา Spam Path และ Delay',     tags:['email','header'],  functions:['Header Parse','Relay Path','Delay Analysis','Spam Score'] },

  /* CDN / HTTP */
  { id:'t44', cat:'cdn',   icon:'🔁', name:'CDN Finder (cdnplanet)',   url:'https://www.cdnplanet.com/tools/cdnfinder/',      desc:'ตรวจสอบว่าเว็บใช้ CDN อะไร',                       tags:['cdn','detect'],    functions:['CDN Detection','Provider','PoP Location'] },
  { id:'t45', cat:'cdn',   icon:'🔁', name:'HTTP Headers Checker',     url:'https://tools.keycdn.com/http-header-checker',   desc:'ตรวจสอบ HTTP Response Headers ของเว็บ',            tags:['cdn','headers'],   functions:['Response Headers','Cache-Control','HSTS','X-Cache','ETag'] },
  { id:'t46', cat:'cdn',   icon:'🔁', name:'GTmetrix',                 url:'https://gtmetrix.com/',                           desc:'วิเคราะห์ Speed & Performance พร้อม Waterfall',      tags:['cdn','perf'],      functions:['Page Speed','Waterfall','Core Web Vitals','CDN Check','Cache'] },
  { id:'t47', cat:'cdn',   icon:'🔁', name:'WebPageTest',              url:'https://www.webpagetest.org/',                    desc:'ทดสอบ Page Load จากหลาย Location ทั่วโลก',          tags:['cdn','test'],      functions:['Load Time','TTFB','Filmstrip','Video','Location Test'] },
  { id:'t48', cat:'cdn',   icon:'🔁', name:'Redirect Checker',         url:'https://www.redirect-checker.org/',               desc:'ตรวจสอบ Redirect Chain ทั้งหมดของ URL',             tags:['cdn','redirect'],  functions:['Redirect Chain','Status Codes','Final URL','Response Time'] },

  /* ASN / Subnet / MAC */
  { id:'t49', cat:'subnet',icon:'🧮', name:'Hurricane Electric ASN',   url:'https://bgp.he.net/',                             desc:'ค้นหา ASN Number และ IP Block ที่เกี่ยวข้อง',       tags:['asn','bgp'],       functions:['ASN Lookup','IP Prefix','Peers','IPv6','Route Map'] },
  { id:'t50', cat:'subnet',icon:'🧮', name:'ARIN Whois',               url:'https://search.arin.net/rdap/',                   desc:'ค้นหาข้อมูล IP Block จาก ARIN Registry',            tags:['asn','arin'],      functions:['IP Block','Org Info','ASN','RDAP'] },
  { id:'t51', cat:'subnet',icon:'🧮', name:'Subnet Calculator (solarwinds)', url:'https://www.solarwinds.com/free-tools/advanced-subnet-calculator', desc:'คำนวณ Subnet/CIDR อย่างละเอียด', tags:['subnet','cidr'], functions:['Network','Broadcast','Host Range','Subnet Mask','CIDR'] },
  { id:'t52', cat:'subnet',icon:'🧮', name:'MAC Address Lookup',       url:'https://www.macvendorlookup.com/',                desc:'ค้นหา Vendor จาก MAC Address (OUI Lookup)',         tags:['mac','vendor'],    functions:['Vendor Lookup','OUI','Manufacturer','Country'] },
  { id:'t53', cat:'subnet',icon:'🧮', name:'IP2Location',              url:'https://www.ip2location.com/',                    desc:'ค้นหาตำแหน่ง IP, ISP, Domain, Proxy detection',    tags:['ip','location'],   functions:['Country','City','ISP','Domain','Proxy','Weather','Time Zone'] },
  { id:'t54', cat:'subnet',icon:'🧮', name:'IPv6 Test',                url:'https://ipv6-test.com/',                          desc:'ทดสอบ IPv6 Connectivity และ Dual Stack',            tags:['ipv6','test'],     functions:['IPv6 Check','Dual Stack','ISP IPv6','Speed Test'] },
];

/* ─── Storage helpers ───────────────────────────────── */
const LS = {
  get: (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d } catch { return d } },
  set: (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)) } catch {} },
};

/* ─── State ─────────────────────────────────────────── */
let S = {
  category: null,
  tool: null,
  tab: 'info',
  search: '',
  listView: LS.get('ntpro_list', false),
  theme: LS.get('ntpro_theme', 'dark'),
  favorites: LS.get('ntpro_favs', []),
  pinned: LS.get('ntpro_pinned', []),
  history: LS.get('ntpro_history', []),
  stats: LS.get('ntpro_stats', {}),
  notes: LS.get('ntpro_notes', {}),
  pinMode: false,
  compareMode: false,
};

/* ─── Init ──────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(S.theme);
  buildNav();
  renderSidebarExtras();
  renderQuickbar();
  handleUrlParams();
  registerSW();
});

/* ─── PWA: Service Worker ───────────────────────────── */
function registerSW() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  }
}

/* ─── URL Params (deep link) ────────────────────────── */
function handleUrlParams() {
  const params = new URLSearchParams(location.search);
  const toolId = params.get('tool');
  const catId = params.get('cat');
  if (toolId) {
    const tool = TOOLS.find(t => t.id === toolId);
    if (tool) { selectCategory(tool.cat); openTool(tool); return; }
  }
  if (catId && CATEGORIES.find(c => c.id === catId)) {
    selectCategory(catId);
  } else {
    selectCategory(CATEGORIES[0].id);
  }
}

/* ─── Theme ─────────────────────────────────────────── */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  document.getElementById('theme-icon').textContent = theme === 'dark' ? '☀️' : '🌙';
  S.theme = theme;
  LS.set('ntpro_theme', theme);
}
function toggleTheme() { applyTheme(S.theme === 'dark' ? 'light' : 'dark'); }

/* ─── Mobile Sidebar ────────────────────────────────── */
function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebar-backdrop').style.display = 'block';
  document.body.style.overflow = 'hidden';
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-backdrop').style.display = 'none';
  document.body.style.overflow = '';
}

/* ─── Nav ───────────────────────────────────────────── */
function buildNav() {
  const nav = document.getElementById('nav-list');
  nav.innerHTML = '';
  CATEGORIES.forEach(cat => {
    const count = TOOLS.filter(t => t.cat === cat.id).length;
    const el = document.createElement('div');
    el.className = 'nav-item';
    el.id = `nav-${cat.id}`;
    el.innerHTML = `<span class="nav-icon">${cat.icon}</span><span>${cat.label}</span><span class="nav-count">${count}</span>`;
    el.onclick = () => { selectCategory(cat.id); closeSidebar(); };
    nav.appendChild(el);
  });
}

function renderSidebarExtras() {
  // Recent
  const recentSection = document.getElementById('recent-section');
  const recentNav = document.getElementById('recent-nav-list');
  const recentTools = S.history.slice(0, 5).map(id => TOOLS.find(t => t.id === id)).filter(Boolean);
  recentSection.hidden = recentTools.length === 0;
  recentNav.innerHTML = '';
  recentTools.forEach(tool => {
    const el = document.createElement('div');
    el.className = 'nav-item';
    el.innerHTML = `<span class="nav-icon">${tool.icon}</span><span>${tool.name}</span>`;
    el.onclick = () => { openTool(tool); closeSidebar(); };
    recentNav.appendChild(el);
  });

  // Favorites
  const favSection = document.getElementById('favorites-section');
  const favNav = document.getElementById('fav-nav-list');
  const favTools = S.favorites.map(id => TOOLS.find(t => t.id === id)).filter(Boolean);
  favSection.hidden = favTools.length === 0;
  favNav.innerHTML = '';
  favTools.forEach(tool => {
    const el = document.createElement('div');
    el.className = 'nav-item';
    el.innerHTML = `<span class="nav-icon">${tool.icon}</span><span>${tool.name}</span>`;
    el.onclick = () => { openTool(tool); closeSidebar(); };
    favNav.appendChild(el);
  });
}

/* ─── Quick Launch Bar ──────────────────────────────── */
function renderQuickbar() {
  const bar = document.getElementById('quickbar');
  const list = document.getElementById('quickbar-list');
  list.innerHTML = '';
  if (S.pinned.length === 0) { bar.hidden = true; return; }
  bar.hidden = false;
  S.pinned.forEach(id => {
    const tool = TOOLS.find(t => t.id === id);
    if (!tool) return;
    const chip = document.createElement('div');
    chip.className = 'quickbar-chip';
    chip.innerHTML = `
      <span class="chip-icon">${tool.icon}</span>
      <span>${tool.name}</span>
      ${S.pinMode ? `<button class="chip-remove" onclick="event.stopPropagation();unpin('${tool.id}')" title="ลบ Pin">✕</button>` : ''}
    `;
    chip.onclick = () => { if (!S.pinMode) openTool(tool); };
    list.appendChild(chip);
  });
}

function togglePinMode() {
  S.pinMode = !S.pinMode;
  document.getElementById('pin-mode-btn').textContent = S.pinMode ? '✅' : '✏️';
  renderQuickbar();
  if (!S.pinMode) showToast('📌', 'บันทึก Pin แล้ว');
}

function pin(toolId) {
  if (!S.pinned.includes(toolId)) {
    S.pinned.push(toolId);
    LS.set('ntpro_pinned', S.pinned);
    renderQuickbar();
    showToast('📌', 'Pin แล้ว');
  }
}
function unpin(toolId) {
  S.pinned = S.pinned.filter(id => id !== toolId);
  LS.set('ntpro_pinned', S.pinned);
  renderQuickbar();
  showToast('🗑️', 'ลบ Pin แล้ว');
}
function isPinned(id) { return S.pinned.includes(id); }

/* ─── Category ──────────────────────────────────────── */
function selectCategory(catId) {
  S.category = catId;
  S.tool = null;
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  const navEl = document.getElementById(`nav-${catId}`);
  if (navEl) navEl.classList.add('active');
  const cat = CATEGORIES.find(c => c.id === catId);
  const tools = TOOLS.filter(t => t.cat === catId);
  document.getElementById('page-title').textContent = `${cat.icon} ${cat.label}`;
  document.getElementById('page-sub').textContent = `${tools.length} เครื่องมือ`;

  // Update URL
  history.replaceState(null, '', `?cat=${catId}`);

  showGridView();
  showSkeletonThenGrid(tools);
}

function showSkeletonThenGrid(tools) {
  const skeleton = document.getElementById('skeleton-grid');
  const grid = document.getElementById('tools-grid');
  skeleton.style.display = 'grid';
  grid.style.display = 'none';
  setTimeout(() => {
    skeleton.style.display = 'none';
    grid.style.display = 'grid';
    renderGrid(tools);
  }, 350);
}

/* ─── Grid ──────────────────────────────────────────── */
function toggleGridView() {
  S.listView = !S.listView;
  LS.set('ntpro_list', S.listView);
  const grid = document.getElementById('tools-grid');
  const btn = document.getElementById('view-toggle-btn');
  grid.classList.toggle('list-view', S.listView);
  btn.textContent = S.listView ? '▤' : '▦';
}

function renderGrid(tools, container = document.getElementById('tools-grid')) {
  container.innerHTML = '';
  if (S.listView) container.classList.add('list-view');
  else container.classList.remove('list-view');

  if (tools.length === 0) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">🔭</div><p>ไม่พบเครื่องมือที่ตรงกับการค้นหา</p></div>`;
    return;
  }
  tools.forEach(tool => {
    const isFav = S.favorites.includes(tool.id);
    const isPinnedTool = isPinned(tool.id);
    const openCount = S.stats[tool.id] || 0;
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.innerHTML = `
      <div class="tool-card-actions">
        <button class="card-action-btn ${isFav ? 'fav-active' : ''}" title="${isFav ? 'ลบออกโปรด' : 'เพิ่มโปรด'}" onclick="event.stopPropagation();toggleFavorite('${tool.id}',this)">
          ${isFav ? '⭐' : '☆'}
        </button>
        <button class="card-action-btn ${isPinnedTool ? 'pin-active' : ''}" title="${isPinnedTool ? 'ลบ Pin' : 'Pin ไว้'}" onclick="event.stopPropagation();${isPinnedTool ? `unpin('${tool.id}')` : `pin('${tool.id}')`};this.classList.toggle('pin-active');this.textContent='${isPinnedTool ? '📌' : '✅'}'">
          📌
        </button>
      </div>
      <div class="tool-card-icon">${tool.icon}</div>
      <div class="tool-card-name">${tool.name}</div>
      <div class="tool-card-desc">${tool.desc}</div>
      <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
        <div class="tool-card-tag">${tool.tags[0]}</div>
        ${openCount > 0 ? `<div class="tool-card-stats">เปิด ${openCount} ครั้ง</div>` : ''}
      </div>
    `;
    card.addEventListener('click', () => openTool(tool));
    container.appendChild(card);
  });
}

/* ─── Show/Hide Panels ──────────────────────────────── */
function showGridView() {
  document.getElementById('grid-wrap').hidden = false;
  document.getElementById('detail-panel').hidden = true;
  document.getElementById('search-results-wrap').hidden = true;
  document.getElementById('compare-panel').hidden = true;
  document.getElementById('subnet-panel').hidden = true;
  document.getElementById('btn-back').hidden = true;
}
function showDetailView() {
  document.getElementById('grid-wrap').hidden = true;
  document.getElementById('search-results-wrap').hidden = true;
  document.getElementById('compare-panel').hidden = true;
  document.getElementById('subnet-panel').hidden = true;
  document.getElementById('detail-panel').hidden = false;
  document.getElementById('btn-back').hidden = false;
}
function backToGrid() {
  if (S.search) showSearchResults(S.search);
  else selectCategory(S.category || CATEGORIES[0].id);
}

/* ─── Open Tool ─────────────────────────────────────── */
function openTool(tool) {
  S.tool = tool;
  document.getElementById('page-title').textContent = tool.name;
  document.getElementById('page-sub').textContent = tool.url;

  // Stats
  S.stats[tool.id] = (S.stats[tool.id] || 0) + 1;
  LS.set('ntpro_stats', S.stats);

  // History
  S.history = [tool.id, ...S.history.filter(id => id !== tool.id)].slice(0, 20);
  LS.set('ntpro_history', S.history);
  renderSidebarExtras();

  // URL deep link
  history.replaceState(null, '', `?tool=${tool.id}`);

  buildInfoTab(tool);
  buildFunctionsTab(tool);

  // Reset iframe
  document.getElementById('main-iframe').src = 'about:blank';
  document.getElementById('iframe-url-display').textContent = tool.url;
  document.getElementById('iframe-loading').style.display = 'none';
  document.getElementById('iframe-blocked').hidden = true;

  switchTab('info');
  showDetailView();
}

function buildInfoTab(tool) {
  const isFav = S.favorites.includes(tool.id);
  const isPinnedTool = isPinned(tool.id);
  const openCount = S.stats[tool.id] || 0;
  const note = S.notes[tool.id] || '';
  document.getElementById('info-content').innerHTML = `
    <div class="tool-title"><span>${tool.icon}</span> ${tool.name}</div>
    <div class="tool-url">${tool.url}</div>
    <div class="tool-desc">${tool.desc}</div>
    <div class="tags">${tool.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    <div class="stats-row">
      <div class="stat-item">
        <div class="stat-label">เปิดทั้งหมด</div>
        <div class="stat-value">${openCount}</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">หมวดหมู่</div>
        <div class="stat-value" style="font-size:14px">${CATEGORIES.find(c=>c.id===tool.cat)?.label || tool.cat}</div>
      </div>
    </div>
    <div class="action-row">
      <button class="btn primary" onclick="switchTab('iframe')">🌐 เปิดในแอป</button>
      <button class="btn ghost" onclick="openInNewTab()">↗ Tab ใหม่</button>
      <button class="btn ghost" onclick="copyCurrentUrl()">📋 คัดลอก URL</button>
      <button class="btn ghost" onclick="shareCurrentTool()">🔗 แชร์</button>
      <button class="btn ghost" id="info-fav-btn" onclick="toggleFavoriteFromInfo()">
        ${isFav ? '⭐ ลบจากโปรด' : '☆ เพิ่มโปรด'}
      </button>
      <button class="btn ghost" id="info-pin-btn" onclick="togglePinFromInfo()">
        ${isPinnedTool ? '📌 ลบ Pin' : '📌 Pin ไว้'}
      </button>
    </div>
    <div class="note-box">
      <div class="note-box-label">📝 โน้ตส่วนตัว</div>
      <textarea class="note-textarea" id="note-textarea" placeholder="จดบันทึกเกี่ยวกับเครื่องมือนี้..." oninput="saveNote('${tool.id}',this.value)">${note}</textarea>
    </div>
  `;
}

function buildFunctionsTab(tool) {
  document.getElementById('function-docs').innerHTML = (tool.functions || []).map(fn => `
    <div class="function-item">
      <div class="function-item-name">✅ ${fn}</div>
    </div>
  `).join('');
}

/* ─── Notes ─────────────────────────────────────────── */
function saveNote(toolId, value) {
  S.notes[toolId] = value;
  LS.set('ntpro_notes', S.notes);
}

/* ─── Tabs ──────────────────────────────────────────── */
function switchTab(tabName) {
  S.tab = tabName;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  document.getElementById(`tab-${tabName}-btn`).classList.add('active');
  document.getElementById(`tab-${tabName}`).classList.add('active');
  if (tabName === 'iframe' && S.tool) loadIframe(S.tool.url);
}

/* ─── Iframe ────────────────────────────────────────── */
function loadIframe(url) {
  const iframe = document.getElementById('main-iframe');
  const loading = document.getElementById('iframe-loading');
  const blocked = document.getElementById('iframe-blocked');
  iframe.src = 'about:blank';
  blocked.hidden = true;
  loading.style.display = 'flex';
  clearTimeout(window._iframeTimeout);
  setTimeout(() => { iframe.src = url; }, 80);
  window._iframeTimeout = setTimeout(() => {
    if (loading.style.display !== 'none') {
      loading.style.display = 'none';
      blocked.hidden = false;
    }
  }, 8000);
}
function iframeLoaded() {
  clearTimeout(window._iframeTimeout);
  const loading = document.getElementById('iframe-loading');
  const iframe = document.getElementById('main-iframe');
  try { if (iframe.contentWindow.location.href === 'about:blank') return; } catch {}
  loading.style.display = 'none';
  document.getElementById('iframe-blocked').hidden = true;
}
function iframeError() {
  clearTimeout(window._iframeTimeout);
  document.getElementById('iframe-loading').style.display = 'none';
  document.getElementById('iframe-blocked').hidden = false;
}
function reloadIframe() { if (S.tool) loadIframe(S.tool.url); }
function openInNewTab() { if (S.tool) window.open(S.tool.url, '_blank', 'noopener,noreferrer'); }
function openCurrentTool() { if (S.tool) window.open(S.tool.url, '_blank', 'noopener,noreferrer'); }

/* ─── Copy & Share ──────────────────────────────────── */
function copyCurrentUrl() {
  if (!S.tool) return;
  const text = S.tool.url;
  navigator.clipboard?.writeText(text).then(() => showToast('📋', 'คัดลอก URL แล้ว'))
    .catch(() => { fallbackCopy(text); showToast('📋', 'คัดลอก URL แล้ว'); });
}
function fallbackCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text; document.body.appendChild(ta); ta.select();
  document.execCommand('copy'); ta.remove();
}
function shareCurrentTool() {
  if (!S.tool) return;
  const shareUrl = `${location.origin}${location.pathname}?tool=${S.tool.id}`;
  navigator.clipboard?.writeText(shareUrl).then(() => showToast('🔗', 'คัดลอกลิงก์แชร์แล้ว'))
    .catch(() => { fallbackCopy(shareUrl); showToast('🔗', 'คัดลอกลิงก์แชร์แล้ว'); });
}

/* ─── Toast ─────────────────────────────────────────── */
let _toastTimer = null;
function showToast(icon, message, type = 'success') {
  const el = document.getElementById('toast');
  el.innerHTML = `<span class="toast-icon">${icon}</span> ${message}`;
  el.className = `toast ${type} show`;
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => el.classList.remove('show'), 2500);
}

/* ─── Favorites ─────────────────────────────────────── */
function toggleFavorite(toolId, btnEl) {
  const idx = S.favorites.indexOf(toolId);
  if (idx === -1) {
    S.favorites.push(toolId);
    btnEl.classList.add('fav-active');
    btnEl.textContent = '⭐';
    showToast('⭐', 'เพิ่มในโปรดแล้ว');
  } else {
    S.favorites.splice(idx, 1);
    btnEl.classList.remove('fav-active');
    btnEl.textContent = '☆';
    showToast('🗑️', 'ลบออกจากโปรดแล้ว');
  }
  LS.set('ntpro_favs', S.favorites);
  renderSidebarExtras();
}
function toggleFavoriteFromInfo() {
  if (!S.tool) return;
  const id = S.tool.id;
  const idx = S.favorites.indexOf(id);
  const btn = document.getElementById('info-fav-btn');
  if (idx === -1) {
    S.favorites.push(id);
    if (btn) btn.innerHTML = '⭐ ลบจากโปรด';
    showToast('⭐', 'เพิ่มในโปรดแล้ว');
  } else {
    S.favorites.splice(idx, 1);
    if (btn) btn.innerHTML = '☆ เพิ่มโปรด';
    showToast('🗑️', 'ลบออกจากโปรดแล้ว');
  }
  LS.set('ntpro_favs', S.favorites);
  renderSidebarExtras();
}
function togglePinFromInfo() {
  if (!S.tool) return;
  const id = S.tool.id;
  const btn = document.getElementById('info-pin-btn');
  if (isPinned(id)) {
    unpin(id);
    if (btn) btn.innerHTML = '📌 Pin ไว้';
  } else {
    pin(id);
    if (btn) btn.innerHTML = '📌 ลบ Pin';
  }
}

/* ─── Search ────────────────────────────────────────── */
function handleSearch(query) {
  S.search = query.trim();
  document.getElementById('search-clear').hidden = !S.search;
  if (!S.search) {
    if (S.category) selectCategory(S.category);
    return;
  }
  showSearchResults(S.search);
}
function showSearchResults(query) {
  const q = query.toLowerCase();
  const results = TOOLS.filter(t =>
    t.name.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q) ||
    t.tags.some(tag => tag.includes(q)) || (t.functions||[]).some(fn => fn.toLowerCase().includes(q))
  );
  document.getElementById('page-title').textContent = `🔍 ค้นหา: "${query}"`;
  document.getElementById('page-sub').textContent = `พบ ${results.length} เครื่องมือ`;
  document.getElementById('grid-wrap').hidden = true;
  document.getElementById('detail-panel').hidden = true;
  document.getElementById('compare-panel').hidden = true;
  document.getElementById('subnet-panel').hidden = true;
  document.getElementById('search-results-wrap').hidden = false;
  document.getElementById('btn-back').hidden = true;
  document.getElementById('search-results-label').textContent = `พบ ${results.length} รายการสำหรับ "${query}"`;
  const grid = document.getElementById('search-results-grid');
  renderGrid(results, grid);
  if (results.length > 0) {
    grid.querySelectorAll('.tool-card-name,.tool-card-desc').forEach(el => {
      el.innerHTML = el.innerHTML.replace(new RegExp(`(${escapeRe(query)})`, 'gi'), '<mark class="highlight">$1</mark>');
    });
  }
}
function clearSearch() {
  const inp = document.getElementById('tool-search');
  inp.value = ''; handleSearch(''); inp.focus();
}
function escapeRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

/* ─── Compare Mode ──────────────────────────────────── */
function showCompare() {
  document.getElementById('grid-wrap').hidden = true;
  document.getElementById('detail-panel').hidden = true;
  document.getElementById('search-results-wrap').hidden = true;
  document.getElementById('subnet-panel').hidden = true;
  document.getElementById('compare-panel').hidden = false;
  document.getElementById('btn-back').hidden = false;
  document.getElementById('page-title').textContent = '⚖️ Compare Mode';
  document.getElementById('page-sub').textContent = 'เปิด 2 เครื่องมือพร้อมกัน';

  // Populate selects
  ['compare-select-a','compare-select-b'].forEach(selId => {
    const sel = document.getElementById(selId);
    sel.innerHTML = '<option value="">-- เลือกเครื่องมือ --</option>';
    CATEGORIES.forEach(cat => {
      const grp = document.createElement('optgroup');
      grp.label = `${cat.icon} ${cat.label}`;
      TOOLS.filter(t => t.cat === cat.id).forEach(tool => {
        const opt = document.createElement('option');
        opt.value = tool.id; opt.textContent = tool.name;
        grp.appendChild(opt);
      });
      sel.appendChild(grp);
    });
  });
}
function hideCompare() { backToGrid(); }
function loadCompareFrame(side) {
  const sel = document.getElementById(`compare-select-${side}`);
  const toolId = sel.value;
  const iframe = document.getElementById(`compare-iframe-${side}`);
  const loading = document.getElementById(`compare-loading-${side}`);
  const bar = document.getElementById(`compare-bar-${side}`);
  if (!toolId) { iframe.src = 'about:blank'; bar.textContent = 'เลือกเครื่องมือด้านบน'; return; }
  const tool = TOOLS.find(t => t.id === toolId);
  if (!tool) return;
  bar.textContent = tool.url;
  loading.style.display = 'flex';
  iframe.src = tool.url;
}
function compareFrameLoaded(side) {
  document.getElementById(`compare-loading-${side}`).style.display = 'none';
}

/* ─── Subnet Calculator ──────────────────────────────── */
function showSubnetCalc() {
  document.getElementById('grid-wrap').hidden = true;
  document.getElementById('detail-panel').hidden = true;
  document.getElementById('search-results-wrap').hidden = true;
  document.getElementById('compare-panel').hidden = true;
  document.getElementById('subnet-panel').hidden = false;
  document.getElementById('btn-back').hidden = false;
  document.getElementById('page-title').textContent = '🧮 Subnet Calculator';
  document.getElementById('page-sub').textContent = 'คำนวณ Network/Broadcast/Hosts';
  document.getElementById('subnet-results').innerHTML = '';
  document.getElementById('subnet-input').value = '';
  document.getElementById('subnet-input').focus();
}
function hideSubnetCalc() { backToGrid(); }
function setSubnet(cidr) {
  document.getElementById('subnet-input').value = cidr;
  calcSubnet(cidr);
}
function calcSubnet(input) {
  const out = document.getElementById('subnet-results');
  const val = input.trim();
  if (!val) { out.innerHTML = ''; return; }
  try {
    const result = parseSubnet(val);
    out.innerHTML = Object.entries(result).map(([label, value]) => `
      <div class="subnet-row" onclick="copySubnetValue('${value}')">
        <div class="subnet-row-label">${label}</div>
        <div class="subnet-row-value">${value}</div>
        <div class="subnet-row-copy">คลิกเพื่อคัดลอก</div>
      </div>
    `).join('');
  } catch(e) {
    out.innerHTML = `<div class="subnet-error">❌ ${e.message}</div>`;
  }
}
function copySubnetValue(val) {
  navigator.clipboard?.writeText(val).then(() => showToast('📋', `คัดลอก: ${val}`))
    .catch(() => { fallbackCopy(val); showToast('📋', `คัดลอก: ${val}`); });
}
function parseSubnet(input) {
  let ip, prefix;
  if (input.includes('/')) {
    const parts = input.split('/');
    ip = parts[0].trim();
    const p = parts[1].trim();
    // Could be CIDR number or subnet mask
    if (p.includes('.')) {
      prefix = maskToPrefix(p);
    } else {
      prefix = parseInt(p);
    }
  } else {
    throw new Error('กรุณาใส่ CIDR เช่น 192.168.1.0/24');
  }
  if (!isValidIP(ip)) throw new Error('IP address ไม่ถูกต้อง');
  if (isNaN(prefix) || prefix < 0 || prefix > 32) throw new Error('Prefix length ต้องอยู่ระหว่าง 0-32');

  const ipNum = ipToNum(ip);
  const maskNum = prefix === 0 ? 0 : (0xFFFFFFFF << (32 - prefix)) >>> 0;
  const networkNum = (ipNum & maskNum) >>> 0;
  const broadcastNum = (networkNum | (~maskNum >>> 0)) >>> 0;
  const firstHost = prefix < 31 ? (networkNum + 1) >>> 0 : networkNum;
  const lastHost = prefix < 31 ? (broadcastNum - 1) >>> 0 : broadcastNum;
  const totalHosts = prefix >= 31 ? Math.pow(2, 32 - prefix) : Math.pow(2, 32 - prefix) - 2;

  return {
    'Network Address':   numToIP(networkNum),
    'Subnet Mask':       numToIP(maskNum),
    'Wildcard Mask':     numToIP(~maskNum >>> 0),
    'Broadcast Address': numToIP(broadcastNum),
    'First Host':        numToIP(firstHost),
    'Last Host':         numToIP(lastHost),
    'Total Hosts':       totalHosts.toLocaleString(),
    'CIDR Notation':     `${numToIP(networkNum)}/${prefix}`,
    'IP Class':          getIPClass(ipNum),
    'IP Type':           getIPType(ipNum),
    'Binary Subnet':     decToBin8(maskNum >>> 24)+'.'+decToBin8((maskNum>>16)&0xFF)+'.'+decToBin8((maskNum>>8)&0xFF)+'.'+decToBin8(maskNum&0xFF),
  };
}
function ipToNum(ip) {
  return ip.split('.').reduce((acc, oct) => {
    const n = parseInt(oct);
    if (isNaN(n) || n < 0 || n > 255) throw new Error('IP octet ไม่ถูกต้อง');
    return (acc << 8) | n;
  }, 0) >>> 0;
}
function numToIP(num) {
  return [(num>>>24)&0xFF,(num>>>16)&0xFF,(num>>>8)&0xFF,num&0xFF].join('.');
}
function maskToPrefix(mask) {
  const num = ipToNum(mask);
  let prefix = 0;
  for (let i = 31; i >= 0; i--) { if ((num >> i) & 1) prefix++; else break; }
  return prefix;
}
function isValidIP(ip) {
  const parts = ip.split('.');
  if (parts.length !== 4) return false;
  return parts.every(p => { const n = parseInt(p); return !isNaN(n) && n >= 0 && n <= 255 && String(n) === p; });
}
function getIPClass(ipNum) {
  const first = (ipNum >>> 24) & 0xFF;
  if (first < 128) return 'Class A';
  if (first < 192) return 'Class B';
  if (first < 224) return 'Class C';
  if (first < 240) return 'Class D (Multicast)';
  return 'Class E (Reserved)';
}
function getIPType(ipNum) {
  const first = (ipNum >>> 24) & 0xFF;
  const second = (ipNum >>> 16) & 0xFF;
  if (first === 10) return 'Private (RFC 1918)';
  if (first === 172 && second >= 16 && second <= 31) return 'Private (RFC 1918)';
  if (first === 192 && second === 168) return 'Private (RFC 1918)';
  if (first === 127) return 'Loopback';
  if (first === 169 && second === 254) return 'Link-Local (APIPA)';
  if (first >= 224 && first < 240) return 'Multicast';
  return 'Public';
}
function decToBin8(n) { return (n >>> 0).toString(2).padStart(8, '0'); }

/* ─── Keyboard Shortcuts ────────────────────────────── */
document.addEventListener('keydown', e => {
  const isInput = ['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName);
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    const inp = document.getElementById('tool-search');
    inp.focus(); inp.select(); openSidebar();
  }
  if (e.key === 'Escape') {
    if (document.getElementById('sidebar').classList.contains('open')) closeSidebar();
    else if (S.search) clearSearch();
  }
  if (!isInput) {
    if (e.key === 'd') toggleTheme();
    if (e.key === 'c') showCompare();
    if (e.key === 's') showSubnetCalc();
  }
});

const ICONS={mail:'✉',scan:'▣',topology:'⌬',shield:'◈',world:'◎',bolt:'ϟ',map:'⌖',cert:'▤',function:'ƒ'};

const PAGES=[
  {id:'dns',label:'DNS & Email',icon:'mail',color:'c-blue',sub:'DNS, Blacklist, SMTP, SPF, DKIM, DMARC',tools:[
    {name:'MXToolbox',url:'https://mxtoolbox.com',color:'c-blue',desc:'DNS Lookup, Blacklist, SMTP Test ครบวงจร',tags:['DNS','Blacklist','SMTP','Email'],pricing:'ฟรี / มี Pro',difficulty:'ง่าย',type:'Web Tool'},
    {name:'DNSChecker',url:'https://dnschecker.org',color:'c-blue',desc:'ตรวจสอบ DNS Propagation จากหลายประเทศทั่วโลก',tags:['DNS','Propagation','Global'],pricing:'ฟรี',difficulty:'ง่าย',type:'DNS Tool'},
    {name:'Mail Tester',url:'https://www.mail-tester.com',color:'c-blue',desc:'ทดสอบคะแนนความน่าเชื่อถือของ Email และ Spam Score',tags:['Email','SPF','DKIM','DMARC'],pricing:'ฟรีจำกัดครั้ง',difficulty:'ง่าย',type:'Email Tester'},
    {name:'DMARC Inspector',url:'https://dmarcian.com/dmarc-inspector/',color:'c-blue',desc:'วิเคราะห์ DMARC Record และอธิบาย Policy แบบอ่านง่าย',tags:['DMARC','Email Security','DNS'],pricing:'ฟรี',difficulty:'ปานกลาง',type:'DNS Analyzer'},
    {name:'SPF Validator',url:'https://www.kitterman.com/spf/validate.html',color:'c-blue',desc:'ตรวจสอบ Syntax และ Lookup Count ของ SPF Record',tags:['SPF','Email','DNS'],pricing:'ฟรี',difficulty:'ปานกลาง',type:'DNS Validator'},
    {name:'Ping.eu',url:'https://ping.eu',color:'c-blue',desc:'รวม Ping, Traceroute, WHOIS, DNS Lookup และ Port Check',tags:['Ping','DNS','WHOIS'],pricing:'ฟรี',difficulty:'ง่าย',type:'Network Tools'},
    {name:'MXToolbox SMTP',url:'https://mxtoolbox.com/diagnostic.aspx',color:'c-blue',desc:'ทดสอบ SMTP Server แบบ Step-by-step',tags:['SMTP','Email','Diagnostic'],pricing:'ฟรี',difficulty:'ปานกลาง',type:'SMTP Tester'},
    {name:'EasyDMARC',url:'https://easydmarc.com/tools/dmarc-lookup',color:'c-blue',desc:'วิเคราะห์ DMARC, DKIM, SPF, MX และ Blacklist',tags:['DMARC','DKIM','SPF'],pricing:'ฟรี',difficulty:'ง่าย',type:'Email Security'}
  ]},
  {id:'portscan',label:'Port Scan & WHOIS',icon:'scan',color:'c-orange',sub:'Port Scan, Traceroute, WHOIS, Nmap ออนไลน์',tools:[
    {name:'HackerTarget Nmap',url:'https://hackertarget.com/nmap-online-port-scanner/',color:'c-orange',desc:'Online Nmap Port Scanner สำหรับตรวจพอร์ตจากภายนอก',tags:['Nmap','Port Scan','Security'],pricing:'ฟรี',difficulty:'ปานกลาง',type:'Port Scanner'},
    {name:'PortChecker.co',url:'https://portchecker.co',color:'c-orange',desc:'ตรวจสอบว่า Port ของ IP หรือ Server เปิดจากภายนอกหรือไม่',tags:['Port','Firewall','Network'],pricing:'ฟรี',difficulty:'ง่าย',type:'Port Checker'},
    {name:'WHOIS Lookup',url:'https://www.whois.com/whois/',color:'c-orange',desc:'ค้นหาข้อมูล Domain, IP, Registrar, Name Server และวันหมดอายุ',tags:['WHOIS','Domain','IP'],pricing:'ฟรี',difficulty:'ง่าย',type:'WHOIS'},
    {name:'Traceroute.org',url:'https://www.traceroute.org',color:'c-orange',desc:'รวม Looking Glass สำหรับ Ping, Traceroute และ BGP จากหลาย ISP',tags:['Traceroute','BGP','Looking Glass'],pricing:'ฟรี',difficulty:'ปานกลาง',type:'Network'},
    {name:'Shodan',url:'https://www.shodan.io',color:'c-orange',desc:'Search Engine สำหรับอุปกรณ์และ Service ที่เชื่อมต่อ Internet',tags:['IoT','Security','Search'],pricing:'ฟรีจำกัด',difficulty:'ปานกลาง',type:'Security Search'},
    {name:'HackerTarget WHOIS',url:'https://hackertarget.com/whois-lookup/',color:'c-orange',desc:'WHOIS และ Reverse IP Lookup สำหรับงานตรวจสอบโดเมน/IP',tags:['WHOIS','Reverse IP'],pricing:'ฟรี',difficulty:'ง่าย',type:'WHOIS / Recon'},
    {name:'YouGetSignal',url:'https://www.yougetsignal.com/tools/open-ports/',color:'c-orange',desc:'ตรวจ Open Port และ Reverse IP Lookup',tags:['Port','Reverse IP'],pricing:'ฟรี',difficulty:'ง่าย',type:'Port Checker'},
    {name:'Network-Tools.com',url:'https://network-tools.com',color:'c-orange',desc:'รวม WHOIS, Traceroute, Ping, DNS และ HTTP Header Check',tags:['Network','Ping','WHOIS'],pricing:'ฟรี',difficulty:'ง่าย',type:'Network Toolbox'}
  ]},
  {id:'asn',label:'ASN / BGP / IX',icon:'topology',color:'c-purple',sub:'ASN Lookup, BGP Route, Prefix, Internet Exchange',tools:[
    {name:'BGP.he.net',url:'https://bgp.he.net',color:'c-purple',desc:'Hurricane Electric BGP Toolkit ดู ASN, Prefix, Peer และ IX',tags:['ASN','BGP','Routing'],pricing:'ฟรี',difficulty:'ปานกลาง',type:'BGP Toolkit'},
    {name:'IPinfo.io',url:'https://ipinfo.io',color:'c-purple',desc:'ดูข้อมูล IP, ASN, ISP, Geolocation และ Privacy Detection',tags:['IP','ASN','Geolocation'],pricing:'ฟรี / API',difficulty:'ง่าย',type:'IP Intelligence'},
    {name:'BGPView',url:'https://bgpview.io',color:'c-purple',desc:'BGP Route, Prefix, ASN, Upstream และ Downstream Explorer',tags:['ASN','BGP','Prefix'],pricing:'ฟรี',difficulty:'ง่าย',type:'BGP Explorer'},
    {name:'PeeringDB',url:'https://www.peeringdb.com',color:'c-purple',desc:'ฐานข้อมูล Internet Exchange, Facility และ Peering Policy',tags:['IX','Peering','BGP'],pricing:'ฟรี',difficulty:'ปานกลาง',type:'Peering Database'},
    {name:'RIPE Stat',url:'https://stat.ripe.net',color:'c-purple',desc:'ดูสถิติ BGP, RIR Data, RPKI และ Route History',tags:['RIPE','BGP','Statistics'],pricing:'ฟรี',difficulty:'สูง',type:'RIR Data'},
    {name:'ARIN WHOIS',url:'https://search.arin.net/rdap/',color:'c-purple',desc:'ค้นหา IP Address และ ASN Registry สำหรับโซนอเมริกา',tags:['ARIN','WHOIS','IP Registry'],pricing:'ฟรี',difficulty:'ง่าย',type:'IP Registry'},
    {name:'RouteViews',url:'https://www.routeviews.org',color:'c-purple',desc:'ดู Global BGP Routing Table จาก Route Collector',tags:['BGP','Route','Academic'],pricing:'ฟรี',difficulty:'สูง',type:'BGP Collector'},
    {name:'AS Rank',url:'https://asrank.caida.org',color:'c-purple',desc:'จัดอันดับ ASN และดู Provider/Customer Relationship',tags:['ASN','Rank','Research'],pricing:'ฟรี',difficulty:'ปานกลาง',type:'BGP Research'}
  ]},
  {id:'ipleak',label:'IP / DNS / WebRTC Leak',icon:'shield',color:'c-red',sub:'ตรวจสอบ IP Leak, DNS Leak, WebRTC Leak',tools:[
    {name:'ipleak.net',url:'https://ipleak.net',color:'c-red',desc:'ตรวจ IP, DNS, WebRTC และ Torrent IP Leak',tags:['VPN','DNS Leak','WebRTC'],pricing:'ฟรี',difficulty:'ง่าย',type:'Privacy Test'},
    {name:'BrowserLeaks',url:'https://browserleaks.com',color:'c-red',desc:'ตรวจ Browser Fingerprint, WebRTC, Canvas, WebGL และ Font Leak',tags:['Browser','Fingerprint','Privacy'],pricing:'ฟรี',difficulty:'ปานกลาง',type:'Browser Privacy'},
    {name:'DNS Leak Test',url:'https://www.dnsleaktest.com',color:'c-red',desc:'ทดสอบ DNS Leak แบบ Standard และ Extended',tags:['DNS','VPN','Leak'],pricing:'ฟรี',difficulty:'ง่าย',type:'DNS Test'},
    {name:'WhatIsMyIPAddress',url:'https://whatismyipaddress.com',color:'c-red',desc:'ดู Public IP, ISP, Location, Hostname และ Blacklist Status',tags:['IP','ISP','Geolocation'],pricing:'ฟรี',difficulty:'ง่าย',type:'IP Lookup'},
    {name:'Whoer.net',url:'https://whoer.net',color:'c-red',desc:'ตรวจ Anonymity Score, IP, DNS, Timezone และ WebRTC',tags:['Anonymity','VPN','Privacy'],pricing:'ฟรี',difficulty:'ง่าย',type:'Privacy Score'},
    {name:'Cloudflare Help',url:'https://1.1.1.1/help',color:'c-red',desc:'ตรวจ 1.1.1.1, DoH, DNSSEC และ ECH/ESNI',tags:['Cloudflare','DoH','DNS'],pricing:'ฟรี',difficulty:'ง่าย',type:'DNS Checker'},
    {name:'IPLeak EU',url:'https://www.ipleak.eu',color:'c-red',desc:'ตรวจ IP และ DNS Leak จากมุมมอง EU Server',tags:['IP Leak','DNS','EU'],pricing:'ฟรี',difficulty:'ง่าย',type:'Privacy Test'},
    {name:'DoILeak',url:'https://www.doileak.com',color:'c-red',desc:'ตรวจ WebRTC, Java, Flash และ Browser Information Leak',tags:['WebRTC','Privacy','Leak'],pricing:'ฟรี',difficulty:'ง่าย',type:'Leak Detector'}
  ]},
  {id:'dnsprop',label:'DNS Propagation',icon:'world',color:'c-teal',sub:'ตรวจสอบ DNS Propagation ทั่วโลก',tools:[
    {name:'DNSChecker.org',url:'https://dnschecker.org',color:'c-teal',desc:'เช็ก DNS Propagation จาก 100+ Location',tags:['DNS','Propagation','Global'],pricing:'ฟรี',difficulty:'ง่าย',type:'DNS Propagation'},
    {name:'WhatsMyDNS',url:'https://www.whatsmydns.net',color:'c-teal',desc:'ตรวจ DNS Propagation ทุก Record Type',tags:['DNS','Records','Global'],pricing:'ฟรี',difficulty:'ง่าย',type:'DNS Check'},
    {name:'ViewDNS.info',url:'https://viewdns.info',color:'c-teal',desc:'รวม DNS Tools เช่น Reverse DNS, IP History, WHOIS และ Propagation',tags:['DNS','WHOIS','IP History'],pricing:'ฟรี',difficulty:'ง่าย',type:'DNS Toolbox'},
    {name:'IntoDNS',url:'https://intodns.com',color:'c-teal',desc:'วิเคราะห์ DNS Configuration พร้อม Error และ Warning',tags:['DNS','Config','Analysis'],pricing:'ฟรี',difficulty:'ปานกลาง',type:'DNS Analyzer'},
    {name:'NS Lookup',url:'https://www.nslookup.io',color:'c-teal',desc:'Online DNS Lookup รองรับหลาย Record Type',tags:['DNS','Lookup','Records'],pricing:'ฟรี',difficulty:'ง่าย',type:'DNS Lookup'},
    {name:'DNSViz',url:'https://dnsviz.net',color:'c-teal',desc:'Visualize DNSSEC Chain แบบกราฟิก',tags:['DNSSEC','DNS','Graph'],pricing:'ฟรี',difficulty:'สูง',type:'DNSSEC Visualizer'},
    {name:'MXToolbox DNS',url:'https://mxtoolbox.com/DNSLookup.aspx',color:'c-teal',desc:'DNS Lookup ทุก Record Type พร้อม TTL และ Authoritative NS',tags:['DNS','MXToolbox','TTL'],pricing:'ฟรี',difficulty:'ง่าย',type:'DNS Lookup'},
    {name:'DNS.Watch',url:'https://dns.watch',color:'c-teal',desc:'Public DNS Resolver ที่เน้น Privacy และ No-Log',tags:['DNS','Privacy','Public DNS'],pricing:'ฟรี',difficulty:'ง่าย',type:'Public DNS'}
  ]},
  {id:'speed',label:'Speed & Latency',icon:'bolt',color:'c-yellow',sub:'ทดสอบความเร็วอินเทอร์เน็ต, Latency, Jitter',tools:[
    {name:'Speedtest by Ookla',url:'https://www.speedtest.net',color:'c-yellow',desc:'วัด Download, Upload, Ping, Jitter และ Packet Loss',tags:['Speed','Ping','Ookla'],pricing:'ฟรี',difficulty:'ง่าย',type:'Speed Test'},
    {name:'Fast.com',url:'https://fast.com',color:'c-yellow',desc:'Speed Test แบบง่ายโดย Netflix CDN',tags:['Speed','Netflix','CDN'],pricing:'ฟรี',difficulty:'ง่าย',type:'Speed Test'},
    {name:'Cloudflare Speed',url:'https://speed.cloudflare.com',color:'c-yellow',desc:'วัด Speed, Latency Loaded/Unloaded, Jitter และ Packet Loss',tags:['Cloudflare','Latency','Jitter'],pricing:'ฟรี',difficulty:'ง่าย',type:'Speed Test'},
    {name:'nPerf',url:'https://www.nperf.com',color:'c-yellow',desc:'Speed Test พร้อมเปรียบเทียบ ISP และดู Coverage Map',tags:['Speed','ISP','Map'],pricing:'ฟรี',difficulty:'ง่าย',type:'ISP Test'},
    {name:'Bandwidth Place',url:'https://www.bandwidthplace.com',color:'c-yellow',desc:'Speed Test ผ่าน Browser พร้อมเลือก Server ได้',tags:['Speed','Bandwidth','Server'],pricing:'ฟรี',difficulty:'ง่าย',type:'Speed Test'},
    {name:'Measurement Lab',url:'https://speed.measurementlab.net',color:'c-yellow',desc:'Open Source NDT Speed Test สำหรับงานวิจัย',tags:['Open Source','NDT','Research'],pricing:'ฟรี',difficulty:'ง่าย',type:'Speed Test'},
    {name:'LibreSpeed',url:'https://librespeed.org',color:'c-yellow',desc:'HTML5 Speed Test แบบ Open Source และ Self-host ได้',tags:['Open Source','HTML5','Self-host'],pricing:'ฟรี',difficulty:'ง่าย',type:'Speed Test'},
    {name:'SpeedOf.Me',url:'https://speedof.me',color:'c-yellow',desc:'HTML5 Speed Test พร้อม Graph Real-time',tags:['HTML5','CDN','Mobile'],pricing:'ฟรี',difficulty:'ง่าย',type:'Speed Test'}
  ]},
  {id:'multiping',label:'Multi-location Ping',icon:'map',color:'c-green',sub:'Ping และ Traceroute จากหลายประเทศทั่วโลก',tools:[
    {name:'Uptrends Ping',url:'https://www.uptrends.com/tools/ping-test',color:'c-green',desc:'Ping จาก 220+ Location ทั่วโลก',tags:['Ping','Global','Latency'],pricing:'ฟรี',difficulty:'ง่าย',type:'Multi Ping'},
    {name:'Site24x7 Ping',url:'https://www.site24x7.com/tools/online-ping.html',color:'c-green',desc:'Ping และ Traceroute จากหลายประเทศ',tags:['Ping','Traceroute','Global'],pricing:'ฟรี',difficulty:'ง่าย',type:'Global Ping'},
    {name:'Dotcom-Tools',url:'https://www.dotcom-tools.com/ping-test',color:'c-green',desc:'ทดสอบ Ping, Traceroute และ Web Performance จากหลายจุด',tags:['Ping','Performance','Global'],pricing:'ฟรีจำกัด',difficulty:'ง่าย',type:'Multi Ping'},
    {name:'Ping.pe',url:'https://ping.pe',color:'c-green',desc:'Ping, MTR และ TCP Ping จากหลายประเทศ',tags:['Ping','MTR','TCP'],pricing:'ฟรี',difficulty:'ปานกลาง',type:'Multi Ping'},
    {name:'KeyCDN Ping',url:'https://tools.keycdn.com/ping',color:'c-green',desc:'Ping จาก KeyCDN PoP ทั่วโลก',tags:['CDN','Ping','Performance'],pricing:'ฟรี',difficulty:'ง่าย',type:'CDN Test'},
    {name:'Globalping',url:'https://www.jsdelivr.com/globalping',color:'c-green',desc:'Ping และ Traceroute จาก Community Probes ทั่วโลก',tags:['Ping','Traceroute','API'],pricing:'ฟรี',difficulty:'ปานกลาง',type:'Network Probe'},
    {name:'CA App Synthetic',url:'https://asm.ca.com/en/ping.php',color:'c-green',desc:'Ping และ Monitor Response Time จากหลาย Location',tags:['Ping','Monitor','Global'],pricing:'ฟรี',difficulty:'ง่าย',type:'Monitor Ping'},
    {name:'Ping.Canopy',url:'https://ping.canopy.tools',color:'c-green',desc:'แสดง Latency Map แบบ Visual',tags:['Ping','Latency','Map'],pricing:'ฟรี',difficulty:'ง่าย',type:'Latency Map'}
  ]},
  {id:'ssl',label:'Nmap / SSL / Zone',icon:'cert',color:'c-pink',sub:'SSL Check, Zone Transfer, Online Nmap, Certificate',tools:[
    {name:'SSL Labs',url:'https://www.ssllabs.com/ssltest/',color:'c-pink',desc:'วิเคราะห์ SSL/TLS Configuration แบบละเอียดและให้ Grade',tags:['SSL','TLS','Security'],pricing:'ฟรี',difficulty:'ปานกลาง',type:'SSL Analyzer'},
    {name:'SSL Shopper',url:'https://www.sslshopper.com/ssl-checker.html',color:'c-pink',desc:'ตรวจ SSL Certificate, Chain และวันหมดอายุ',tags:['SSL','Certificate','Chain'],pricing:'ฟรี',difficulty:'ง่าย',type:'SSL Checker'},
    {name:'DigiCert Tools',url:'https://www.digicert.com/help/',color:'c-pink',desc:'SSL Checker, CSR Decoder และ Certificate Tools',tags:['SSL','DigiCert','CSR'],pricing:'ฟรี',difficulty:'ง่าย',type:'SSL Tools'},
    {name:'CRT.sh',url:'https://crt.sh',color:'c-pink',desc:'ค้น Certificate Transparency Logs ของโดเมน',tags:['CT Log','Certificate','SSL'],pricing:'ฟรี',difficulty:'ปานกลาง',type:'CT Log Search'},
    {name:'HackerTarget SSL',url:'https://hackertarget.com/ssl-check/',color:'c-pink',desc:'ตรวจ SSL Certificate และข้อมูลเบื้องต้น',tags:['SSL','Certificate'],pricing:'ฟรี',difficulty:'ง่าย',type:'SSL Checker'},
    {name:'HackerTarget Zone',url:'https://hackertarget.com/zone-transfer/',color:'c-pink',desc:'ทดสอบ DNS Zone Transfer สำหรับโดเมนที่มีสิทธิ์ตรวจสอบ',tags:['DNS','AXFR','Zone Transfer'],pricing:'ฟรี',difficulty:'ปานกลาง',type:'Security Test'},
    {name:'TestSSL.sh Online',url:'https://dev.ssllabs.com/ssltest/',color:'c-pink',desc:'SSL Labs Dev Instance สำหรับทดสอบ TLS/SSL',tags:['SSL','TLS','Dev'],pricing:'ฟรี',difficulty:'ปานกลาง',type:'SSL Test'},
    {name:'SSL2Buy Checker',url:'https://www.ssl2buy.com/ssl-checker',color:'c-pink',desc:'ตรวจ SSL Certificate หลายโดเมนและวันหมดอายุ',tags:['SSL','Multi-domain','Expiry'],pricing:'ฟรี',difficulty:'ง่าย',type:'SSL Checker'}
  ]}
];

const FUNCTION_DOCS=[
  {name:'buildNav()',purpose:'สร้างเมนูด้านซ้ายจากข้อมูล PAGES และเพิ่มแท็บ “ฟังก์ชันระบบ” ต่อท้าย',steps:['วนหมวดหมู่ทั้งหมด','สร้าง .nav-item ของแต่ละหมวด','เพิ่มเมนูฟังก์ชันระบบพร้อม badge จำนวนฟังก์ชัน']},
  {name:'selectPage(index)',purpose:'เลือกหมวดหมู่ Network Tools จากเมนูด้านซ้าย',steps:['ตั้ง currentView เป็น tools','อัปเดต currentPageIndex','เปลี่ยน title/subtitle','เรียก renderGrid()']},
  {name:'selectFunctionPage()',purpose:'เปิดแท็บ “ฟังก์ชันระบบ” จากเมนูด้านซ้าย',steps:['ตั้ง currentView เป็น functions','เปลี่ยนหัวข้อหน้า','แสดงการ์ดคำอธิบายฟังก์ชันทั้งหมด']},
  {name:'renderGrid()',purpose:'แสดงการ์ดเครื่องมือในหมวดที่เลือก',steps:['อ่าน tools จากหมวดปัจจุบัน','สร้าง tool-card','ผูก onclick ไปที่ openDetail()']},
  {name:'renderFunctionPage()',purpose:'แสดงหน้าอธิบายฟังก์ชันทั้งหมดในพื้นที่ Grid หลัก',steps:['เปลี่ยน layout เป็น function-grid','วน FUNCTION_DOCS','สร้างการ์ดชื่อฟังก์ชัน จุดประสงค์ และขั้นตอน']},
  {name:'openDetail(toolIndex)',purpose:'เปิดหน้า Detail ของเครื่องมือที่เลือก',steps:['บันทึก currentToolIndex','ซ่อน Grid','แสดง Detail Panel','เรียก renderInfo() และ renderFunctionDocs()']},
  {name:'renderInfo()',purpose:'สร้างแท็บรายละเอียดของเครื่องมือ',steps:['แสดงชื่อเว็บ URL คำอธิบาย tags','แสดงราคา ประเภท และความยาก','สร้างปุ่มเปิดเว็บจริง']},
  {name:'switchTab(tab)',purpose:'เปลี่ยนแท็บ รายละเอียด / ฟังก์ชัน / เปิดเว็บ ภายในหน้า Detail',steps:['ลบ active ทุกแท็บ','เพิ่ม active ให้แท็บที่เลือก','ถ้าเป็น iframe จะโหลด URL ด้วย loadIframe()']},
  {name:'renderFunctionDocs()',purpose:'สร้างแท็บคำอธิบายฟังก์ชันในหน้า Detail',steps:['อ่าน FUNCTION_DOCS','สร้างการ์ดคำอธิบาย','ใส่ลงใน #function-docs']},
  {name:'loadIframe(url)',purpose:'โหลดเว็บเครื่องมือใน iframe',steps:['ตั้ง currentUrl','แสดง loading','กำหนด iframe.src','ถ้าเกิน 8 วินาทีจะแสดงข้อความอาจถูกบล็อก']},
  {name:'iframeLoaded()',purpose:'ทำงานหลัง iframe โหลดเสร็จ',steps:['หยุด timer','ซ่อน loading','แสดง iframe']},
  {name:'openCurrentTool()',purpose:'เปิดเว็บของเครื่องมือปัจจุบัน',steps:['ถ้าอยู่หน้า functions จะไม่เปิดเว็บ','ถ้าเลือก tool แล้วเปิด currentUrl','ถ้ายังไม่เลือก เปิด tool แรกของหมวด']},
  {name:'openInNewTab()',purpose:'เปิด URL ปัจจุบันในแท็บใหม่',steps:['ใช้ window.open(currentUrl, _blank, noopener)']},
  {name:'reloadIframe()',purpose:'โหลด iframe ซ้ำ',steps:['เรียก loadIframe(currentUrl) ใหม่']},
  {name:'backToGrid()',purpose:'กลับจาก Detail ไปหน้า Grid',steps:['reset currentToolIndex','เรียก showGridView()','คืน title เป็นชื่อหมวด']},
  {name:'showGridView()',purpose:'ตัวช่วยแสดงหน้า Grid',steps:['แสดง grid-wrap','ซ่อน detail-panel','ซ่อนปุ่มกลับ']}
];

let currentPageIndex=0;
let currentToolIndex=null;
let currentUrl='';
let currentView='tools';
const $=(id)=>document.getElementById(id);

function buildNav(){
  const nav=$('nav-list');
  const toolItems=PAGES.map((page,index)=>`
    <div class="nav-item ${currentView==='tools'&&index===currentPageIndex?'active':''}" onclick="selectPage(${index})">
      <span class="nav-icon">${ICONS[page.icon]||'•'}</span>
      <span class="nav-label">${page.label}</span>
      <span class="nav-badge">${page.tools.length}</span>
    </div>`).join('');
  const functionItem=`
    <div class="nav-item ${currentView==='functions'?'active':''}" onclick="selectFunctionPage()">
      <span class="nav-icon">${ICONS.function}</span>
      <span class="nav-label">ฟังก์ชันระบบ</span>
      <span class="nav-badge">${FUNCTION_DOCS.length}</span>
    </div>`;
  nav.innerHTML=toolItems+functionItem;
}

function selectPage(index){
  currentView='tools';
  currentPageIndex=index;
  currentToolIndex=null;
  const page=PAGES[index];
  $('page-title').textContent=page.label;
  $('page-sub').textContent=page.sub;
  $('grid-category-label').textContent=`${page.label} (${page.tools.length} tools)`;
  buildNav();
  showGridView();
  renderGrid();
}

function selectFunctionPage(){
  currentView='functions';
  currentToolIndex=null;
  currentUrl='';
  $('page-title').textContent='ฟังก์ชันระบบ';
  $('page-sub').textContent='คำอธิบายฟังก์ชัน JavaScript ทั้งหมดของ Dashboard นี้';
  $('grid-category-label').textContent=`ฟังก์ชันระบบ (${FUNCTION_DOCS.length} functions)`;
  buildNav();
  showGridView();
  renderFunctionPage();
}

function renderGrid(){
  const page=PAGES[currentPageIndex];
  $('tools-grid').className='grid';
  $('tools-grid').innerHTML=page.tools.map((tool,index)=>`
    <article class="tool-card" onclick="openDetail(${index})">
      <div class="tool-top">
        <div class="tool-icon ${tool.color}">${ICONS[page.icon]||'•'}</div>
        <button class="btn ghost tool-open" onclick="event.stopPropagation();openDetail(${index});switchTab('iframe')">เปิด</button>
      </div>
      <div class="tool-name">${tool.name}</div>
      <div class="tool-desc">${tool.desc}</div>
      <div class="tool-url">${tool.url.replace(/^https?:\/\//,'')}</div>
    </article>`).join('');
}

function renderFunctionPage(){
  $('tools-grid').className='function-grid';
  $('tools-grid').innerHTML=FUNCTION_DOCS.map(fn=>`
    <article class="function-card">
      <code>${fn.name}</code>
      <p>${fn.purpose}</p>
      <ul>${fn.steps.map(step=>`<li>${step}</li>`).join('')}</ul>
    </article>`).join('');
}

function openDetail(toolIndex){
  currentToolIndex=toolIndex;
  const tool=PAGES[currentPageIndex].tools[toolIndex];
  currentUrl=tool.url;
  $('grid-wrap').hidden=true;
  $('detail-panel').hidden=false;
  $('btn-back').hidden=false;
  $('page-title').textContent=tool.name;
  $('page-sub').textContent=tool.desc;
  renderInfo();
  renderFunctionDocs();
  switchTab('info');
}

function renderInfo(){
  const page=PAGES[currentPageIndex];
  const tool=page.tools[currentToolIndex];
  $('info-content').innerHTML=`
    <div class="hero">
      <div class="hero-icon ${tool.color}">${ICONS[page.icon]||'•'}</div>
      <div>
        <h2>${tool.name}</h2>
        <div class="hero-url">${tool.url}</div>
        <div class="tags">${tool.tags.map(tag=>`<span class="tag">${tag}</span>`).join('')}</div>
      </div>
    </div>
    <div class="info-section"><h3>คำอธิบาย</h3><p>${tool.desc}</p></div>
    <div class="meta-grid">
      <div class="meta"><span>ประเภท</span><b>${tool.type}</b></div>
      <div class="meta"><span>ราคา</span><b>${tool.pricing}</b></div>
      <div class="meta"><span>ความยาก</span><b>${tool.difficulty}</b></div>
      <div class="meta"><span>หมวด</span><b>${page.label}</b></div>
    </div>
    <div class="info-section" style="margin-top:18px"><h3>แนวทางใช้งาน</h3>
      <ul>
        <li>กดแท็บ “เปิดเว็บ” เพื่อทดลองเปิดผ่าน iframe ใน Dashboard</li>
        <li>ถ้าเว็บไม่แสดง ให้กด “Tab ใหม่” เพราะบางเว็บบล็อก iframe</li>
        <li>ใช้กับ Domain/IP/ระบบที่คุณมีสิทธิ์ตรวจสอบเท่านั้น</li>
      </ul>
    </div>
    <button class="btn primary" onclick="openInNewTab()">เปิดเว็บจริง ↗</button>`;
}

function switchTab(tab){
  ['info','functions','iframe'].forEach(name=>{
    $('tab-'+name).classList.toggle('active',name===tab);
    $('tab-'+name+'-btn').classList.toggle('active',name===tab);
  });
  if(tab==='iframe'&&currentUrl&&$('main-iframe').src==='about:blank')loadIframe(currentUrl);
}

function renderFunctionDocs(){
  $('function-docs').innerHTML=FUNCTION_DOCS.map(fn=>`
    <div class="function-card">
      <code>${fn.name}</code>
      <p>${fn.purpose}</p>
      <ul>${fn.steps.map(step=>`<li>${step}</li>`).join('')}</ul>
    </div>`).join('');
}

function loadIframe(url){
  currentUrl=url;
  $('iframe-url-display').textContent=url;
  $('iframe-loading').hidden=false;
  $('iframe-blocked').hidden=true;
  $('main-iframe').style.display='block';
  $('main-iframe').src=url;
  clearTimeout(window.iframeTimer);
  window.iframeTimer=setTimeout(()=>{
    if(!$('iframe-loading').hidden){
      $('iframe-loading').hidden=true;
      $('main-iframe').style.display='none';
      $('iframe-blocked').hidden=false;
    }
  },8000);
}

function iframeLoaded(){
  clearTimeout(window.iframeTimer);
  $('iframe-loading').hidden=true;
  $('main-iframe').style.display='block';
}

function openCurrentTool(){
  if(currentView==='functions')return;
  if(currentToolIndex===null){
    const first=PAGES[currentPageIndex].tools[0];
    window.open(first.url,'_blank','noopener');
    return;
  }
  openInNewTab();
}

function openInNewTab(){
  if(currentUrl)window.open(currentUrl,'_blank','noopener');
}

function reloadIframe(){
  if(currentUrl)loadIframe(currentUrl);
}

function backToGrid(){
  currentToolIndex=null;
  showGridView();
  const page=PAGES[currentPageIndex];
  $('page-title').textContent=page.label;
  $('page-sub').textContent=page.sub;
}

function showGridView(){
  $('grid-wrap').hidden=false;
  $('detail-panel').hidden=true;
  $('btn-back').hidden=true;
}

buildNav();
selectPage(0);

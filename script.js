const ICONS={mail:'✉',scan:'▣',topology:'⌬',shield:'◈',world:'◎',bolt:'ϟ',map:'⌖',cert:'▤',function:'☰'};

const PAGES=[
  {id:'dns',label:'DNS & Email',icon:'mail',color:'c-blue',sub:'DNS, Blacklist, SMTP, SPF, DKIM, DMARC',tools:[
    t('MXToolbox','https://mxtoolbox.com','DNS Lookup, Blacklist, SMTP Test ครบวงจร',['DNS','Blacklist','SMTP','Email'],'ฟรี / มี Pro','ง่าย','Web Tool','ใช้ตรวจสุขภาพ DNS และระบบอีเมล เช่น MX, SPF, DKIM, DMARC, SMTP และ Blacklist'),
    t('DNSChecker','https://dnschecker.org','ตรวจสอบ DNS Propagation จากหลายประเทศทั่วโลก',['DNS','Propagation','Global'],'ฟรี','ง่าย','DNS Tool','ใช้ดูว่า DNS ที่แก้ไข เช่น A, MX, CNAME, TXT กระจายไปทั่วโลกแล้วหรือยัง'),
    t('Mail Tester','https://www.mail-tester.com','ทดสอบคะแนนความน่าเชื่อถือของ Email และ Spam Score',['Email','SPF','DKIM','DMARC'],'ฟรีจำกัดครั้ง','ง่าย','Email Tester','ใช้ส่งอีเมลทดสอบแล้วดูคะแนนว่าอีเมลมีโอกาสเข้า Inbox หรือ Spam'),
    t('DMARC Inspector','https://dmarcian.com/dmarc-inspector/','วิเคราะห์ DMARC Record และอธิบาย Policy แบบอ่านง่าย',['DMARC','Email Security','DNS'],'ฟรี','ปานกลาง','DNS Analyzer','ใช้ตรวจ DMARC policy เช่น p=none/quarantine/reject และที่อยู่อีเมลรับ report'),
    t('SPF Validator','https://www.kitterman.com/spf/validate.html','ตรวจสอบ Syntax และ Lookup Count ของ SPF Record',['SPF','Email','DNS'],'ฟรี','ปานกลาง','DNS Validator','ใช้ดูว่า SPF เขียนถูกไหม และ lookup เกิน limit 10 ครั้งหรือไม่'),
    t('Ping.eu','https://ping.eu','รวม Ping, Traceroute, WHOIS, DNS Lookup และ Port Check',['Ping','DNS','WHOIS'],'ฟรี','ง่าย','Network Tools','ใช้ทดสอบ network พื้นฐานจากภายนอก เช่น ping, trace, whois และ port'),
    t('MXToolbox SMTP','https://mxtoolbox.com/diagnostic.aspx','ทดสอบ SMTP Server แบบ Step-by-step',['SMTP','Email','Diagnostic'],'ฟรี','ปานกลาง','SMTP Tester','ใช้ตรวจว่า mail server ติดต่อได้ไหม มี TLS ไหม และตอบ SMTP ถูกต้องหรือไม่'),
    t('EasyDMARC','https://easydmarc.com/tools/dmarc-lookup','วิเคราะห์ DMARC, DKIM, SPF, MX และ Blacklist',['DMARC','DKIM','SPF'],'ฟรี','ง่าย','Email Security','ใช้รวมเครื่องมือ email security หลายตัวไว้ในที่เดียว')
  ]},
  {id:'portscan',label:'Port Scan & WHOIS',icon:'scan',color:'c-orange',sub:'Port Scan, Traceroute, WHOIS, Nmap ออนไลน์',tools:[
    t('HackerTarget Nmap','https://hackertarget.com/nmap-online-port-scanner/','Online Nmap Port Scanner สำหรับตรวจพอร์ตจากภายนอก',['Nmap','Port Scan','Security'],'ฟรี','ปานกลาง','Port Scanner','ใช้สแกนพอร์ตที่เปิดของ Server จากมุมมอง Internet'),
    t('PortChecker.co','https://portchecker.co','ตรวจสอบว่า Port ของ IP หรือ Server เปิดจากภายนอกหรือไม่',['Port','Firewall','Network'],'ฟรี','ง่าย','Port Checker','ใช้เช็ก firewall rule หรือ port forwarding ว่าปล่อยพอร์ตสำเร็จไหม'),
    t('WHOIS Lookup','https://www.whois.com/whois/','ค้นหาข้อมูล Domain, IP, Registrar, Name Server และวันหมดอายุ',['WHOIS','Domain','IP'],'ฟรี','ง่าย','WHOIS','ใช้ดูเจ้าของโดเมน registrar nameserver วันจดทะเบียน และวันหมดอายุ'),
    t('Traceroute.org','https://www.traceroute.org','รวม Looking Glass สำหรับ Ping, Traceroute และ BGP จากหลาย ISP',['Traceroute','BGP','Looking Glass'],'ฟรี','ปานกลาง','Network','ใช้ตรวจเส้นทาง packet จาก network หรือ ISP หลายแห่งทั่วโลก'),
    t('Shodan','https://www.shodan.io','Search Engine สำหรับอุปกรณ์และ Service ที่เชื่อมต่อ Internet',['IoT','Security','Search'],'ฟรีจำกัด','ปานกลาง','Security Search','ใช้ค้นหา service/device ที่ expose บน Internet และดู banner/version'),
    t('HackerTarget WHOIS','https://hackertarget.com/whois-lookup/','WHOIS และ Reverse IP Lookup สำหรับงานตรวจสอบโดเมน/IP',['WHOIS','Reverse IP'],'ฟรี','ง่าย','WHOIS / Recon','ใช้ดู whois และ domain ที่อาจอยู่บน IP เดียวกัน'),
    t('YouGetSignal','https://www.yougetsignal.com/tools/open-ports/','ตรวจ Open Port และ Reverse IP Lookup',['Port','Reverse IP'],'ฟรี','ง่าย','Port Checker','ใช้ตรวจพอร์ตแบบเร็วและดู reverse IP ของ hosting'),
    t('Network-Tools.com','https://network-tools.com','รวม WHOIS, Traceroute, Ping, DNS และ HTTP Header Check',['Network','Ping','WHOIS'],'ฟรี','ง่าย','Network Toolbox','ใช้เป็นชุดเครื่องมือ network diagnostic พื้นฐานในหน้าเดียว')
  ]},
  {id:'asn',label:'ASN / BGP / IX',icon:'topology',color:'c-purple',sub:'ASN Lookup, BGP Route, Prefix, Internet Exchange',tools:[
    t('BGP.he.net','https://bgp.he.net','Hurricane Electric BGP Toolkit ดู ASN, Prefix, Peer และ IX',['ASN','BGP','Routing'],'ฟรี','ปานกลาง','BGP Toolkit','ใช้วิเคราะห์ ASN, prefix, peer, upstream/downstream และ internet exchange'),
    t('IPinfo.io','https://ipinfo.io','ดูข้อมูล IP, ASN, ISP, Geolocation และ Privacy Detection',['IP','ASN','Geolocation'],'ฟรี / API','ง่าย','IP Intelligence','ใช้ดูว่า IP เป็นของ ISP/องค์กรไหน อยู่ประเทศไหน และเป็น VPN/proxy ไหม'),
    t('BGPView','https://bgpview.io','BGP Route, Prefix, ASN, Upstream และ Downstream Explorer',['ASN','BGP','Prefix'],'ฟรี','ง่าย','BGP Explorer','ใช้ดู route, prefix, AS path และความสัมพันธ์ของ provider'),
    t('PeeringDB','https://www.peeringdb.com','ฐานข้อมูล Internet Exchange, Facility และ Peering Policy',['IX','Peering','BGP'],'ฟรี','ปานกลาง','Peering Database','ใช้ดูว่า network เชื่อมต่อ IX ไหน มี policy peering แบบใด'),
    t('RIPE Stat','https://stat.ripe.net','ดูสถิติ BGP, RIR Data, RPKI และ Route History',['RIPE','BGP','Statistics'],'ฟรี','สูง','RIR Data','ใช้ดูข้อมูลเชิงลึกของ IP/ASN เช่น history, RPKI, abuse contact'),
    t('ARIN WHOIS','https://search.arin.net/rdap/','ค้นหา IP Address และ ASN Registry สำหรับโซนอเมริกา',['ARIN','WHOIS','IP Registry'],'ฟรี','ง่าย','IP Registry','ใช้ตรวจข้อมูล registry ของ IP/ASN ในเขต ARIN'),
    t('RouteViews','https://www.routeviews.org','ดู Global BGP Routing Table จาก Route Collector',['BGP','Route','Academic'],'ฟรี','สูง','BGP Collector','ใช้ดู routing table จริงจาก collector หลายจุดทั่วโลก'),
    t('AS Rank','https://asrank.caida.org','จัดอันดับ ASN และดู Provider/Customer Relationship',['ASN','Rank','Research'],'ฟรี','ปานกลาง','BGP Research','ใช้ดูขนาดและความสำคัญของ ASN จาก customer cone')
  ]},
  {id:'ipleak',label:'IP / DNS / WebRTC Leak',icon:'shield',color:'c-red',sub:'ตรวจสอบ IP Leak, DNS Leak, WebRTC Leak',tools:[
    t('ipleak.net','https://ipleak.net','ตรวจ IP, DNS, WebRTC และ Torrent IP Leak',['VPN','DNS Leak','WebRTC'],'ฟรี','ง่าย','Privacy Test','ใช้ตรวจว่า IP จริงหรือ DNS จริงรั่วออกไปเมื่อใช้ VPN หรือ proxy หรือไม่'),
    t('BrowserLeaks','https://browserleaks.com','ตรวจ Browser Fingerprint, WebRTC, Canvas, WebGL และ Font Leak',['Browser','Fingerprint','Privacy'],'ฟรี','ปานกลาง','Browser Privacy','ใช้ดูข้อมูลที่ browser เปิดเผยและใช้ fingerprint ระบุตัวตน'),
    t('DNS Leak Test','https://www.dnsleaktest.com','ทดสอบ DNS Leak แบบ Standard และ Extended',['DNS','VPN','Leak'],'ฟรี','ง่าย','DNS Test','ใช้ดูว่า DNS query ออกผ่าน DNS ของ VPN หรือหลุดไปที่ ISP'),
    t('WhatIsMyIPAddress','https://whatismyipaddress.com','ดู Public IP, ISP, Location, Hostname และ Blacklist Status',['IP','ISP','Geolocation'],'ฟรี','ง่าย','IP Lookup','ใช้ดู IP ปัจจุบันและข้อมูล ISP/location แบบอ่านง่าย'),
    t('Whoer.net','https://whoer.net','ตรวจ Anonymity Score, IP, DNS, Timezone และ WebRTC',['Anonymity','VPN','Privacy'],'ฟรี','ง่าย','Privacy Score','ใช้ประเมินความเป็นส่วนตัว เช่น timezone mismatch, DNS leak, WebRTC leak'),
    t('Cloudflare Help','https://1.1.1.1/help','ตรวจ 1.1.1.1, DoH, DNSSEC และ ECH/ESNI',['Cloudflare','DoH','DNS'],'ฟรี','ง่าย','DNS Checker','ใช้ตรวจว่า browser/network ใช้ Cloudflare DNS และ DoH หรือไม่'),
    t('IPLeak EU','https://www.ipleak.eu','ตรวจ IP และ DNS Leak จากมุมมอง EU Server',['IP Leak','DNS','EU'],'ฟรี','ง่าย','Privacy Test','ใช้เปรียบเทียบผล IP/DNS จาก server ในยุโรป'),
    t('DoILeak','https://www.doileak.com','ตรวจ WebRTC, Java, Flash และ Browser Information Leak',['WebRTC','Privacy','Leak'],'ฟรี','ง่าย','Leak Detector','ใช้ตรวจช่องทาง leak ของ browser หลายแบบในหน้าเดียว')
  ]},
  {id:'dnsprop',label:'DNS Propagation',icon:'world',color:'c-teal',sub:'ตรวจสอบ DNS Propagation ทั่วโลก',tools:[
    t('DNSChecker.org','https://dnschecker.org','เช็ก DNS Propagation จาก 100+ Location',['DNS','Propagation','Global'],'ฟรี','ง่าย','DNS Propagation','ใช้เช็กว่า DNS update กระจายไป resolver ทั่วโลกครบหรือยัง'),
    t('WhatsMyDNS','https://www.whatsmydns.net','ตรวจ DNS Propagation ทุก Record Type',['DNS','Records','Global'],'ฟรี','ง่าย','DNS Check','ใช้ตรวจ record หลายชนิด เช่น A, AAAA, MX, CNAME, TXT, NS, CAA'),
    t('ViewDNS.info','https://viewdns.info','รวม DNS Tools เช่น Reverse DNS, IP History, WHOIS และ Propagation',['DNS','WHOIS','IP History'],'ฟรี','ง่าย','DNS Toolbox','ใช้ตรวจ DNS, IP history, reverse IP และ report หลายแบบ'),
    t('IntoDNS','https://intodns.com','วิเคราะห์ DNS Configuration พร้อม Error และ Warning',['DNS','Config','Analysis'],'ฟรี','ปานกลาง','DNS Analyzer','ใช้ตรวจปัญหา DNS config เช่น NS, SOA, MX, glue record'),
    t('NS Lookup','https://www.nslookup.io','Online DNS Lookup รองรับหลาย Record Type',['DNS','Lookup','Records'],'ฟรี','ง่าย','DNS Lookup','ใช้ query DNS record แบบง่ายและอ่านผลเป็นระเบียบ'),
    t('DNSViz','https://dnsviz.net','Visualize DNSSEC Chain แบบกราฟิก',['DNSSEC','DNS','Graph'],'ฟรี','สูง','DNSSEC Visualizer','ใช้ debug DNSSEC trust chain และ DS/DNSKEY error'),
    t('MXToolbox DNS','https://mxtoolbox.com/DNSLookup.aspx','DNS Lookup ทุก Record Type พร้อม TTL และ Authoritative NS',['DNS','MXToolbox','TTL'],'ฟรี','ง่าย','DNS Lookup','ใช้ดูค่า DNS record และ TTL พร้อมลิงก์ไปเครื่องมืออื่น'),
    t('DNS.Watch','https://dns.watch','Public DNS Resolver ที่เน้น Privacy และ No-Log',['DNS','Privacy','Public DNS'],'ฟรี','ง่าย','Public DNS','ใช้เป็นข้อมูล reference สำหรับ public DNS ที่ไม่เน้น tracking')
  ]},
  {id:'speed',label:'Speed & Latency',icon:'bolt',color:'c-yellow',sub:'ทดสอบความเร็วอินเทอร์เน็ต, Latency, Jitter',tools:[
    t('Speedtest by Ookla','https://www.speedtest.net','วัด Download, Upload, Ping, Jitter และ Packet Loss',['Speed','Ping','Ookla'],'ฟรี','ง่าย','Speed Test','ใช้วัดความเร็ว internet มาตรฐานและเลือก server ทดสอบได้'),
    t('Fast.com','https://fast.com','Speed Test แบบง่ายโดย Netflix CDN',['Speed','Netflix','CDN'],'ฟรี','ง่าย','Speed Test','ใช้วัด download speed แบบเร็วโดยอิง Netflix CDN'),
    t('Cloudflare Speed','https://speed.cloudflare.com','วัด Speed, Latency Loaded/Unloaded, Jitter และ Packet Loss',['Cloudflare','Latency','Jitter'],'ฟรี','ง่าย','Speed Test','ใช้ดูคุณภาพเน็ตละเอียดกว่า speed test ปกติ โดยเฉพาะ latency under load'),
    t('nPerf','https://www.nperf.com','Speed Test พร้อมเปรียบเทียบ ISP และดู Coverage Map',['Speed','ISP','Map'],'ฟรี','ง่าย','ISP Test','ใช้วัด speed และเทียบคุณภาพ ISP ในพื้นที่'),
    t('Bandwidth Place','https://www.bandwidthplace.com','Speed Test ผ่าน Browser พร้อมเลือก Server ได้',['Speed','Bandwidth','Server'],'ฟรี','ง่าย','Speed Test','ใช้ทดสอบ bandwidth จาก server หลายจุด'),
    t('Measurement Lab','https://speed.measurementlab.net','Open Source NDT Speed Test สำหรับงานวิจัย',['Open Source','NDT','Research'],'ฟรี','ง่าย','Speed Test','ใช้วัด speed แบบ open data และ protocol NDT'),
    t('LibreSpeed','https://librespeed.org','HTML5 Speed Test แบบ Open Source และ Self-host ได้',['Open Source','HTML5','Self-host'],'ฟรี','ง่าย','Speed Test','ใช้ทดสอบ speed หรือเอา source ไป host เองได้'),
    t('SpeedOf.Me','https://speedof.me','HTML5 Speed Test พร้อม Graph Real-time',['HTML5','CDN','Mobile'],'ฟรี','ง่าย','Speed Test','ใช้ดูกราฟ speed แบบ real-time เหมาะกับ browser/mobile')
  ]},
  {id:'multiping',label:'Multi-location Ping',icon:'map',color:'c-green',sub:'Ping และ Traceroute จากหลายประเทศทั่วโลก',tools:[
    t('Uptrends Ping','https://www.uptrends.com/tools/ping-test','Ping จาก 220+ Location ทั่วโลก',['Ping','Global','Latency'],'ฟรี','ง่าย','Multi Ping','ใช้เช็ก latency/packet loss จากหลายเมืองทั่วโลก'),
    t('Site24x7 Ping','https://www.site24x7.com/tools/online-ping.html','Ping และ Traceroute จากหลายประเทศ',['Ping','Traceroute','Global'],'ฟรี','ง่าย','Global Ping','ใช้ดู response time จากหลายประเทศและตรวจ route เบื้องต้น'),
    t('Dotcom-Tools','https://www.dotcom-tools.com/ping-test','ทดสอบ Ping, Traceroute และ Web Performance จากหลายจุด',['Ping','Performance','Global'],'ฟรีจำกัด','ง่าย','Multi Ping','ใช้ตรวจ uptime/performance จาก checkpoint หลายประเทศ'),
    t('Ping.pe','https://ping.pe','Ping, MTR และ TCP Ping จากหลายประเทศ',['Ping','MTR','TCP'],'ฟรี','ปานกลาง','Multi Ping','ใช้ตรวจปัญหา route/packet loss ด้วย ping และ mtr'),
    t('KeyCDN Ping','https://tools.keycdn.com/ping','Ping จาก KeyCDN PoP ทั่วโลก',['CDN','Ping','Performance'],'ฟรี','ง่าย','CDN Test','ใช้ดู latency จาก node CDN หลาย region'),
    t('Globalping','https://www.jsdelivr.com/globalping','Ping และ Traceroute จาก Community Probes ทั่วโลก',['Ping','Traceroute','API'],'ฟรี','ปานกลาง','Network Probe','ใช้ทดสอบ network จาก probe หลายแห่งและต่อยอด API ได้'),
    t('CA App Synthetic','https://asm.ca.com/en/ping.php','Ping และ Monitor Response Time จากหลาย Location',['Ping','Monitor','Global'],'ฟรี','ง่าย','Monitor Ping','ใช้เช็ก response time จากจุด monitor ต่างประเทศ'),
    t('Ping.Canopy','https://ping.canopy.tools','แสดง Latency Map แบบ Visual',['Ping','Latency','Map'],'ฟรี','ง่าย','Latency Map','ใช้ดู latency ในรูปแบบแผนที่เข้าใจง่าย')
  ]},
  {id:'ssl',label:'Nmap / SSL / Zone',icon:'cert',color:'c-pink',sub:'SSL Check, Zone Transfer, Online Nmap, Certificate',tools:[
    t('SSL Labs','https://www.ssllabs.com/ssltest/','วิเคราะห์ SSL/TLS Configuration แบบละเอียดและให้ Grade',['SSL','TLS','Security'],'ฟรี','ปานกลาง','SSL Analyzer','ใช้ตรวจความแข็งแรงของ SSL/TLS, cipher, protocol และ certificate chain'),
    t('SSL Shopper','https://www.sslshopper.com/ssl-checker.html','ตรวจ SSL Certificate, Chain และวันหมดอายุ',['SSL','Certificate','Chain'],'ฟรี','ง่าย','SSL Checker','ใช้ตรวจ certificate ว่าติดตั้งถูกไหม chain ครบไหม และหมดอายุเมื่อไร'),
    t('DigiCert Tools','https://www.digicert.com/help/','SSL Checker, CSR Decoder และ Certificate Tools',['SSL','DigiCert','CSR'],'ฟรี','ง่าย','SSL Tools','ใช้ตรวจ SSL และถอด CSR/certificate สำหรับงาน certificate'),
    t('CRT.sh','https://crt.sh','ค้น Certificate Transparency Logs ของโดเมน',['CT Log','Certificate','SSL'],'ฟรี','ปานกลาง','CT Log Search','ใช้ค้นหา subdomain/certificate ที่เคยออกให้โดเมน'),
    t('HackerTarget SSL','https://hackertarget.com/ssl-check/','ตรวจ SSL Certificate และข้อมูลเบื้องต้น',['SSL','Certificate'],'ฟรี','ง่าย','SSL Checker','ใช้ดู SSL certificate แบบเร็วจากภายนอก'),
    t('HackerTarget Zone','https://hackertarget.com/zone-transfer/','ทดสอบ DNS Zone Transfer สำหรับโดเมนที่มีสิทธิ์ตรวจสอบ',['DNS','AXFR','Zone Transfer'],'ฟรี','ปานกลาง','Security Test','ใช้ตรวจว่า DNS server เปิด AXFR เสี่ยงรั่วข้อมูลหรือไม่'),
    t('TestSSL.sh Online','https://dev.ssllabs.com/ssltest/','SSL Labs Dev Instance สำหรับทดสอบ TLS/SSL',['SSL','TLS','Dev'],'ฟรี','ปานกลาง','SSL Test','ใช้ทดสอบ SSL/TLS คล้าย SSL Labs ใน instance dev'),
    t('SSL2Buy Checker','https://www.ssl2buy.com/ssl-checker','ตรวจ SSL Certificate หลายโดเมนและวันหมดอายุ',['SSL','Multi-domain','Expiry'],'ฟรี','ง่าย','SSL Checker','ใช้ตรวจวันหมดอายุและรายละเอียด certificate หลายโดเมน')
  ]}
];

function t(name,url,desc,tags,pricing,difficulty,type,help){return{name,url,desc,tags,pricing,difficulty,type,help,color:''};}

let currentPageIndex=0;
let currentToolIndex=null;
let currentUrl='';
let currentView='tools';
const $=(id)=>document.getElementById(id);

function applyColors(){PAGES.forEach(p=>p.tools.forEach(tool=>tool.color=p.color));}
function totalTools(){return PAGES.reduce((sum,p)=>sum+p.tools.length,0);}
function getUseCase(tool){return tool.help||tool.desc;}
function getTabDoc(tool){return[
  `รายละเอียด: แสดงชื่อเว็บ URL คำอธิบาย แท็ก ประเภท ราคา ความยาก และหมวดของ ${tool.name}`,
  `ฟังก์ชัน: อธิบายว่า ${tool.name} ช่วยอะไร เหมาะใช้ตอนไหน และข้อมูลแต่ละช่องหมายถึงอะไร`,
  `เปิดเว็บ: ทดลองเปิด ${tool.name} ใน iframe ถ้าเว็บบล็อกให้กด Tab ใหม่`
];}

function buildNav(){
  const nav=$('nav-list');
  const toolItems=PAGES.map((page,index)=>`
    <div class="nav-item ${currentView==='tools'&&index===currentPageIndex?'active':''}" onclick="selectPage(${index})">
      <span class="nav-icon">${ICONS[page.icon]||'•'}</span>
      <span class="nav-label">${page.label}</span>
      <span class="nav-badge">${page.tools.length}</span>
    </div>`).join('');
  const docsItem=`
    <div class="nav-item ${currentView==='functions'?'active':''}" onclick="selectFunctionPage()">
      <span class="nav-icon">${ICONS.function}</span>
      <span class="nav-label">ฟังก์ชัน Tools</span>
      <span class="nav-badge">${totalTools()}</span>
    </div>`;
  nav.innerHTML=toolItems+docsItem;
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
  $('page-title').textContent='ฟังก์ชัน Tools';
  $('page-sub').textContent='คู่มืออธิบายแต่ละเมนู แต่ละเว็บไซต์ และข้อมูลในแท็บว่าช่วยอะไร';
  $('grid-category-label').textContent=`คู่มือ Tools ทั้งหมด (${totalTools()} websites)`;
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
  const intro=`
    <article class="function-card">
      <code>ภาพรวมหน้าเว็บ</code>
      <p>หน้านี้คือคู่มืออธิบายว่าเมนูด้านซ้ายแต่ละหมวดคืออะไร เว็บไซต์แต่ละตัวช่วยอะไร และข้อมูลในแท็บใช้ทำอะไร</p>
      <ul>
        <li>เมนูด้านซ้าย = หมวดเครื่องมือ Network</li>
        <li>การ์ด = เว็บไซต์เครื่องมือที่ใช้ตรวจสอบจริง</li>
        <li>badge ตัวเลข = จำนวนเว็บไซต์ในหมวดนั้น</li>
      </ul>
    </article>`;
  const categoryCards=PAGES.map(page=>`
    <article class="function-card">
      <code>${ICONS[page.icon]||'•'} ${page.label}</code>
      <p>${page.sub}</p>
      <ul>
        <li>มี ${page.tools.length} เว็บไซต์ในหมวดนี้</li>
        <li>เหมาะสำหรับ: ${describeCategory(page.id)}</li>
        <li>คลิกเมนูนี้เพื่อดูการ์ดเว็บไซต์ทั้งหมดในหมวด</li>
      </ul>
    </article>`).join('');
  const toolCards=PAGES.flatMap(page=>page.tools.map(tool=>`
    <article class="function-card">
      <code>${tool.name}</code>
      <p><b>ช่วยอะไร:</b> ${getUseCase(tool)}</p>
      <ul>
        <li><b>อยู่ในเมนู:</b> ${page.label}</li>
        <li><b>ประเภท:</b> ${tool.type}</li>
        <li><b>ราคา:</b> ${tool.pricing}</li>
        <li><b>ความยาก:</b> ${tool.difficulty}</li>
        <li><b>ข้อมูลในแท็บ:</b> รายละเอียด / ฟังก์ชัน / เปิดเว็บ</li>
      </ul>
    </article>`)).join('');
  $('tools-grid').innerHTML=intro+categoryCards+toolCards;
}

function describeCategory(id){
  const map={dns:'ตรวจ DNS และระบบ Email',portscan:'ตรวจ WHOIS, Port, Nmap และเส้นทาง Network',asn:'วิเคราะห์ ASN, BGP, Prefix และ Internet Exchange',ipleak:'ตรวจ IP Leak, DNS Leak, WebRTC และ Privacy',dnsprop:'ตรวจ DNS Propagation จากหลายประเทศ',speed:'วัด Speed, Latency, Jitter และ Packet Loss',multiping:'Ping/Traceroute จากหลาย location ทั่วโลก',ssl:'ตรวจ SSL/TLS, Certificate และ Zone Transfer'};
  return map[id]||'Network Tools';
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
    <div class="info-section"><h3>ช่วยอะไร</h3><p>${getUseCase(tool)}</p></div>
    <div class="meta-grid">
      <div class="meta"><span>ประเภท</span><b>${tool.type}</b></div>
      <div class="meta"><span>ราคา</span><b>${tool.pricing}</b></div>
      <div class="meta"><span>ความยาก</span><b>${tool.difficulty}</b></div>
      <div class="meta"><span>หมวด</span><b>${page.label}</b></div>
    </div>
    <div class="info-section" style="margin-top:18px"><h3>ข้อมูลในหน้านี้หมายถึงอะไร</h3>
      <ul>
        <li><b>ชื่อเว็บ:</b> เครื่องมือภายนอกที่ใช้ตรวจสอบ Network</li>
        <li><b>URL:</b> ลิงก์ปลายทางของเว็บไซต์จริง</li>
        <li><b>Tags:</b> คีย์เวิร์ดบอกว่าเว็บนี้เด่นเรื่องอะไร</li>
        <li><b>ประเภท:</b> กลุ่มการใช้งาน เช่น WHOIS, DNS Lookup, Speed Test</li>
        <li><b>ราคา:</b> ใช้ฟรีหรือมีข้อจำกัด/แผน Pro</li>
        <li><b>ความยาก:</b> ระดับความเข้าใจที่ต้องใช้ก่อนอ่านผล</li>
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
  const page=PAGES[currentPageIndex];
  const tool=page.tools[currentToolIndex];
  $('function-docs').innerHTML=`
    <div class="function-card">
      <code>${page.label}</code>
      <p><b>เมนูนี้ช่วยอะไร:</b> ${describeCategory(page.id)}</p>
      <ul>
        <li>เป็นหมวดเครื่องมือด้านซ้าย</li>
        <li>มี ${page.tools.length} เว็บในหมวดนี้</li>
        <li>ใช้แยกประเภทงาน Network ให้หาเว็บง่ายขึ้น</li>
      </ul>
    </div>
    <div class="function-card">
      <code>${tool.name}</code>
      <p><b>เว็บไซต์นี้ช่วยอะไร:</b> ${getUseCase(tool)}</p>
      <ul>
        <li><b>URL:</b> ${tool.url}</li>
        <li><b>ประเภท:</b> ${tool.type}</li>
        <li><b>Tags:</b> ${tool.tags.join(', ')}</li>
      </ul>
    </div>
    <div class="function-card">
      <code>แท็บในหน้านี้</code>
      <p>อธิบายว่าแต่ละแท็บใช้ทำอะไรเมื่อกดเข้ามาที่ ${tool.name}</p>
      <ul>${getTabDoc(tool).map(item=>`<li>${item}</li>`).join('')}</ul>
    </div>
    <div class="function-card">
      <code>ข้อควรรู้เรื่อง iframe</code>
      <p>บางเว็บอาจไม่ยอมแสดงในกรอบ iframe เพราะตั้งค่าความปลอดภัยไว้</p>
      <ul>
        <li>ถ้า iframe โหลดไม่ขึ้น ให้กด Tab ใหม่</li>
        <li>การเปิดใน Tab ใหม่คือการไปยังเว็บจริงโดยตรง</li>
        <li>ควรใช้เครื่องมือกับระบบหรือโดเมนที่มีสิทธิ์ตรวจสอบเท่านั้น</li>
      </ul>
    </div>`;
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

function openInNewTab(){if(currentUrl)window.open(currentUrl,'_blank','noopener');}
function reloadIframe(){if(currentUrl)loadIframe(currentUrl);}
function backToGrid(){currentToolIndex=null;showGridView();if(currentView==='functions'){selectFunctionPage();return;}const page=PAGES[currentPageIndex];$('page-title').textContent=page.label;$('page-sub').textContent=page.sub;}
function showGridView(){$('grid-wrap').hidden=false;$('detail-panel').hidden=true;$('btn-back').hidden=true;}

applyColors();
buildNav();
selectPage(0);

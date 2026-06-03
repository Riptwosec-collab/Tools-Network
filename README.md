# ⌘ NetTools Pro

> รวมเครื่องมือ Network สำหรับ DNS, WHOIS, BGP, IP Leak, Speed Test และ Network Diagnostics ในที่เดียว

🌐 **Live Demo:** [tools-network.vercel.app](https://tools-network.vercel.app)

---

## ✨ Features

- 🌐 **DNS Tools** — Lookup, Propagation Check, DIG, Health Analysis
- 🔍 **WHOIS / Domain** — Registrar Info, History, Reverse Lookup
- 🗺️ **BGP / Routing** — ASN, Prefix, Peering, Route Map
- 📡 **IP / Geolocation** — Info, Reputation, Shodan
- 🛡️ **IP Leak / Privacy** — WebRTC Leak, DNS Leak, Browser Fingerprint
- ⚡ **Speed Test** — Ookla, Netflix Fast, Cloudflare
- 🔧 **Network Diagnostics** — Ping, Traceroute, NSLookup
- 🔐 **SSL / Certificates** — TLS Grade, Cert Transparency, Security Headers
- 🚪 **Port Scanner** — Open Port Check, Nmap Online
- 📧 **Email / SPF / DKIM** — DMARC, Mail Score, Blacklist

---

## 🚀 Getting Started

เว็บไซต์นี้เป็น **Static HTML** ไม่ต้องติดตั้งอะไร เพียงแค่เปิดไฟล์ `index.html` หรือ deploy ขึ้น Static Host

```bash
# Clone repo
git clone https://github.com/Riptwosec-collab/Tools-Network.git
cd Tools-Network

# เปิดใน browser โดยตรง
open index.html

# หรือใช้ Live Server (VS Code extension)
# หรือ Python simple server
python3 -m http.server 8080
```

---

## 📁 Project Structure

```
Tools-Network/
├── index.html      # หน้าหลัก (HTML + Meta + SEO)
├── style.css       # Styles (Dark/Light mode, Responsive)
├── script.js       # Logic (Categories, Tools, Search, Favorites)
└── README.md       # เอกสารนี้
```

---

## 🎨 UI Features

| Feature | รายละเอียด |
|---|---|
| 🌙 Dark / Light Mode | Toggle ได้ทุกเมื่อ จำค่าไว้ใน localStorage |
| 📱 Responsive | Mobile-friendly พร้อม Hamburger menu |
| 🔍 Search | ค้นหาเครื่องมือได้ทันที (Ctrl+K) |
| ⭐ Favorites | เพิ่ม/ลบ เครื่องมือโปรดได้ |
| 📋 Copy URL | คัดลอก URL ของเครื่องมือได้ด้วย 1 คลิก |
| 🖼️ iFrame Viewer | เปิดเครื่องมือได้ภายในแอป |
| ⌨️ Keyboard Shortcuts | `Ctrl+K` = ค้นหา, `Esc` = ปิด/ล้างค้นหา |

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl` + `K` | เปิด Search |
| `Esc` | ปิด Sidebar (mobile) / ล้างค้นหา |

---

## 🛠️ Tech Stack

- **HTML5** — Semantic markup + Meta SEO + Open Graph
- **CSS3** — Custom Properties, CSS Grid, Flexbox, Responsive
- **Vanilla JavaScript** — No dependencies, No frameworks
- **Deployed on Vercel** — Auto deploy จาก GitHub

---

## 🤝 Contributing

1. Fork repo นี้
2. สร้าง branch ใหม่: `git checkout -b feature/add-new-tool`
3. เพิ่มเครื่องมือใหม่ใน `TOOLS` array ของ `script.js`
4. Commit: `git commit -m 'feat: add XYZ tool'`
5. Push: `git push origin feature/add-new-tool`
6. เปิด Pull Request

### เพิ่มเครื่องมือใหม่

แก้ไข `script.js` ในส่วน `TOOLS` array:

```js
{ 
  id: 't99',           // unique ID
  cat: 'dns',          // category id
  icon: '🌐',          // emoji icon
  name: 'ชื่อเครื่องมือ',
  url: 'https://...',  // URL จริง
  desc: 'คำอธิบาย',
  tags: ['dns','tag2'],
  functions: ['Feature 1','Feature 2']
}
```

---

## 📄 License

MIT License — ใช้งานฟรี ทั้งส่วนตัวและเชิงพาณิชย์

---

<p align="center">Made with ❤️ by <a href="https://github.com/Riptwosec-collab">Riptwosec-collab</a></p>

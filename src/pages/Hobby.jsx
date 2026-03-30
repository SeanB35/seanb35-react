import React, { useState, useEffect } from 'react';
import useDocumentTitle from '../components/useDocumentTitle';
import { Link } from 'react-router-dom';

/* The hobby page is fully self-contained with its own inline styles and tab logic. */
const hobbyStyles = `
/* ===== RESET & BASE ===== */
.hobby-page *, .hobby-page *::before, .hobby-page *::after { margin:0; padding:0; box-sizing:border-box; }
.hobby-page { --bg-deep:#050505; --bg-surface:#111111; --bg-card:#1a1a1a; --accent:#00e676; --accent-dim:#00a854; --heading:#ffffff; --text:#e0e0e0; --text-muted:#888888; --border:#2a2a2a; --border-hover:#444444; --radius:6px; font-family:'Inter',system-ui,sans-serif; background:var(--bg-deep); color:var(--text); line-height:1.7; min-height:100vh; display:flex; flex-direction:column; }
.hobby-page header { position:sticky; top:0; z-index:100; background:var(--bg-deep); border-bottom:1px solid var(--border); padding:0 2rem; }
.hobby-page header .header-inner { max-width:1200px; margin:0 auto; display:flex; align-items:center; justify-content:space-between; padding:1rem 0; flex-wrap:wrap; gap:0.75rem; }
.hobby-page header h1 { font-size:1.5rem; font-weight:700; color:var(--heading); letter-spacing:-0.02em; }
.hobby-page header h1 span { font-family:'Fira Code',monospace; font-weight:400; font-size:0.85em; color:var(--accent); }
.hobby-page .hobby-nav { display:flex; align-items:center; gap:0; flex-wrap:wrap; }
.hobby-page .hobby-nav a { color:var(--text-muted); text-decoration:none; font-weight:600; font-size:0.9rem; padding:0.5rem 0.75rem; border-radius:var(--radius); position:relative; cursor:pointer; }
.hobby-page .hobby-nav a:hover, .hobby-page .hobby-nav a.active { color:var(--accent); background:rgba(0,230,118,0.08); }
.hobby-page .hobby-nav a.active::after { content:''; position:absolute; bottom:0; left:25%; width:50%; height:2px; background:var(--accent); border-radius:1px; }
.hobby-page .hobby-nav .divider { color:var(--border); font-size:0.7rem; user-select:none; padding:0 0.15rem; }
.hobby-page main { flex:1; max-width:1200px; margin:0 auto; padding:2.5rem 2rem 4rem; width:100%; }
.hobby-page section { display:none; }
.hobby-page section.visible { display:block; }
.hobby-page h2 { font-size:2.25rem; font-weight:700; margin-bottom:1.25rem; color:var(--heading); letter-spacing:-0.03em; border-left:4px solid var(--accent); padding-left:0.75rem; }
.hobby-page h3 { font-size:1.25rem; color:var(--accent); margin:1.5rem 0 0.75rem; font-weight:600; }
.hobby-page p { margin-bottom:1rem; color:var(--text); }
.hobby-page a { color:var(--accent); text-decoration:none; }
.hobby-page a:hover { color:var(--heading); text-decoration:underline; }
.hobby-page .content-block { background:var(--bg-surface); border:1px solid var(--border); border-radius:var(--radius); padding:1.75rem; margin-bottom:1.5rem; }
.hobby-page .content-block:hover { border-color:var(--border-hover); }
.hobby-page ul, .hobby-page ol { margin:0.5rem 0 1rem 1.5rem; color:var(--text); }
.hobby-page li { margin-bottom:0.5rem; }
.hobby-page li::marker { color:var(--accent); }
.hobby-page table { width:100%; border-collapse:collapse; margin:1rem 0 1.5rem; font-size:0.92rem; }
.hobby-page thead th { background:var(--bg-card); color:var(--accent); text-align:left; padding:0.75rem 1rem; font-weight:600; text-transform:uppercase; font-size:0.8rem; letter-spacing:0.06em; border-bottom:2px solid var(--accent-dim); }
.hobby-page thead th:first-child { border-radius:var(--radius) 0 0 0; }
.hobby-page thead th:last-child { border-radius:0 var(--radius) 0 0; }
.hobby-page tbody td { padding:0.75rem 1rem; border-bottom:1px solid var(--border); }
.hobby-page tbody tr:hover { background:var(--bg-card); }
.hobby-page figure { margin:2rem 0; background:var(--bg-surface); border-radius:var(--radius); overflow:hidden; border:1px solid var(--border); }
.hobby-page figure:hover { border-color:var(--border-hover); }
.hobby-page figure img { width:100%; height:auto; display:block; object-fit:cover; max-height:420px; }
.hobby-page figcaption { padding:1rem 1.25rem 0.25rem; font-weight:600; color:var(--heading); font-size:0.95rem; }
.hobby-page figure .ai-prompt { padding:0.25rem 1.25rem 1rem; font-size:0.82rem; color:var(--text-muted); font-style:italic; line-height:1.5; }
.hobby-page .feature-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:1.25rem; margin:1rem 0 1.5rem; }
.hobby-page .feature-card { background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius); padding:1.5rem; }
.hobby-page .feature-card:hover { border-color:var(--accent-dim); }
.hobby-page .feature-card .icon { font-size:2rem; margin-bottom:0.75rem; display:block; }
.hobby-page .feature-card h4 { color:var(--accent); font-size:1rem; margin-bottom:0.5rem; }
.hobby-page .feature-card p { font-size:0.88rem; color:var(--text-muted); margin-bottom:0; }
.hobby-page .tag { display:inline-block; background:var(--bg-card); color:var(--accent); font-size:0.78rem; font-weight:600; padding:0.25rem 0.65rem; border:1px solid var(--border); border-radius:3px; margin:0.15rem 0.25rem 0.15rem 0; }
.hobby-page footer { background:var(--bg-surface); border-top:1px solid var(--border); padding:3rem 2rem; text-align:center; }
.hobby-page footer .footer-inner { max-width:1200px; margin:0 auto; display:flex; flex-direction:column; align-items:center; }
.hobby-page footer .firm { font-size:0.9rem; color:var(--text-muted); margin-bottom:1.5rem; }
.hobby-page footer .firm a { color:var(--accent); font-weight:600; text-decoration:none; }
.hobby-page footer .firm a:hover { text-decoration:underline; }
.hobby-page footer .validation-links { display:flex; justify-content:center; gap:0.75rem; flex-wrap:wrap; }
.hobby-page footer .v-btn { font-family:'Fira Code',monospace; font-size:0.75rem; font-weight:600; text-transform:uppercase; padding:0.4rem 1rem; border:1px solid var(--border); border-radius:var(--radius); color:var(--text-muted); text-decoration:none; background:var(--bg-deep); }
.hobby-page footer .v-btn:hover { color:var(--accent); border-color:var(--accent); background:rgba(0,230,118,0.05); }
@media(max-width:768px){ .hobby-page header .header-inner{flex-direction:column;text-align:center;} .hobby-page .hobby-nav{justify-content:center;} .hobby-page h2{font-size:1.75rem;} .hobby-page main{padding:1.5rem 1rem 3rem;} .hobby-page figure img{max-height:260px;} }
`;

function Hobby() {
    useDocumentTitle('Home Labbing & Open Source');
    const [activeSection, setActiveSection] = useState('what');

    const handleNav = (e, sectionId) => {
        e.preventDefault();
        setActiveSection(sectionId);
    };

    const sections = ['what', 'who', 'when', 'where', 'how', 'why'];
    const labels = ['Home', 'Who', 'When', 'Where', 'How', 'Why'];

    return (
        <div className="hobby-page">
            <style>{hobbyStyles}</style>

            <header>
                <div className="header-inner">
                    <h1><span>&gt;_</span> Home Labbing</h1>
                    <nav className="hobby-nav" id="main-nav">
                        {sections.map((sec, i) => (
                            <React.Fragment key={sec}>
                                {i > 0 && <span className="divider">◈</span>}
                                <a href={`#${sec}`} className={activeSection === sec ? 'active' : ''} onClick={(e) => handleNav(e, sec)}>{labels[i]}</a>
                            </React.Fragment>
                        ))}
                    </nav>
                </div>
            </header>

            <main>
                {/* WHAT */}
                <section id="what" className={activeSection === 'what' ? 'visible' : ''}>
                    <h2>What Is Home Labbing?</h2>
                    <div className="content-block">
                        <p>Home labbing is the hobby of setting up your own servers and networking gear at home. It's a way to take control of your data and learn IT skills without needing a professional server room.</p>
                        <p>My setup runs simple but useful tools, things like personal cloud storage, home automation, and network security. If there's a service I use daily, I try to see if I can host it myself first.</p>
                        <p>It's mostly a "learn by doing" project. It's about the satisfaction of building something from scratch, troubleshooting the weird bugs that pop up, and finally getting everything to work correctly.</p>
                    </div>
                    <div className="feature-grid">
                        <div className="feature-card"><span className="icon">🖥️</span><h4>Self-Hosting</h4><p>Run your own email, cloud storage, password manager, and more — no third-party lock-in.</p></div>
                        <div className="feature-card"><span className="icon">🔒</span><h4>Security Research</h4><p>Spin up honeypots, IDS/IPS systems, and VPN tunnels to understand threats hands-on.</p></div>
                        <div className="feature-card"><span className="icon">🧪</span><h4>Experimentation</h4><p>Test bleeding-edge software, new Linux distros, and container orchestration without risk to production.</p></div>
                    </div>
                    <figure>
                        <img src="/images/homelab_hero.png" alt="A home server lab with glowing blue LEDs and organized cabling" />
                        <figcaption>The Heart of the Lab — Rack-Mounted &amp; Ready</figcaption>
                        <p className="ai-prompt"><em>AI Prompt: "A wide-angle photograph of a home server lab setup in a dimly lit room. Multiple rack-mounted servers with glowing blue and cyan LED lights, organized ethernet cables, network switches, and a small monitor displaying a terminal dashboard. Cyberpunk-inspired cool blue and magenta ambient lighting. High quality, editorial photography style."</em></p>
                    </figure>
                </section>

                {/* WHO */}
                <section id="who" className={activeSection === 'who' ? 'visible' : ''}>
                    <h2>Who Are Home Labbers?</h2>
                    <div className="content-block">
                        <p>The home lab community is a mix of students, IT professionals, and hobbyists. Whether someone is learning for a future career or just tinkering as a nighttime project, everyone is just trying to figure out how technology works under the hood.</p>
                        <p>It's a very helpful group. Communities like <a href="https://reddit.com/r/homelab">r/homelab</a> have over a million members who share configurations and help each other troubleshoot technical issues at all hours of the night.</p>
                        <p>At the end of the day, we're the kind of people who see an old piece of office hardware at a thrift store or e-waste bin and think about how we could repurpose it for something cool at home.</p>
                    </div>
                    <h3>Community Skill Spectrum</h3>
                    <table><thead><tr><th>Level</th><th>Typical Setup</th><th>Favorite Tool</th></tr></thead><tbody>
                        <tr><td>Beginner</td><td>Raspberry Pi, old laptop</td><td>Pi-hole, Portainer</td></tr>
                        <tr><td>Intermediate</td><td>Mini PC cluster, managed switch</td><td>Proxmox, Ansible</td></tr>
                        <tr><td>Advanced</td><td>Full rack, 10GbE, redundant storage</td><td>Kubernetes, Terraform</td></tr>
                        <tr><td>Architect</td><td>Multi-site, BGP peering, own ASN</td><td>Custom tooling, eBPF</td></tr>
                    </tbody></table>
                    <div className="content-block"><h3>The Cable Management Obsession</h3><p>Ask any home labber what they're most proud of, and chances are it's their cable management. Custom-length patch cables, Velcro wraps, labeled runs, it's part engineering, part art, and entirely satisfying.</p></div>
                    <figure>
                        <img src="/images/homelab_person.png" alt="A tech enthusiast working on a Raspberry Pi at a neon-lit desk" />
                        <figcaption>The Tinkerer — Where Every Project Starts</figcaption>
                        <p className="ai-prompt"><em>AI Prompt: "Portrait-style photo of an enthusiastic tech hobbyist sitting at a desk surrounded by Raspberry Pi boards, hard drives, and networking equipment. Warm neon lighting from monitors in the background. Cyberpunk-inspired color palette with cyan and magenta tones. Editorial photography."</em></p>
                    </figure>
                </section>

                {/* WHEN */}
                <section id="when" className={activeSection === 'when' ? 'visible' : ''}>
                    <h2>When Did Home Labbing Start?</h2>
                    <div className="content-block">
                        <p>Home labbing has roots stretching back to the early days of personal computing. In the 1990s, enthusiasts ran mail servers on ISDN lines and compiled Linux kernels from tarballs downloaded overnight. The movement was niche, expensive, and gloriously chaotic.</p>
                        <p>The 2010s brought a revolution: cheap single-board computers like the Raspberry Pi, the rise of Docker and container technology, and an explosion of free, open-source software that turned a $35 credit-card-sized computer into a legitimate server. Suddenly, everyone could have a lab.</p>
                        <p>Today, we live in the golden age. Off-lease enterprise hardware is dirt cheap, virtualization is mature, and infrastructure-as-code means you can version-control your entire lab setup in Git.</p>
                    </div>
                    <h3>A Brief Timeline</h3>
                    <ul>
                        <li><strong>1990s</strong> — Early adopters run LAMP stacks on repurposed desktops. FTP servers and IRC bots abound.</li>
                        <li><strong>2000s</strong> — VMware Workstation and VirtualBox enable multi-OS experimentation on a single machine.</li>
                        <li><strong>2012</strong> — Raspberry Pi launches; the barrier to entry drops to the cost of a pizza.</li>
                        <li><strong>2013–2015</strong> — Docker explodes; home labs become containerized micro-datacenters.</li>
                        <li><strong>2017–2020</strong> — Kubernetes at home becomes real with K3s; GitOps enters the hobbyist lexicon.</li>
                        <li><strong>2021–Present</strong> — Proxmox, TrueNAS, and Tailscale make enterprise-grade setups trivially accessible.</li>
                    </ul>
                    <div className="content-block"><h3>The Off-Lease Gold Rush</h3><p>One of the biggest catalysts was the flood of decommissioned enterprise hardware hitting the secondary market. Dell PowerEdge R720s, HP ProLiant DL380s, machines that once cost $15,000+ now sell for under $200. This democratized serious computing power for hobbyists worldwide.</p></div>
                    <figure>
                        <img src="/images/homelab_timeline.png" alt="Isometric timeline showing the evolution of home computing technology" />
                        <figcaption>From Beige Boxes to Blinky Racks — A Visual History</figcaption>
                        <p className="ai-prompt"><em>AI Prompt: "An isometric illustration of a timeline showing the evolution of home computing and server technology from the 1990s to 2020s. Each era shows miniaturized server rooms getting progressively smaller and more powerful. Dark background with neon cyan and magenta accent colors, clean vector art style."</em></p>
                    </figure>
                </section>

                {/* WHERE */}
                <section id="where" className={activeSection === 'where' ? 'visible' : ''}>
                    <h2>Where Do We Lab?</h2>
                    <div className="content-block">
                        <p>Anywhere with power and an ethernet drop, or even just Wi-Fi. The classic home lab lives in a spare bedroom closet, a garage shelf, or a purpose-built network rack tucked under the stairs. Some of us have dedicated rooms; others run the entire operation from a single NUC on the desk.</p>
                        <p>Location matters because of heat, noise, and power. A full 42U rack with dual Xeon servers can sound like a jet engine and heat a room by 10°F. Smart labbers plan for ventilation, power distribution, and UPS backup from day one.</p>
                        <p>Increasingly, home labs extend into the cloud. Hybrid setups connect on-premises hardware to cloud VMs via WireGuard or Tailscale tunnels, giving labbers the best of both worlds: local performance and cloud reach.</p>
                    </div>
                    <h3>Common Lab Locations</h3>
                    <table><thead><tr><th>Location</th><th>Pros</th><th>Cons</th></tr></thead><tbody>
                        <tr><td>Spare Closet</td><td>Out of sight, contained</td><td>Poor ventilation, limited space</td></tr>
                        <tr><td>Garage / Basement</td><td>Space, noise isolation</td><td>Temperature extremes, dust</td></tr>
                        <tr><td>Desktop Mini-Lab</td><td>Quiet, energy-efficient</td><td>Limited expansion</td></tr>
                        <tr><td>Hybrid (On-Prem + Cloud)</td><td>Flexibility, redundancy</td><td>Monthly cloud costs</td></tr>
                    </tbody></table>
                    <div className="content-block"><h3>Open Source Champions</h3><p>Many home labbers are also prolific open-source contributors. We package our Ansible playbooks, Docker Compose stacks, and Terraform modules for the community. If we solved a problem, we want you to never have to fight the same battle.</p></div>
                    <figure>
                        <img src="/images/homelab_space.png" alt="Organized home office with server rack and monitoring dashboards" />
                        <figcaption>A Perfectly Organized Lab — Goals Achieved</figcaption>
                        <p className="ai-prompt"><em>AI Prompt: "A beautifully organized home office and server closet with a network rack, cable management, UPS backup, and a desk with multiple monitors showing Grafana dashboards and Proxmox virtual machines. Neon ambient lighting with cyan and purple tones. High-quality interior photography."</em></p>
                    </figure>
                </section>

                {/* HOW */}
                <section id="how" className={activeSection === 'how' ? 'visible' : ''}>
                    <h2>How Is It All Built?</h2>
                    <div className="content-block">
                        <p>A modern home lab is built in layers, much like a production environment. At the base is the physical infrastructure, servers, switches, and storage. On top of that sits the hypervisor (Proxmox, ESXi, or even just KVM), which carves the hardware into virtual machines and containers.</p>
                        <p>Configuration management tools like Ansible and Terraform ensure that every VM, container, and network rule is defined as code, versioned in Git, and reproducible. If the lab burns down tomorrow, we can rebuild it from a repo.</p>
                        <p>Monitoring is non-negotiable. A typical stack includes Prometheus for metrics collection, Grafana for dashboards, Loki for log aggregation, and Uptime Kuma for service health checks. If something goes down at 3 AM, we know about it before the coffee is brewed.</p>
                    </div>
                    <h3>The Typical Stack</h3>
                    <div className="feature-grid">
                        <div className="feature-card"><span className="icon">⚙️</span><h4>Hypervisor</h4><p>Proxmox VE, ESXi, or XCP-ng, the foundation that makes everything else possible.</p></div>
                        <div className="feature-card"><span className="icon">🐳</span><h4>Containers</h4><p>Docker, Podman, and K3s for lightweight, reproducible service deployments.</p></div>
                        <div className="feature-card"><span className="icon">📊</span><h4>Monitoring</h4><p>Prometheus + Grafana + Loki for complete observability across every layer.</p></div>
                        <div className="feature-card"><span className="icon">🛡️</span><h4>Networking</h4><p>OPNsense or pfSense firewall, VLANs, WireGuard VPN, and Pi-hole DNS filtering.</p></div>
                        <div className="feature-card"><span className="icon">💾</span><h4>Storage</h4><p>TrueNAS with ZFS, mirrored pools, snapshots, and replication for data safety.</p></div>
                        <div className="feature-card"><span className="icon">🤖</span><h4>Automation</h4><p>Ansible playbooks and Terraform modules, all tracked in Git for full reproducibility.</p></div>
                    </div>
                    <figure>
                        <img src="/images/homelab_architecture.png" alt="Network architecture diagram showing home lab components" />
                        <figcaption>The Architecture</figcaption>
                        <p className="ai-prompt"><em>AI Prompt: "A detailed infographic-style illustration showing the architecture of a home lab network: firewall, router, switches, VLANs, NAS storage, hypervisor, Docker containers, and a monitoring stack. Dark navy background with glowing cyan connection lines and magenta accent nodes. Clean, modern technical diagram style."</em></p>
                    </figure>
                </section>

                {/* WHY */}
                <section id="why" className={activeSection === 'why' ? 'visible' : ''}>
                    <h2>Why Do We Do This?</h2>
                    <div className="content-block">
                        <p>Because learning by reading documentation is one thing, but <strong>learning by destroying your DNS at 2 AM and having to fix it</strong> is another level entirely. Home labbing provides a safe sandbox where mistakes are cheap and the lessons are permanent.</p>
                        <p>Every certification we study for, CCNA, CKA, AWS Solutions Architect, becomes tangible when we can lab it out on real hardware. Theory becomes muscle memory. Diagrams become running systems.</p>
                        <p>And then there's the open-source angle. We believe that knowledge should be free and tools should be accessible. When we build something useful, a monitoring template, a backup script, a network diagram generator, we publish it. We write the README. We answer the issues. We build in the open.</p>
                    </div>
                    <h3>The Core Motivations</h3>
                    <ol>
                        <li><strong>Career Acceleration</strong> — Hands-on experience with production-grade tools makes interviews and on-the-job work dramatically easier.</li>
                        <li><strong>Digital Sovereignty</strong> — We own our data. Our email, our files, our passwords, no third-party has the keys.</li>
                        <li><strong>Community Impact</strong> — Every open-source contribution, blog post, and forum answer makes the next person's journey smoother.</li>
                        <li><strong>Pure Joy</strong> — There is a deep, incomparable satisfaction in watching green LEDs blink in sync on a cluster you built from scratch.</li>
                    </ol>
                    <div className="content-block">
                        <h3>Open Source: The Ethos</h3>
                        <p>We don't just use open-source software, we live by open-source principles. Transparency, collaboration, and giving back are baked into the culture. Our dotfiles are public. Our Ansible roles are on GitHub. Our blog posts include the mistakes, not just the victories.</p>
                        <div style={{ marginTop: '1rem' }}>
                            <span className="tag">Linux</span>
                            <span className="tag">Docker</span>
                            <span className="tag">Kubernetes</span>
                            <span className="tag">Ansible</span>
                            <span className="tag">Terraform</span>
                            <span className="tag">Proxmox</span>
                            <span className="tag">ZFS</span>
                            <span className="tag">WireGuard</span>
                            <span className="tag">Grafana</span>
                            <span className="tag">Pi-hole</span>
                        </div>
                    </div>
                    <figure>
                        <img src="/images/homelab_community.png" alt="Open-source community meetup with developers collaborating" />
                        <figcaption>Building in the Open — Together</figcaption>
                        <p className="ai-prompt"><em>AI Prompt: "An inspiring wide shot of an open-source community meetup, with laptops open showing GitHub repositories and code. A large screen in the background displays a pull request being merged. Warm atmosphere with ambient cyan and magenta lighting. Documentary photography style, diverse group of developers collaborating."</em></p>
                    </figure>
                </section>
            </main>

            <footer>
                <div className="validation-links">
                    <a href="https://validator.w3.org/check?uri=referer" className="v-btn">HTML5</a>
                    <a href="https://jigsaw.w3.org/css-validator/check/referer" className="v-btn">CSS3</a>
                    <a href="https://wave.webaim.org/report#/https://webpages.charlotte.edu/sbrigant/itis3135/hobby" className="v-btn">WCAG</a>
                </div>
                <p>Page designed by <Link to="/seanbdesigns">Sean B Designs</Link> | Certified Super Beaver Architect &copy; 2026</p>
            </footer>
        </div>
    );
}

export default Hobby;

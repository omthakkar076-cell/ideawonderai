"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Menu, X, Sparkles } from "lucide-react";

const services = [
  ["SEO / AI Search", "/services/seo-ai-search", "Search visibility across Google and AI discovery"],
  ["Social Media Marketing", "/services/social-media-marketing", "Build a memorable brand and community"],
  ["Performance Marketing", "/services/performance-marketing", "Turn paid media into measurable acquisition"],
  ["Lead Generation", "/services/lead-generation", "Attract and qualify better opportunities"],
  ["Business Automation", "/services/business-automation", "Connect workflows and scale operations"]
];

export function SiteHeader() {
  const [desktopOpen, setDesktopOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const pathname = usePathname();
  useEffect(() => { setDesktopOpen(false); setMobileOpen(false); setMobileServices(false); }, [pathname]);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") { setDesktopOpen(false); setMobileOpen(false); } };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return <header className="site-header">
    <div className="nav-shell">
      <div className="brand-lockup">
        <Link href="/" className="brand" aria-label="IdeaWonder AI home"><img className="brand-logo" src="/brand/ideawonder-logo-horizontal.png" alt="IdeaWonder AI" width="250" height="85" /></Link>
        <span className="brand-tagline">IMAGINE MORE. GROW SMARTER.</span>
      </div>
      <nav className="desktop-nav" aria-label="Main navigation">
        <div className="nav-dropdown">
          <button className={`nav-link nav-trigger ${desktopOpen ? "is-open" : ""}`} type="button" aria-expanded={desktopOpen} onClick={() => setDesktopOpen(!desktopOpen)}>Service <ArrowDown size={14}/></button>
          {desktopOpen && <div className="mega-menu">
            <div className="mega-intro"><span className="mega-kicker"><Sparkles size={13}/> THE IDEAWONDER ECOSYSTEM</span><h3>One connected system.<br/><em>More ways to grow.</em></h3><p>Explore the capabilities that help your business get discovered, acquire customers and scale smarter.</p><Link href="/contact" className="mega-cta">Find your growth path <ArrowUpRight size={15}/></Link></div>
            <div className="mega-list">{services.map(([name, href, desc], i) => <Link key={href} href={href} className="mega-item"><span className="mega-number">0{i+1}</span><span className="mega-copy"><b>{name}</b><small>{desc}</small></span><ArrowUpRight className="mega-arrow" size={17}/></Link>)}</div>
          </div>}
        </div>
        <Link className={`nav-link ${pathname === "/case-study" ? "active" : ""}`} href="/case-study">Case Study</Link>
        <Link className={`nav-link ${pathname.startsWith("/blogs") ? "active" : ""}`} href="/blogs">Blog</Link>
        <Link className="nav-contact" href="/contact">Contact Us <ArrowUpRight size={15}/></Link>
      </nav>
      <button className="mobile-toggle" aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X size={22}/> : <Menu size={22}/>}</button>
    </div>
    {mobileOpen && <div className="mobile-menu">
      <button className="mobile-menu-parent" onClick={() => setMobileServices(!mobileServices)} aria-expanded={mobileServices}>Service <ArrowDown size={15}/></button>
      {mobileServices && <div className="mobile-submenu">{services.map(([name, href]) => <Link key={href} href={href}>{name}<ArrowUpRight size={15}/></Link>)}</div>}
      <Link href="/case-study">Case Study</Link><Link href="/blogs">Blog</Link><Link href="/contact" className="mobile-contact">Contact Us <ArrowUpRight size={15}/></Link>
    </div>}
  </header>;
}

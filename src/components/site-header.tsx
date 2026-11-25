"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";

const services = [
  ["SEO / AI Search", "/services/seo-ai-search"],
  ["Social Media Marketing", "/services/social-media-marketing"],
  ["Performance Marketing", "/services/performance-marketing"],
  ["Lead Generation", "/services/lead-generation"],
  ["Business Automation", "/services/business-automation"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link href="/" className="brand" aria-label="IdeaWonder AI home" onClick={() => setOpen(false)}>
          <img className="brand-logo" src="/brand/ideawonder-logo-horizontal.png" alt="IdeaWonder AI" width="250" height="85" loading="eager" decoding="async" />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <div className="nav-dropdown">
            <button className="nav-link nav-trigger" type="button" aria-expanded={open} onClick={() => setOpen(!open)}>Service <ChevronDown size={15} className={open ? "rotate" : ""} /></button>
            {open && <div className="mega-menu"><div className="mega-list">{services.map(([name, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="mega-item"><b>{name}</b><ArrowUpRight size={16}/></Link>)}</div></div>}
          </div>
          <Link className="nav-link" href="/case-study">Case Study</Link>
          <Link className="nav-link" href="/blogs">Blog</Link>
          <Link className="nav-link" href="/contact">Contact Us</Link>
        </nav>
        <button className="mobile-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      </div>
      {open && <div className="mobile-menu">
        <button className="mobile-menu-parent" onClick={() => setMobileServices(!mobileServices)}>Service <ChevronDown size={16}/></button>
        {mobileServices && <div className="mobile-submenu">{services.map(([name, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{name}<ArrowUpRight size={15}/></Link>)}</div>}
        <Link href="/case-study" onClick={() => setOpen(false)}>Case Study</Link>
        <Link href="/blogs" onClick={() => setOpen(false)}>Blog</Link>
        <Link href="/contact" onClick={() => setOpen(false)}>Contact Us</Link>
      </div>}
    </header>
  );
}

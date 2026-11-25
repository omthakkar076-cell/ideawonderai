import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
const serviceLinks = [["SEO / AI Search", "/services/seo-ai-search"], ["Social Media Marketing", "/services/social-media-marketing"], ["Performance Marketing", "/services/performance-marketing"], ["Lead Generation", "/services/lead-generation"], ["Business Automation", "/services/business-automation"]];
export function SiteFooter() { return <footer className="site-footer">
  <div className="footer-glow"/><div className="footer-main container">
    <div className="footer-brand-col">
      <div className="footer-brand-lockup"><Link href="/" className="footer-brand"><img src="/brand/ideawonder-logo-horizontal.png" alt="IdeaWonder AI" width="232" height="54"/></Link></div>
      <p>An AI-first growth and automation agency helping B2B businesses strengthen digital visibility, acquire customers and scale operations through intelligent marketing and automation.</p>
    </div>
    <div className="footer-col"><h4>EXPLORE</h4><Link href="/">Home</Link><Link href="/case-study">Case Study</Link><Link href="/blogs">Blog & Insights</Link><Link href="/contact">Contact Us</Link></div>
    <div className="footer-col"><h4>OUR EXPERTISE</h4>{serviceLinks.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</div>
    <div className="footer-contact"><span className="footer-eyebrow">LET’S CONNECT</span><h3>Have a growth challenge worth exploring?</h3><Link className="footer-link" href="/contact">Build Your Growth Strategy <ArrowUpRight size={16}/></Link></div>
  </div><div className="footer-bottom container"><span>© {new Date().getFullYear()} IdeaWonder AI. All rights reserved.</span><span>AI-powered marketing. Measurable acquisition. Intelligent automation.</span><Link href="/contact">Start a conversation <ArrowRight size={14}/></Link></div>
</footer>; }

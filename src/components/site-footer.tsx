import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
const serviceLinks = [
  ["SEO / AI Search", "/#service-seo-ai-search"],
  ["Social Media Marketing", "/#service-social-media-marketing"],
  ["Performance Marketing", "/#service-performance-marketing"],
  ["Lead Generation", "/#service-lead-generation"],
  ["Business Automation", "/#service-business-automation"],
];
export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-main container">
      <div className="footer-brand-col">
        <Link href="/" className="brand footer-brand"><img className="footer-brand-logo" src="/brand/ideawonder-logo-horizontal.png" alt="IdeaWonder AI" width="300" height="102" loading="eager" decoding="async" /></Link>
        <p>AI-first digital marketing and business automation for ambitious B2B businesses.</p>
        <span className="footer-tagline">Imagine More. Market Smarter. Grow Faster.</span>
      </div>
      <div className="footer-col"><h4>Explore</h4><Link href="/">Home</Link><Link href="/#insights">Blog & Insights</Link><Link href="/#start-conversation">Contact Us</Link></div>
      <div className="footer-col"><h4>Our Expertise</h4>{serviceLinks.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>
      <div className="footer-contact"><span className="eyebrow">LET’S CONNECT</span><h3>Have a growth challenge worth exploring?</h3><Link className="footer-link" href="/#start-conversation">Build Your Growth Strategy <ArrowUpRight size={16}/></Link></div>
    </div>
    <div className="footer-bottom container"><span>© {new Date().getFullYear()} IdeaWonder AI. All rights reserved.</span><span>AI-powered marketing. Measurable acquisition. Intelligent automation.</span></div>
  </footer>;
}

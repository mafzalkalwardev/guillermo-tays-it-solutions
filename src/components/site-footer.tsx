import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { business } from "@/config/business";

const policies = [["Privacy Policy", "/privacy"], ["Terms & Conditions", "/terms"], ["SMS Terms", "/sms-terms"], ["Acceptable Use", "/acceptable-use"], ["Accessibility", "/accessibility"], ["Security", "/security"]] as const;

export function SiteFooter() {
  const mapUrl="https://www.openstreetmap.org/export/embed.html?bbox=-95.02%2C29.70%2C-94.93%2C29.79&layer=mapnik&marker=29.7355%2C-94.9774";
  return <footer className="site-footer modern-footer">
    <div className="footer-contact-band"><div className="shell footer-contact-grid"><div><Mail/><span>Email support</span><a href={`mailto:${business.generalEmail}`}>{business.generalEmail}</a></div><div><Phone/><span>Call our team</span><a href={`tel:${business.phone.replace(/[^+\d]/g,"")}`}>{business.phone}</a></div><div><Clock3/><span>Support hours</span><strong>Mon–Fri, 8 AM–6 PM CT</strong></div></div></div>
    <div className="shell footer-main-grid">
      <div className="footer-identity"><Link href="/" className="footer-logo"><Image src="/brand/gt-logo.png" width={70} height={70} alt="Guillermo Tays IT Solutions logo"/><span><strong>GUILLERMO TAYS</strong><small>IT SOLUTIONS</small></span></Link><p>Dependable managed IT, security support, and remote technical assistance for growing businesses and modern professionals.</p><Link className="footer-action" href="/request-service">Start a support request <ArrowUpRight/></Link></div>
      <div className="footer-links"><div><h2>Explore</h2><Link href="/about">Company</Link><Link href="/services">IT Services</Link><Link href="/service-area">Service Area</Link><Link href="/support">Support</Link><Link href="/contact">Contact</Link></div><div><h2>Trust center</h2>{policies.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}<Link href="/sms-consent">SMS Consent</Link></div></div>
      <div className="footer-location"><div className="map-heading"><MapPin/><div><span>Public mailing address</span><strong>{business.address}</strong></div></div><iframe title="Map showing the Baytown, Texas service location area" src={mapUrl} loading="lazy" referrerPolicy="no-referrer"/><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address)}`} target="_blank" rel="noreferrer">Open address in maps <ArrowUpRight/></a></div>
    </div>
    <div className="shell footer-bottom"><p>© {new Date().getFullYear()} {business.legalName}. All rights reserved.</p><p>{business.entityType} · California Entity No. {business.entityNumber}</p></div>
  </footer>;
}

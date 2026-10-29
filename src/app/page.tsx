import { ArrowRight, BadgeCheck, Cable, CheckCircle2, CloudCog, Headphones, Laptop, LockKeyhole, MapPin, MessageSquareText, Network, ServerCog, ShieldCheck, Wrench } from "lucide-react";
import { ButtonLink, Eyebrow } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { TechOrbit } from "@/components/tech-orbit";
import { SupportStatus } from "@/components/support-status";
import { business } from "@/config/business";

const serviceIcons = [ServerCog, ShieldCheck, Headphones];
const capabilities = [
  [Network, "Network visibility", "Support for business connectivity, devices, and day-to-day infrastructure."],
  [LockKeyhole, "Security hardening", "Risk-focused configuration, firewall support, patch coordination, and backup planning."],
  [CloudCog, "Remote operations", "Responsive troubleshooting and configuration for distributed teams and professionals."],
  [Laptop, "Endpoint support", "Practical help for desktops, software, user access, and common technology issues."],
] as const;

export default function Home() {
  return <>
    <section className="hero-pro">
      <div className="hero-ambient ambient-one"/><div className="hero-ambient ambient-two"/>
      <div className="shell hero-pro-grid">
        <div className="hero-pro-copy">
          <div className="availability-pill"><span/> IT support for businesses and remote professionals</div>
          <h1>Technology that works.<br/><em>Support you can reach.</em></h1>
          <p>{business.serviceBrand} is the IT-support service brand of {business.legalName}, providing managed IT services, cybersecurity support, and remote helpdesk assistance across the United States.</p>
          <div className="hero-actions"><ButtonLink href="/request-service">Request IT Support</ButtonLink><ButtonLink href="/services" secondary>Explore Services</ButtonLink></div>
          <div className="hero-trust"><div><CheckCircle2/><span><strong>No invented promises</strong>Clear service scope</span></div><div><MessageSquareText/><span><strong>Customer Care SMS</strong>No promotional texts</span></div></div>
        </div>
        <div className="hero-visual-wrap"><TechOrbit/><div className="hero-status-card"><SupportStatus/><small>{business.supportHours}</small></div></div>
      </div>
      <div className="shell hero-fact-bar"><div><span>Legal business</span><strong>{business.legalName}</strong></div><div><span>Established</span><strong>{business.formationYear}</strong></div><div><span>Entity number</span><strong>{business.entityNumber}</strong></div><div><span>Support region</span><strong>United States</strong></div></div>
    </section>

    <section className="brand-marquee" aria-label="Core service capabilities"><div className="marquee-track">{["Managed IT Services","Cybersecurity Support","Remote Helpdesk","Network Monitoring","Device Management","Backup Planning","Support Coordination","Managed IT Services","Cybersecurity Support","Remote Helpdesk"].map((item,index)=><span key={`${item}-${index}`}><BadgeCheck/>{item}</span>)}</div></section>

    <section className="section section-intro-pro"><div className="shell intro-pro-grid">
      <Reveal><Eyebrow>IT that moves with your business</Eyebrow><h2>Less technical friction.<br/>More confident work.</h2><p className="lede">From an urgent desktop issue to a longer-term security priority, we begin with the real problem, clarify the next step, and keep communication understandable.</p><ButtonLink href="/about" secondary>Meet the company</ButtonLink></Reveal>
      <Reveal delay={.12} className="intro-console"><div className="console-top"><span/><span/><span/><small>support-overview</small></div><div className="console-body"><div className="console-line"><span>01</span><Cable/><p><strong>Connect</strong>Submit your support request and preferred contact method.</p></div><div className="console-line"><span>02</span><Wrench/><p><strong>Diagnose</strong>Discuss the systems, symptoms, access, and requirements.</p></div><div className="console-line"><span>03</span><ShieldCheck/><p><strong>Resolve</strong>Receive confirmed scope, scheduling, and technical next steps.</p></div></div></Reveal>
    </div></section>

    <section className="section services-pro" id="services"><div className="shell">
      <Reveal className="section-heading-row"><div><Eyebrow>Core services</Eyebrow><h2>Complete support for<br/>everyday business technology.</h2></div><p>Focused, practical services for organizations that need dependable technology without inflated promises or unclear scope.</p></Reveal>
      <Stagger className="service-pro-grid">{business.services.map((service,index)=>{const Icon=serviceIcons[index];return <StaggerItem className={`service-pro-card service-${index+1}`} key={service.name}><div className="service-icon"><Icon/></div><span className="service-index">0{index+1}</span><h3>{service.name}</h3><p>{service.description}</p><div className="service-audience"><small>Designed for</small><span>{service.audience}</span></div><a href="/request-service">Discuss this service <ArrowRight/></a></StaggerItem>})}</Stagger>
    </div></section>

    <section className="section capability-section"><div className="shell capability-grid"><Reveal className="capability-visual"><div className="security-shield"><ShieldCheck/><span className="shield-pulse"/></div><div className="cap-label label-one"><span/>Systems</div><div className="cap-label label-two"><span/>People</div><div className="cap-label label-three"><span/>Data</div><div className="cap-orbit orbit-a"/><div className="cap-orbit orbit-b"/></Reveal><div><Reveal><Eyebrow>Built around operational reality</Eyebrow><h2>Security and support are connected.</h2><p className="lede">A stable technology environment depends on visibility, sound configuration, maintained devices, recoverable data, and people who can get help.</p></Reveal><Stagger className="capability-list">{capabilities.map(([Icon,title,text])=><StaggerItem className="capability-item" key={title}><Icon/><div><h3>{title}</h3><p>{text}</p></div></StaggerItem>)}</Stagger></div></div></section>

    <section className="section process-pro"><div className="shell"><Reveal className="section-heading-center"><Eyebrow>A straightforward support experience</Eyebrow><h2>From request to resolution.</h2><p>Every engagement begins with clear information and a confirmed next step.</p></Reveal><Stagger className="process-track">{[["01","Request","Tell us what is happening and what you need."],["02","Confirm","We acknowledge the request and contact method."],["03","Assess","We clarify systems, access, priorities, and scope."],["04","Coordinate","We confirm scheduling or the appropriate support path."],["05","Support","We communicate progress and documented next steps."]].map(([num,title,text])=><StaggerItem className="process-step-pro" key={num}><span>{num}</span><div className="process-dot"/><h3>{title}</h3><p>{text}</p></StaggerItem>)}</Stagger></div></section>

    <section className="section communication-pro"><div className="shell communication-grid"><Reveal><div className="message-device"><div className="message-device-top"><span>Customer Care</span><small>SMS</small></div><div className="message-bubble">Your IT support ticket has been updated. Our team can coordinate the next troubleshooting step.</div><div className="message-meta">Reply STOP to opt out · HELP for help</div><div className="message-safe"><ShieldCheck/>Permission-based support communication</div></div></Reveal><Reveal delay={.12}><Eyebrow>Communication on your terms</Eyebrow><h2>Useful updates.<br/>No promotional noise.</h2><p className="lede">Customers may separately choose Customer Care text messages for IT support tickets, troubleshooting coordination, and requested service information.</p><ul className="feature-checks"><li><CheckCircle2/>The consent box starts unchecked</li><li><CheckCircle2/>Consent is not a condition of purchase</li><li><CheckCircle2/>No marketing or promotional SMS</li><li><CheckCircle2/>STOP and HELP are supported</li></ul><ButtonLink href="/sms-consent">Review SMS Consent</ButtonLink></Reveal></div></section>

    <section className="section location-pro"><div className="shell location-pro-grid"><Reveal><Eyebrow>Remote reach, accountable support</Eyebrow><h2>Supporting modern work across the United States.</h2><p className="lede">Remote IT support availability is confirmed for each request based on the service, systems, location, and schedule.</p><div className="location-contact"><MapPin/><div><small>Service model</small><strong>Remote support across the United States</strong></div></div><ButtonLink href="/service-area" secondary>Explore Service Area</ButtonLink></Reveal><Reveal delay={.12} className="coverage-card"><div className="coverage-map"><span className="map-dot dot-west"/><span className="map-dot dot-central"/><span className="map-dot dot-east"/><span className="map-dot dot-texas"/><div className="coverage-lines"/></div><div className="coverage-copy"><strong>Remote-first support</strong><span>Availability confirmed per request</span></div></Reveal></div></section>

    <section className="cta-pro"><div className="shell cta-pro-inner"><div><Eyebrow>Let’s solve the next technology issue</Eyebrow><h2>Ready for clearer IT support?</h2><p>Describe what you need and choose how our team should respond.</p></div><div className="actions"><ButtonLink href="/request-service">Start a Support Request</ButtonLink><ButtonLink href="/contact" secondary>Contact Us</ButtonLink></div></div></section>
  </>;
}

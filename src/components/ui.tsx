import Link from "next/link";
import { ArrowIcon, CheckIcon } from "./icons";

export function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="eyebrow">{children}</p>; }
export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: React.ReactNode }) { return <section className="page-hero"><div className="shell narrow"><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1><p className="lede">{intro}</p></div></section>; }
export function ButtonLink({ href, children, secondary = false }: { href: string; children: React.ReactNode; secondary?: boolean }) { return <Link className={secondary ? "button button-secondary" : "button"} href={href}>{children}<ArrowIcon /></Link>; }
export function CheckItem({ children }: { children: React.ReactNode }) { return <li><span className="check"><CheckIcon /></span><span>{children}</span></li>; }
export function PolicyLayout({ title, intro, children }: { title: string; intro: string; children: React.ReactNode }) { return <><PageHero eyebrow="Legal & policy" title={title} intro={intro} /><article className="shell policy"><div className="policy-status"><strong>Effective July 15, 2026</strong><span>Last updated July 15, 2026</span></div>{children}</article></>; }

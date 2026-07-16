"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CloudCog, HardDrive, Network, ShieldCheck } from "lucide-react";
import Image from "next/image";

const nodes = [
  { icon: ShieldCheck, label: "Security", className: "orbit-node node-security" },
  { icon: Network, label: "Networks", className: "orbit-node node-network" },
  { icon: HardDrive, label: "Backups", className: "orbit-node node-backup" },
  { icon: CloudCog, label: "Remote IT", className: "orbit-node node-cloud" },
];

export function TechOrbit() {
  const reduce = useReducedMotion();
  return <div className="tech-orbit" aria-label="Managed IT service capabilities">
    <div className="orbit-grid" aria-hidden="true" />
    <motion.div className="orbit-ring orbit-ring-one" animate={reduce ? undefined : { rotate: 360 }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }} />
    <motion.div className="orbit-ring orbit-ring-two" animate={reduce ? undefined : { rotate: -360 }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }} />
    <motion.div className="orbit-center" initial={reduce ? false : { scale: .82, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: .8, ease: [0.22, 1, 0.36, 1] }}><Image src="/brand/gt-logo.png" width={150} height={150} alt="Guillermo Tays IT Solutions logo" priority /></motion.div>
    {nodes.map(({ icon: Icon, label, className }, index) => <motion.div key={label} className={className} initial={reduce ? false : { opacity: 0, scale: .7 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .35 + index * .12, duration: .5 }}><Icon /><span>{label}</span></motion.div>)}
    <div className="orbit-signal signal-one" aria-hidden="true" /><div className="orbit-signal signal-two" aria-hidden="true" />
  </div>;
}

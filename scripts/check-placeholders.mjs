import fs from "node:fs";
const file=fs.readFileSync(new URL("../src/config/business.ts",import.meta.url),"utf8");
const issues=[...file.matchAll(/\[[A-Z][A-Z0-9 _-]+\]/g)].map(x=>x[0]);
const developmentContacts=["+1 (281) 555-0147","providerReviewPending: true"].filter(x=>file.includes(x));
if(issues.length||developmentContacts.length){console.warn("\n============================================================");console.warn("PROVIDER REVIEW PENDING: final domain email is not configured.");console.warn(`Placeholders: ${[...new Set(issues)].join(", ")||"none"}`);console.warn(`Review markers: ${developmentContacts.join(", ")}`);console.warn("The site may be deployed for preview; complete ADMIN-CHECKLIST.md before carrier review.");console.warn("============================================================\n");if(process.env.ENFORCE_PRODUCTION_DETAILS==="true")process.exit(1)}

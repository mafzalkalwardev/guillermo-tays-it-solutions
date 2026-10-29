# Administrator launch checklist

This application is a working website and compliance-oriented messaging foundation, but it must not be deployed as a truthful production representation until every item below is completed.

## Business facts — required

- [x] Confirm the IT industry, three services, intended customers, service area, support hours, and Customer Care use case.
- [ ] Verify a company-controlled business address against authoritative formation, tax, and provider records before publishing it.
- [ ] Obtain and verify a company-controlled working telephone number before publishing it.
- [ ] Activate and monitor `support@`, `service@`, `privacy@`, and `sms@guillermotaysllc.com`; forwarding to the existing Gmail inbox is acceptable during launch.
- [x] Confirm the exact legal name is GUIELLERMO TAYS LLC.
- [ ] Confirm the LLC is active and in good standing in the California Secretary of State record.
- [ ] Confirm the authorized representative controls the provider account, and that legal name/address match every provider application.

## Compliance and messaging — required

- [x] Configure the stated campaign as Customer Care for support tickets, troubleshooting coordination, and direct support responses.
- [x] Remove promotional SMS from the website, consent form, and campaign description.
- [ ] Have qualified counsel review the Privacy Policy, Terms, SMS Terms, data retention, and IP-address handling.
- [ ] Confirm `/privacy`, `/terms`, `/sms-terms`, and `/sms-consent` are public without login on the production domain.
- [ ] Test consent evidence storage, export, STOP suppression, queued-marketing cancellation, HELP, and idempotent duplicate webhooks.
- [ ] Enable START/UNSTOP only when declared in the campaign registration.
- [ ] Do not claim Twilio, Vonage, The Campaign Registry, or carrier approval.

## Production operations — required

- [ ] In Cloudflare DNS, point the apex and `www` records to Vercel, then verify canonical, Open Graph, sitemap, consent source URL, and provider application URLs.
- [ ] Create a managed PostgreSQL database, run `npm run db:deploy`, and configure encrypted backups.
- [ ] Set strong production environment secrets from `.env.example`; never use `NEXT_PUBLIC_` for provider credentials.
- [ ] Put provider secrets in a managed secret store and restrict API keys to the minimum permissions.
- [ ] Configure HTTPS, provider webhook URLs, provider signature secrets, alerts, log redaction, webhook replay monitoring, and database recovery tests.
- [ ] Replace bearer-token-only consent export with the organization’s SSO/MFA-protected admin gateway; enforce role-based access.
- [ ] Run `npm run check` and perform keyboard, screen-reader, mobile, and browser testing.

## Initial A2P campaign draft

Direct business campaign for GUIELLERMO TAYS LLC. Do not classify it as an ISV/reseller unless the company actually provides messaging services to other businesses.

> GUIELLERMO TAYS LLC provides managed IT services, cybersecurity support, and remote helpdesk services through its Guillermo Tays IT Solutions service brand. This Customer Care campaign is used exclusively for one-to-one IT support ticket updates, scheduled troubleshooting coordination, requested service information, and direct responses to customer support requests. No marketing, promotional, or automated bulk messages are sent through this campaign. Recipients affirmatively opt in through the public SMS consent form. Consent records are retained, and recipients may reply STOP to opt out or HELP for assistance.

Opt-in flow: `https://guillermotaysllc.com/sms-consent`. The user enters a mobile number and affirmatively checks a separate unchecked box. Contact-form submission alone does not enroll users in recurring marketing messages.

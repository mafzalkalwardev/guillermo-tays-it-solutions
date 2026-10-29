# guillermotaysllc.com production handoff

The apex and `www` hostnames are attached to the Vercel project `guillermo-tays-it-solutions`. Vercel is waiting for DNS to point to the deployment.

## Cloudflare DNS

The domain currently uses Cloudflare nameservers. In **Cloudflare → DNS → Records**, remove conflicting apex/`www` A, AAAA, or CNAME records and add:

| Type | Name | Target | Proxy status |
| --- | --- | --- | --- |
| A | `@` | `76.76.21.21` | DNS only until Vercel verifies |
| A | `www` | `76.76.21.21` | DNS only until Vercel verifies |

After Vercel issues the TLS certificate, choose `guillermotaysllc.com` as the primary domain and redirect `www` to the apex. Do not remove existing MX/TXT email records when changing website records.

## Domain mailboxes

Create or forward these public addresses:

- `support@guillermotaysllc.com` — general support
- `service@guillermotaysllc.com` — service requests
- `privacy@guillermotaysllc.com` — privacy and compliance
- `sms@guillermotaysllc.com` — HELP, opt-out, and messaging questions

For a no-cost launch path, Cloudflare Email Routing can forward each address to `guillermotaysllc@gmail.com`. A mailbox provider such as Google Workspace or Microsoft 365 is preferable when replies must originate from the company domain. Configure SPF, DKIM, and DMARC before sending domain email.

## Form delivery

Ordinary contact and service forms use the server API and FormSubmit browser fallback, currently delivering to `guillermotaysllc@gmail.com` until domain mail is active. The first FormSubmit delivery sends an activation email; open it and approve the form once.

SMS consent and opt-out never use FormSubmit. They require PostgreSQL so the system can preserve the disclosure version, timestamp, source URL, hashed IP, consent status, and suppression history.

## Verification

After DNS propagates:

1. Open `https://guillermotaysllc.com` and confirm a valid certificate.
2. Verify `/privacy`, `/terms`, `/sms-terms`, and `/sms-consent` without login.
3. Verify `robots.txt` and `sitemap.xml` contain the production domain.
4. Submit one contact request and confirm delivery.
5. Configure PostgreSQL before testing SMS consent or opt-out.

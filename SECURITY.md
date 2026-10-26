# Security

How the Rogério Freire site handles secrets, dependencies and visitor data,
and what is known to be missing.

## Reporting a vulnerability

Email Simon Laborde at simonrl865@gmail.com. Please don't open a public issue.

## What the site is

A static Next.js site (gallery, products, about, contact): every page is
prerendered, there are no API routes, no server code that handles input, no
accounts and no database. Purchases happen over WhatsApp or email, outside the
site.

## Secrets

The site uses no secrets and no environment variables. If one is ever needed,
it goes in Vercel environment variables (or a gitignored `.env.local` for
development), never in the repo. CI scans the full git history for secrets on
every PR and push (gitleaks).

## Dependencies

- `package-lock.json` is committed; CI installs with `npm ci`. `next` and
  `eslint-config-next` are pinned to exact versions.
- CI blocks on any high or critical advisory in runtime dependencies
  (`npm audit --omit=dev --audit-level=high`); dev-only advisories are
  reported, not blocking. CodeQL (security-extended) runs on every PR.
- Dependabot opens one weekly PR for minor and patch updates and one PR for
  security updates; majors are separate PRs. Actions are pinned to commit SHAs.

## AI features

None.

## Visitor data

- **Contact form**: posts straight from the browser to Formspree
  (`formspree.io`), a third-party form service, which emails the message on.
  The site itself stores and logs nothing.
- **WhatsApp links** (`wa.me`) open the visitor's own WhatsApp with a
  pre-filled message to the artist's public business number.

## Known issues (open)

- **No security headers**: `next.config.ts` sets no Content-Security-Policy,
  `X-Frame-Options`/`frame-ancestors`, `X-Content-Type-Options` or
  `Referrer-Policy`.
- **No branch protection** on `main` yet (a repo setting: require the
  `verify`, `secret-scan` and `codeql` checks).
- The contact form has no spam protection of its own beyond Formspree's.

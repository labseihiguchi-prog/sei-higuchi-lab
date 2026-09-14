# Sei Higuchi Lab Website

Official website foundation for the Sei Higuchi Lab at St. John's University. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Local development

```bash
pnpm install --frozen-lockfile
pnpm dev
```

## Production validation

```bash
pnpm lint
pnpm build
pnpm start
```

## Vercel deployment

1. Import the GitHub repository into Vercel.
2. Keep the detected framework preset as **Next.js**.
3. Use the included `pnpm-lock.yaml`; Vercel will run the production build automatically.
4. Enable Vercel's automatically exposed system environment variables so `VERCEL_PROJECT_PRODUCTION_URL` can provide the canonical production domain.
5. For a custom canonical domain, set `NEXT_PUBLIC_SITE_URL` to the full HTTPS URL in Production and Preview environments.

No database, server credentials, or required secrets are currently used. The contact form is presentational and does not transmit submissions until a delivery service is configured.

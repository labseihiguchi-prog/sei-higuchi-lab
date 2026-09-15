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
4. The canonical production domain defaults to `https://sei-higuchi-lab.vercel.app`.
5. If the canonical domain changes, set `NEXT_PUBLIC_SITE_URL` to the full HTTPS URL in the Production environment.

No database, server credentials, or required secrets are currently used. The contact form is presentational and does not transmit submissions until a delivery service is configured.

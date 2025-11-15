# app-dashboard
NextJS application to implement better-auth for cross-site authentication.

## Project Structure
```
app-dashboard/       # Central identity provider (Better Auth + Dashboard)
├── app/
│   ├── api/
│   │   ├── auth/[...betterauth]/route.ts
│   │   └── user/route.ts
│   ├── login/page.tsx
│   ├── signup/page.tsx
│   └── dashboard/page.tsx
├── lib/
│   ├── prisma.ts
│   └── auth.ts
├── proxy.ts
└── .env
```

## Better-Auth + Neon + Next.js flow

```
┌───────────────┐
│   React UI    │
│  (authClient) │
└───────┬───────┘
        │ calls /api/auth/...
        ▼
┌───────────────────────┐
│ Next.js API           │
│ route.ts              │
│ (GET/POST)            │
│ toNextJsHandler(auth) │
└───────┬───────────────┘
        │ calls
        ▼
┌────────────────────┐
│ Better Auth        │
│ Server Logic       │
│ (lib/auth/auth.ts) │
└───────┬────────────┘
        │ uses Prisma Adapter
        ▼
┌───────────────┐
│  Prisma Client│
│  (PostgreSQL) │
└───────┬───────┘
        │ connects to
        ▼
┌───────────────┐
│  Neon DB      │
│ PostgreSQL    │
└───────────────┘
```

### Brief Summary:
Configured bnav.dev to host a developer portfolio and send transactional emails using Resend. Managed DNS records, including SPF, DKIM, and optional DMARC, using AWS Route 53 to ensure secure email delivery and domain verification.

Added CNAME to have bnav.dev route to vercel portfolio.
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

Read through a bit of RFC 6749 (https://datatracker.ietf.org/doc/html/rfc6749#section-4.1) which outlines stanards for OAuth 2.0 flow from 2012. Had AI create Markdown notes which I edited.

Read a bit of RFC 9700 (https://datatracker.ietf.org/doc/html/rfc9700#name-best-practices) [Section 2: Best Practices] which outlines the core set of security mechanisms and measures that are considered to be best practices as of January 2025. This is the most recent RFC detailing OAuth 2.0. Had AI create Markdown notes which I edited.

Researched and read Medium article about KeyCloak (https://medium.com/@david_haylock integrating-keycloak-authentication-into-a-next-js-application-46dd5de0d550). This would allow me to configure my own IDP & OIDC so I could then use better-auths SSO plugin to get full control over user authentication without relying on third-party services like Okta or Azure AD, or Auth0, which manage both. This would entirly cut out the need to pay any 3rd party (although I could use any service and likely fall within their free-tier).

Problem here is this moves the cost/trial service to a cloud-hosting platform because i'd have to host KeyCloak somewhere.

In the end, it looks like all SSO options at free tiers are limited by time (JumpCloud offers 10 users 10 devices). I can include i had it configured correctly for Auth0/Okta, but because SSO is not offered for more than 30 days, i looked for self-sufficient SSO implementation.

New approach is to move all apps to bnav.dev domain.

NextJS has something called multi-zones which may be useful (https://nextjs.org/docs/app/guides/multi-zones). This would mean merging all my nextJS projects into 1. Would need to look up organizational stuff, but i believe thats where multi-zones largely come into play.


Had this thought:
        Another option would be putting the different apps on different subdomains:

                todo.bnav.dev
                dash.bnav.dev
                login.bnav.dev
                js.bnav.dev

This means I can NOW use better-auth JWT and JKWS solution with jose. Treating login.bnav as main authenticator, and dash.bnav & todo.bnav as consumer (App B, App C) I can retry authClient.token() method.


Using AWS Route 53 added CName records for all sub domains. Had to add domains on vercel and on GitHub. All above URLS should now map to correct app!
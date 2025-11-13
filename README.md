# app-dashboard
NextJS application to implement better-auth for cross-site authentication.

## Project Structure
```
/app-dashboard/
├── app-dashboard/       # Central identity provider (Better Auth + Dashboard)
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/[...betterauth]/route.ts
│   │   │   └── user/route.ts
│   │   ├── login/page.tsx
│   │   ├── signup/page.tsx
│   │   └── dashboard/page.tsx
│   ├── lib/
│   │   ├── prisma.ts
│   │   └── auth.ts
│   ├── middleware.ts
└─  └── .env
```

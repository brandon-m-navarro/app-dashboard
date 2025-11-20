import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@/prisma/generated/prisma-client";
import { jwt } from "better-auth/plugins";
import { oidcProvider } from "better-auth/plugins/oidc-provider";

const prisma = new PrismaClient();
export const auth = betterAuth({
  baseURL: "https://login.bnav.dev",
  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "mysql", "sqlite", ...etc
  }),
  advanced: {
    crossSubDomainCookies: {
      enabled: true,
      domain: "bnav.dev", // Main domain for subdomain cookies
    },
    // useSecureCookies: true
  },
  // trustedOrigins: [
  //   "https://dash.bnav.dev",
  //   "https://todo.bnav.dev"
  // ],

  // cookies: {
  //   session: {
  //     domain: ".example.com",     // <— THIS IS WHAT MAKES SSO WORK
  //     sameSite: "lax",
  //     secure: true,
  //   }
  // },
  disabledPaths: ["/token"],
  plugins: [
    jwt({ disableSettingJwtHeader: true }),
    oidcProvider({
      loginPage: "https://login.bnav.dev/login",
      trustedClients: [
        {
          clientId: process.env.TODO_CLIENT_ID as string,
          clientSecret: process.env.TODO_CLIENT_SECRET as string,
          name: "Todo App",
          type: "web",
          redirectURLs: ["https://todo.bnav.dev/auth/callback"],
          disabled: false,
          skipConsent: true, // Skip consent for this trusted client
          metadata: { internal: true },
        },
        {
          clientId: "mobile-app",
          clientSecret: "mobile-secret",
          name: "Company Mobile App",
          type: "native",
          redirectURLs: ["com.company.app://auth"],
          disabled: false,
          skipConsent: false, // Still require consent if needed
          metadata: {},
        },
      ],
    }),
  ],
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  emailVerification: {
    sendVerificationEmail: async ({ user, url /*token*/ } /*, request*/) => {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: user.email,
          subject: user.name + ", time to verifiy your email!",
          url: url,
        }),
      });
    },
    autoSignInAfterVerification: true,
  },
});

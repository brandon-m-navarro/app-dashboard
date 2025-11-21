import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@/prisma/generated/prisma-client";
import { jwt } from "better-auth/plugins";
import { oidcProvider } from "better-auth/plugins/oidc-provider";

const prisma = new PrismaClient();

export const auth = betterAuth({
  baseURL: "https://login.bnav.dev",
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),

  advanced: {
    // Cookie sharing across subdomains
    crossSubDomainCookies: {
      enabled: true,
      domain: "bnav.dev",
    },

    // CORS for browser fetch requests
    cors: {
      allowedOrigins: [
        "https://todo.bnav.dev",
        "https://dash.bnav.dev",
        "https://admin.bnav.dev",
      ],
      allowedMethods: ["GET", "POST", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
      allowCredentials: true,
    },
    // useSecureCookies: true, // enable in production
  },

  // OAuth / JWT Provider Mode
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
          skipConsent: true,
          metadata: { internal: true },
        }
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
    sendVerificationEmail: async ({ user, url }) => {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: user.email,
          subject: `${user.name}, time to verify your email!`,
          url,
        }),
      });
    },
    autoSignInAfterVerification: true,
  },
});

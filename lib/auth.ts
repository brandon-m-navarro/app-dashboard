import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@/prisma/generated/prisma-client";
import { jwt } from "better-auth/plugins";
import { oidcProvider } from "better-auth/plugins/oidc-provider";

const prisma = new PrismaClient();
export const auth = betterAuth({
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
      // name: "login.bnav.dev",
      // issuer: "https://login.bnav.dev",
      // clientId: process.env.OIDC_CLIENT_ID as string,
      // clientSecret: process.env.OIDC_CLIENT_SECRET as string,
      // authorizationEndpoint: "https://login.bnav.dev/oauth/authorize",
      // tokenEndpoint: "https://login.bnav.dev/oauth/token",
      // userInfoEndpoint: "https://login.bnav.dev/oauth/userinfo",
      // jwksEndpoint: "https://login.bnav.dev/api/auth/jwks",
      // scopes: ["openid", "profile", "email"],
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

export const config = {
  appUrl:
    process.env.NODE_ENV === "production"
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`
      : `http://localhost:3000`,
  githubUrl: "",
};

export const siteConfig = {
  name: "portfolio-hai",
  title: "Le Hoang Hai Portfolio",
  description:
    "Le Hoang Hai Portfolio",
  url: config.appUrl,
};

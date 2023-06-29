export const getStrapiUrl = (path: string) => {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://127.0.0.1:1337/api"
  }${path}`;
};

/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_oFfN53CsYDyI@ep-polished-forest-a5xu2yxm-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require',
  }
};

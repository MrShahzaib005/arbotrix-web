import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    // Prisma CLI (db push) specifically needs the unpooled, direct connection (Port 5432)
    url: env("DIRECT_URL"), 
  },
});
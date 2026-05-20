import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

const prismaClientSingleton = () => {
  // 1. Initialize the native Postgres connection pool using your Supabase URL
  const pool = new Pool({ connectionString: process.env.DATABASE_URL })
  
  // 2. Wrap the pool in the Prisma 7 Driver Adapter
  const adapter = new PrismaPg(pool)
  
  // 3. Construct the client with the adapter instead of a raw URL
  return new PrismaClient({ adapter })
}

const globalForPrisma = globalThis

const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
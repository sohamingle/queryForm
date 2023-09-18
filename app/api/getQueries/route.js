import prisma from "@/prisma/client";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
      const queries = await prisma.query.findMany();
          return new NextResponse.json(queries);
            } catch (error) {
                console.error("Error fetching data:", error);
                    return new NextResponse.error(error.message, { status: 500 });
                      }
                      }
                      
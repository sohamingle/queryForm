import prisma from "@/prisma/client";
import { NextResponse } from "next/server";

export async function GET(req) {

    const queries = await prisma.query.findMany();
    return new NextResponse.json(queries);
    }
                      
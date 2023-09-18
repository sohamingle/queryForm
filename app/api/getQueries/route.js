import prisma from "@/prisma/client"
import { NextResponse } from "next/server"

export async function GET(req){
    const queries = await prisma.query.findMany()
    return NextResponse.json(queries)
}
import prisma from "@/prisma/client";
import { NextResponse } from "next/server";

export async function POST(req){
    const query = await req.json()
    const createdQuery = await prisma.query.create({
        data:{
            name:query.name,
            email:query.email,
            phone: query.phone,
            employeeId: query.employeeId,
            location: query.location,
            department: query.department,
            message: query.message,
        }
    })
    return NextResponse.json({message:createdQuery},{status:201})
}
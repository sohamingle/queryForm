import prisma from "@/prisma/client";
import { NextResponse } from "next/server";

export async function POST(req){
    const query = await req.json()
    const time = new Date()
    const timestamp = new Intl.DateTimeFormat("en-us",{
        dateStyle:"short",
        timeStyle:"short",
        timeZone:"Asia/Kolkata"
    }).format(time)
    const createdQuery = await prisma.query.create({
        data:{
            name:query.name,
            email:query.email,
            phone: query.phone,
            employeeId: query.employeeId,
            location: query.location,
            department: query.department,
            message: query.message,
            createdAt: timestamp,
            resolved: query.resolved
        }
    })
    return NextResponse.json({message:createdQuery},{status:201})
}

export async function PUT(req){
    const id = await req.json()
    const toggleResolved = await prisma.query.update({
        where:{
            id:id
        },
        data:{
            resolved:"Resolved"
        }
        })
    return NextResponse.json({message:toggleResolved},{status:201})
}
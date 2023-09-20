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
    const data = await req.json()
    const time = new Date()
    const timestamp = new Intl.DateTimeFormat("en-us",{
        dateStyle:"short",
        timeStyle:"short",
        timeZone:"Asia/Kolkata"
    }).format(time)
    const toggleResolved = await prisma.query.update({
        where:{
            id:data.id
        },
        data:{
            resolved:`Resolved by ${data.name} at ${timestamp}`
        }
        })
    return NextResponse.json({message:toggleResolved},{status:201})
}

export async function GET(req){
    const queries = await prisma.query.findMany()
    return NextResponse.json(queries)
}
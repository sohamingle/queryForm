"use client"

import QueryForm from "./Form";
import React, { useEffect, useState } from 'react';


const MountedClient = () => {
    const [isMounted,setIsMounted]= useState(false)
    useEffect(()=>{
        setIsMounted(true)
    },[])
    if(!isMounted){
        return null
    }
    return (
        <div>
            <QueryForm/>
        </div>
    );
}

export default MountedClient;
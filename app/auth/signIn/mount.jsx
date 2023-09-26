"use client"
import { useState,useEffect } from "react";
import SignInForm from "./signIn-form";

const MountedClient = () => {
    const [isMounted,setIsMounted] = useState(false)
    useEffect(()=>{
        setIsMounted(true)
    },[])
    if(!isMounted){
        return null
    }
    return (
        <div>
            <SignInForm/>
        </div>
    );
}

export default MountedClient;
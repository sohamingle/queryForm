"use client"

import { signIn, useSession } from "next-auth/react";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Image from 'next/image'
import logo from '@/public/logo.png'
import Google_Logo from '@/public/Google_Logo.png'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInForm() {

    const session = useSession()
    const router = useRouter()

    const [form , setForm] = useState({
        username:'',
        password:''
    })


    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm)=>{return{ ...prevForm, [name]: value }});
      };

    const handleSubmit = async(e)=>{
        e.preventDefault()
        await signIn("credentials",{...form,
            redirect:true,
            callbackUrl:`${window.location.origin}/`
        })
    }

    const providers = authOptions.providers
    return (
        <main className='h-screen flex justify-between'>
            <div className='bg-white flex items-center p-20'>
                <Image src={logo} alt="logo" width={500} height={100} />
            </div>
            <div className='w-full flex justify-center mr'>
                <div className="flex flex-col justify-center items-center ">
                    <div className="flex flex-col bg-white py-10 px-10 rounded-lg items-center gap-y-6">
                        <h2 className="text-3xl font-bold">Sign In</h2>
                        <div key={providers[0].id}>
                            <button className="bg-white py-3 px-4  border-2 rounded-md flex items-center gap-x-2" onClick={() => signIn("google",{
            redirect:true,
            callbackUrl:`${window.location.origin}/`
        })}>
                                <Image src={Google_Logo} alt="img" width={20} height={20} />
                                Sign in with Google
                            </button>
                        </div>
                        <p className="font-bold">OR</p>
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col space-y-8">
                                <label className="flex gap-x-2 font-semibold flex-col">
                                    Username
                                    <input className="input input-secondary h-8" name="username" placeholder="username" onChange={handleChange} type="text" />
                                </label>
                                <label className="flex gap-x-2 font-semibold flex-col">
                                    Password
                                    <input className="input input-secondary h-8" name="password" onChange={handleChange} placeholder="password" type="password" />
                                </label>
                                <button className="btn btn-neutral" type="submit">Sign in</button>
                            </div>
                        </form>
                    </div>
                </div>


            </div>
        </main>
    )
}
import Image from 'next/image'
import logo from '../public/logo.png'
import MountedClient from './mount'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from './api/auth/[...nextauth]/route'

export default async function Home() {
  const session = await getServerSession(authOptions)
  if(!session){
    redirect('/auth/signIn')
  }
  return (
      <main className='flex justify-between'>
        <div className='bg-white flex items-center p-20'>
          <Image src={logo} alt="logo" width={500} height={100} />
        </div>
        <div className='flex justify-center mr-28'>
          <MountedClient/>
        </div>
      </main>
  )
}

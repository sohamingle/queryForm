import Image from 'next/image'
import logo from '../public/logo.png'
import MountedClient from './mount'

export default function Home() {
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

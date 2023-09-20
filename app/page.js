import Image from 'next/image'
import QueryForm from './Form'
import logo from '../public/logo.png'

export default function Home() {
  return (
      <main className='flex justify-between'>
        <div className='bg-white flex items-center p-20'>
          <Image src={logo} alt="logo" width={500} height={100} />
        </div>
        <div className='flex justify-center mr-28'>
          <QueryForm />
        </div>
      </main>
  )
}

import Image from 'next/image'
import QueryForm from './Form'
import logo from '../public/logo.png'

export default function Home() {
  return (
      <main className='flex justify-between'>
        <div className='bg-white left-0 flex justify-center items-center p-10'>
          <Image src={logo} alt='logo' width={500}/>
        </div>
        <QueryForm />
      </main>
  )
}

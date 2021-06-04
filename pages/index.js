import { Footer } from '../components/Footer.js'
import { Header } from '../components/Header.js'
import Link from 'next/link'

import 'tailwindcss/tailwind.css'


export default function Home() {
  return (
    <div>
      <Header />
      <main className="container mx-auto sm:mt-10 md:mt-20 lg:mt-10 xl:mt-10">
        <div>
          <h1 className="sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl">AiPrism</h1>
          <div className="grid justify-items-center relative">
            <img className="w-1/3 xl:w-2/5 opacity-40" src="robot.jpg"/>
          </div>
          <p className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-600 mt-10">AiPrismはAI開発をしています。受託開発も受け付けています。</p>
          <h1 className="sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl xl:mt-10">お問い合わせ</h1>
          <p className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-5 text-gray-600">  クライアントの課題解決をサポートします。気軽なご相談からでも受け付けております。</p>  
          <p className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-5 text-gray-600 mt-10">メールはこちらから：oshita-n@whispon.com</p>
          <p className="hover:text-gray-300 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-600 underline mt-10"><Link href="/profile">プロフィールはこちらから</Link></p>
        </div>
      </main>
      <Footer />
  </div>

  )
  
}

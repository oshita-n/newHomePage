import { Footer } from '../components/Footer.js'
import { Header } from '../components/Header.js'
import Link from 'next/link'
import 'tailwindcss/tailwind.css'
import { ArrowNarrowDownIcon } from '@heroicons/react/solid'



export default function Home() {
  return (
    <div>
      <Header />
      <main className="container mx-auto">
        <div>
          <h1 className="sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl mt-10"><Link href="/">AiPrismTechnologies</Link></h1>
          <main className="grid justify-items-center container mx-auto　w-screen h-screen">
            <h1　className="sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl mt-60">サービス開発を通じて、お客様に感動を提供します。</h1>
            <ArrowNarrowDownIcon className="animate-bounce w-6 h-6" />
          </main>
          <h1 className="sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl xl:mt-10">お問い合わせ</h1>
          <p className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-600">AiPrismTechnologiesはAIに関する受託開発をしており、クライアントの課題解決をサポートします。気軽なご相談からでも受け付けております。</p>  
          <p className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-5 text-gray-600 mt-10">メールはこちらから：oshita-n@whispon.com</p>
          <p className="hover:text-gray-300 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-600 underline mt-10"><Link href="/profile">プロフィールはこちらから</Link></p>
        </div>
      </main>
      <Footer />
  </div>

  )
  
}

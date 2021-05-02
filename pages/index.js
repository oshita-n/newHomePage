import { Footer } from '../components/Footer.js'
import { Header } from '../components/Header.js'
import Link from 'next/link'

import 'tailwindcss/tailwind.css'


export default function Home() {
  return (
    <div>
      <Header />
      <main className="container mx-auto sm:mt-10 md:mt-20 lg:mt-40 xl:mt-60">
        <div className="text-center">
          <h1 className="sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl">prism</h1>
          <h1 className="sm:mt-5 md:mt-5 lg:mt-5 xl:mt-5 sm:text-3xl md:text-3xl lg:text-3xl xl:text-6xl">
            今まで見えなかったものを可視化し、
            価値を提供する
          </h1>
      
          <p className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl xl:mt-20 text-gray-600 m-5">prismはクライアントが気づいていなかったプロダクトの価値を見つけるのを手助けします。</p>
          <p className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-5 text-gray-600 m-5">見せられて初めて、これが欲しかったと思う。そういう感動をprismは提供します。
          </p>

          <h1 className="sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl xl:mt-20">お問い合わせ</h1>
          <p className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-5 text-gray-600 m-5">  クライアントの課題解決をサポートします。気軽なご相談からでも受け付けております。</p>  
          <p className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-5 text-gray-600 m-5">メールはこちらから：info@whispon.com</p>
          <p className="hover:text-gray-300 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-5 text-gray-600 underline"><Link href="/profile">プロフィールはこちらから</Link></p>
        </div>
      </main>
      <Footer />
  </div>

  )
  
}

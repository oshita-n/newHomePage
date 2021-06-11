import { Footer } from '../components/Footer.js'
import { Header } from '../components/Header.js'
import 'tailwindcss/tailwind.css'
import Link from 'next/link'


export default function Home() {
  return (
    <div>
      <Header />
      <main className="container mx-auto">
        <div>
          <h1 className="md:text-2xl lg:text-3xl xl:text-4xl mt-10"><Link href="/">AiPrism</Link></h1>
          <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
              <img class=" w-32 h-32 rounded-full mx-auto" src="oshita.jpg" />
              <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                <p className="sm:text-lg md:text-xl lg:text-2xl xl:text-2xl mt-5 text-gray-600">1995年、北海道札幌市で生まれる。2018年に北海道情報大学を卒業。大学では情報数学、</p>
                <p className="sm:text-lg md:text-xl lg:text-2xl xl:text-2xl mt-5 text-gray-600">自然言語処理を中心とした機械学習について学んだ。</p>
                <p className="sm:text-lg md:text-xl lg:text-2xl xl:text-2xl mt-5 text-gray-600">卒業後はAIQ株式会社（機械学習エンジニア）、株式会社調和技研（機械学習エンジニア）、株式会社Aidemy（データサイエンティスト、コンテンツ編集員）で働いた後、フリーランスとして独立。</p>
                <p className="sm:text-lg md:text-xl lg:text-2xl xl:text-2xl mt-5 text-gray-600">一般的なディープラーニング、文章を解析するための自然言語処理、組み合わせ最適化問題を解くための「メタヒューリスティクス」などを得意としている。
                また、フリーランスであるが、チームワークを大事にしている。</p>
                <figcaption class="font-medium">
                  <div class="text-cyan-600">
                    大下 範晃 NoriakiOshita
                  </div>
                  <div class="text-gray-500">
                    AiPrism 代表
                  </div>
                </figcaption>
              </div>
          </figure>
          <p className="hover:text-gray-300 sm:text-lg md:text-xl lg:text-2xl xl:text-2xl text-gray-600 underline mt-10"><Link href="/">トップページへ戻る</Link></p>
        </div>
      </main>
      <Footer />
  </div>

  )
  
}

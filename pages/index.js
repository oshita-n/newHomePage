import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer.js'
import { Header } from '../components/Header.js'


export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <h1>prism</h1>

        <h1 className={styles.title}>
          今まで見えなかったものを可視化し、
          価値を提供する
        </h1>

    
          <p>prismはクライアントが気づいていなかったプロダクトの価値を見つけるのを手助けします。</p>
          <p>見せられて初めて、これが欲しかったと思う。そういう感動をprismは提供します。
          </p>

          <h1>お問い合わせ</h1>
          <p>  クライアントの課題解決をサポートします。気軽なご相談からでも受け付けております。</p>  
          <p>メールはこちら：info@whispon.com</p>

      </main>

      <Footer />
    </div>
  )
}

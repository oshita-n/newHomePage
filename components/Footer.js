import Image from 'next/image'
import styles from '../styles/Home.module.css'

export  function Footer() {
  return (
    <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          prism 今まで見えなかったものを可視化し、価値を提供する

        </a>
      </footer>
  )
}

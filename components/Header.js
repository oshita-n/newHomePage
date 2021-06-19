import Head from 'next/head'

export  function Header() {
  return (
    <Head>
        <title>AiPrism</title>
        <meta name="description" content="今まで見えなかったものを可視化し、価値を提供する" />
        <link rel="icon" href="/prism.png" />
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ECKBCC52BY"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'G-ECKBCC52BY');
        </script>
    </Head>
  )
}

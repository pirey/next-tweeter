import "draft-js/dist/Draft.css"
import "tailwindcss/tailwind.css"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <meta charSet="utf-8" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp

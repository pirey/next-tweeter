import Head from "next/head"
import "draft-js/dist/Draft.css"
import "tailwindcss/tailwind.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Home / Tweeter</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

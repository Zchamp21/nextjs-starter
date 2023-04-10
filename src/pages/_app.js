import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
  <h1>My Cool Website</h1>
    <Component {...pageProps} />
  </>
}

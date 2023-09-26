import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'

const font = Montserrat({ subsets: ['latin'] })
export default function App({ Component, pageProps }) {
  return(
    <div className={`${font.className}`}>
     
       <Component {...pageProps} />
   
    </div>
  )
}

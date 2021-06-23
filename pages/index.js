import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
    
 export default function Home() {
  return (
    <div>
      <Head>
        <title>FOMOcraft</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <main>
        <Navbar></Navbar>
        <div className="main_container">
          <div className='main_image_container'>
            
            <Image
              className='main_title'
              src="/logo1.png"
              width={2206}
              height={633}
              layout="responsive"
            />
          </div>
          <div className='main_message_container'>
            <h2 className='main_sub_title'>Blitz Launch your crypto dream project!</h2>
            <a target="_blank" href="mailto:fomocraft@gmail.com">
              <button className="get-in-touch button is-white">Get in touch</button>
            </a>
          </div>
        </div>    
      </main>

      <style jsx>{`
        .main_sub_title {
          color: white;
        }
        .container {
          min-height: 100vh;
          padding: 0;
          margin: 0;
        }
        .get-in-touch {
          margin-top: 15px;
        }
        .main {
          flex: 1;
          height: 100vh;
          justify-content: center;
          align-items: center;
          background: rgb(60,78,121);
          background: linear-gradient(21deg, rgba(60,78,121,1) 0%, rgba(33,52,108,1) 14%, rgba(5,26,94,1) 43%);
        }

        .main_message_container {
          margin: auto;
          margin-top: 30px;
          text-align: center;
        }
        .main_image_container {
          padding-left: 30px;
          padding-right: 30px;
          margin: auto;
          text-align: center;
        }
        .main_container {
          top: 20%;
          width: 45%;
          margin: auto;
          min-width: 300px;
          backdrop-filter: blur(5px);
          padding: 25px;
          border-radius: 40px;
          border: 2px solid white;
        }
        .main_title {
          max-width: 500px;
        }

        @media (max-width: 1024px) {
          .main_image_container {
            padding: 0;
          }
        }
        
      `}</style>
    </div>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Navbar from '../components/Navbar'
// import styles from '../styles/Home.module.css'
import {useEffect, useRef, useState} from 'react'
// import BIRDS from '../node_modules/vanta/dist/vanta.birds.min.js'
import BIRDS from '../node_modules/vanta/dist/vanta.birds.min.js'

import * as THREE from 'three' 
export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(0)
  const vantaRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: vantaRef.current,
        backgroundColor: '#051A5E',
        color1: '#76FFA3',
        color2: '#025ECE',
        THREE
      }) ) 
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  })
  return (
    <div>
      <Head>
        <title>FOMOcraft</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <main className='main' ref={vantaRef}>
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
            <h2 className='main_sub_title'>Collaborating with #crypto startups to Blitz Launch their entrepreneurial dreams!</h2>
            <Link href="/mailto:fomocraft@gmail.com">
              <a>
                <button className="get-in-touch button is-white">Get in touch</button>
              </a>
            </Link>
          </div>
        </div>    
      </main>

      <style jsx>{`
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
          background-color: black;
          color: white;
        }

        .main_message_container {
          margin: auto;
          margin-top: 30px;
          text-align: center;
        }
        .main_image_container {
          margin: auto;
          text-align: center;
        }
        .main_container {
          top: 25%;
          width: 45%;
          margin: auto;
          min-width: 300px;
          backdrop-filter: blur(50px);
          padding: 25px;
          border-radius: 40px;
          border: 2px solid white;
        }
        .main_title {

        }

        .main_subtitle {

        }
        
      `}</style>
    </div>
  )
}

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
        backgroundAlpha: 0,
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

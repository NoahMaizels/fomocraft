import '../styles/globals.css'
import '../styles/styles.scss'

import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const threeScript = document.createElement('script')
    threeScript.setAttribute('id', 'threeScript')
    threeScript.setAttribute('src', '../public/three.min.js')
    document.getElementsByTagName('head')[0].appendChild(threeScript)
    
    // const p5Script = document.createElement('script')
    // p5Script.setAttribute('id', 'p5Script')
    // p5Script.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.min.js')
    // document.getElementsByTagName('head')[0].appendChild(p5Script)
    return () => {
      if(threeScript) {
        threeScript.remove()
      }
      // if(p5Script) {
      //   p5Script.remove()
      // }
    }
  }, [])
  return <Component {...pageProps} />
}

export default MyApp

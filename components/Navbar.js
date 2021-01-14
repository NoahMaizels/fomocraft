import { useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'


export default function Navbar(props) {
  const [menu, setMenu] = useState(0);
  const handleMenuClick = () => {
    if (menu === 1) return setMenu(0)
    setMenu(1)
  }
  return (
    <div className="navbar-container">
      <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-item"  >
            <Link href="/">
              <a className="navbar-item logo-item"> <img className="logo" src="/logo1.png" alt="FinNexus"  /></a>
            </Link>
            
            
           </div>
            <a role="button" onClick={handleMenuClick} className={`navbar-burger  ${menu === 0 ? "" : "is-active"}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span className="burger burger-1" aria-hidden="true"></span>
              <span className="burger burger-2" aria-hidden="true"></span>
              <span className="burger burger-3" aria-hidden="true"></span>
            </a>
        </div>

        <div id="basicNavbar" className={`navbar-menu ${menu === 0 ? "" : "is-active"}`}>
          <div className="navbar-end">
          

            {/* <Link href="/">
              <a className="navbar-item">Home</a>
            </Link> */}
        
            <Link href="/mailto:fomocraft@gmail.com">
              <a className="navbar-item">Email</a>
            </Link>
            <Link target="_blank" href="https://twitter.com/fomocraft">
              <a className="navbar-social navbar-item">
                <img className="twitter" src='twitter.svg'></img>
              </a>
            </Link>
             
          </div>
        </div>
      </nav>


      <style jsx>{`
            .twitter {
              width: 30px;
              height: 30px;
            }
            .navbar-social {
              margin-right: 20px;
            }
            * {
              overflow: visible;
            } 
            .selected {
              text-decoration: underline;
              font-weight: 700;
            }
            .navbar * {
              z-index: 10;
            }
            .navbar-container {
              width: ${props.is_blog_main ? "100%" : "80%"};
              margin: auto;
              margin-top: 15px;
              height: 70px;
              z-index: 10;
             }
            .navbar-item img {
              max-width: 200px;
              max-height: 100px;
              position: absolute;
            }
            .twitter {
              margin-right: 30px;
            }
            .logo {
              max-width: 900px;
            } 
            .navbar-item {
              font-size: 16px;
            }
            .navbar,.is-primary .navbar-brand .navbar-item {
              width: 100px;
              height: 50px;
              margin: 0;
              padding: 0;
            }
            .navbar,.is-primary .navbar-brand .navbar-item .navbar-item   {
              width: 100px;
              height: 50px;
              margin: 0;
              padding: 0;
            }

         
      
          @media (min-width: 1700px) {
            .navbar-container {
              width: ${props.is_blog_main ? "100%" : "80%"}
            }
            .navbar {
              width: 1000px;
              margin: auto;
            }
            .navbar-item {
              font-size: 20px;
            }
          }
  
          @media (min-width: 1200px) and (max-width: 1700px) {
            .navbar-container {
              width: ${props.is_blog_main ? "100%" : "95%"};
            }
            .navbar {
              width: 900px;
              margin: auto;
            }
              
          }

          @media (min-width: 700px) and (max-width: 1200px) {
            .navbar-container {
              width: 100%;

              min-width: 00px;

            }
             
           
          }
         

          @media (max-width: 800px) {
            .navbar-container {
              width: 100%;
              min-width: 00px;
            }
            .navbar {
              width: 90%;
            }
          }
          @media (min-width: 1024px) and (max-width: 1200px) {}
          @media (min-width: 800px) and (max-width: 1200px) {
            .navbar {
              width: 700px;
              margin: auto;
            }
          }

          @media (max-width: 1024px) {
            
            .navbar {
              margin: 0 auto;
            }
            .navbar-item {
              font-size: 17px;
            }
            .navbar-item img {
              width: 340px;
              max-height: 100px;
              position: absolute;
            }
            .navbar-menu.is-active {
              top: 80px;
              opacity: 1;
              position: absolute;
              pointer-events: auto;
            }
            .navbar-menu {
              -webkit-transition: top .4s ease-in-out;
              -o-transition: top .4s ease-in-out;
              transition: top .4s ease-in-out;
              right: 0px;
              display: block;
              width: 100%;
              position: absolute;  
              top: -600px;
              pointer-events: none;
            }
            .logo {
              max-width: 400px;
              margin-top: 0px;
            }
           }
   
      `}</style>
    </div>
    )}

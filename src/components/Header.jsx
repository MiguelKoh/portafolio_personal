import ArrowDown from "../assets/images/arrow-down.svg"
import { HiLanguage } from "react-icons/hi2";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import MxFlag from "../assets/images/mx-flag.svg";
import UsFlag from "../assets/images/us-flag.svg";
import { useEffect, useRef, useState } from "react";
import logo from "../assets/images/logo_ME.png"
import '../css/header.css'


function Header() {
  const [menu, setMenu] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const [headerScroll, setHeaderScroll] = useState(false)
  
  const btnRef = useRef();
  
  useEffect(() => {

    const handleClickOutside = (e)=>{
      if (!btnRef.current.contains(e.target)) {
          setIsOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
  
    return () => {
      document.removeEventListener("click",handleClickOutside)
    }
  }, [])
  
  useEffect(() => {
     const handleScrolling = ()=> {
      const limitHeightScrolling = 10;
      const heightScrolling = document.documentElement.scrollTop;
      
      if(heightScrolling > limitHeightScrolling){
        setHeaderScroll(true)
      }
      else{
        setHeaderScroll(false)
      }
     }
    document.addEventListener("scroll", handleScrolling)
  
    return () => {
      document.removeEventListener("scroll", handleScrolling)
    }
  }, [])
  




  return (
    <header className={`header_section ${headerScroll ?"header_scrolling":""}`}>
      <nav className="nav_content nav_container">
        <a href="/" className="logo_link">
          <img src={logo} alt="logo" className="logo_img" />
        </a>
        <div className="nav">
          <ol className= {`nav_list ${menu ? "open_menu":""}`}>
            
            <li className="nav_item">
              <a className="nav_link">Acerca de mí</a>
            </li>
            <li className="nav_item">
              <a className="nav_link">Proyectos</a>
            </li>
            <li className="nav_item">
              <a className="nav_link">Contacto</a>
            </li>
          </ol>
          <button
            aria-expanded={`${menu ?"true":"false"}`}
            aria-label="Navigation menu"
            className="menu_btn"
            onClick={()=>{setMenu((menu)=>!menu)}}
            
          >
            <HiOutlineMenuAlt3 />
          </button>
          <button
            aria-label="Button to close navigation menu"
            className={`close_menu ${menu ? "open_menu" : ""}`}
            onClick={() => setMenu(false)}
            
          >
            <IoMdClose />
          </button>
        </div>
        <div className={`languages_container ${menu ? "open_menu" : ""}`}>
        <span className="languages_icon">
            <HiLanguage />
          </span>
        <button ref={btnRef} className="languages_btn" onClick={()=>{setIsOpen((prev)=>!prev)}}>
          en
        <img className="arrow_icon" src={ArrowDown} alt="" width={19} height={19} />
        </button>
        <ul className={`languages_list ${isOpen ? "open" : ""}`}>
            <li>
              <img src={UsFlag} alt="" /> Ingles
            </li>
            <li>
              <img src={MxFlag} alt="" /> Español
            </li>
        </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
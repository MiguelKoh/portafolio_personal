import { useState, useEffect } from "react"
import { LuChevronsUp } from "react-icons/lu";
import '../css/buttonTop.css'
function ButtonTop() {
  
 const [visible, setVisible] = useState(false)   
 

const goToTop = ()=>{
    scrollTo(0,0)
}

 useEffect(() => {
   const handleScrolling = ()=>{
   const heightToApear = 500;
    const windowScroll = document.documentElement.scrollTop;
    if(windowScroll > heightToApear){
        setVisible(true)
    }
    else{
        setVisible(false)
    }
   }

   document.addEventListener("scroll", handleScrolling)
 
   return () => {
     document.removeEventListener("scroll", handleScrolling)
   }
 }, [])
 

return (
    <button className={`btn_top ${visible ? "visible":""}`}
     onClick={goToTop}>
        <LuChevronsUp/>
    </button>
  )
}

export default ButtonTop
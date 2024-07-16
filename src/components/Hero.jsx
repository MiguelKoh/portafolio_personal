import '../css/Hero.css'
import imagen from '../assets/images/foto.png'

function Hero() {
  return (
    <section className="hero_section">
      <div className='container hero_data'>
        <div className='container_data'>
        <h1 className='hero_title'>Hola, mi nombre es</h1>
        <h2 className='hero_name'>Miguel Elías</h2>
        <h3 className='hero_subtitle'>Construyo sitios web y aplicaciones increibles</h3>
        <p className='hero_description'>Soy un desarrollador web front-end y Lic. en Tecnologias de la Informacion que disfruta crear conceptos fantásticos y experiencias digitales para la web.</p>
      </div>
      <div className='container_foto'>
     
      <img src={imagen} className='foto' alt="foto" />
      
    </div>
    </div>
    </section>
  )
}

export default Hero
import '../css/footer.css'
import {useTranslation} from "react-i18next"

function Footer() {
  const [t]= useTranslation("global");

  return (
    <footer className='container_footer'>
        <p>{t("footer")}</p>
    </footer>
  )
}

export default Footer
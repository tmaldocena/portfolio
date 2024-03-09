import { useEffect } from "react"
import { Link } from "react-router-dom"

const Home = ({ lang }) => {

  useEffect(() => {
    window.history.replaceState(null, null, `?lang=${lang === true ? 'es' : 'en'}`);

  }, []);

  return (
    <section className="w-full min-h-[80vh] text-center align-middle flex flex-col justify-center">
      <img src="./home.svg" alt="home draw" className="w-32 mx-auto animate-[floating_6s_ease-in-out_infinite]"/>
      <h1 className="font-climate xl:text-6xl md:text-4xl text-2xl colorfull">Tomas Maldocena</h1>
      <span className="font-sora font-light xl:text-2xl md:text-xl text-md text-white mt-2 mb-6">{lang && 'Desarrollador frontend y Diseñador UX/UI' || 'Frontend developer & UX/UI designer'}</span>
      <div className="flex flex-row xl:gap-12 md:gap-10 gap-4 justify-center">
        <Link to='/portfolio' className="btn font-sora font-bold text-second xl:text-xl hover:text-white transition-all">Portfolio</Link>
        <Link to='/about' className="btn font-sora font-bold text-second xl:text-xl hover:text-white transition-all">{lang && 'Acerca de mi' || 'About me'}</Link>
        <Link to='/contact' className="btn font-sora font-bold text-second xl:text-xl hover:text-white transition-all">{lang && 'Contacto' || 'Contact'}</Link>
      </div>
    </section>
  )
}

export default Home
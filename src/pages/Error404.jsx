import { useEffect } from "react";
import { Link } from "react-router-dom"

const Error404 = ({ lang }) => {

  useEffect(() => {
    window.history.replaceState(null, null, `?lang=${lang === true ? 'es' : 'en'}`);
  }, []);

  return (
    <section className="flex flex-col gap-4 items-center font-sora xl:px-64 md:px-16 px-4 py-16">
      <h2 className="text-white text-4xl font-bold">ERROR 404 - Not Found</h2>
      <img src="./404.svg" alt="drawing 404" className="w-48"/>
      <span className="text-white">{lang && 'Esta página no existe :(' || "The page doesn't exist :("}</span>
      <Link to='/' className="btn text-white transition-all hover:font-bold hover:text-main">{lang &&'volver al home' || 'go back home'}</Link>
    </section>
  )
}

export default Error404
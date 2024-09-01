import { useEffect } from "react"
import Card from "../components/Card"
import CardLong from "../components/CardLong"
import { useState } from "react"
import ProjectsList from "../components/ProjectsList"
import projects from '../data/projects.json';
import CardTall from "../components/CardTall"


const Portfolio = ({ lang }) => {

  let priority = projects.filter((project) => project.priority === 1);

  console.log(priority);

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    window.history.replaceState(null, null, `?lang=${lang === true ? 'es' : 'en'}`);
  }, []);
 
  //choose the screen size 
  const handleResize = () => {
    if (window.innerWidth < 1400) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
  }
  
  // create an event listener
  useEffect(() => {
    if (window.innerWidth < 1400) {
      setIsMobile(true)
  } else {
      setIsMobile(false)
    }
  window.addEventListener("resize", handleResize)
  })

  if(!isMobile){
    return (
      <div className="grid grid-cols-4 grid-rows-3 content-center px-8 gap-6 h-[85vh]">
        <CardTall classes="row-span-2  rounded-2xl text-white bg-fjsanchez border-second" project={priority[2]} lang={lang} ></CardTall>

        <CardTall classes="row-span-2 col-start-4 row-start-2 bg-white rounded-2xl text-white bg-portamedallas border-main" project={priority[1]} lang={lang} ></CardTall>

        <CardLong classes="col-span-2 col-start-1 row-start-3 border rounded-2xl border-main" project={priority[0]} lang={lang} ></CardLong>

        <Card classes="col-start-3 row-start-3 bg-second rounded-2xl text-black" colors={'border-black hover:bg-white'} project={priority[3]} lang={lang}></Card>

        <Card classes="col-start-2 row-start-1 border rounded-2xl border-second text-white" colors={'border-white hover:bg-second'} invert={'invert hover:invert-0'} project={priority[4]} lang={lang}></Card>

        <Card classes="col-start-3 row-start-1 border rounded-2xl border-white text-white" colors={'border-white hover:bg-white'} invert={'invert hover:invert-0'} project={priority[5]} lang={lang}></Card>

        <button className="col-start-4 row-start-1 bg-main border rounded-2xl border-main font-sora font-bold text-2xl text-white transition-all hover:scale-[1.02] hover:backdrop-brightness-90" onClick={()=>document.getElementById('modalProjects-bento').showModal()}>{lang && "Más Proyectos" || "More Projects"}</button>
        <div className="col-span-2 col-start-2 row-start-2 grid items-center bg-main rounded-2xl text-center transition-all hover:scale-[1.02]">
        <span className="font-climate text-white text-5xl items-center">Portfolio</span>
        </div>
        <dialog id="modalProjects-bento" className="modal">
            <div className="modal-box bg-black border border-second">
              <h3 className="font-climate text-xl text-white">{lang && "Otros Proyectos" || "Other Projects"}</h3>
              <ProjectsList  />
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn font-sora transition-all hover:text-white">{lang && "Cerrar" || "Close" }</button>
                </form>
              </div>
            </div>
          </dialog>
    </div>
    )
  }else{
    return(
      <div className="md:grid flex flex-col md:grid-cols-2 md:grid-rows-5 grid-cols-1 grid-rows-7 md:gap-4 gap-8 mx-4 mt-8">
          <div className="col-span-2 grid items-center bg-main rounded-2xl text-center transition-all hover:scale-[1.02] py-8">
        <span className="font-climate text-white md:text-5xl text-3xl items-center">Portfolio</span>
        </div>
          <Card classes="md:row-start-2 rounded-2xl border border-white" colors='bg-black hover:bg-main border-main' invert={'invert hover:invert-0'} project={priority[0]} lang={lang} ></Card>

          <Card classes="md:row-start-2 row-start-3 rounded-2xl border border-second" colors='bg-black hover:bg-main border-main' invert={'invert hover:invert-0'} project={priority[1]} lang={lang} ></Card>

          <Card classes="rounded-2xl border border-main" colors='bg-black hover:bg-main border-main' invert={'invert hover:invert-0'} project={priority[2]} lang={lang} ></Card>
          <Card classes="md:row-start-3 row-start-4 rounded-2xl border border-second" colors='bg-black hover:bg-main border-main' invert={'invert hover:invert-0'} project={priority[3]} lang={lang} ></Card>
          <Card classes="rounded-2xl border border-main" colors='bg-black hover:bg-main border-main' invert={'invert hover:invert-0'} project={priority[4]} lang={lang} ></Card>
          <Card classes="md:row-start-4 row-start-6 rounded-2xl border border-white" colors='bg-black hover:bg-main border-main' invert={'invert hover:invert-0'} project={priority[5]} lang={lang} ></Card>
          <div className="md:row-start-5 row-start-7 col-span-2 py-4 text-right mr-3">
            <button className="font-sora font-bold text-xl transition-all hover:text-main hover:underline" onClick={()=>document.getElementById('modalProjects').showModal()} >Más Proyectos</button>
          </div>
          <dialog id="modalProjects" className="modal">
            <div className="modal-box bg-black border border-second">
              <h3 className="font-climate text-xl text-white">{lang && "Otros Proyectos" || "Other Projects"}</h3>
              <ProjectsList />
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn font-sora transition-all hover:text-white">{lang && "Cerrar" || "Close" }</button>
                </form>
              </div>
            </div>
          </dialog>
      </div>
          )
  }
}

export default Portfolio
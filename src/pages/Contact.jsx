import { useEffect } from "react";

const Contact = ({ lang }) => {

  useEffect(() => {
    window.history.replaceState(null, null, `?lang=${lang === true ? 'es' : 'en'}`);
  }, []);

  let toast = document.getElementById('toast');

  function copyMail() {
    navigator.clipboard.writeText('tomasmaldocena@gmail.com');
    toast.classList.remove('hidden');
    setTimeout(() => {
      toast.classList.add('hidden');
    }, 2000);
  }

  return (
    <section className="xl:px-64 md:px-16 px-4 py-16 flex flex-col gap-2 font-sora text-white">
      <div className="flex xl:flex-row flex-col-reverse xl:items-end mb-4">
        <h3 className="font-climate xl:text-7xl text-4xl text-main">{lang && 'Hablamos?' || "Let's talk!"}</h3>
        <img src='./contact.svg' alt="contact img" className="w-24 xl:mx-0 md:mx-0 mx-auto"/>
      </div>
      <p className="mb-4">Puedo ayudarte a diseñar y construir tu próximo proyecto/sitio web. Podés llenar el siguiente <a href={lang && "https://forms.gle/irBAiiYJXeP5C59PA" || "https://forms.gle/CMZnJCpz1rz5RRcQ7"} target="_blank" className="text-main transition-all hover:text-second hover:font-bold">formulario</a>, o</p>
      <span>{lang && "Mi correo: " || "My mail: "}<div className="tooltip" data-tip={lang && "click para copiar!" || "click to copy!"}><button className="text-second transition-all hover:font-bold" onClick={() => copyMail()}>tomasmaldocena@gmail.com</button></div></span>
      <span>{lang && "Dónde estoy:" || "You can find me here:"}
        <a href="https://www.linkedin.com/in/tomas-maldocena/" target="_blank" className="transition-all font-semibold hover:text-main hover:font-bold"> LinkedIn </a>
        /
        <a href="https://github.com/tmaldocena" target="_blank" className="transition-all font-semibold hover:text-main hover:font-bold"> Github </a>
        /
        <a href="https://www.behance.net/tomasmaldocena" target="_blank" className="transition-all font-semibold hover:text-main hover:font-bold"> Behance </a>
      </span>
      <div className="toast hidden transition-all" id="toast">
        <div className="alert bg-second text-white">
          <span>{lang && "Copiado al portapapeles! :)" || "Copied to the clipboard :)"}</span>
        </div>
      </div>
    </section>
  )
}

export default Contact
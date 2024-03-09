import { useEffect } from "react";
import Tag from "../components/Tag"

const About = ({ lang }) => {

  useEffect(() => {
    window.history.replaceState(null, null, `?lang=${lang === true ? 'es' : 'en'}`);
  }, []);

  return (
    <section className="xl:px-64 md:px-16 px-4 py-16">
      <article>
      <div className="flex xl:flex-row md:flex-row flex-col-reverse items-center">
        <div className="flex flex-col gap-4 xl:mt-0 mt-8">
          <h2 className="text-main xl:text-7xl text-4xl font-climate">{lang && 'Hola!' || 'Hello!'}</h2>
          <p className="my-4 text-white xl:text-2xl text-lg font-sora">{lang && 
            'Soy de San Luis, Argentina con la pasión y curiosidad de estar siempre actualizado en cuanto a las nuevas tecnologías y diseños que salen día a día en el mundo del desarrollo web. Aficionado a los libros de fantasía y ciencia ficción 📚, como también a los videojuegos 🎮.' ||
            'From San Luis, Argentina, with the passion and curiosity of being always updated on the new technologies and designs that comes out day by day in the web developing world. A lover of sci-fi and fantasy books 📚, and videogames 🎮.'
          }
          </p>
          <a className="my-4 mr-auto px-8 py-3 border border-main rounded-3xl font-sora xl:text-xl text-white transition-all hover:bg-main hover:font-bold hover:text-black" href={lang && './CV_esp.pdf' || './CV_eng.pdf'} download='CV-Tomas_Maldocena' >{ lang && 'Descargar CV' || 'Download CV' } </a>
        </div>
        <img src="./about.svg" alt="tomas drawing" className="xl:w-48 w-40 mx-4 sm:pb-4"/>
      </div>
        <h5 className="mt-6 xl:text-xl text-lg text-white font-bold font-sora">{lang && 'Tecnologias que uso principalmente' || 'Main technologies'}</h5>
        <div className="flex flex-row flex-wrap xl:gap-6 gap-2 mt-4">
          <Tag name='React' icon='./react.svg' color='main' />
          <Tag name='Tailwind' icon='./tailwind.svg' color='main' />
          <Tag name='Javascript' icon='./javascript.svg' color='main' />
          <Tag name='HTML' icon='./html5.svg' color='main' />
          <Tag name='CSS' icon='./css3.svg' color='main' />
          <Tag name='Bootstrap' icon='./bootstrap.svg' color='main' />
        </div>
        <h5 className="mt-6 xl:text-xl text:lg text-white font-bold font-sora">{lang && 'Otras tecnologias' || 'Another technologies'}</h5>
        <div className="flex flex-row flex-wrap xl:gap-6 gap-2 mt-4">
          <Tag name='PHP' icon='./php.svg' />
          <Tag name='MySQL' icon='./mysql.svg' />
          <Tag name='JQuery' icon='./jquery.svg' />
          <Tag name='Laravel' icon='./laravel.svg' />
          <Tag name='Illustrator' icon='./illustrator.svg' />
          <Tag name='Figma' icon='./figma.svg' />
        </div>
      </article>
      <article className="py-6 font-sora text-white">
        <h5 className="my-6 xl:text-2xl text-lg font-bold">{lang && 'Experiencia laboral' || 'Work experience'}</h5>
        <div>
          <span className="xl:text-xl text-lg font-semibold">{lang && 'Desarrollador Frontend Jr. - Pragma ' || 'Frontend Developer Jr. - Pragma '}</span>
          <br />
          <span className="xl:text-xl text-lg text-blue-400 font-light italic">{lang && 'Junio 2022 - Julio 2023' || 'June 2022 - July 2023'}</span>
          <p className="mt-4 xl:text-lg">{lang && 
          'Trabaje como desarrollador frontend en Pragma, diseñando y rehaciendo secciones para un sistema de gestión educativa. Entre las secciones se encontraba: noticias, ingreso y egreso de dinero, asistencia, notas o calificaciones de cada materia, organización de los roles con sus permisos, pagos de cuota, uniformes y matriculas, etc. Además de encargarme de la parte visual, también aprendí un poco más acerca del backend, usando PHP con el framework Laravel y base de datos relaciones con MySQL.' 
          ||
          'I worked as a frontend developer in Pragma, a small company of my province. I designed and reworked sections for a education managment. Among the sections i did were: news, incomes & outcomes of money, taking asistance, grades for each course and each student, roles organization with their own permissions, fee payments, uniforms and/or licenses, etc. Besides of working mostly on the visual part, I have also learned backend, using PHP under the framework Laravel and databases like MySQL.'
          }</p>
        </div>
        <div className="mt-4">
          <span className="xl:text-xl text-lg font-semibold">{lang && 'Desarrollador y Diseñador web freelance ' || 'Web developer and designer '}</span>
          <br />
          <span className="xl:text-xl text-lg text-blue-400 font-light italic">{lang && 'Julio 2023 - Actualidad' || 'July 2023 - Present'}</span>
          <p className="mt-4 xl:text-lg">{lang &&
          'Actualmente trabajo de forma freelance en pequeños proyectos (algunos grandes también) como desarrollador web y diseñador. Haciendo sistemas pequeños de órdenes de compra, utilizando PHP y HeidiSQL, o realizando las pantallas visuales de un sistema de cuestionarios con HTML5 y Tailwind, o también re estructurando un sitio web hecho en Wordpress y aumentar su SEO.'
          ||
          'Working as a freelancer on small projects (and big ones sometimes) as a web developer and designer. I did an own purchase order system, using PHP and HeidiSQL, or visuals for a questionnaire with HTML5 and Tailwind, or reworking a site made in Wordpress and improving the SEO of it.'
          }</p>
        </div>
      </article>
    </section>
  )
}

export default About
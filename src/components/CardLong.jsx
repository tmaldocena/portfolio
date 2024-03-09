import IconButton from "./IconButton"

const CardLong = ({ classes, project, lang }) => {
  return (
    <div className={` ${classes} flex flex-row items-center justify-start transition-all hover:scale-[1.02]`}>

      <img src={ project.img } alt='project logo' className="h-48 rounded-xl"/>
      <div className="flex flex-col gap-4">
      <h5 className="text-2xl font-sora font-bold ml-4 text-white">{ project.title }</h5>
      <p className="font-sora text-sm mx-4 text-white">{lang && project.description_es || project.description_en}</p>

        <div className="flex ml-auto mr-8 gap-6">
          <IconButton type='github' link={(project.github || '')} colors='bg-black hover:bg-main border-main' invert='invert hover:invert-0'/>
          <IconButton type='behance' link={(project.behance || '')} invert='invert hover:invert-0' />
          <IconButton type='seeProject' link={(project.website || '')} colors='bg-black hover:bg-main border-main' invert='invert hover:invert-0'/>
        </div>
      </div>
    </div>
  )
}

export default CardLong

//TODO Probar hacer otra card
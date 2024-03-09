import IconButton from "./IconButton"

const Card = ({ classes, colors, invert, project, lang }) => {
  return (
    <div className={` ${classes} grid items-center align-middle transition-all hover:scale-[1.02]`}>
      <h5 className="xl:text-xl md:text-base text-sm font-sora font-bold ml-4 mt-4">{ project.title }</h5>
      <p className="font-sora mx-4 xl:text-base text-sm">{lang && project.description_es || project.description_en}</p>
      <div className="flex justify-end mr-8 gap-4 xl:my-4 md:my-4 my-2">
        <IconButton type='github' link={(project.github || '')} colors={colors} invert={invert}/>
        <IconButton type='behance' link={(project.behance || '')} disabled={true} colors={colors} invert={invert}/>
        <IconButton type='seeProject' link={(project.website || '')} colors={colors} invert={invert}/>
      </div>
    </div>
  )
}

export default Card
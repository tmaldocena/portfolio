const IconButton = ({ type, colors, invert, link }) => {
  return (
    <a className={`btn xl:btn-md md:btn-md btn-sm btn-circle btn-outline ${colors} ` + (link === '' ? 'btn-disabled' : '')} href={link} target="_blank">
    <img src={`./${type}.svg`} alt="icon" className={`h-6 w-6 ${invert}`} />
    </a>
  )
}

export default IconButton
const Tag = ({ name, icon, color }) => {
  return (
    <span className={color === 'main' ? "xl:w-44 w-40 bg-main border border-white rounded-full inline-flex items-center xl:px-4 px-2 xl:py-2 py-1 text-black font-sora font-bold gap-2" : "xl:w-44 w-40 bg-second border border-white rounded-full inline-flex items-center xl:px-4 px-2 xl:py-2 py-1 text-white font-sora font-bold gap-2"}>
        <img src={ icon } alt="icon" width={36}></img>
        <span className="text-sm">{ name }</span>
    </span>
  )
}

export default Tag
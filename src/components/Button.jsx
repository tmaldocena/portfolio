const Button = ({ text }) => {
  return (
    <button className="my-4 px-8 py-3 border border-main rounded-3xl font-sora xl:text-xl text-white transition-all hover:bg-main hover:font-bold hover:text-black">{ text }</button>
  )
}

export default Button
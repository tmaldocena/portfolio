import Nav from './Nav'

const Layout = ({lang, setLang, children}) => {
  return (
    <div className='bg-black min-h-screen transition-opacity animate-fadeIn'>
      <div>
        <Nav lang={lang} setLang={setLang}/>
        {children}
      </div>
    </div>
  )
}

export default Layout
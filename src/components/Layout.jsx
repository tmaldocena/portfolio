import Nav from './Nav'

const Layout = ({lang, setLang, children}) => {
  return (
    <div className='bg-black min-h-screen'>
      <div>
        <Nav lang={lang} setLang={setLang}/>
        {children}
      </div>
    </div>
  )
}

export default Layout
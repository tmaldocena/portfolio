import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Error404 from './pages/Error404'
import Layout from './components/Layout'
import { useEffect, useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

function App() {
  let location = useLocation()

  //* true = español | false = ingles
  const [lang, setLang] = useState(true);

  useEffect(() => {
      window.history.replaceState(null, null, `?lang=${lang === true ? 'es' : 'en'}`);
  }, [lang]);

  return (
    <Layout lang={lang} setLang={setLang}>
      <TransitionGroup component={null}>
        <CSSTransition key={location.key} timeout={3500} classNames='fade'>
          <Routes location={location} >
            <Route path='/' index element={ <Home lang={lang} /> }/>
            <Route path='/about' element={ <About lang={lang} /> } />
            <Route path='/portfolio' element={ <Portfolio lang={lang} /> } />
            <Route path='/contact' element={ <Contact lang={lang} /> }/>
            <Route path='*' index element={ <Error404 lang={lang} /> }/>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </Layout>
  )
}

export default App

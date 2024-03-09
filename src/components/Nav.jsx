import { Link } from "react-router-dom"
const Nav = ({ lang, setLang }) => {



    return (
        <header >
            <nav className="navbar py-4 xl:px-12 md:px-6 px-3 ">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost rounded-full lg:hidden hover:text-main">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content my-3 z-[1] p-2 shadow bg-black border-solid border-white border rounded-box w-64">
                    <li><Link to='/' className="text-xl text-white hover:text-main font-sora">Home</Link></li>
                    <li><Link to='/about' className="text-xl text-white hover:text-main font-sora">About Me</Link></li>
                    <li><Link to='/portfolio' className="text-xl text-white hover:text-main font-sora">Portfolio</Link></li>
                    <li><Link to='/contact' className="text-xl text-white hover:text-main font-sora">Contacto</Link></li>
                </ul>
                </div>
                <Link to='/' className="text-xl sm:navbar-center navbar-start"><img src="./logo.svg"></img></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-4 px-1 font-sora">
                    <li className="hover:text-second text-lg"><Link to='/'>Home</Link></li>
                    <li className="hover:text-second text-lg"><Link to='/about'>About Me</Link></li>
                    <li className="hover:text-second text-lg"><Link to='/portfolio'>Portfolio</Link></li>
                    <li className="hover:text-second text-lg"><Link to='/contact'>Contacto</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn hover:text-main font-sora xl:text-lg" onClick={() => setLang(!lang)}>Es/En</button>
            </div>
            </nav>
        </header>
    )
    }

export default Nav
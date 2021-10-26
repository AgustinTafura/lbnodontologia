import { categories } from '../../data'

const Header = () => {
    return (
        <header className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
            <a className="navbar-brand col-8 col-md-4 col-lg-6 col-xl-5 offset-xl-1" href="#" id="logo-lbn">
                <img id="headerLogo"  src="img/logo_lbn_consultorio.jpg" alt="Logo LBN Odontologia, consultorio odontologico en Buenos Aires, Argentina"/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="navbarContent">
                <span className="navbar-toggler-icon"></span>
            </button>
            <nav id="navbarContent" className="navbar-collapse col-md-12 col-lg-6 col-xl-5  collapse">
                <ul className="d-lg-flex">
                    {
                        categories.map((el, index)=>
                                <li key={el+index} className="nav-item"><a id={`${el}Link`} className="nav-link nav-link-top" href={`#${el}`}>{el}</a></li>
                        )
                    }
                </ul>
            </nav>
            </header>
        )
}

export default Header

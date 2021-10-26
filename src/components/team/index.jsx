import { categories, team } from '../../data'
import { useEffect } from 'react'
import $ from 'jquery'


const Team = () => {

    useEffect(() => {
        // Team - carrusel
        $('#teamOd').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false,
            responsive: [{
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2,
                        autoplay: true,
                        autoplaySpeed: 3000,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        autoplay: true,
                        autoplaySpeed: 3000,
                    }
                },
            ]
        });
    }, [])

    return (
    <section id={categories[2]}>
        <h4>Nuestro {categories[2]}</h4>
        <p className="container">Somos una Familia de Profesionales en busca de constante perfeccionamiento sumando
            nueva tecnología, trabajando en equipo para ofrecerte calidez dia a dia.
        </p>
        <div id="teamOd">
            {
            team.map(el=>{return(
                <article key={el.code} width="100%">
                    <div className="">
                        <a><img src={`img/team/${el.avatar}`} alt="" width="100" height="100" /></a>
                    </div>
                    <h5>{el.name}</h5>
                    <h6>{el.title}</h6>
                    <h6>MN {el.lic_num}</h6>
                    <ul id="teamOdSocialNet">
                        <li>
                            <a href=""></a>
                        </li>
                        <li>
                            <a href=""></a>
                        </li>
                    </ul>
                </article>
            )})
            }
        </div>
    </section>
    )
}

export default Team
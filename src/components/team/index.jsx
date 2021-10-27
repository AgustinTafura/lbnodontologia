import { categories, team } from '../../data'
import { useEffect, useState } from 'react'
import $ from 'jquery'
import Slider from "react-slick";


const Team = () => {

    useEffect(() => {
        quantitySlidesToShow()
        window.addEventListener('resize', ()=>quantitySlidesToShow())
    }, [])

    const [slidesToShow, setSlidesToShow] = useState(1)
    const quantitySlidesToShow = () => {
      window.innerWidth >= 1200 && setSlidesToShow(3)
      window.innerWidth >= 992 && window.innerWidth < 1200 && setSlidesToShow(2)
      window.innerWidth >= 768 && window.innerWidth < 992 && setSlidesToShow(2)
      window.innerWidth >= 576 && window.innerWidth < 768 && setSlidesToShow(1)
      window.innerWidth < 576 && setSlidesToShow(1)
    }

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };

      

      return (
          
    <section id={categories[2]}>
        <h4>Nuestro {categories[2]}</h4>
        <p className="container">Somos una Familia de Profesionales en busca de constante perfeccionamiento sumando
            nueva tecnología, trabajando en equipo para ofrecerte calidez dia a dia.
        </p>
        <div id="teamOd">
        <Slider {...settings}>
            {
                team.map(el=>{console.log(el);
                    return(
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
        </Slider>
        </div>
        </section>
      );


    // return (
    // <section id={categories[2]}>
    //     <h4>Nuestro {categories[2]}</h4>
    //     <p className="container">Somos una Familia de Profesionales en busca de constante perfeccionamiento sumando
    //         nueva tecnología, trabajando en equipo para ofrecerte calidez dia a dia.
    //     </p>
    //     <div id="teamOd">

            
    //         {
    //         team.map(el=>{console.log(el);
    //             return(
    //             <article key={el.code} width="100%">
    //                 <div className="">
    //                     <a><img src={`img/team/${el.avatar}`} alt="" width="100" height="100" /></a>
    //                 </div>
    //                 <h5>{el.name}</h5>
    //                 <h6>{el.title}</h6>
    //                 <h6>MN {el.lic_num}</h6>
    //                 <ul id="teamOdSocialNet">
    //                     <li>
    //                         <a href=""></a>
    //                     </li>
    //                     <li>
    //                         <a href=""></a>
    //                     </li>
    //                 </ul>
    //             </article>
    //         )})
    //         }
    //     </div>
    // </section>
    // )
}

export default Team
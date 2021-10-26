import { useEffect } from 'react'
import {carouselData} from '../../data'
import $ from 'jquery'

const CarouselHome = () => {

    useEffect(() => {
      //Responsive social-net
      if (window.innerWidth > 768) {
        $('#social-net a').each( function(index, value){
          if ($(value).has('col-4')) {
            $(value).removeClass('col-4')
            $(value).addClass('col-2')
            if (index == 0) {
              $(value).addClass('offset-3')
            }
          }
        })
      }
    }, [])

    return (
        <>
          <div id="carouselHome" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselHome" data-slide-to="0" className="active"></li>
            <li data-target="#carouselHome" data-slide-to="1"></li>
            <li data-target="#carouselHome" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
              {
                  carouselData.map((el, index)=>{
                    return (
                      <div key={index} className={`carousel-item ${index == 0?'active':''} `} >
                        <div id={`carousel-content-${index}`} className="carousel-caption  d-md-block">
                          <h1 className="display">{el.title}</h1>
                          <p>{el.description}</p>
                        </div>
                        <img 
                          id={`carousel-pic-${index}`}
                          src={`img/home/consultorioLBNOdontologia_${index}_mobile.jpg `}
                          alt="Recepcion LBN Odontologia, consultorio odontologico en Buenos Aires, Argentina"
                        />
                      </div>
                    )
                  })
              }
          </div>
            <a className="carousel-control-prev" href="#carouselHome" role="button" data-slide="prev">
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselHome" role="button" data-slide="next">
              <span className="sr-only">Next</span>
            </a>
        </div>
        <div id="social-net" className="container-fluid">
          <div className="row">
            <a role="button" href="https://www.facebook.com/LbnOdontologia/" className="btn btn-link col-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a role="button" href="https://www.instagram.com/lbnconsultorio/" className="btn btn-link col-4">
              <i className="fab fa-instagram"></i>
            </a>
            <a role="button" href="https://api.whatsapp.com/send?phone=5491167485220&text=&source=&data=&app_absent=" className="btn btn-link col-4 whatsApp-link">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </>
    )
}

export default CarouselHome
import { categories } from '../../data'

const Footer = () => {
    console.log(process.env.REACT_APP_GOOGLE_API_KEY)
return (
        <footer>
            <section id={categories[3]}>
                <div className="container-fluid">
                    <h4>{categories[3]}</h4>
                    <div className="row">
                        <div id="horario" className="container  col-md-6 col-lg-3">
                            <div className="icon-container">
                                <div className="icon">
                                    <i className="far fa-clock"></i>
                                </div>
                            </div>
                            <div id="timetable" className="container">
                                <table className="table col-8 offset-2">
                                    <thead>
                                    </thead>
                                    <tbody>
                                        <tr id="day-1">
                                            <td className="day">Lunes</td>
                                            <td className="time">10 - 20 Hs</td>
                                        </tr>
                                        <tr id="day-2">
                                            <td className="day">Martes</td>
                                            <td className="time">10 - 20 Hs</td>
                                        </tr>
                                        <tr id="day-3">
                                            <td className="day">Miercoles</td>
                                            <td className="time">10 - 20 Hs</td>
                                        </tr>
                                        <tr id="day-4">
                                            <td className="day">Jueves</td>
                                            <td className="time">10 - 20 Hs</td>
                                        </tr>
                                        <tr id="day-5">
                                            <td className="day">Viernes</td>
                                            <td className="time">10 - 20 Hs</td>
                                        </tr>
                                        <tr id="day-6">
                                            <td className="day">Sabado</td>
                                            <td className="time">10 - 13 Hs</td>
                                        </tr>
                                        <tr id="day-0">
                                            <td className="day">Domingo</td>
                                            <td className="time">CERRADO</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div id="telefono" className="container  col-md-6 col-lg-3">
                            <div className="icon-container">
                                <div className="icon">
                                    <i className="fas fa-mobile-alt"></i>
                                </div>
                            </div>
                            <div className="container text-center">
                                <div>
                                    Solicitá tu Turno <br/>
                                    Tel: <span><a href="tel:+541148547676">011 4854-7676</a></span><br/>
                                    WhatsApp: <span><a
                                            href="https://api.whatsapp.com/send?phone=5491167485220&text=&source=&data=&app_absent=">011
                                            6748-5220</a></span>
                                </div>
                            </div>
                        </div>

                        <div id="direccion" className="container  col-md-6 col-lg-3">
                            <div className="icon-container">
                                <div className="icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                            </div>
                            <div className="container text-center">
                                <address>
                                    Av. Corrientes 4924 - Piso 6<br/>
                                    CP C1414, Capital Federal<br/>
                                    Buenos Aires, Argentina. <br/>
                                    <a href="https://goo.gl/maps/tCw7LczfgJvjPbFC6">Cómo llegar</a>
                                </address>
                            </div>
                        </div>

                        <div id="email" className="container  col-md-6 col-lg-3">
                            <div className="icon-container">
                                <div className="icon">
                                    <i className="far fa-envelope"></i>
                                </div>
                            </div>
                            <div className="container text-center">
                                <p>lbnconsultorio@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div id="map-google">
                        <iframe width="100%" height="220" frameBorder="0" style={{border:"0"}}
                        
                            src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJozmiOnLKvJURe-7Uv1aODw0&key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
                            allowFullScreen></iframe>
                    </div>
                </div>
            </section>
            <div id="footer-copyright" className="container">
                <p>LBN Odontologia ® | Consultorio Odontológico Especializado de Alta Tecnología. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    )
}

export default Footer
import { categories } from '../../data'
import { useEffect } from 'react'
import $ from 'jquery'

const Technology = () => {

    useEffect(() => {
        $('#myTab a').each(function (index, value) {
            $(value).click(function (e) {
                $(window).scrollTop(($('#myTab')).offset().top - 80);
            });
        });
    
    }, [])
return (
    <section id={categories[1]}>
        <h4>{categories[1]}</h4>
        <h6>
            La digitalización de la odontología avanza a pasos agigantados. Por ello entendemos a la tecnología como una
            herramienta fundamental para lograr los resultados buscados.
        </h6>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
                <a className="nav-link active" id="tecno1-tab" data-toggle="tab" href="#tecno1" role="tab"
                    aria-controls="tecno1" aria-selected="true">Alineadores Invisibles</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="tecno2-tab" data-toggle="tab" href="#tecno2" role="tab" aria-controls="tecno2"
                    aria-selected="false">Impresión Digital 3D</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="tecno3-tab" data-toggle="tab" href="#tecno3" role="tab" aria-controls="tecno3"
                    aria-selected="false">Escaneo Intraoral</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="tecno4-tab" data-toggle="tab" href="#tecno4" role="tab" aria-controls="tecno4"
                    aria-selected="false">Radiovisiógrafo Digital</a>
            </li>
        </ul>
        <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="tecno1" role="tabpanel" aria-labelledby="tecno1-tab">
                <img src={`img/tecno/Alineadores Invisibles.jpg`}
                    alt="Recepcion LBN Odontologia, consultorio odontologico en Buenos Aires, Argentina"/>
                <p>
                    Estos procedimientos tienen la finalidad de mejorar la forma, tamaño y color de los dientes en
                    armonía con tu sonrisa.
                    Contamos con equipamiento avanzado para planificar y recrerar digitalmente tu sonrisa, que nos ayuda
                    a visualizar como quedará tu sonrisa luego del tratamiento elegido.

                </p>
            </div>
            <div className="tab-pane fade" id="tecno2" role="tabpanel" aria-labelledby="tecno2-tab">
                <img src={`img/tecno/impresion_digital_3d.jpg`}
                    alt="Recepcion LBN Odontologia, consultorio odontologico en Buenos Aires, Argentina"/>
                <p>
                    Utilizamos una impresora 3D, como complemento ideal para el escaner intraoral,
                    a partir de este equipo imprimimos el modelo de tu boca, no solo para el diagnóstico,
                    sino también para confeccionar los alineadores de ortodoncia y realizar el diseño digital de
                    sonrisa.
                </p>
            </div>
            <div className="tab-pane fade" id="tecno3" role="tabpanel" aria-labelledby="tecno3-tab">
                <img src={`img/tecno/atencionLBNOdontologia.jpg`}
                    alt="Recepcion LBN Odontologia, consultorio odontologico en Buenos Aires, Argentina"/>
                <p>
                    La digitalización de tu boca mediante un escaner es el primer paso en tu tratamiento.
                    Utilizamos un software de diseño informatico que permite planificar y recrear digitalmente el
                    tratamiento al que se va a someter al paciente.
                    Nos brinda un punto de vista mas eficaz y certero para alcanzar los resultados deseados.
                </p>
            </div>
            <div className="tab-pane fade" id="tecno4" role="tabpanel" aria-labelledby="tecno4-tab">
                <img src={`img/tecno/radiovisiografo.jpg`}
                    alt="Recepcion LBN Odontologia, consultorio odontologico en Buenos Aires, Argentina"/>
                <p>
                    Esta herramienta nos permite la toma de radiografias en menos de 3 segundos, con menos radiacion y
                    con una incalculable calidad diagnostica.
                </p>
            </div>
        </div>
    </section>
    )
}

export default Technology
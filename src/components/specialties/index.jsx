import { useEffect } from 'react'
import $ from 'jquery'
import { categories, specialties } from '../../data'

const Specialties = () => {

    useEffect(() => {
        // First Tab show - Specialties
        $('#v-pills-tab:first-child a').first().tab('show')
    }, [])

    return (
        <section id={categories[0]}>
            <h4>{categories[0]}</h4>
            <h6>
            Nuestro equipo está integrado por odontólogos especializados en todas las áreas, lo que nos permite ofrecerte una atención multidisciplinaria, asegurando que todas tus necesidades puedan ser atendidas en el mismo lugar.
            </h6>
            <div className="accordion" id="accordionSpecialities">
                {
                    specialties.map((sp,index)=>{

                        <div className="card">
                        <div className="card-header" id={`card-${sp.name}`}>
                            <h5 className="mb-0">
                            <button className="btn btn-link" type="button" data-toggle="collapse" data-target={`#collapse${sp.name}`} aria-expanded="true" aria-controls="collapseOne">
                                {sp.name}
                            </button>
                            </h5>
                        </div>
        
                        <div id={`collapse${sp.name}`} className="collapse" aria-labelledby="headingOne" data-parent="#accordionSpecialities">
                            <div className="card-body">
                            <p> {sp.text} </p>
                            
                            {
                                (sp.treatments) && (

                                    <div className="">
                                    <div className="treatments">
                                        Tratamientos:
                                    </div>
                                    <ul>
                                        {
                                            sp.treatments.map((tr,index)=>
                                                <li key={tr+index} className="btn btn-link" type="button" data-toggle="modal" data-target="#treatmentsModal">{tr}</li>
                                            )
                                        }
        
                                    </ul>
                                    </div>
                                
                                )

                            }
                            
                            
                            </div>
                        </div>
                        </div>

                    })
                }

            {/* @foreach ($specialties as $key => $value)
                <div className="card">
                <div className="card-header" id="card-{{$key}}">
                    <h5 className="mb-0">
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse{{$key}}" aria-expanded="true" aria-controls="collapseOne">
                        {{$key}}
                    </button>
                    </h5>
                </div>

                <div id="collapse{{$key}}" className="collapse" aria-labelledby="headingOne" data-parent="#accordionSpecialities">
                    <div className="card-body">
                    <p> {{$value['text']}} </p>
                    @if ($value['treatments'])
                        <div className="">
                        <div className="treatments">
                            Tratamientos:
                        </div>
                        <ul>
                            @foreach ($value['treatments'] as $key => $value)

                                <li className="btn btn-link" type="button" data-toggle="modal" data-target="#treatmentsModal">{{$value}}</li>

                            @endforeach
                        </ul>
                        </div>
                    @endif
                    </div>
                </div>
                </div>
            @endforeach */}
        </div>

        <div id="navSpecialities">
            <div className="row">
            <div className="col-3">
                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    {
                        specialties.map((el,index)=>
                            <a key={el+index} className={`btn btn-link`}   id={`v-pills-${index}-tab`} data-toggle="pill" href={`#v-pills-${index}`} role="tab" aria-controls={`v-pills-${index}`} aria-selected="true">
                                {el.name}
                            </a>
                        )
                    }
                </div>
            </div>
            <div className="col-9 specialties-content">
                <div className="tab-content" id="v-pills-tabContent">
                    {
                        specialties.map((el, index)=>{
                            return (
                            <div key={el+index} className="tab-pane fade" id={`v-pills-${index}`} role="tabpanel" aria-labelledby={`v-pills-${index}-tab`}>
                                <p className='specialties-text'>{el.text}</p> 
                                {
                                    (el.treatments.length > 0) &&
                                    <div className="">
                                        <div className="treatments">
                                            Tratamientos:
                                        </div>
                                        <ul>
                                            {
                                                el.treatments.map((el,ind)=>
                                                    <li key={el+ind} className="btn btn-link" type="button" data-toggle="modal" data-target="#treatmentsModal">{el}</li>
                                                )
                                            }
                                        </ul>
                                    </div>
                                }
                            </div>
                        )})
                    }
                </div>
            </div>
            </div>
        </div>

        </section>
    )
}

export default Specialties
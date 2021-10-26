import { categories, team } from '../../data'

const Team = () => {
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
import React, {Component} from 'react'
import NavbarMenu from '../components/NavbarMenu'
import CarouselHome from '../components/CarouselHome'
import imagen from '../img/imagen1.png'

class Home extends Component{
    render = ()=>(
        <div className="container-fluid" > 
        <NavbarMenu/>
        <CarouselHome/>
            <div className="row">
                <div className="quienes-somos">
                    <h1 className="text-center">¿Quienes somos?</h1>
                    <p className="text-center parrafo-inicio titulo">
                    Ea sed etiam senserit volutpat, prad melius accommodare. Magna dictas saperet eu usu. 
                    Dictas aperiri fuisset in his. Errem fuisset eligendi in sit, duo oratio placerat eu, 
                    fabulas laoreet facilis usu ne. Qui cu ignota disputando, ne viderer eripuit has. 
                    Id quis erat habeo has. Et magna platonem mandamus eum, an debet noster mea.
                    </p>
                </div>
            </div>
            <div className="row cta-comprar">
                <div className=" text-s40">
                    <h1 className="text-center text-uppercase titulo">¿Te gustaria organizar un hackaton, cursos o talleres en tu ciudad?</h1>
                    <p className="text-center parrafo-cta">
                    Contáctanos y cuentanosla historia de por qué te gustaria tener un hackaton en tu ciudad.
                    </p>
                    <button value="Contáctanos" className="boton-cta" >Contáctanos</button>
                </div>
            </div>
            <div className="row">
                <div className="quienes-somos">
                    <h1 className="text-center text-uppercase titulo">Inscribete a nuestro newsletter</h1>
                    <p className="text-center parrafo-inicio">
                        Enterate de nuestros proximos eventos, ofertas de trabajo y mas.
                    </p>
                    <input placeholder="Dirección de e-mail" className="input-cta" />
                    <button value="Contáctanos" className="boton-cta" >Inscribete</button>
                </div>
            </div>
            <div className="row" >
                <div className="fondo-gris">
                    
                </div>
            </div>
            <div className="row">
                <div className="quienes-somos">
                    <h1 className="text-center">CURSOS Y TALLERES</h1>
                    <p className="text-center parrafo-inicio titulo">
                    Estos son nuestros proximos eventos y talleres
                    </p>
                    <div className="row talleres-cursos">
                    <div class="col-xs-12 col-md-3 col-md-offset-2">
                    <a href="#" class="thumbnail ">
                    <img src={imagen} height={250} width={250} alt="..."/>
                        </a>
                    </div>
                    <div class="col-xs-12 col-md-3 col-md-offset-2">
                    <a href="#" class="thumbnail">
                        <img src={imagen} height={250} width={250} alt="..."/>
                        </a>
                    </div>
                    </div>
                    <div className="row">
                    <div class="col-xs-12 col-md-3 col-md-offset-2 talleres-cursos">
                    <a href="#" class="thumbnail">
                    <img src={imagen} height={250} width={250} alt="..."/>
                        </a>
                    </div>
                    <div class="col-xs-12 col-md-3 col-md-offset-2 talleres-cursos">
                    <a href="#" class="thumbnail">
                    <img src={imagen} height={250} width={250} alt="..."/>
                        </a>
                    </div>
                    </div>
                    
                </div>
            </div>
            <div className="row cta-comprar">
                <div className="cta-buscar ">
                    <h1 className="text-center text-uppercase titulo">¿Buscas trabajo como desarrollador o buscas desarrolladores para un proyecto?</h1>
                    <p className="text-center parrafo-cta">
                    Contamos con amplia base de datos de desarrolladores para recomendarte, el proyecto o el desarrollador que cumpla con tus necesidades.
                    </p>
                    <button value="Contáctanos" className="boton-cta1" >Busco trabajo</button>
                    <button value="Contáctanos" className="boton-cta1" >Quiero contratar</button>
                </div>
            </div>
        </div>
    )
}
export default Home;
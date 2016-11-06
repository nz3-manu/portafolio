var ReactDom = require("react-dom");
var React = require("react");



/* header */
var Header = React.createClass({
  componentWillMount:function(){
  fetch('itemsMenu.json').then(menu => menu.json(), e => {
        console.log("Obtención fallida", e);}).then(function(json){
          console.log(json);
        })
  },
  render:function(){
    return(
      <header>
        <div className="header">
            <div className="wrap__header">
                <div className="logo">
                    <p> Manuel Ramirez</p>
                </div>
                <div className="hamburguer_container" data-toggle-menu>
                    <div className="hamburger"> </div>
                </div>
                <nav className="nav">
                    <div className="nav_container">
                        <ul className="nav_list">
                            <li><a href="#home">Acerca de mí</a></li>
                            <li><a href="#services">Servicios</a></li>
                            <li><a href="#portafolio">Portafolio</a></li>
                            <li><a href="#contact">Contactarme</a></li>
                        </ul>
                        <p className="nav_copyright"> Manuel Ramirez </p>
                    </div>
                </nav>
            </div>
        </div>
    </header>);
  }
});

/* Hero Section  Footer*/
var Section = React.createClass({
  render:function(){
    return(
  <div className="wrap_content overlay">
    <div className="content_section">
      <div className="hero">
          <div id="particles-js">
              <div className="photo"><img src="img/freelancer-web-developer-picture.jpg" alt="Profile picture freelancer web developer" /></div>
          </div>
      </div>
      <section>
        <div id="wrap_section">
            <div className="section_text">
                <h1 id="home"> Front-end developer </h1>
                <p>
                    Soy Ingeniero Industrial y desarrollador Front-end apasionado por la programación y desarrollo de páginas web, utilizando buenas prácticas al manejar: HTML5, CSS3, POSTCSS, SASS (Object Oriented CSS), JavaScript, jQuery, utilizando control de versiones
                    como Git, diseño responsive utilizando la metodología mobile first y Gulp. Me considero alguien inquieto en la búsqueda de nuevas tendencias en desarrollo de páginas web que permitan maximizar el rendimiento en el lado del cliente y mejorar
                    así la experiencia de los usuarios. Siempre estoy en búsqueda de nuevos retos y abierto a nuevos proyectos.
                </p>
                <div className="row wrap__skillbar">
                      <div className="col-xs-12 col-sm-6 col-md-4">
                        <div className="skillbar clearfix " data-percent="100%">
                            <div className="skillbar-title" style={{background: "#e67e22"}}><span>HTML5</span></div>
                            <div className="skillbar-bar" style={{background: "#e67e22"}}></div>
                            <div className="skill-bar-percent">100%</div>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-6 col-md-4">
                        <div className="skillbar clearfix " data-percent="100%">
                            <div className="skillbar-title" style={{background: "#3498db"}}><span>CSS3</span></div>
                            <div className="skillbar-bar" style={{background: "#3498db"}}></div>
                            <div className="skill-bar-percent">100%</div>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-6 col-md-4">
                        <div className="skillbar clearfix " data-percent="100%">
                            <div className="skillbar-title" style={{background: "#333333"}}><span>jQuery</span></div>
                            <div className="skillbar-bar" style={{background: "#333333"}}></div>
                            <div className="skill-bar-percent">100%</div>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-6 col-md-4">
                        <div className="skillbar clearfix " data-percent="100%">
                            <div className="skillbar-title" style={{background: "#333333"}}><span>ECMAScript 6</span></div>
                            <div className="skillbar-bar" style={{background: "#333333"}}></div>
                            <div className="skill-bar-percent">100%</div>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-6 col-md-4">
                        <div className="skillbar clearfix " data-percent="100%">
                            <div className="skillbar-title" style={{background: "#5a68a5"}}><span>Gulp</span></div>
                            <div className="skillbar-bar" style={{background: "#5a68a5"}}></div>
                            <div className="skill-bar-percent">100%</div>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-6 col-md-4">
                        <div className="skillbar clearfix " data-percent="100%">
                            <div className="skillbar-title" style={{background: "#9E9E9E"}}><span>Wordpress</span></div>
                            <div className="skillbar-bar" style={{background: "#9E9E9E"}}></div>
                            <div className="skill-bar-percent">100%</div>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-6 col-md-4">
                        <div className="skillbar clearfix " data-percent="100%">
                            <div className="skillbar-title" style={{background: "#2ecc71"}}><span>GIT</span></div>
                            <div className="skillbar-bar" style={{background: "#2ecc71"}}></div>
                            <div className="skill-bar-percent">100%</div>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-6 col-md-4">
                        <div className="skillbar clearfix " data-percent="100%">
                            <div className="skillbar-title" style={{background: "#9E9E9E"}}><span>Jekyll</span></div>
                            <div className="skillbar-bar"   style={{background: "#9E9E9E"}}></div>
                            <div className="skill-bar-percent">100%</div>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-6 col-md-4">
                        <div className="skillbar clearfix " data-percent="100%">
                            <div className="skillbar-title" style={{background: "#FFC107"}}><span>eCommerce</span></div>
                            <div className="skillbar-bar"  style={{background: "#FFC107"}}></div>
                            <div className="skill-bar-percent">100%</div>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-6 col-md-4">
                        <div className="skillbar clearfix " data-percent="100%">
                            <div className="skillbar-title" style={{background: "rgb(52, 152, 219)"}}><span>Sass</span></div>
                            <div className="skillbar-bar" style={{background: "rgb(52, 152, 219)"}}></div>
                            <div className="skill-bar-percent">100%</div>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-6 col-md-4">
                        <div className="skillbar clearfix " data-percent="100%">
                            <div className="skillbar-title" style={{background: "#00d8ff"}}><span>React</span></div>
                            <div className="skillbar-bar" style={{background: "#00d8ff"}}></div>
                            <div className="skill-bar-percent">100%</div>
                        </div>
                      </div>
                </div>
                <h2 id="services">Servicios</h2>
                <div className="wrap__services">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-4 margin-col">
                            <div className="icon-pencil2"></div>
                            <h3>Diseño web</h3>
                            <p>
                                Su sitio web está diseñado para cumplir con sus expectativas y las de sus clientes. Es importante que su sitio web se ve bien en los usuarios, permitiendo a su sitio web para tener éxito y cumplir con los objetivos que estamos esforzando.
                            </p>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 margin-col">
                            <div className="icon-embed2"></div>
                            <h3>Desarrollo Web</h3>
                            <p>
                                Me encargo de desarrollar todos los sitios web que funcionen como se requieran. Utilizando siempre la mejor tecnología permitiendo así optimizar el rendimiento y ser más eficiente, esto proporcionará una mejor experiencia para usted y sus usuarios. Sea
                                cual sea su idea, puedo convertirlo en una realidad.
                            </p>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 margin-col">
                            <div className="icon-mobile"></div>
                            <h3>Responsive Design</h3>
                            <p>
                                Casi la mitad de todo el tráfico de Internet es ahora de una audiencia móvil. Es importante que su sitio web sea compatible con todos los tamaños de pantalla en esta era moderna. Me aseguro de que su sitio web sea responsive, lo que significa que es compatible
                                con cualquier tamaño de la pantalla en cualquier dispositivo.
                            </p>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 margin-col">
                            <div className="icon-search"></div>
                            <h3>SEO</h3>
                            <p>
                                Cuando estoy creando sitios web, siempre pienso en la optimización de motores de búsqueda (SEO) en mi mente. Llevo a cabo las prácticas estándar de SEO on-page en cada página de cada sitio web que creo, lo que permite su sitio rango más alto en los motores
                                de búsqueda - potencialmente conducir más tráfico a su sitio.
                            </p>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 margin-col">
                            <div className="icon-briefcase"></div>
                            <h3>eCommerce</h3>
                            <p>
                                Con años de experiencia en el comercio electrónico, puedo desarrollar una solución de comercio electrónico adaptado a las necesidades de usted, su negocio y los clientes. Y desarrollar soluciones eficaces, eficientes y de comercio electrónico bien diseñados
                                para que coincida con sus requisitos exactos.
                            </p>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 margin-col">
                            <div className="icon-insert-template"></div>
                            <h3>Gestión de contenido</h3>
                            <p>
                                Es importante que usted sea capaz de manejar su sitio web, desde cualquier lugar en cualquier momento. yo desarrollo sistemas de gestión de contenidos que le permiten ver sus datos de sitios web y editar el contenido importante en su sitio web, que le
                                permite mantener actualizado el contenido.
                            </p>
                        </div>
                    </div>
                </div>
                <h2 id="portafolio"> Portafolio </h2>
                <div className="wrap_portafolio">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-4 margin-col">
                            <a href="http://www.hipscc.org/" target="_blank"><img className="img-hover img-responsive widthFull" src="img/web-hipscc.png" alt="website hipscc" /></a>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 margin-col">
                            <a href="http://solo1noche.com/" target="_blank"><img className="img-hover img-responsive widthFull" src="img/web-Solo1noche.png" alt="website hipscc" /></a>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 margin-col">
                            <a href="http://www.hipscc.org/" target="_blank"><img className="img-hover img-responsive widthFull" src="img/web-freelancer-developer.png" alt="website hipscc" /></a>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-offset-4 margin-col">
                            <a href="https://trend4less.net/" target="_blank" ><img className="img-hover img-responsive widthFull last-img" src="img/web-trend4less.png" alt="website trend4less" /></a>
                        </div>
                    </div>
                </div>
                <h2 id="contact"> Contactarme </h2>
                <form id="form" method="POST" className="contact__form">
                    <p className="name">
                        <input name="name" type="text" className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Nombre" id="name" />
                    </p>
                    <p className="email">
                        <input name="email" type="email" className="validate[required,custom[email]] feedback-input" required="required" placeholder="Email" id="email" />
                    </p>
                    <p className="text">
                        <textarea name="text" className="validate[required,length[6,300]] feedback-input" required="required" placeholder="Comentario" id="comment"></textarea>
                    </p>
                    <div className="submit">
                        <input type="submit" value="Enviar" className="btn-hover" id="button-blue" />
                        <div className="ease"></div>
                    </div>
                </form>
                <div id="dialogoverlay"></div>
                <div id="dialogbox">
                    <div className="textBox__dialogo">
                        <div id="dialogboxhead"></div>
                        <div id="dialogboxbody"></div>
                        <div id="dialogboxfoot"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>

    <footer className="site__footer">
        <div className="footer__contect">
            <div className="content__text">
                <small> ©Copyright 2016 by Manuel Alejandro All right reserved</small>
            </div>
            <div className="content__icon">
                <a href="https://www.linkedin.com/in/manuelrc" target="_blank" className="icon-linkedin"> </a>
                <a href="https://twitter.com/nz3_manu" target="_blank" className="icon-twitter"> </a>
                <a href="https://github.com/nz3-manu" target="_blank" className="icon-github"> </a>
            </div>
        </div>
    </footer>
  </div>)}
})
/*Principal div*/
var App = React.createClass({
  render:function(){
    return(
      <div>
        <Header />
        <Section />
      </div>
    )}
})
ReactDom.render(<App />, document.getElementById('app'));

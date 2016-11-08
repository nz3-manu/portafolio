var ReactDom = require("react-dom");
var React = require("react");

/* li json */
var ItemMenu = React.createClass({
  render: function () {
    return (
      <li><a href={this.props.href}> {this.props.li} </a></li>
    )
  }
})

/* section json*/
var SectionJson = React.createClass({
render: function () {
  return (
    <div className = "col-xs-12 col-sm-6 col-md-4 margin-col">
        <div className = {this.props.icon}> </div>
        <h3> {this.props.title} </h3>
        <p> {this.props.content} </p>
    </div>
  )
}
})

/* header */
var Header = React.createClass({
  getInitialState: function() {
    return {
       menu: []
    };
  },
  componentDidMount: function () {
  fetch('itemsMenu.json').then(menuJson => menuJson.json(), e => {
        console.log("Obtención fallida", e);}).then(menuJson => {
          this.setState({
              menu: menuJson
          })
        })
  },
  render: function () {
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
                          {this.state.menu.map(liMenu => {
                            return < ItemMenu li = {liMenu.item} href={liMenu.href} key={liMenu.item}/>
                          })}
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
  getInitialState: function() {
    return {
      section : []
    }
  },
  componentDidMount: function() {
    fetch('section.json').then(sectionJson => sectionJson.json(), e => {
    console.log("Obtención fallida", e);}).then(sectionJson => {
      this.setState({
        section: sectionJson
      })
    })
  },
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
                      {this.state.section.map(section => {
                        return < SectionJson icon={section.icon} title={section.title} content={section.content} key={section.icon}/>
                      })}
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

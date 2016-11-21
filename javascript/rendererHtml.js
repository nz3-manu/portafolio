var ReactDom = require("react-dom");
var React = require("react");
var $ = require("jquery");
/* li json */
var ItemMenu = React.createClass({
  render: function () {
    return (
      <li><a href= {this.props.href}> {this.props.li} </a></li>
    )
  }
})
/* Skillbar json*/
var Skillbar = React.createClass({
  render:function () {
    return (
      <div className="col-xs-12 col-sm-6 col-md-4 colWithoutPadding">
        <div className="skillbar clearfix " data-percent = {"100%"}>
            <div className="skillbar-title" style={{background: this.props.sidebarc}}><span>{this.props.tool}</span></div>
            <div className="skillbar-bar"   style={{background: this.props.sidebarc}}></div>
            <div className="skill-bar-percent">100%</div>
        </div>
      </div>
    )
  }
})

/* section json*/
var SectionJson = React.createClass({
render: function () {
  return (
    <div className = "col-xs-12 col-sm-6 col-md-4 colWithoutPadding paddingBottom">
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
  fetch('json/itemsMenu.json').then(menuJson => menuJson.json(), e => {
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
                          {this.state.menu.map((liMenu, i) => {
                            return < ItemMenu li = {liMenu.item} href={liMenu.href} key={i}/>
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
      skilltools: [],
      section: []
    }
  },
  componentDidUpdate:function(prevProps,prevState){
    $(document).ready(function() {
        $('.skillbar').each(function() {
            $(this).find('.skillbar-bar').animate({
                width: $(this).attr('data-percent')
            }, 6000);
        });
        /*function change color name */
        setInterval(function() {
          let colorsChange = ['#ffffff', '#f1dddd', '#d2d2d2'];
          let longColor = (colorsChange.length);
          let number = Math.floor(Math.random()*(longColor))+ 0
          $('.logo p').css('color', colorsChange[number]).fadeIn( "slow" );

        }, 2000 )
    });
 },
  componentDidMount: function() {
    fetch('json/section.json').then(sectionJson => sectionJson.json(), e => {
    console.log("Obtención fallida", e);}).then(sectionJson => {
      this.setState({
        section: sectionJson
      })
    });
    fetch('json/skillBar.json').then(skillbarJson => skillbarJson.json(), e => {
      console.log("Obtención fallida", e);}).then(skillbarJson => {
        this.setState({
          skilltools: skillbarJson
        })
      });
  },
  render: function() {
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
                        <h1 id="home">FRONT-END DEVELOPER</h1>
                        <p>
                            Soy Desarrollador Front-end apasionado por la programación y desarrollo de páginas web, utilizando buenas prácticas al manejar: HTML5, CSS3, POSTCSS, SASS (Object Oriented CSS), JavaScript, jQuery, utilizando control de versiones
                            como Git, diseño responsive utilizando la metodología mobile first y Gulp. Me considero alguien inquieto en la búsqueda de nuevas tendencias en desarrollo de páginas web que permitan maximizar el rendimiento en el lado del cliente y mejorar
                            así la experiencia de los usuarios. Siempre estoy en búsqueda de nuevos retos y abierto a nuevos proyectos.
                        </p>
                        <div className="inner-container">
                          <div className="row wrap__skillbar">
                              {this.state.skilltools.map((skillbar, i) => {
                                return < Skillbar tool = {skillbar.title} sidebarc = {skillbar.colorSidebar} key={i}/>
                              })}
                          </div>
                        </div>
                        <h2 id="services"> SERVICIOS</h2>
                        <div className="wrap__services">
                          <div className="inner-container">
                            <div className="row services__items">
                              {this.state.section.map((section, i) => {
                                return < SectionJson icon={section.icon} title={section.title} content={section.content} key={i}/>
                              })}
                            </div>
                          </div>
                        </div>
                        <h2 id="portafolio"> PORTAFOLIO </h2>
                        <div className="wrap_portafolio">
                          <div className="inner-container">
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
                        </div>
                        <h2 id="contact"> CONTACTARME </h2>
                        <form id="form" method="POST" className="contact__form">
                            <p className="name">
                                <input name="name" type="text" className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Nombre" id="name" />
                            </p>
                            <p className="email">
                                <input name="email" type="email" className="validate[required,custom[email]] feedback-input" required="required" placeholder="Email" name="_replyto" id="email" />
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
/* Principal div */
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

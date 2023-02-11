import './about.style.css'
import profileDp from '../../assets/1.jpg'
import ReactLogo from '../react/react.component.jsx'
import Js from '../js/js.component'
import ReduxLogo from '../redux/redux.component'
import GolangLogo from '../golang/golang.component'
import CssLogo from '../css/css.component'
import CppLogo from '../cpp/cpp.component'
import PostgresLogo from '../postgres/postgres.component'
import PythonLogo from '../python/python.component'
const About = () => {
  return (
    <div className='main-container about-container'>
      <div className='about-content-grid'>
        <div className='left'>
          <div className='section-heading'>
            About <span className='highlight'>me</span>
          </div>
          <div className='about-content-grid-desp'>
            Hello, My name is Rishav Raj. I built apps for web. I made many
            <span className='highlight'> web apps </span>
            and few <span className='highlight'>command line tools</span>. I
            love exploring computers either software or underling hardware.
          </div>

          <div className='tech-section'>
            <div className='heading'>I work with following technologies</div>
            <div className='tech-grid'>
              <div className='tech-grid-item'>
                <ReactLogo className='tech-logo' />
                <div className='tech-title'>React js</div>
              </div>
              <div className='tech-grid-item'>
                <ReduxLogo className='tech-logo' />
                <div className='tech-title'>Redux</div>
              </div>
              <div className='tech-grid-item'>
                <Js className='tech-logo' />
                <div className='tech-title'>Javascript</div>
              </div>
              <div className='tech-grid-item'>
                <GolangLogo className='tech-logo' />
                <div className='tech-title'>Go</div>
              </div>
              <div className='tech-grid-item'>
                <CssLogo className='tech-logo' />
                <div className='tech-title'>Css</div>
              </div>
              <div className='tech-grid-item'>
                <CppLogo className='tech-logo' />
                <div className='tech-title'>Cpp</div>
              </div>
              <div className='tech-grid-item'>
                <PostgresLogo className='tech-logo' />
                <div className='tech-title'>Postgres</div>
              </div>
              <div className='tech-grid-item'>
                <PythonLogo className='tech-logo' />
                <div className='tech-title'>Python</div>
              </div>
            </div>
          </div>
        </div>
        <div className='right'>
          {/* dkd */}
          <img src={profileDp} className='profile' />
        </div>
      </div>
    </div>
  )
}

export default About

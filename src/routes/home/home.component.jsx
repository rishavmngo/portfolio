import About from '../about/about.component'
import './home.style.css'
const Home = () => {
  return (
    <div className='home-component'>
      <div className='hero-container'>
        <div className='navigation'>
          <span className='navigation-link'>work</span>
          <span className='divider'></span>
          <span className='navigation-link'>blog</span>
        </div>
        <div className='title'>
          <div className='intro'>I am</div>
          <div className='name'>
            <span className='firstName'>Rishav </span>
            <span className='lastName'>
              Raj
              <div className='circle'></div>
            </span>
          </div>
        </div>
        <div className='hero-line'>
          <div>
            <span className='hero-line-color'>Developer</span> on duty
          </div>
          <div>
            love making <span className='hero-line-color'>web apps</span>
          </div>
        </div>
      </div>
      <About />
    </div>
  )
}

export default Home

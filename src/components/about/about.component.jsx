import './about.style.css'
import profileDp from '../../assets/1.jpg'
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
            <span className='highlight'>web apps </span>
            and few <span className='highlight'>command line tools</span>. I
            love exploring computers either software or underling hardware.
          </div>
        </div>
        <div className='right'>
          <img src={profileDp} className='profile' />
        </div>
      </div>
    </div>
  )
}

export default About

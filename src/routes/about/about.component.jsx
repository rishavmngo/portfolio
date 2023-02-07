import './about.style.css'
const About = () => {
  return (
    <div className='about-component'>
      <h2 className='about-component-main-title'>
        About <span className='theme-color'>me</span>
      </h2>
      <div className='about-me-container'>
        <div className='about-me-desp'>
          Hello, My name is Rishav Raj. I built apps for web. I made many{' '}
          <span className='theme-color'>web apps </span>
          and few <span className='theme-color'>command line tools</span>. I
          love exploring computers either software or underling hardware.
        </div>
        <div className='about-me-pic'></div>
      </div>
    </div>
  )
}

export default About

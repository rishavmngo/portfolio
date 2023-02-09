import './header.styles.css'
import { FaGithub, FaTwitter } from 'react-icons/fa'

const Header = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  return (
    <div className='main-container header-container'>
      <div className='navigation'>
        <a href='#' className='nav__link left'>
          work
        </a>
        <div className='nav__link_seperator'></div>
        <a href='#' className='nav__link right'>
          blog
        </a>
      </div>
      <div className='main-title-container'>
        <div className='pre-title'>I am</div>
        <span className='main-title'>
          <span className='main-title__first_name'>Rishav </span>
          <span className='main-title__last_name'>
            Raj
            <div className='title-circle'></div>
          </span>
        </span>
      </div>
      <div className='header-quote-container'>
        <div className='first'>
          <span className='highlight'>Developer </span>on duty
        </div>
        <div className='second'>
          love making <span className='highlight'>web apps</span>
        </div>
      </div>
      <div className='socials-container'>
        <FaTwitter
          onClick={() => openInNewTab('https://www.twitter.com/rishavmngo')}
        />
        <FaGithub
          onClick={() => openInNewTab('https://www.github.com/rishavmngo')}
        />
      </div>
    </div>
  )
}
export default Header

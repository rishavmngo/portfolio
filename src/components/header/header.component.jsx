import './header.styles.css'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { useEffect, useRef } from 'react'

const Header = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  const headerContainerRef = useRef()

  useEffect(() => {
    const container = headerContainerRef.current
    container.onmousemove = (e) => {
      const mouseX = e.clientX,
        mouseY = e.clientY
      const percentX = mouseX / container.offsetWidth,
        percentY = mouseY / container.offsetHeight

      // container.style.backgroundPosition = `${Math.floor(percentX * 100)}% ${Math.floor(percentY * 100)}%`

      container.animate(
        {
          backgroundPosition: `${Math.floor(percentX * 100) / 10}% ${
            Math.floor(percentY * 100) / 10
          }%`,
        },
        {
          duration: 4000,
          fill: 'forwards',
          easing: 'ease',
        }
      )
    }
  })

  return (
    <div className='main-container header-container' ref={headerContainerRef}>
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

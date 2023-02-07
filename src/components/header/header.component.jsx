import './header.styles.css'

const Header = () => {
  return (
    <div className='main-container header-container'>
      <div className='navigation'>
        <a href='#' className='nav__link test'>
          work
        </a>
        <div className='nav__link_seperator'></div>
        <a href='#' className='nav__link testa'>
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
    </div>
  )
}
export default Header

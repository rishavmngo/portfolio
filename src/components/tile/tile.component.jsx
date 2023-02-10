import './tile.styles.css'
const Tile = ({ tile }) => {
  const openInNewTab = (url) => {
    if (url.length <= 0) return
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  return (
    <div className='tile' onClick={() => openInNewTab(tile.externalLink)}>
      <div className='tile-text'>
        <div className='tile-title'>{tile.title}</div>
        <div className='tile-desp'>{tile.desp}</div>
      </div>
      <img src={tile.image} className='tile-img' />
    </div>
  )
}

export default Tile

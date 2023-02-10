import { useEffect, useRef } from 'react'
import images from '../../assets/galleryImages'
import Tile from '../tile/tile.component'
import './work.styles.css'
const Work = () => {
  const gallery = useRef()
  const workContainer = useRef()
  useEffect(() => {
    workContainer.current.touchmove = (e) => {
      const mouseX = e.clientX,
        mouseY = e.clientY
      const xDecimal = mouseX / workContainer.current.offsetWidth,
        yDecimal = mouseY / workContainer.current.offsetHeight
      const maxX =
          gallery.current.offsetWidth - workContainer.current.offsetWidth,
        maxY = gallery.current.offsetHeight - workContainer.current.offsetHeight

      const panX = maxX * xDecimal * -1,
        panY = maxY * yDecimal * -1

      gallery.current.animate(
        {
          transform: `translate(${panX}px, ${panY}px)`,
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
    <>
      <div className='main-container work-container' ref={workContainer}>
        <div id='gallery' ref={gallery}>
          {images.map((imageItem) => (
            <Tile key={imageItem.id} tile={imageItem} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Work

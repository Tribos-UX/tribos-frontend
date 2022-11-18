// React hooks
import React, { useCallback, useEffect, useState } from 'react'

// Buttons
import { DotButton } from './CarouselButtons'

// Embla Carousel
import useEmblaCarousel from 'embla-carousel-react'

// styles
import styles from './styles/CarouselWithDots.module.scss'

const CarouselWithDots = ({ slides }: { slides: any[] }) => {
  const [emblaRef, embla] = useEmblaCarousel({
    align: 'start',
    dragFree: false,
    slidesToScroll: 3,
  })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])
  const scrollTo = useCallback(
    (index: number) => embla && embla.scrollTo(index),
    [embla]
  )

  const onSelect = useCallback(() => {
    if (!embla) return
    setSelectedIndex(embla.selectedScrollSnap())
    setPrevBtnEnabled(embla.canScrollPrev())
    setNextBtnEnabled(embla.canScrollNext())
  }, [embla, setSelectedIndex])

  useEffect(() => {
    if (!embla) return
    onSelect()
    setScrollSnaps(embla.scrollSnapList())
    embla.on('select', onSelect)
  }, [embla, setScrollSnaps, onSelect])

  return (
    <>
      <div className={styles.embla}>
        <div className={styles.embla__viewport} ref={emblaRef}>
          <div className={styles.embla__container}>
            {slides.map((slide: any, index: number) => (
              <div className={styles.embla__slide} key={index}>
                <div> {slide} </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.embla__dot}>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </>
  )
}

export default CarouselWithDots

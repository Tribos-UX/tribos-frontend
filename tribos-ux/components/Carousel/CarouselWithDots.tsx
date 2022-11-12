import useEmblaCarousel from 'embla-carousel-react'
import React, { useCallback, useEffect, useState } from 'react'
import { DotButton, NextButton, PrevButton } from './CarouselButtons'
import styles from './styles/carousel.module.scss'

const CarouselWithDots = ({ slides }) => {
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false })
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
        <div className={styles.embla__viewport} ref={viewportRef}>
          <div className={styles.embla__container}>
            {slides.map((slide: any, index: number) => (
              <div className={styles.embla__slide} key={index}>
                <div className={styles.embla__slide__inner}>{slide}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.embla__dots}>
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

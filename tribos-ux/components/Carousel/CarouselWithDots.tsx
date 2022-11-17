// React hooks
import React, { useCallback, useEffect, useState } from 'react'

// Buttons
import { DotButton } from './CarouselButtons'

// Embla Carousel
import useEmblaCarousel from 'embla-carousel-react'

// styles
import styles from './styles/carousel.module.scss'

interface CarouselWithButtonsProps {
  slides: React.ReactNode[]
}

const CarouselWithDots = ({ slides }: CarouselWithButtonsProps) => {
  const [emblaRef, embla] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    slidesToScroll: 3,
    align: 'start',
    
  })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
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

  useEffect(function mount() {
    function onScroll() {
      if (!embla) return
      const width = window.innerWidth
      console.log(width)
      let slidesToScroll = 3
      if (width < 1420 && width > 1132) {
        slidesToScroll = 3
      }
      if (width < 862 && width > 597) {
        slidesToScroll = 3
      }
      embla.reInit({
        containScroll: 'keepSnaps',
        slidesToScroll: slidesToScroll,
      })
    }

    window.addEventListener('resize', onScroll)

    return function unMount() {
      window.removeEventListener('resize', onScroll)
    }
  })

  useEffect(() => {
    if (!embla) return
    onSelect()
    setScrollSnaps(embla.scrollSnapList())
    embla.on('select', onSelect)
  }, [embla, setScrollSnaps, onSelect])

  const changeSlidesToScroll = useCallback(() => {
    if (!embla) return
    const width = window.innerWidth
    if (width < 1420 && width > 1132) {
      embla.reInit({
        containScroll: 'keepSnaps',
        slidesToScroll: 2,
      })
      console.log('reinited')
    }
  }, [embla])

  return (
    <>
      <div className={styles.embla}>
        <div className={styles.embla__viewport} ref={emblaRef}>
          <div className={styles.embla__container}>
            {slides.map((slide: any, index: React.Key) => (
              <div className={styles.embla__slide} key={index}>
                <div className={styles.embla__slide__inner}>{slide}</div>
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

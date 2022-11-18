// Embla Carousel
import useEmblaCarousel from 'embla-carousel-react'

// React
import { useCallback, useEffect, useState } from 'react'

// Buttons
import { NextButton, PrevButton } from './CarouselButtons'

// Styles
import styles from './styles/CarouselWithArrows.module.scss'

const CarouselWithArrow = ({ slides }: { slides: any[] }) => {
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [viewportRef, embla] = useEmblaCarousel({
    align: selectedIndex ? 'center' : 'start', // You might not want to do this
    containScroll: 'trimSnaps',
  })

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])
  const updatePrevNextButtonState = useCallback(() => {
    if (!embla) return
    setPrevBtnEnabled(embla.canScrollPrev())
    setNextBtnEnabled(embla.canScrollNext())
  }, [embla])

  useEffect(() => {
    if (!embla) return
    embla.on('select', updatePrevNextButtonState) // Set button states when the selected snap changes
    updatePrevNextButtonState() // Set button states when the carousel mounts
  }, [embla, updatePrevNextButtonState])

  return (
    <>
      <div className={styles.embla}>
        <div className={styles.embla__viewport} ref={viewportRef}>
          <div className={styles.embla__container}>
            {slides.length > 0 &&
              slides.map((cards: any, index: number) => (
                <div className={styles.embla__slide} key={index}>
                  <button className={styles.embla__slide__inner}>
                    {cards}
                  </button>
                </div>
              ))}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
    </>
  )
}

export default CarouselWithArrow

import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import React, { useCallback, useEffect, useState } from 'react'
import { NextButton, PrevButton } from './CarouselButtons'
import styles from './styles/CarouselTeste.module.scss'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
  imagebyIndex: any
}

const CarouselWithArrow: React.FC<PropType> = (props) => {
  const { slides, options, imagebyIndex } = props
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaRef, embla] = useEmblaCarousel(options)

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
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((index) => (
            <div className={styles.embla__slide} key={index}>
              {imagebyIndex(index)}
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  )
}

export default CarouselWithArrow

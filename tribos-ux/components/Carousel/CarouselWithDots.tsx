// React hooks
import React, { useCallback, useEffect, useState } from 'react'

// Buttons
import { DotButton } from './CarouselButtons'

// Embla Carousel
import useEmblaCarousel from 'embla-carousel-react'

interface CarouselWithButtonsProps {
  slides: React.ReactNode[]
}

const CarouselWithDots = ({ slides }: CarouselWithButtonsProps) => {
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false })
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

  useEffect(() => {
    if (!embla) return
    onSelect()
    setScrollSnaps(embla.scrollSnapList())
    embla.on('select', onSelect)
  }, [embla, setScrollSnaps, onSelect])

  return (
    <>
      <div className="relative max-h-[565px]  mx-auto ">
        <div className=" overflow-hidden w-full" ref={viewportRef}>
          <div className=" flex">
            {slides.map((slide: any, index: React.Key) => (
              <div className=" relative min-w-full" key={index}>
                {slide}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" flex justify-center pt-2 relative top-60 ">
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

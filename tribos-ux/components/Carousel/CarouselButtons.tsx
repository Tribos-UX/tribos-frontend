import React from 'react'

import styles from './styles/CarouselButtons.module.scss'

interface DotButtonProps {
  selected: boolean
  onClick: any
}

interface ArrowButtonProps {
  enabled: boolean
  onClick: any
  thumb?: boolean
}

export const DotButton = ({ selected, onClick }: DotButtonProps) => (
  <button
    className={selected ? styles.embla__dot : styles.embla__dot_selected}
    type="button"
    onClick={onClick}
  />
)

export const PrevButton = ({ enabled, onClick }: ArrowButtonProps) => (
  <button
    className={styles.embla__button_prev}
    onClick={onClick}
    disabled={!enabled}
  >
    <svg
      className={styles.embla__button__svg}
      width="6"
      height="14"
      viewBox="0 0 6 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.76746 13.8035C6.05344 13.5182 6.0792 13.0265 5.825 12.7055L1.44393 7.17224C1.36616 7.07401 1.36616 6.92599 1.44393 6.82776L5.825 1.29451C6.0792 0.973461 6.05344 0.48185 5.76747 0.196469C5.48149 -0.0889111 5.04359 -0.0599929 4.78939 0.261061L0.408322 5.7943C-0.136106 6.48191 -0.136105 7.51809 0.408322 8.2057L4.78939 13.7389C5.04359 14.06 5.48149 14.0889 5.76746 13.8035Z"
        fill="#FBFBFC"
      />
    </svg>
  </button>
)

export const NextButton = ({ enabled, onClick }: ArrowButtonProps) => (
  <button
    className={styles.embla__button_next}
    onClick={onClick}
    disabled={!enabled}
  >
    <svg className={styles.embla__button__svg} viewBox="0 0 238.003 238.003">
      <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" />
    </svg>
  </button>
)

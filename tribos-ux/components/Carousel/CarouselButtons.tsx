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
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="12" fill="#D87036" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.7675 18.8035C14.0534 18.5182 14.0792 18.0265 13.825 17.7055L9.44393 12.1722C9.36616 12.074 9.36616 11.926 9.44393 11.8278L13.825 6.29451C14.0792 5.97346 14.0534 5.48185 13.7675 5.19647C13.4815 4.91109 13.0436 4.94001 12.7894 5.26106L8.40832 10.7943C7.86389 11.4819 7.86389 12.5181 8.40832 13.2057L12.7894 18.7389C13.0436 19.06 13.4815 19.0889 13.7675 18.8035Z"
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
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="12" fill="#D87036" />
      <g clipPath="url(#clip0_2589_7697)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.2325 18.8035C9.94656 18.5182 9.9208 18.0265 10.175 17.7055L14.5561 12.1722C14.6338 12.074 14.6338 11.926 14.5561 11.8278L10.175 6.29451C9.9208 5.97346 9.94656 5.48185 10.2325 5.19647C10.5185 4.91109 10.9564 4.94001 11.2106 5.26106L15.5917 10.7943C16.1361 11.4819 16.1361 12.5181 15.5917 13.2057L11.2106 18.7389C10.9564 19.06 10.5185 19.0889 10.2325 18.8035Z"
          fill="#FBFBFC"
        />
      </g>
      <defs>
        <clipPath id="clip0_2589_7697">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(5 4)"
          />
        </clipPath>
      </defs>
    </svg>
  </button>
)

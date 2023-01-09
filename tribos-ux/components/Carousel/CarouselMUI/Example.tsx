import { Button, Card, Grid, Paper } from '@mui/material'
import { Box } from '@mui/system'
import { Key } from 'react'
import Carousel from 'react-material-ui-carousel'

export default function Example(props) {
  var data = [
    {
      dia: 'seg',
      numero: '01',
    },
    {
      dia: 'ter',
      numero: '02',
    },
    {
      dia: 'qua',
      numero: '03',
    },
    {
      dia: 'qui',
      numero: '04',
    },
    {
      dia: 'sex',
      numero: '05',
    },
    {
      dia: 'sab',
      numero: '06',
    },

    {
      dia: 'dom',
      numero: '07',
    },
  ]

  const sliderItems: number = data.length > 6 ? 6 : data.length
  const items: Array<any> = []

  for (let i = 0; i < data.length; i += sliderItems) {
    if (i % sliderItems === 0) {
      items.push(
        <Box
          sx={{
            width: '390px',
            backgroundColor: '#FBFBFC',
            boxShadow: '0px 4px 8px, -2px, #1018281a',
          }}
        >
          {data.slice(i, i + sliderItems).map((item, index) => {
            return (
              <Button
                sx={{
                  borderRadius: '1rem',
                  backgroundColor: '#FBFBFC',
                  color: '#202733',
                  textTransform: 'none',
                }}
              >
                {item.dia}
                <br></br>
                {item.numero}
              </Button>
            )
          })}
        </Box>
      )
    }
  }
  return (
    <Carousel
      navButtonsProps={{
        // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
        style: {
          backgroundColor: '#D87036',
          borderRadius: '100%',
        },
      }}
      sx={{ width: '412px', height: '70px', left: '' }}
      autoPlay={false}
      indicators={false}
      animation="slide"
      navButtonsAlwaysVisible
      PrevIcon={
        <svg
          width="6"
          height="14"
          viewBox="0 0 6 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.76746 13.8035C6.05344 13.5182 6.0792 13.0265 5.825 12.7055L1.44393 7.17224C1.36616 7.07401 1.36616 6.92599 1.44393 6.82776L5.825 1.29451C6.0792 0.973461 6.05344 0.48185 5.76747 0.196469C5.48149 -0.0889111 5.04359 -0.0599929 4.78939 0.261061L0.408322 5.7943C-0.136106 6.48191 -0.136105 7.51809 0.408322 8.2057L4.78939 13.7389C5.04359 14.06 5.48149 14.0889 5.76746 13.8035Z"
            fill="#FBFBFC"
          />
        </svg>
      }
      NextIcon={
        <svg
          width="6"
          height="14"
          viewBox="0 0 6 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.232538 13.8035C-0.0534374 13.5182 -0.0791966 13.0265 0.175004 12.7055L4.55607 7.17224C4.63385 7.07401 4.63385 6.92599 4.55607 6.82776L0.175002 1.29451C-0.0791986 0.973459 -0.0534395 0.481848 0.232536 0.196468C0.518512 -0.0889128 0.956411 -0.0599947 1.21061 0.261059L5.59168 5.7943C6.13611 6.48191 6.13611 7.51809 5.59168 8.20569L1.21061 13.7389C0.956413 14.06 0.518514 14.0889 0.232538 13.8035Z"
            fill="#FBFBFC"
          />
        </svg>
      }
    >
      {items}
    </Carousel>
  )
}

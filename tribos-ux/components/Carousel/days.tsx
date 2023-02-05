import DaysOfweek from '../Agenda/Days/DaysOfweek'

export const images: any[] = [
  <DaysOfweek day={'seg'} number={1} />,
  <DaysOfweek day={'seg'} number={2} />,
  <DaysOfweek day={'seg'} number={3} />,
  <DaysOfweek day={'seg'} number={4} />,
]

const imageByIndex = (index: number): any => images[index % images.length]

export default imageByIndex

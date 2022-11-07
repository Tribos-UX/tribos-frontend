import React from "react";

// Better Carousel
import Carousel from "better-react-carousel";

// Components
import GroupCards from "../../GroupCards";

export default function CarouselCards() {
  const MyDot = ({ isActive }) => (
    <span
      style={{
        display: "inline-block",
        height: "19.6px",
        widht: "19.6px",
        height: isActive ? "19.6px" : "19.6px",
        width: isActive ? "19.6px" : "19.6px",
        borderRadius: "50%",
        opacity: isActive ? "1" : "0.5",
        background: isActive ? "#D87036" : "#ECF0FF",
      }}
    ></span>
  );

  return (
    <Carousel
      cols={3}
      rows={1}
      gap={150}
      dot={MyDot}
      responsiveLayout={[
        {
          breakpoint: 376,
          cols: 3,
          rows: 1,
        },
      ]}
      hideArrow
      containerStyle={{
        "max-width": "50%",
        height: "650px",
        margin: "0 auto",
      }}
      loop
      showDots
    >
      <Carousel.Item>
        <GroupCards sidecard={true} />
      </Carousel.Item>
      <Carousel.Item>
        <GroupCards />
      </Carousel.Item>
      <Carousel.Item>
        <GroupCards sidecard={true} />
      </Carousel.Item>
      <Carousel.Item>
        <GroupCards sidecard={true} />
      </Carousel.Item>
      <Carousel.Item>
        <GroupCards />
      </Carousel.Item>
      <Carousel.Item>
        <GroupCards sidecard={true} />
      </Carousel.Item>
    </Carousel>
  );
}

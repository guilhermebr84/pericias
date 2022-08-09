import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import img_5 from "../../images/carousel_img/05.jpg";
import img_6 from "../../images/carousel_img/06.jpg";
import img_7 from "../../images/carousel_img/07.jpg";

const items = [
  {
    altText: "Slide 1",
    caption: "Slide 1",
    key: 1,
    src: img_5,
  },
  {
    altText: "Slide 2",
    caption: "Slide 2",
    key: 2,
    src: img_6,
  },
  {
    altText: "Slide 3",
    caption: "Slide 3",
    key: 3,
    src: img_7,
  },
];

function Example(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className='custom-tag'
        tag='div'
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img
          src={item.src}
          alt={item.altText}
          className='img-fluid'
          style={{ width: "100%", height: "80vh", opacity: 0.6 }}
        />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {`.custom-tag {
              max-width: 100%;
              height: 500px;
              background: black;
            }`}
      </style>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction='prev'
          directionText='Previous'
          onClickHandler={previous}
        />
        <CarouselControl
          direction='next'
          directionText='Next'
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
}

export default Example;

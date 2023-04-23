import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

import hall1 from "../../images/hall1.png";
import hall2 from "../../images/hall2.png";
import hall3 from "../../images/hall3.png";
import hall4 from "../../images/hall4.png";
import hall5 from "../../images/hall5.png";

const items = [
  {
    src: hall1,// 'https://avatars.dzeninfra.ru/get-zen_doc/4727350/pub_619a3468f553013eb37ad6f4_619a34e9a646bf500d4dd5a4/scale_1200',
    //altText: 'Slide 1',
    //caption: 'Slide 1',
    key: 1,
  },
  {
    src: hall2,// 'https://pr0.zoon.ru/8iKcnZnBh2BT6R3PCmhPGg/1200x800,q85/4px-BW84_n2JGSfx3pw7Liz1B4vP92cGrRWATisBYvg0W4qB2IV-cf31Q8dY2o52w1fJPRNXE0deMNIJPBpHuok4bJR5yWlQvH0IBIsPGMHz2gQFS4DCGg2C-pIbnOX3',
    //altText: 'Slide 2',
    //caption: 'Slide 2',
    key: 2,
  },
  {
    src: hall3,
    //altText: 'Slide 3',
    //caption: 'Slide 3',
    key: 3,
  },
  {
    src: hall4,
    //altText: 'Slide 3',
    //caption: 'Slide 3',
    key: 4,
  },
  {
    src: hall5,// 'https://avatars.mds.yandex.net/get-altay/5579175/2a0000017e777326cc4844057dfc294a4345/XXXL',
    //altText: 'Slide 3',
    //caption: 'Slide 3',
    key: 5,
  },
];

function Slider(args) {
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
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img style={{maxHeight: "80vh", width: "70vw" }} src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Slider;
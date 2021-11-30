import React, { useRef, useEffect, useState } from "react";

import scrollEventListener from "../shareFunction/scrollEventListener";

const RandomCounter = ({
  num,
  interval = 0,
  duration = 0,
  windowHeight = 0,
  scroll = false,
  scrollRepeat = false,
}) => {
  let renderNum = num.toString().split("");
  const [digitList, setDigitList] = useState(renderNum);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [startAnimation, setStartAnimation] = useState(scroll);

  const containerRef = useRef(null);

  const startCounter = () => {
    let digitInterval = setInterval(() => {
      let randomDigit = [...digitList];

      for (let index in digitList) {
        randomDigit[index] = (Math.random() * 9).toFixed();
      }
      setDigitList(randomDigit);

      setTimeout(() => {
        clearInterval(digitInterval);
        setDigitList(num.toString().split(""));
      }, duration);
    }, interval);
  };

  useEffect(() => {
    if (!scroll) startCounter();
  }, []);

  useEffect(() => {
    if (startAnimation) startCounter();
  }, [startAnimation]);

  // Enable scroll animation
  useEffect(
    () =>
      scrollEventListener(
        screenHeight,
        windowHeight,
        scrollRepeat,
        scroll,
        containerRef,
        setStartAnimation
      ),
    []
  );

  useEffect(() => {
    const resize = () => {
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <div ref={containerRef}>{digitList}</div>;
};

export default RandomCounter;

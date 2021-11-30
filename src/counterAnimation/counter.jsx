import React, { useRef, useEffect, useState } from "react";

import scrollEventListener from "../shareFunction/scrollEventListener";

const Counter = ({
  num,
  duration = 0,
  startNum = 0,
  windowHeight = 0,
  scroll = false,
  scrollRepeat = false,
}) => {
  let renderNum = startNum;
  const [digitList, setDigitList] = useState(renderNum);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [startAnimation, setStartAnimation] = useState(scroll);

  const containerRef = useRef(null);

  const startCounter = () => {
    if (renderNum === num) return;

    if (renderNum < num) {
      let counterInterval = setInterval(() => {
        if (renderNum === num) {
          clearInterval(counterInterval);
          return;
        }

        renderNum++;
        setDigitList(renderNum);
      }, duration / Math.abs(num - startNum));
    } else {
      let counterInterval = setInterval(() => {
        if (renderNum === num) {
          clearInterval(counterInterval);
          return;
        }

        renderNum--;
        setDigitList(renderNum);
      }, duration / Math.abs(num - startNum));
    }
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

export default Counter;

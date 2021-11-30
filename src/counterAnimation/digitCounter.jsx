import React, { useRef, useEffect, useState } from "react";

import scrollEventListener from "../shareFunction/scrollEventListener";

const DigitCounter = ({
  num,
  duration = 1000,
  delay = 0,
  windowHeight = 0,
  scroll = false,
  scrollRepeat = false,
  loop = 0,
}) => {
  let renderNum = num.toString().split("");
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [startAnimation, setStartAnimation] = useState(false);

  const [containerHeight, setContainerHeight] = useState("");

  const containerRef = useRef(null);

  useEffect(() => {
    if (!scroll) startAnimation(true);
  }, []);

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

  //

  useEffect(() => {
    setContainerHeight(
      parseFloat(
        window
          .getComputedStyle(containerRef.current, null)
          .getPropertyValue("font-size")
      )
    );
  }, []);

  let numArr = [
    <p>0</p>,
    <p>1</p>,
    <p>2</p>,
    <p>3</p>,
    <p>4</p>,
    <p>5</p>,
    <p>6</p>,
    <p>7</p>,
    <p>8</p>,
    <p>9</p>,
  ];

  let numberList = [];
  if (!loop) {
    numberList = [...numArr, <p>0</p>];

    console.log(numberList);
  } else {
    for (let i = 0; i <= loop; i++) {
      numberList[i] = [...numArr];
    }
  }

  return (
    <div style={{ display: "flex" }}>
      {renderNum.map((digit, index) => {
        digit = !loop && Number(digit) === 0 ? 11 : Number(digit) + 1;
        return (
          <div
            ref={containerRef}
            style={{
              overflow: "hidden",
              lineHeight: 1,
              height: containerHeight,
            }}
          >
            <div
              style={{
                transform: `translateY(-${
                  startAnimation ? containerHeight * (loop * 10 + digit) : 0
                }px)`,
                transitionDuration: `${startAnimation ? duration : 0}ms`,
                transitionTimingFunction: "ease-in",
                transitionDelay: `${delay * index}ms`,
              }}
            >
              <br />
              {numberList}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DigitCounter;

import React, { useRef, useEffect, useState } from "react";

import onScroll from "./scrollFunc";

const MinemationNumber = ({
  num,
  random = false,
  counter = false,
  interval = 0,
  duration = 0,
  iteration = 1,
  startNum = 0,
  windowHeight = 0,
  scroll = false,
  scrollRepeat = false,
}) => {
  let renderNum = counter ? startNum : num.toString().split("");
  const [digitList, setDigitList] = useState(renderNum);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [startAnimation, setStartAnimation] = useState(!scroll);

  const containerRef = useRef(null);

  const startCounter = () => {
    // Counter
    if (counter) {
      if (renderNum === num) return;

      if (renderNum < num) {
        let counterInterval = setInterval(() => {
          if (renderNum + 1 === num) clearInterval(counterInterval);

          renderNum++;
          setDigitList(renderNum);
        }, interval);
      } else {
        let counterInterval = setInterval(() => {
          if (renderNum - 1 === num) clearInterval(counterInterval);

          renderNum--;
          setDigitList(renderNum);
        }, interval);
      }
    }
    // Not a Counter
    else {
      let counter = 0;

      let digitInterval = setInterval(() => {
        let randomDigit = [...digitList];
        // Random Counter
        if (random) {
          for (let index in digitList) {
            randomDigit[index] = (Math.random() * 9).toFixed();
          }
          setDigitList(randomDigit);

          setTimeout(() => {
            clearInterval(digitInterval);
            setDigitList(num.toString().split(""));
          }, duration);
        }
        // Increase Digit Counter
        else {
          setDigitList((prev) => {
            let arr = prev.map((element) => {
              if (Number(element) === 9) return 0;
              return Number(element) + 1;
            });

            if (Number(arr.join("")) === num) {
              if (counter === iteration) clearInterval(digitInterval);

              counter++;
            }

            return arr;
          });
        }
      }, interval);
    }
  };

  useEffect(() => {
    if (!scroll) startCounter();
  }, []);

  useEffect(() => {
    if (startAnimation) startCounter();
  }, [startAnimation]);

  useEffect(() => {
    const activateScroll = () => {
      onScroll(
        screenHeight,
        windowHeight,
        containerRef,
        setStartAnimation,
        scrollRepeat
      );
    };

    if (scroll) {
      window.addEventListener("scroll", activateScroll);
    }

    return () => {
      window.removeEventListener("scroll", activateScroll);
    };
  }, []);

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

export { MinemationNumber };

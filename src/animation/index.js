import React, { useRef, useEffect, useState } from "react";
import "../css/style.css";

import scroll from "./scrollFunc";

const MinemationText = ({
  text,
  animationName = "",
  delay = 0,
  duration = 500,
  fitWidth = false,
  overflowHidden = false,
  windowHeight = 0,
  scroll = false,
  scrollRepeat = false,
}) => {
  const [renderList, setRenderList] = useState([]);
  const [startAnimation, setStartAnimation] = useState(!scroll);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const containerRef = useRef(null);

  let transform;

  switch (animationName) {
    case "fadeInUp":
      transform = "translateY(100%)";
      break;
    case "fadeInDown":
      transform = "translateY(-100%)";
      break;
    case "fadeInLeft":
      transform = "translateX(-100%)";
      break;
    case "fadeInRight":
      transform = "translateX(100%)";
      break;
    default:
      transform = "translateX(0%)";
  }

  const lineStyle = {
    overflow: overflowHidden ? "hidden" : "visible",
  };

  const textStyle = {
    animationDuration: `${duration}ms`,
    width: fitWidth ? "max-content" : "100%",
    opacity: 0,
    transform: transform,

    animationTimingFunction: "linear",
    animationFillMode: "forwards",
  };

  const separateTextToLine = (element, text) => {
    let lineArr = [];
    const font = window.getComputedStyle(element).getPropertyValue("font");

    const elementWidth = element.offsetWidth;

    const getTextWidth = (text) => {
      const canvas =
        getTextWidth.canvas ||
        (getTextWidth.canvas = document.createElement("canvas"));
      const context = canvas.getContext("2d");
      context.font = font;
      const metrics = context.measureText(text);
      return metrics.width;
    };

    let textWidth = getTextWidth(text);

    const word = text.split("");
    let index = 0;
    while (textWidth > 0) {
      let lineWidth = 0;
      let counter = 0;
      let line = "";
      let spaceIndex;
      while (lineWidth < elementWidth && counter < word.length) {
        if (lineWidth + getTextWidth(word[counter]) > elementWidth) {
          counter--;
          break;
        }
        if (word[counter] === " ") spaceIndex = counter;
        line += word[counter];
        lineWidth = getTextWidth(line);
        counter++;
      }
      if (word[counter - 1] !== " " && counter !== word.length) {
        counter = spaceIndex;
      }
      let singleLine = word.splice(0, counter);

      lineArr.push(
        <div key={index} className="measure-line" style={lineStyle}>
          <p style={{ ...textStyle, animationDelay: `${delay * index}ms` }}>
            {singleLine.join("")}
          </p>
        </div>
      );
      index++;
      textWidth = getTextWidth(word.join(""));
    }
    return lineArr;
  };

  useEffect(() => {
    const resize = () => {
      setRenderList(separateTextToLine(containerRef.current, text));
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", resize);

    setRenderList(separateTextToLine(containerRef.current, text));

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    const activateScroll = () => {
      scroll(
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

  return (
    <div ref={containerRef} className={`${startAnimation && animationName}`}>
      {renderList}
    </div>
  );
};

export default MinemationText;

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
      scroll(
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

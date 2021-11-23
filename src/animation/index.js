import React, { useRef, useEffect, useState } from "react";
import "../css/style.css";

const MinemationText = ({
  text,
  animationName = "",
  delay = 0,
  duration = 500,
  fitWidth = false,
  overflowHidden = false,
  onScroll = false,
  windowHeight = 0,
  onScrollRepeat = false,
}) => {
  const [renderList, setRenderList] = useState([]);
  const [startAnimation, setStartAnimation] = useState(!onScroll);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const containerRef = useRef();

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
    if (onScroll) {
      window.addEventListener("scroll", () => {
        if (
          window.scrollY + screenHeight * (windowHeight / 100) >
          containerRef.current.offsetTop
        ) {
          setStartAnimation(true);
        }

        if (onScrollRepeat) {
          if (containerRef.current.getBoundingClientRect().top > screenHeight) {
            setStartAnimation(false);
          }
        }
      });
    }

    window.addEventListener("resize", () => {
      setRenderList(separateTextToLine(containerRef.current, text));
      setScreenHeight(window.innerHeight);
    });

    setRenderList(separateTextToLine(containerRef.current, text));
  }, []);

  return (
    <div ref={containerRef} className={`${startAnimation && animationName}`}>
      {renderList}
    </div>
  );
};

export default MinemationText;

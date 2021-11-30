import React, { useRef, useEffect, useState } from "react";
import "../css/style.css";

// element, text, lineStyle, textStyle, delay
import separateTextToLine from "../shareFunction/separateTextToLine";
import scrollEventListener from "../shareFunction/scrollEventListener";

const MinemationText = ({
  text,
  animationName = "",
  overflowHidden = false,
  delay = 0,
  duration = 500,
  fitWidth = false,
  scroll = false,
  scrollRepeat = false,
  windowHeight = 0,
}) => {
  const [renderList, setRenderList] = useState([]);
  const [startAnimation, setStartAnimation] = useState(!scroll);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const containerRef = useRef(null);

  const lineStyle = {
    overflow: overflowHidden ? "hidden" : "visible",
  };

  // Different Animation
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

  // Text Style
  const textStyle = {
    animationDuration: `${duration}ms`,
    width: fitWidth ? "max-content" : "100%",
    opacity: 0,
    transform: transform,

    animationTimingFunction: "linear",
    animationFillMode: "forwards",
  };

  // Call animation
  useEffect(() => {
    setRenderList(
      separateTextToLine(
        containerRef.current,
        text,
        lineStyle,
        textStyle,
        delay
      )
    );
  }, []);

  // Resize event listener
  useEffect(() => {
    const resize = () => {
      setRenderList(
        separateTextToLine(
          containerRef.current,
          text,
          lineStyle,
          textStyle,
          delay
        )
      );
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
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

  return (
    <div ref={containerRef} className={`${startAnimation && animationName}`}>
      {renderList}
    </div>
  );
};

export default MinemationText;

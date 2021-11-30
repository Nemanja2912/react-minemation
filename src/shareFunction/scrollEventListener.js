const scrollEventListener = (
  screenHeight,
  windowHeight,
  scrollRepeat,
  scroll,
  containerRef,
  startAnimation
) => {
  const activateScroll = () => {
    // When element top position in right position start animation
    if (
      window.scrollY + screenHeight * (windowHeight / 100) >
      containerRef.current.offsetTop
    ) {
      startAnimation(true);
    }

    // If scroll repeat is enable reset animation
    if (scrollRepeat) {
      if (containerRef.current.getBoundingClientRect().top > screenHeight) {
        startAnimation(false);
      }
    }
  };

  // Add scroll event listener
  if (scroll) {
    window.addEventListener("scroll", activateScroll);
  }

  // Remove scroll event listener
  return () => {
    window.removeEventListener("scroll", activateScroll);
  };
};

export default scrollEventListener;

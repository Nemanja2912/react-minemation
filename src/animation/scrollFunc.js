const onScroll = (
  screenHeight,
  windowHeight,
  containerRef,
  startAnimation,
  onScrollRepeat
) => {
  if (
    window.scrollY + screenHeight * (windowHeight / 100) >
    containerRef.current.offsetTop
  ) {
    startAnimation(true);
  }

  if (onScrollRepeat) {
    if (containerRef.current.getBoundingClientRect().top > screenHeight) {
      startAnimation(false);
    }
  }
};

export default onScroll;

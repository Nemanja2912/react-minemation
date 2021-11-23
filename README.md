# react-animation-text

The react measure and animate text library for easy separate text to a single line with beautiful animation. This will help you to animate text like a pro.

## Installation

```
$ npm i react-animation-text
```

Animate text works very easily when you import the default AnimateText component. Your text will be wrapped in a div container and separated into a single line.

Import:

```
import AnimateText from "react-animation-text";
```

## Usage

When you import it you need to add props text and magic will happen. This is only what you need to have separated text. Although you can add more props to include beautiful animation.

Simple use:

```
<AnimateText text="Lorem ipsum dolor sit..." />
```

With Animation

```
  <MeasureText
      text="Lorem ipsum dolor sit amet..."
      animationName="fromBottom"
      delay={1000}
      duration={1000}
    />
```

> Animate name can be various: "fromBottom", "fromTop", "fromLeft", "fromRight"

## Tips

AnimateText component will fit the parent container. If you don't set the parent container well or you have some problem with width it can cause that you don't see text at all. Please check it again.

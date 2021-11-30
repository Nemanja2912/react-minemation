# react-minemation

The react minemation easily separates texts into a single line, animate text, number, images, or something more. This will help you to animate a website like a pro.

## Installation

```
$ npm i react-minemation
```

You can use different components for different types of animation. You can animate text, numbers, images... Only what you need is to import the right type of component.

Import:

```
import {
  MinemationText,
  RandomCounter,
  DigitCounter,
  Counter,
} "react-minemation";
```

## Usage MinemationText

When you import it you need to add props text and magic will happen. This is only what you need to have separated text. Although you can add more props to include beautiful animation.

Simple use:

```
<MinemationText text="Lorem ipsum dolor sit..." />
```

With Animation

```
  <MinemationText
      text="Lorem ipsum dolor sit amet..."
      animationName="fromBottom"
      delay={1000}
      duration={1000}
    />
```

> Animate name can be various: "fromBottom", "fromTop", "fromLeft", "fromRight"

Prop list:

- **text** - Add your text
- **animationName** - Check one animation from the list
- **delay** - Every line start after another line (in ms)
- **duration** - How long every animation will last (in ms)
- **fitWidth** - Does the width of every line will be 100% of the parent container or as possible (true/false)
- **overflowHidden** - Does animation will start from their line position or around the screen (true/false)
- **scroll** - Does animation will start on scroll (true/false) / Default is to start when the top position enter the screen
- **windowHeight** - _require scroll to be true_ Animation will start when the top position of container will in that area of the screen (in view height 0-100 )
- **scrollRepeat** - _require scroll to be true_ When you scroll from bottom to start of website and container top position be under-screen bottom it will restart animation, so when you scroll down it will start again

## Usage MinemationNumber

With the counter component, you can choose one of 3 typestyles. You can use a simple counter to your number or to random change every digit in your number(if it is higher than 9) or to every digit increase by one nth time of iteration.

Every type of counter has some shareable props and some unique.

Shareable prop list:

- **num** - Add your number
- **duration** -How long numbers will randomly set (in ms)
- **scroll** - Does animation will start on scroll (true/false) / Default is to start when the top position enter the screen
- **windowHeight** -Animation will start when the top position of the container will in that area of the screen (in view height 0-100 ) / _ *require scroll to be true* _
- **scrollRepeat** - When you scroll from bottom to start of website and container top position be under-screen bottom it will restart animation, so when you scroll down it will start again / _*require to scroll to be true*_

### Simple counter:

```
<Counter num={300} duration={5000} iteration={100}/>
```

Prop list:

- **startNum** -Set what is starting number for counter (if it is higher than num it will be decreased)

### Random counter:

```
<RandomCounter num={500} interval={50} duration={5000} />
```

Prop list:

- **interval** - It will set how long will take after each increase/decrease number (in ms)

### Digit counter (fadeIn):

```
<DigitCounter num={400} duration={2500} delay={200} loop={1} />
```

Prop list:

- **delay** - How long you will delay the start of the animation (in ms)
- **loop** - How many loop circles do you want to use (slot machine effect)

## Tips

MinemationText component will fit the parent container. If you don't set the parent container well or you have some problem with width it can cause that you don't see text at all. Please check it again.

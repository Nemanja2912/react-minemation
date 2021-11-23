# react-minemation

The react minemation easy separate text to a single line, animate text, number, images or something more.. This will help you to animate website like a pro.

## Installation

```
$ npm i react-minemation
```

You can use different components for different types of animation. You can animate text, numbers, images... Only what you need is to import the right type of component.

Import:

```
import MinemationText from "react-minemation";
import MinemationNumber from "react-minemation";
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

- **text** - Add random text
- **animationName** - Check one animation from the list
- **delay** - Every line start after another line (in ms)
- **duration** - How long every animation will last (in ms)
- **fitWidth** - Does the width of every line will be 100% of the parent container or as possible (true/false)
- **overflowHidden** - Does animation will start from their line position or around the screen (true/false)
- **scroll** - Does animation will start on scroll (true/false) / Default is to start when the top position enter the screen
- **windowHeight** - _require scroll to be true_ Animation will start when the top position of container will in that area of the screen (in view height 0-100 )
- **scrollRepeat** - _require scroll to be true_ When you scroll from bottom to start of website and container top position be under-screen bottom it will restart animation, so when you scroll down it will start again

## Usage MinemationNumber

With counter component, you can choose one of 3 type styles. You can use a simple counter to your number or to random change every digit in your number(if it is higher than 9) or to every digit increase by one nth time of iteration.

Simple counter:

```
<MinemationNumber num={300} duration={5000} iteration={100}/>
```

Prop list:

- **num** - Add random number
- **random** - Use the random type of counter (Default is digited increase counter) (true/false
- **counter** - Use counter type of counter (Default is digited increase counter) _it will overwrite random props_ (true/false)
- **interval** - It will set how long will take after each increase/decrease number (in ms)
- **duration** - _require random to be true_ How long numbers will randomly set (in ms)
- **iteration** - _require random and counter to be false (default options)_ How many times every digit will increase (in ms)
- **startNum** - _require a counter to be true_ Set what is starting number for counter (if it is higher than num it will be decreased)
- **scroll** - Does animation will start on scroll (true/false) / Default is to start when the top position enter the screen
- **windowHeight** - _require scroll to be true_ Animation will start when the top position of the container will in that area of the screen (in view height 0-100 )
- **scrollRepeat** - _require to scroll to be true_ When you scroll from bottom to start of website and container top position be under-screen bottom it will restart animation, so when you scroll down it will start again

## Tips

MinemationText component will fit the parent container. If you don't set the parent container well or you have some problem with width it can cause that you don't see text at all. Please check it again.

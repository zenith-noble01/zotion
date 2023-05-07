**Zotion**

Zotion is a library of reusable animations for web interfaces, built on top of Framer Motion. It provides a set of React components that you can use to create smooth and dynamic transitions between elements on your website. Zotion includes animations for text, images, buttons, and other commonly used components, as well as more complex interactions using container and staggered animations.

Installation
You can install Zotion in your React app using the following command:
```bash
npm install zotion
```
**Usage**


To use Zotion components in your React app, first import them from the 
zotion
 package:
```jsx
import { FadeIn, SlideIn, TextVariant } from "zotion" 
```
Then, use them in your components like any other React component:
```jsx
export const MyComponent = () => {
  return (
    <div>
      <TextVariant delay={0.5}>
        <h1>Welcome to my website!</h1>
      </TextVariant>
      <FadeIn direction="up" duration={0.5} delay={0.75}>
        <p>This is an example of using Zotion to create smooth animations.</p>
      </FadeIn>
      <SlideIn direction="left" type="easeOut" delay={1} duration={0.5}>
        <button>Click Me!</button>
      </SlideIn>
    </div>
  )
}
```
**Available Components**

Zotion includes the following components:

**TextVariant**

A component that applies a spring animation to text elements, making them slide up and fade in from a hidden state. You can customize the delay for the animation by passing in a 
delay
 prop.

```jsx
<TextVariant delay={0.5}>
  <h1>Welcome to my website!</h1>
</TextVariant>

```
**FadeIn**

A component that applies a fade-in animation to an element, with the option to specify the direction of the motion and the type of transition. You can customize various aspects of the animation, such as the duration, delay, and direction, by passing in props.
```jsx
<FadeIn direction="up" duration={0.5} delay={0.75}>
  <p>This is an example of using Zotion to create smooth animations.</p>
</FadeIn>
```

**ZoomIn**

A component that applies a zoom-in animation to an element. You can customize the duration and delay of the animation by passing in props.
```jsx
<ZoomIn delay={1} duration={1}>
  <button>Click Me!</button>
</ZoomIn>
```


**SlideIn** 

A component that applies a slide-in animation to an element, with the option to specify the direction of the motion and the type of transition. You can customize various aspects of the animation, such as the duration, delay, and direction, by passing in props.
```jsx
<SlideIn direction="left" type="easeInOut" delay={1.5} duration={0.5}>
  <img src="example.jpg" alt="Example" />
</SlideIn>
```


**StaggerContainer** 

A component that applies staggered animations to a set of child elements. You can customize the delay between each child element by passing in a 
delayChildren
 prop, and customize the animation by passing in a 
staggerChildren
 prop to control the timing of each animation.
```jsx
<StaggerContainer staggerChildren={0.25} delayChildren={0.5}>
  <FadeIn direction="right" duration={0.5}>
    <p>Here's some text.</p>
  </FadeIn>
  <FadeIn direction="right" duration={0.5} delay={0.25}>
    <p>And some more text.</p>
  </FadeIn>
  <FadeIn direction="right" duration={0.5} delay={0.5}>
    <p>And even more text!</p>
  </FadeIn>
</StaggerContainer>
```

**What Next?**


Zotion is a flexible and easy-to-use library for implementing animations in your web applications. You can customize the transition effects and timings to create interactive and engaging interfaces with minimal coding. Feel free to experiment with different combinations of animations and use cases, and see what creative solutions you can come up with!
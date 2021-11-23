import React from "react";
import MeasureText from "./Measure/index";

function App() {
  return (
    <div className="App">
      <MeasureText
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at vehicula lectus, non porta sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ut molestie mi, non dapibus sapien. Aenean id ullamcorper erat. Proin vitae diam in orci semper tincidunt vitae et massa. Vivamus eget nisl arcu. Integer tincidunt lacinia felis sit amet molestie. Nulla feugiat risus lobortis ornare faucibus. Etiam rhoncus eleifend lacus, nec eleifend leo vestibulum id."
        animationName="fromBottom"
        delay={1000}
        duration={1000}
      />
    </div>
  );
}

export default App;

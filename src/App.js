import React from "react";
import MinemationText from "./animation/index";

function App() {
  return (
    <div className="App" style={{ padding: 50 }}>
      <div className="cont" style={{ height: "110vh" }}>
        <MinemationText
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at vehicula lectus, non porta sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ut molestie mi, non dapibus sapien. Aenean id ullamcorper erat. Proin vitae diam in orci semper tincidunt vitae et massa. Vivamus eget nisl arcu. Integer tincidunt lacinia felis sit amet molestie. Nulla feugiat risus lobortis ornare faucibus. Etiam rhoncus eleifend lacus, nec eleifend leo vestibulum id."
          animationName="fadeInLeft"
          delay={500}
          duration={1000}
          // overflowHidden
          fitWidth
        />
      </div>
      <div className="cont2" style={{ width: "50vw" }}>
        <MinemationText
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at vehicula lectus, non porta sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ut molestie mi, non dapibus sapien. Aenean id ullamcorper erat. Proin vitae diam in orci semper tincidunt vitae et massa. Vivamus eget nisl arcu. Integer tincidunt lacinia felis sit amet molestie. Nulla feugiat risus lobortis ornare faucibus. Etiam rhoncus eleifend lacus, nec eleifend leo vestibulum id."
          animationName="fadeInLeft"
          delay={0}
          duration={1000}
          // fitWidth
          onScroll
        />
      </div>
    </div>
  );
}

export default App;

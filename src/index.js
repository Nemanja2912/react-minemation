import React from "react";
import ReactDOM from "react-dom";
import { MinemationText } from "./minemation";

function App() {
  return (
    <div className="App" style={{ padding: 50 }}>
      <div className="cont" style={{ height: "110vh" }}>
        <MinemationText
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at vehicula lectus, non porta sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ut molestie mi, non dapibus sapien. Aenean id ullamcorper erat. Proin vitae diam in orci semper tincidunt vitae et massa. Vivamus eget nisl arcu. Integer tincidunt lacinia felis sit amet molestie. Nulla feugiat risus lobortis ornare faucibus. Etiam rhoncus eleifend lacus, nec eleifend leo vestibulum id."
          animationName="fadeInUp"
          delay={0}
          duration={500}
          overflowHidden
          fitWidth
        />
      </div>
      <div className="cont2" style={{ width: "50vw", height: "110vh " }}>
        <MinemationText
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at vehicula lectus, non porta sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ut molestie mi, non dapibus sapien. Aenean id ullamcorper erat. Proin vitae diam in orci semper tincidunt vitae et massa. Vivamus eget nisl arcu. Integer tincidunt lacinia felis sit amet molestie. Nulla feugiat risus lobortis ornare faucibus. Etiam rhoncus eleifend lacus, nec eleifend leo vestibulum id."
          animationName="fadeInLeft"
          delay={0}
          duration={500}
          scroll={true}
          windowHeight={50}
          scrollRepeat={false}
        />
      </div>

      <div className="cont" style={{ fontSize: 50, height: 1000 }}>
        {/* <MinemationNumber
          num={300}
          // interval={0}
          duration={5000}
          iteration={100}
          // onScroll={true}
          // windowHeight={30}
          // onScrollRepeat={true}
        /> */}
        {/* <MinemationNumber
          num={300}
          interval={0}
          duration={5000}
          random
          iteration={100}
          onScroll={true}
          windowHeight={30}
          onScrollRepeat={true}
        /> */}
        {/* <MinemationNumber
          num={300}
          interval={0}
          duration={5000}
          counter
          iteration={100}
          onScroll={true}
          windowHeight={30}
          onScrollRepeat={true}
        /> */}
      </div>
    </div>
  );
}

export default App;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

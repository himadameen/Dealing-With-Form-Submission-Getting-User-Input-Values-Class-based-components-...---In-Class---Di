import React, { useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
  let date = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();
  const [tyme, update] = useState(time);

  const runningTime = () => {
    time = new Date().toLocaleTimeString();
    update(time);
  };
  setInterval(runningTime, 1000);

  useEffect(() => {
    clearInterval(runningTime);
  });

  return (
    <>
      <div className="main">
        <div className="date-time">{date + ", " + tyme}</div>
      </div>
    </>
  );
};

export default App;

// class component::::

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       time: new Date().toLocaleTimeString(),
//       date: new Date().toLocaleDateString()
//     };
//   }

//   runningTime() {
//     this.setState({
//       time: new Date().toLocaleTimeString()
//     });
//   }

//   componentDidMount() {
//     this.timer = setInterval(() => this.runningTime(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timer);
//   }

//   render() {
//     return (
//       <>
//         <div className="date-time">
//           {this.state.date + ", " + this.state.time}
//         </div>
//       </>
//     );
//   }
// }

// export default App;

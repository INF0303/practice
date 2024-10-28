import React from 'react'

// const Funct = () => {
//     function saySomething(func) {
//         func();
//     }
//     function sayHello() {
//         a=4;
//       console.log("shrrrrr!");
//     }
//     saySomething(sayHello);
    
// }

// export default Funct;
const Funct = () => {
    return (
      <div>
        <ChildComponent name="Shraddha" color="Blue" />
        <ChildComponent name="John" color="Red" />
      </div>
    );
  };
  
  // ChildComponent that receives props
  const ChildComponent = (props) => {
    return (
      <div>
        <h1>Hello, {props.name}!</h1>
        <p>Your favorite color is {props.color}.</p>
      </div>
    );
  };
  
  export default Funct;
  

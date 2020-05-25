// Dog.js
import React from "react";

const petTheDog = (dogName) => {
  alert(`You have pet ${dogName}`);
};

function Dog(props) {
  return (
    <div>
      <div>{props.dog.name}</div>
      <button onClick={() => petTheDog(props.dog.name)}>Pet me!</button>
    </div>
  );
}
export default Dog;

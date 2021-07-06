import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";
// component for displaying numOfCakes and also component for dispatching an action(button click)
function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
    </div>
  );
}

// overview: gets redux state as a parameter and returns an object.
// goal: state from redux store is mapped to this component props, i.e cakeComponent will recieve an addition al prop called numOfCakes.
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

// overview: the function gets the dispatch method as a parameter and allows us to match action creators to props in the component.
//goal: the component recieves a second additional prop called buyCake which will basically dispatch the buyCake action.
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

// connect function connnects react component to the redux store.
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);

import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";
// component for displaying numOfCakes and also component for dispatching an action(button click)
function CakeContainer(props) {
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}

// overview: gets redux state as a parameter and returns an object.
// goal: state from redux store is mapped to this component props, i.e cakeComponent will recieve an addition al prop called numOfCakes.
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

// overview: the function gets the dispatch method as a parameter and allows us to match action creators to props in the component.
//goal: the component recieves a second additional prop called buyCake which will basically dispatch the buyCake action.
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

// connect function connnects react component to the redux store.
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);

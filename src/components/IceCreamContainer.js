import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";

// component for displaying numOfIceCream and also component for dispatching an action(button click)
function IceCreamContainer(props) {
  return (
    <div>
      <h2>Number of ice creams - {props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy Icecream</button>
    </div>
  );
}

// overview: gets redux state as a parameter and returns an object.
// goal: state from redux store is mapped to this component props, i.e cakeComponent will recieve an addition al prop called numOfCakes.
const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};

// overview: the function gets the dispatch method as a parameter and allows us to match action creators to props in the component.
//goal: the component recieves a second additional prop called buyIceCream which will basically dispatch the buyCake action.
const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

// connect function connnects react component to the redux store.
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);

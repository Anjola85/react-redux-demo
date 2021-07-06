import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

export default function HooksCakeContainer() {
  // useSelector function accesses the numberOfCakes in the redux state and also returns it.
  const numOfCakes = useSelector((state) => state.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Num of cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy cake</button>
    </div>
  );
}

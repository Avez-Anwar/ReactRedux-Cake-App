import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../Redux/cake/CakeActions";

function CakeContainer(props) {
  return (
    <div>
      <h1>No of Cakes:{props.numOfCakes}</h1>
      <button onClick={props.buyCake}>Buy Cakes</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);

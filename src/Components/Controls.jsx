import { useRef } from "react";
import { useDispatch } from "react-redux";
import { add, decrement, increment, subtract } from "../store/counterSlice";
import { privacyToggle } from "../store/privacyToggleSlice";

const Controls = () => {
  const inputElement = useRef();
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleAdd = () => {
    dispatch(add(inputElement.current.value));
    inputElement.current.value = "";
  };
  const handleSubtract = () => {
    dispatch(subtract(inputElement.current.value));
    inputElement.current.value = "";
  };
  const handleprivacyToggle = () => {
    dispatch(privacyToggle());
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +1
        </button>

        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handleprivacyToggle}
        >
          PrivacyToggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          type="text"
          placeholder="Enter Number"
          ref={inputElement}
          className="input-width"
        />
        <button type="button" className="btn btn-danger" onClick={handleAdd}>
          Add
        </button>

        <button type="button" className="btn btn-info" onClick={handleSubtract}>
          Subtract
        </button>
      </div>
    </>
  );
};
export default Controls;

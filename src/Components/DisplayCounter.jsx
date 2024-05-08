import { useSelector } from "react-redux";
//using useSelector hook suscription is set up and when the counter is changes then the DisplayCounter()only  is repainted
const DisplayCounter = () => {
  const counterValue = useSelector((state) => state.counter);

  return (
    <>
      <p className="lead mb-4">
        Counter Current Value:{counterValue.counterVal}
      </p>
    </>
  );
};
export default DisplayCounter;

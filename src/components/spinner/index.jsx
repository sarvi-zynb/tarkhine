import spinnerGif from "../../assets/image/spinner.gif";
const Spinner = () => {
  return (
    <div className="w-full flex justify-center my-16">
      <img src={spinnerGif} className="d-block w-[150px]" />
    </div>
  );
};

export default Spinner;

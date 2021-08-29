import { useSelector } from "react-redux";

let Personal = () => {
  let t = useSelector((state) => state.template);
  console.log(t);
  return <h1>Personal</h1>;
};

export default Personal;
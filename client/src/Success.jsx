import { Link } from "react-router-dom";

function Success() {
  return (
    <div>
      <h1>Payment success</h1>
      <Link to={"/"}>Back to home</Link>
    </div>
  );
}

export default Success;

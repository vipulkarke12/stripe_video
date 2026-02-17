import { Link } from "react-router-dom";

function Cancel() {
  return (
    <div>
      <h1>Payment cancelled</h1>
      <Link to={"/"}>Back to home</Link>
    </div>
  );
}

export default Cancel;

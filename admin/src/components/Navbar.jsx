import { assets } from "../assets/assets.js";

const Navbar = () => {
  return (
    <div>
      <img src={assets.logo} alt="logo" />
      <button>Logout</button>
    </div>
  );
};

export default Navbar;

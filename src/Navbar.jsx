import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="mt-5 flex gap-6 text-[11px] font-[400] text-[#484848FF]">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-[#22C480FF]" : "hover:text-[#22C480FF] transition"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-[#22C480FF]" : "hover:text-[#22C480FF] transition"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/services"
        className={({ isActive }) =>
          isActive ? "text-[#22C480FF]" : "hover:text-[#22C480FF] transition"
        }
      >
        Service
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-[#22C480FF]" : "hover:text-[#22C480FF] transition"
        }
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;

import logo from "../assets/chef-claude-icon.png";
import LoginButton from "./LoginButton.jsx";
import NavItem from "./NavItem.jsx";
import {Link} from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";
export default function Header() {
  return (
      <header className="bg-primary shadow-md">
        <nav
            className="flex items-center justify-between p-6 lg:px-10"
            aria-label="Global">
          {/* Logo + Brand */}
          <Link to="/" className="flex items-center gap-3">
            <span className="sr-only">Chef Claud</span>
            <img src={logo} alt="chef claud logo" className="h-8 w-auto"/>
            <h1 className=" font-bold text-xl text-primary">Chef Claud</h1>
          </Link>
          {/* Navigation Links */}
          <NavItem/>
          {/* Login Button */}
          <div className="flex items-center gap-4">
            <ThemeToggle/>
            <LoginButton/>
          </div>
        </nav>
      </header>
  );
}



import logo from "../assets/chef-claude-icon.png";
import NavItem from "./NavItem.jsx";
import {Link, useNavigate} from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";
import {CustomButton} from "./UI/CustomButton.jsx";
import {ArrowRightStartOnRectangleIcon} from "@heroicons/react/24/outline/index.js";
export default function Header() {
    const navigateToLogin = useNavigate();
    const handleClickLogin = () => {
        // Implement login functionality here
        console.log("Login button clicked");
        navigateToLogin("/login");
    };
  return (
      <header className="bg-primary shadow-md">
        <nav
            className="flex items-center justify-between p-6 lg:px-10"
            aria-label="Global">
          {/* Logo + Brand */}
          <Link to="/" className="flex items-center gap-3">
            <span className="sr-only">Chef Claud</span>
            <img src={logo} alt="chef claud logo" className="h-8 w-auto"/>
            <h1 className="font-bold text-xl text-primary">Chef Claud</h1>
          </Link>
          {/* Navigation Links */}
          <NavItem/>
          {/* Login Button */}
          <div className="flex items-center gap-4">
            <ThemeToggle/>
            <CustomButton
                type="button"
                onClick={handleClickLogin}
                className="btn-primary hover:btn-hover px-4 py-2"
                children="Login"
                icon={<ArrowRightStartOnRectangleIcon/>}
            />

          </div>
        </nav>
      </header>
  );
}



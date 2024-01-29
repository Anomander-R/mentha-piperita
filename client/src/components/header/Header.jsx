import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { HiSearch } from "react-icons/hi";
import { HiMoon } from "react-icons/hi";
// import { HiSun } from "react-icons/hi";

const Header = () => {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2" fluid={true}>
      {/* logo */}
      <Link
        to={"/"}
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 mr-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-700 to-pink-900 text-white rounded-full">
          Mentha
        </span>
        Piperita
      </Link>
      {/* Search*/}
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={HiSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-10 h-10 rounded-full lg:hidden" color="gray">
        <HiSearch size={20} />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className="hidden lg:inline" color="gray">
          <HiMoon width={48} height={48} />
        </Button>
        {/* <HiSun /> */}
        <Link to={"sign-in"}>
          <Button gradientDuoTone={"purpleToBlue"}>Sign In</Button>
        </Link>
        <Navbar.Toggle/>
      </div>

      {/* MainMenu*/}
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={'div'}>
          <Link to="/" >
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={'div'}>
          <Link to="/about" >
            About
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={'div'}>
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

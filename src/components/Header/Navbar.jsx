import { NavLink, Link } from "react-router-dom";
import { useClerk, UserButton, useSession } from "@clerk/clerk-react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { IconButton } from "@mui/material";

function SignInButton() {
  const clerk = useClerk();

  return (
    <button
      onClick={() => clerk.openSignIn({})}
      className="bg-transparent px-4 py-2 rounded-lg text-white border hidden md:block"
    >
      Login
    </button>
  );
}

const navLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },

  {
    path: "/courses",
    display: "Our courses",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];

const Navbar = () => {
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const { session } = useSession();
  return (
    <header className="flex items-center bg-violet-500 text-[#fff] w-full lg:w-full overflow-x-hidden">
      <div className="container m-4">
        <nav className="flex items-center lg:justify-between gap-[1rem]">
          <Link className="logo" to="/">
            <h2 className="mr-[12rem] text-3xl font-bold">
              Skill<span className="text-teal-200 text-3xl">Up</span>
            </h2>
          </Link>

          <div>
            <ul className="hidden lg:flex lg:gap-[2.2rem] gap-[1.2rem] items-center mr-[12rem]">
              {navLinks.map((link, index) => (
                <li key={index} className="">
                  <NavLink
                    to={link.path}
                    className="lg:text-[19px] font-bold text-[13px]"
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className=" flex lg:gap-[1rem] mr-[2rem]">
            {session ? <UserButton /> : <SignInButton />}
            {/* <Link className="bg-transparent px-4 py-2 rounded-lg text-white border hidden md:block" to="/auth">
              Login
            </Link> */}
          </div>
          <div
            className="cursor-pointer lg:hidden"
            onClick={toggleMenu}
          >
            <IconButton size="large" color="inherit" className="relative right-[5rem]" >
            <MenuIcon/>

            </IconButton>
            
          </div>
        </nav>
        {open && (
          <div className="fixed left-0 top-0 w-full h-screen bg-[#fff] origin-top text-black p-10">
            <div className="flex h-full flex-col">
              <div className="flex justify-between">
                <h1 className="text-lg text-black">SkillUp</h1>
                <p
                  className="cursor-pointer text-md text-black"
                  onClick={toggleMenu}
                >
                  <IconButton size="large" className="md:hidden sm:block">
                    <CloseIcon />
                  </IconButton>
                </p>
              </div>
              <div className="flex flex-col h-[50vh] justify-center items-center gap-7">
                {navLinks.map((link, index) => (
                  <MobileNavLink
                    key={index}
                    display={link.display}
                    path={link.path}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
export default Navbar;
const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};
const MobileNavLink = ({ display, path }) => {
  return (
    <div className="text-3xl uppercase text-black">
      <Link href={path}>{display}</Link>
    </div>
  );
};

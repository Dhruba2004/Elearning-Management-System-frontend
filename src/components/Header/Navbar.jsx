import { NavLink, Link } from "react-router-dom";
import { useClerk, UserButton, useSession } from '@clerk/clerk-react';

function SignInButton() {
  const clerk = useClerk();

  return (
      <button onClick={() => clerk.openSignIn({})} className="bg-transparent px-4 py-2 rounded-lg text-white border hidden md:block">Login</button>
  )
}

const navLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path:"/about",
    display: "About"
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
  const { session } = useSession()
  return (
    <header className="flex items-center bg-violet-500 text-[#fff] w-full lg:w-full">
      <div className="container m-4">
        <div className="flex items-center lg:justify-between gap-[1rem]">
          <Link className="logo" to="/">
            <h2 className="mr-[12rem] text-3xl font-bold">Skill<span className="text-teal-200 text-3xl">Up</span></h2>
          </Link>

          <div>
            <ul className="hidden lg:flex lg:gap-[2.2rem] gap-[1.2rem] items-center mr-[12rem]">
              {navLinks.map((link, index) => (
                <li key={index} className="">
                  <NavLink to={link.path} className="lg:text-[19px] font-bold text-[13px]">{link.display}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className=" flex lg:gap-[1rem] mr-[2rem]">
          {session ? (
            <UserButton />
          ): (<SignInButton />)}
            {/* <Link className="bg-transparent px-4 py-2 rounded-lg text-white border hidden md:block" to="/auth">
              Login
            </Link> */}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;

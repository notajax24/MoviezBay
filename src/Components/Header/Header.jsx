import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../ui/button";
import { useUser, UserButton } from "@clerk/clerk-react";
import Dashboard from "../DashBoard/Dashboard";
import { IoMdHome } from "react-icons/io";
import { MdMovie } from "react-icons/md";
import { RiMovieFill } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";

function Header() {
  const { user, isSignedIn } = useUser();

  return (
    <>
      <div className="flex justify-between p-8 shadow-md">
        <h1 className="flex text-sm pt-2 md:text-xl font-bold text-red-600">
          MoviezBay
        </h1>
        {/* <img src={logo} className="max-sm:hidden"></img> */}
        {/* -------------------------MEnu bar ----------------- */}
        <div className="flex">
          <ul className="flex flex-row gap-10">
            <li className="flex gap-2 py-2 font-bold hover:scale-105 ease-in hover:text-red-600 ">
              <IoMdHome className="md:text-[20px] " />
              <Link className="flex flex-row max-md:hidden">Browse</Link>
            </li>
            <li className="flex gap-2 py-2 font-bold hover:scale-105 ease-in hover:text-red-600 ">
              <MdMovie className="md:text-[20px] " />

              <Link className="flex flex-row max-md:hidden ">Movies</Link>
            </li>
            <li className="flex gap-2 py-2 font-bold hover:scale-105 ease-in hover:text-red-600 ">
              <RiMovieFill className="md:text-[20px]" />
              <Link className="flex flex-row  max-md:hidden">Series</Link>
            </li>
            <li className="flex gap-2 py-2 font-bold hover:scale-105 ease-in hover:text-red-600 ">
              <FaRegHeart className="md:text-[20px] " />
              <Link to={"/mylist"} className="flex flex-row max-md:hidden">
                My List
              </Link>
            </li>
          </ul>
        </div>

        {/* ---------------------- */}
        {isSignedIn ? (
          <Link to={"/dashboard"}>
            <div className="flex gap-5">
              {/* <Button className="max-sm:hidden">Dashboard</Button> */}
              <UserButton />
            </div>
          </Link>
        ) : (
          <Link to={"auth/sign-in"}>
            <FaSignInAlt className="flex mt-2 md:text-[20px] md:hidden" />
            <Button className="max-md:hidden">Sign In</Button>
          </Link>
        )}
      </div>
      <section id="movies" className="flex-row">
        <Dashboard />
      </section>
    </>
  );
}

export default Header;

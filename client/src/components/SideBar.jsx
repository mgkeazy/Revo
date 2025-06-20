import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if(!isMenuOpen)  return null;
  return (
    <div className="p-5 shadow-lg w-55 h-full overflow-y-auto">
      <ul>
        <Link to="/"><li>Home</li></Link>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>

      <hr className="border-t border-[#3f3f3f] my-2" />

      <h1 className="font-bold">Explore</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <hr className="border-t border-[#3f3f3f] my-2" />

      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Cristiano Ronaldo</li>
        <li>AntrikshTv</li>
        <li>GamingMan</li>
        <li>HellRaiser</li>
        <li>433</li>
        <li>GetSetFlyScience</li>
        <li>Real Madrid T.V</li>
        <li>Motivational Channel</li>
      </ul>

            <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Cristiano Ronaldo</li>
        <li>AntrikshTv</li>
        <li>GamingMan</li>
        <li>HellRaiser</li>
        <li>433</li>
        <li>GetSetFlyScience</li>
        <li>Real Madrid T.V</li>
        <li>Motivational Channel</li>
      </ul>

            <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Cristiano Ronaldo</li>
        <li>AntrikshTv</li>
        <li>GamingMan</li>
        <li>HellRaiser</li>
        <li>433</li>
        <li>GetSetFlyScience</li>
        <li>Real Madrid T.V</li>
        <li>Motivational Channel</li>
      </ul>
    </div>
  );
};

export default SideBar;

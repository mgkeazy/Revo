import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "./constants";
import { chacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";

const Header = () => {

    const searchCache = useSelector((store) => store.search);

    // console.log(searchCache)

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false)

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

//   console.log("Search Query:", searchQuery, "Suggestions:", suggestions)
// console.log(showSuggestions)


  useEffect(() => {
    const timer = setTimeout(() => {
        if(searchCache[searchQuery]){
            setSuggestions(searchCache[searchQuery]);
        }else{
            getSuggestions();
        }

    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSuggestions = async () => {
    if (!searchQuery.trim()) {
      setSuggestions([]);
      return;
    }

    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1] || []);

    

    dispatch(chacheResults({[searchQuery]:json[1]}))
  };

  return (
    <div className="flex items-start justify-between shadow-lg p-4">
      {/* Left: Hamburger + Logo */}
      <div className="flex items-center">
        <button onClick={toggleMenuHandler}>
          <img
            className="h-8 mr-3 cursor-pointer"
            src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
            alt="menu"
          />
        </button>
        <img
          className="h-10"
          src="https://upload.wikimedia.org/wikinews/en/archive/b/bf/20070306161914%21Real_Madrid_logo.png"
          alt="logo"
        />
      </div>

      {/* Center: Search box with suggestions */}
      <div className="flex flex-col items-center w-1/2">
        <div className="flex w-full">
          {/* Wrapper around input (for relative positioning) */}
          <div className="relative w-full">
            <input
              className="w-full border border-gray-400 p-2 rounded-l-full"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              onFocus={()=> setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />

            {/* ❌ Clear Button inside input */}
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-black p-1 rounded-full hover:bg-gray-300/50 transition duration-150"
              >
                X
              </button>
            )}

            {/* Dropdown suggestions under input only */}
            {showSuggestions && (
              <ul className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 shadow-md rounded-md z-10">
                {suggestions.map((s, idx) => (
                  <Link to="/search">
                    <li
                      key={idx}
                      className="p-2 hover:bg-gray-200"
                    >
                      {s}
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </div>

          {/* Search button */}
          <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100 hover:bg-green-400">
            Search
          </button>
        </div>
      </div>

      {/* Right: User Icon */}
      <div className="flex items-center">
        <img
          className="h-10 pr-5 cursor-pointer"
          src="https://static.vecteezy.com/system/resources/previews/019/879/198/non_2x/user-icon-on-transparent-background-free-png.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Header;

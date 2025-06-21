import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, toggleProfile } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "./constants";
import { chacheResults } from "../utils/searchSlice";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Header = () => {
  const searchCache = useSelector((store) => store.search);

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();

  const isPrfoleOpen = useSelector(store => store.app.isProfileOpen)

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
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

    dispatch(chacheResults({ [searchQuery]: json[1] }));
  };

  const handleSearchEnter = (e) => {
    if (e.key == "Enter" && searchQuery.trim()) {
      handleSearch();
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/results?search_query=${searchQuery}`);
      setSearchQuery("");
    }
  };

  const toggleProfileHandler = ()=>{
    dispatch(toggleProfile())
  }

  console.log(isPrfoleOpen);

  return (
    <div className="flex items-start justify-between shadow-lg p-4 ">
      {/* Left: Hamburger + Logo */}
      <div className="flex items-center">
        <button onClick={toggleMenuHandler}>
          <img
            className="h-8 mr-3 cursor-pointer"
            src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
            alt="menu"
          />
        </button>
        <Link to="/">
          <img
            className="h-10"
            src="https://upload.wikimedia.org/wikinews/en/archive/b/bf/20070306161914%21Real_Madrid_logo.png"
            alt="logo"
          />
        </Link>
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
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
              onKeyDown={handleSearchEnter}
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
                  <li
                    key={idx}
                    className="p-2 hover:bg-gray-200"
                    onMouseDown={(e) => {
                      setSearchQuery("");
                      navigate(`/results?search_query=${s}`);
                    }}
                  >
                    {s}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Search button */}
          <button
            className="border border-gray-400 p-2 rounded-r-full bg-gray-100 hover:bg-green-400"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      {/* Right: User Icon */}
      <div className="flex items-center relative">
        <img
          className="h-10  rounded-full cursor-pointer"
          src="https://static.vecteezy.com/system/resources/previews/019/879/198/non_2x/user-icon-on-transparent-background-free-png.png"
          alt="user"
          onClick={toggleProfileHandler}
        />
        {
          isPrfoleOpen && (
            <div className="absolute top-full right-0 mt-3 w-56 bg-gray-300 shadow-xl rounded-lg py-2 z-20 overflow-y-auto max-h-96">
              <p className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">Name</p>
              <p className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">Email</p>
              <p className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">Help</p>
              <hr className="my-1"/>

              <p className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">Logout</p>
              
            </div>
          )
        }
      </div>

      {/* <Outlet/> */}
    </div>
  );
};

export default Header;

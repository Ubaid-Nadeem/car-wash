"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [path, setPath] = useState("");
  const [navShow, setNavShow] = useState(false);

  useEffect(() => {
    setPath(location.pathname);
  }, []);

  return (
    <div className="lg:px-15 bg-[#181818] z-10">
      <div className="p-5 md:px-5 md:py-0 lg:p-0 flex justify-between  items-center text-white border-b border-[#555555]">
        <div className="flex gap-10  items-center">
          {/* Logo */}
          <div className="mr-10">
            <h2 className="font-bold text-[22px]">Car Wash</h2>
          </div>

          {/* Desktop Navigation */}
          <div>
            <ul className="hidden md:flex items-center text-[14px]">
              <li
                className={`${
                  path == "/" && "nav_menu_items_active"
                }  p-6 py-8 nav_menu_items  cursor-pointer `}
              >
                HOME
              </li>
              <li
                className={`${
                  path == "about" && "nav_menu_items_active"
                } p-6 py-8 nav_menu_items cursor-pointer`}
              >
                ABOUT
              </li>
              <li
                className={`${
                  path == "service" && "nav_menu_items_active"
                } p-6 py-8 nav_menu_items cursor-pointer`}
              >
                SERVICE
              </li>
              <li
                className={`${
                  path == "contact" && "nav_menu_items_active"
                } p-6 py-8 nav_menu_items cursor-pointer`}
              >
                CONTACT
              </li>
            </ul>
          </div>
        </div>
        {/* Side menu */}

        <div className="hidden md:flex gap-3 items-center">
          <div className="flex items-center gap-2">
            <div>
              <svg
                className="w-8 h-8"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m17.0896 13.371 1.1431 1.1439c.1745.1461.3148.3287.4111.5349.0962.2063.1461.4312.1461.6588 0 .2276-.0499.4525-.1461.6587-.0963.2063-.4729.6251-.6473.7712-3.1173 3.1211-6.7739 1.706-9.90477-1.4254-3.13087-3.1313-4.54323-6.7896-1.41066-9.90139.62706-.61925 1.71351-1.14182 2.61843-.23626l1.1911 1.19193c1.1911 1.19194.3562 1.93533-.4926 2.80371-.92477.92481-.65643 1.72741 0 2.38391l1.8713 1.8725c.3159.3161.7443.4936 1.191.4936.4468 0 .8752-.1775 1.1911-.4936.8624-.8261 1.6952-1.6004 2.8382-.4565ZM14 8.98134l5.0225-4.98132m0 0L15.9926 4m3.0299.00002v2.98135"
                />
              </svg>
            </div>
            <div className="text-sm">
              <p className="">Lets Talk</p>
              <p className="font-bold">+2 3457 789 654</p>
            </div>
          </div>
          <div className="w-2 h-6  border-r"></div>
          <div className="cursor-pointer">
            <svg
              className="w-8 h-8"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z"
              />
            </svg>
          </div>
        </div>

        {/* Mobile Menu icon */}
        <div className="block md:hidden cursor-pointer">
          <label className="burger" htmlFor="burger">
            <input
              type="checkbox"
              id="burger"
              onClick={() => {
                setNavShow(!navShow);
              }}
            />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        {/* mobile navs */}

        {navShow && (
          <div className="mobile_nav_div absolute block md:hidden bg-white text-black w-full left-0 top-19">
            <ul className="p-5 border-t-0 border-r-0 border-l-0 border-[#008dc7] border-[3px] z-10">
              <li className="py-3 text-sm hover:text-[#008dc7] cursor-pointer">
                HOME
              </li>
              <li className="py-3 text-sm hover:text-[#008dc7] cursor-pointer">
                ABOUT
              </li>
              <li className="py-3 text-sm hover:text-[#008dc7] cursor-pointer">
                SERVICE
              </li>
              <li className="py-3 text-sm hover:text-[#008dc7] cursor-pointer">
                CONTACT
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

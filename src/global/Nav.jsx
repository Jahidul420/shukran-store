/* This example requires Tailwind CSS v2.0+ */
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Fragment, useContext } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiBell } from "react-icons/bi";
import { BsHandbag } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
import shukran from "../assets/shukranLogo.png";
import user from "../assets/user.jpg";
import StoreContext from "../context/StoreContext";
import Cart from "./Cart";
const navigation = [
  { name: "Home", href: "/", dropDownIcon: false, current: false },
  { name: "Products", href: "/products", dropDownIcon: true, current: false },
  { name: "Find Store", href: "/", dropDownIcon: false, current: false },
  { name: "Blog", href: "#", dropDownIcon: false, current: false },
  { name: "Contact", href: "/", dropDownIcon: false, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Nav = () => {
  const { cart, wish, handleShowCart } = useContext(StoreContext);
  return (
    <>
      <Cart />
      <Disclosure
        as="nav"
        className=" sticky top-0 bg-black/30 backdrop-blur-xl z-40 duration-300 drop-shadow-md "
      >
        {({ open }) => (
          <>
            <div className="max-w-full mx-auto px-10">
              <div className="relative flex items-center justify-between h-14 md:h-20">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <HiXMark className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <AiOutlineMenu
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
                {/* ================== Nav Links ================== */}

                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-start sm:items-center">
                    <Link to="/" className=" h-14 flex items-center">
                      <img
                        src={shukran}
                        alt=""
                        className=" bg-cover
                     h-full w-full"
                      />
                    </Link>
                  </div>
                  <div className="hidden sm:block sm:m-auto ">
                    <div className="flex space-x-4">
                      {navigation.map((item, index) => (
                        <Menu as="div" className="ml-3 relative" key={index}>
                          <div>
                            <Menu.Button className="flex text-sm rounded-md">
                              <span className="sr-only">Open user menu</span>
                              <Link
                                key={item.name}
                                to={item.href}
                                className={classNames(
                                  item.current
                                    ? "bg-gray-900 text-white"
                                    : "text-white hover:text-white/80 flex items-center justify-center",
                                  "px-3 py-2 rounded-md text-sm font-medium"
                                )}
                                aria-current={item.current ? "page" : undefined}
                              >
                                {item.name}
                                {item.dropDownIcon ? (
                                  <FaAngleDown className="text-md ml-1" />
                                ) : (
                                  ""
                                )}
                              </Link>
                            </Menu.Button>
                          </div>

                          {item.dropDownIcon ? (
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="origin-top-right absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700"
                                      )}
                                    >
                                      All Products
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700"
                                      )}
                                    >
                                      Chinigura
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700"
                                      )}
                                    >
                                      Najirshail
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700"
                                      )}
                                    >
                                      Kataribhog
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700"
                                      )}
                                    >
                                      Minicate
                                    </a>
                                  )}
                                </Menu.Item>
                              </Menu.Items>
                            </Transition>
                          ) : (
                            ""
                          )}
                        </Menu>
                      ))}
                    </div>
                  </div>
                </div>
                {/* ================== Nav Links  End================== */}
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-5">
                  <NavIconBUtton name="View Notifications" icon={<BiBell />} />
                  <NavIconBUtton
                    name="View WishList"
                    icon={<FiHeart />}
                    notefication={wish.length}
                  />
                  <NavIconBUtton
                    click={handleShowCart}
                    name="View Cart"
                    icon={<BsHandbag />}
                    notefication={cart.reduce(
                      (qrevious, current) => qrevious + current.quantity,
                      0
                    )}
                  />

                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <div className="h-8 w-8 rounded-full overflow-hidden">
                          <img src={user} alt="" className="h-full w-full" />
                        </div>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/profile"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/profile"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Settings
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/login"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </Link>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};
export default Nav;

const NavIconBUtton = ({ name, icon, notefication, click }) => {
  return (
    <button
      onClick={click}
      type="button"
      className=" hover:bg-black/50 p-2 duration-500 rounded-full text-white outline-none focus:ring  focus:ring-white text-2xl relative"
    >
      <span className="sr-only">{name}</span>
      <div aria-hidden="true">{icon}</div>
      <div
        className={` ${
          notefication > 0 ? "opacity-100" : "opacity-0"
        } bg-white h-5 w-5 rounded-full absolute -top-2 -right-2 text-black flex justify-center items-center text-xs duration-300 transition-all`}
      >
        <p>{notefication}</p>
      </div>
    </button>
  );
};
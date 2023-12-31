"use client";
import Image from "next/image";
import * as icon from "@/assets/index";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/authSlice";
import { total } from "@/redux/cartSlice";
import { path } from "@/constant/router";
import Cart from "../Cart/Cart";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();
  const { totalItems, cart } = useSelector((store) => store.cart);
  const { isLogin } = useSelector((store) => store.auth);
  // const [theme, setTheme] = useState(
  //   global?.localStorage?.getItem("theme")
  //     ? global?.localStorage?.getItem("theme")
  //     : "winter"
  // );

  useEffect(() => {
    dispatch(total());
  }, [cart]);

  return (
    <main className="navbar fixed z-50 bg-white">
      <div className="navbar-start">
        <Image src={icon.logo} alt="logo" />
      </div>
      <ul className="navbar-center list-none flex justify-center items-center gap-3">
        {path.map((nav) => {
          return (
            <li key={nav.id}>
              <Link
                href={nav.path}
                className={
                  pathname == nav.path
                    ? "text-blue-600"
                    : "text-base hover:text-info"
                }
              >
                {nav.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="navbar-end flex items-center gap-2">
        <div className="drawer drawer-end w-auto">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer" className=" drawer-button">
              <div role="button" className="btn btn-ghost btn-circle">
                <div className="indicator z-0">
                  <Image src={icon.cart} alt="cart" width={30} height={30} />
                  <span className="badge badge-sm indicator-item">
                    {totalItems}
                  </span>
                </div>
              </div>
            </label>
          </div>
          <div className="drawer-side overflow-x-hidden">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 min-h-full w-screen lg:w-3/12 bg-base-200 text-base-content absolute z-50">
              {/* Sidebar content here */}
              <Cart />
            </ul>
          </div>
        </div>
        {isLogin ? (
          <div className="dropdown dropdown-end static">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="w-10 rounded-full">
                <Image
                  alt="Avatar"
                  src="https://api.multiavatar.com/kathrin.svg"
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
            >
              <li>
                <Link href="#">Profile</Link>
              </li>
              <li>
                <Link href="#">Settings</Link>
              </li>
              <li>
                <span onClick={() => dispatch(logout())}>Logout</span>
              </li>
            </ul>
          </div>
        ) : (
          <button
            className="btn border border-black"
            onClick={() => router.push("/login")}
          >
            Login
          </button>
        )}
      </div>
    </main>
  );
};
export default Header;

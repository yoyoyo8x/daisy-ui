"use client";
import Link from "next/link";
import Image from "next/image";
import * as icon from "@/assets/index";
import { increase, decrease, clear } from "@/redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { BiMinus } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";
import { RiRefreshFill } from "react-icons/ri";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useRef } from "react";

function Cart() {
  const DrawerRef = useRef(null);
  const dispatch = useDispatch();
  const { totalPrice, cart } = useSelector((store) => store.cart);
  const { isLogin } = useSelector((store) => store.auth);

  return (
    <div className="drop-shadow-md">
      {/* Cart content */}
      <div className="flex justify-between items-center pt-2 pb-10">
        <motion.div
          whileTap={{ scale: 0.75 }}
          className="cursor-pointer"
          onClick={() => (document.getElementById("my-drawer").checked = false)}
        >
          <MdOutlineKeyboardBackspace className="text-base-info text-2xl" />
        </motion.div>
        <p className="text-base-content font-semibold text-xl ml-8">Cart</p>

        <motion.p
          whileTap={{ scale: 0.75 }}
          className="flex items-center gap-1 px-2 py-1 rounded-md cursor-pointer border border-gray-400 hover:shadow-md text-base-content"
          onClick={() => document.getElementById("clear_modal").showModal()}
        >
          Clear <RiRefreshFill />
        </motion.p>
        {/* Clear button modal */}
        <dialog id={`clear_modal`} className="modal">
          <div className="modal-box !py-10">
            <p className="pb-6 text-lg text-center">Clear your cart?</p>
            <form
              method="dialog"
              className="grid grid-cols-[repeat(2,100px)] place-content-center gap-4"
            >
              {/* if there is a button in form, it will close the modal */}
              <button
                className="btn btn-error text-white"
                onClick={() => {
                  dispatch(clear());
                }}
              >
                Yes
              </button>
              <button className="btn btn-primary text-white">No</button>
            </form>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>

      {/* bottom section */}
      {cart && cart.length > 0 ? (
        <div className="w-full h-[calc(100vh-126px)] flex flex-col rounded-full">
          {/* Cart item section */}
          <div className="w-full flex flex-col gap-3 md:h-42 h-[calc(100vh-316px)] overflow-y-auto no-scrollbar">
            {cart &&
              cart.map((item) => (
                <>
                  <div className="w-full py-1 px-2 rounded-lg flex gap-2 items-center bg-base-100 ">
                    <img
                      src={item?.image}
                      alt="product"
                      className="!w-20 !h-20 max-w-[240px]"
                      fill="auto"
                    />
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <p className="text-base ">{item?.title}</p>
                      <p className="text-sm block font-semibold">
                        $ {item?.price * item?.amount}
                      </p>
                    </div>
                    {/* Button */}
                    <div className="flex items-center gap-2 cursor-pointer ml-auto ">
                      <motion.div whileTap={{ scale: 0.75 }}>
                        <BiMinus
                          className="text-base-content"
                          onClick={() => {
                            console.log(item);
                            if (item?.amount == 1) {
                              document
                                .getElementById(`my_modal_${item._id}`)
                                .showModal();
                            } else {
                              dispatch(decrease(item));
                            }
                          }}
                        />
                      </motion.div>
                      <p>{item.amount}</p>
                      <motion.div whileTap={{ scale: 0.75 }}>
                        <BiPlus
                          className="text-base-content"
                          onClick={() => {
                            dispatch(increase(item));
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                  {/* Confirm Remove Modal */}
                  <dialog
                    key={item.id}
                    id={`my_modal_${item._id}`}
                    className="modal"
                  >
                    <div className="modal-box !py-10">
                      <p className="pb-6 text-lg text-center">
                        Do you want to remove {item?.title} from your cart?
                      </p>
                      <form
                        method="dialog"
                        className="grid grid-cols-[repeat(2,100px)] place-content-center gap-4"
                      >
                        {/* if there is a button in form, it will close the modal */}
                        <button
                          className="btn btn-error text-white"
                          onClick={() => {
                            dispatch(decrease(item));
                          }}
                        >
                          Yes
                        </button>
                        <button className="btn btn-primary text-white">
                          No
                        </button>
                      </form>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                      <button>close</button>
                    </form>
                  </dialog>
                </>
              ))}
          </div>
          {/* Cart total section */}
          <div className="w-full flex flex-col items-center justify-evently px-8 py-5 mt-8 bg-base-100 rounded-lg text-base">
            <div className="w-full flex items-center justify-between">
              <p className="">Sub Total</p>
              <p className="">${totalPrice}</p>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="">Delivery</p>
              <p className="">$2.5</p>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="">Total</p>
              <p className="">${totalPrice + 2.5}</p>
            </div>
          </div>
          {isLogin ? (
            <button className="btn bg-[#f14b4b] rounded-full w-full text-white mt-8 hover:text-base-content hover:bg-[#80bdfe]">
              Proceed to checkout
            </button>
          ) : (
            <Link
              href="/login"
              className="btn bg-[#f14b4b] rounded-full w-full text-white mt-8 hover:text-base-content hover:bg-[#80bdfe]"
              onClick={() =>
                (document.getElementById("my-drawer").checked = false)
              }
            >
              Login to checkout
            </Link>
          )}
        </div>
      ) : (
        <div className="w-full h-[calc(100vh-126px)] flex flex-col items-center justify-center gap-8">
          <Image src={icon.EmptyCart} className="w-300" alt="" />
          <p className="text-base-content text-xl">
            Add some items to your cart
          </p>
        </div>
      )}
    </div>
  );
}

export default Cart;

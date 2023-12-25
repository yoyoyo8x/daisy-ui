"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "@/service/product.service";
import { addToCart } from "@/redux/cartSlice";
import * as icon from "@/assets/index";

function Shop() {
  const dispatch = useDispatch();
  const { list, cate } = useSelector((store) => store.product);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  const handleCheck = (e) => {
    if (e.target.checked) {
      setFilter((prevArray) => [...prevArray, e.target.value]);
    } else {
      setFilter((prevArray) =>
        prevArray.filter((item) => item !== e.target.value)
      );
    }
  };

  return (
    <div className="bg-base-300 py-[67px] px-4">
      <div className="text-center text-3xl mb-8">Products</div>
      {list && list.length > 0 ? (
        <div className="grid grid-rows-2 grid-flow-col gap-4">
          {cate && cate.length > 0 ? (
            <div className="row-span-2 border-r border-r-gray-400 pr-5">
              <div className="sticky left-0 top-20 ">
                <div className="flex gap-1 items-center justify-center text-xl font-semibold">
                  <Image src={icon.filter} alt="filter" className="w-12 h-12" />
                  FILTER
                </div>
                <div className="">
                  {cate?.map((item, index) => (
                    <label className="label cursor-pointer" key={index}>
                      <span className="label-text uppercase">{item}</span>
                      <input
                        type="checkbox"
                        className="checkbox"
                        value={item}
                        onChange={handleCheck}
                      />
                    </label>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="row-span-2 grid grid-cols-3 place-items-center">
            {(filter.length == 0
              ? list
              : list.filter((item) => filter.includes(item.category))
            ).map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-between items-center relative px-4 py-2 bg-[#fff] border border-gray-300 hover:bg-base-200 rounded-lg backdrop-blur-lg hover:drop-shadow-lg text-center cursor-pointer mb-5"
              >
                <Link
                  href={{ pathname: `/shop/${item._id}` }}
                  className="w-full flex flex-col gap-2 justify-center items-center"
                >
                  <div className="w-full h-full drop-shadow-2xl">
                    <img className="w-72 h-80" src={item?.image} alt="image" />
                  </div>
                  <p className="text-base-content">{item?.title}</p>
                </Link>
                <div className="w-full flex flex-col justify-between gap-2">
                  <div className="text-base-content">
                    <p className="text-lg font-medium text-red-500">
                      ${item?.price}
                    </p>
                  </div>

                  <motion.div
                    whileTap={{ scale: 0.75 }}
                    className="w-full rounded-full cursor-pointer p-2 border border-base-content hover:shadow-md hover:text-base-100 hover:bg-base-content"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    <div>+ Add to cart</div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <Image src={icon.NotFound} alt="notfound" height={340} />
          <p className="text-neutral text-xl font-semibold my-2">
            Items Not Available
          </p>
        </div>
      )}
    </div>
  );
}

export default Shop;

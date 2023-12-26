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
  const { list, cate, brand } = useSelector((store) => store.product);
  const [filter, setFilter] = useState([]);
  const [filterBrand, setFilterBrand] = useState([]);

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  const handleCheck = (e, setValue) => {
    if (e.target.checked) {
      setValue((prevArray) => [...prevArray, e.target.value]);
    } else {
      setValue((prevArray) =>
        prevArray.filter((item) => item !== e.target.value)
      );
    }
  };

  return (
    <div className="bg-base-300 py-[67px] px-4">
      <div className="text-center text-3xl mb-8">Products</div>
      {list && list.length > 0 ? (
        <div className="flex justify-between gap-4">
          <div className="flex-[1] border-r border-r-gray-400 pr-5">
            <div className="sticky left-0 top-20 overflow-y-auto h-[calc(100vh-137px)] no-scrollbar">
              <div className="flex gap-1 items-center justify-center text-xl font-semibold">
                <Image src={icon.filter} alt="filter" className="w-10 h-10" />
                FILTER
              </div>
              {cate && cate.length > 0 ? (
                <div className="">
                  <span className="uppercase text-lg font-medium">
                    category
                  </span>
                  {cate?.map((item, index) => (
                    <label className="label cursor-pointer" key={index}>
                      <span className="label-text uppercase">{item}</span>
                      <input
                        type="checkbox"
                        className="checkbox"
                        value={item}
                        onChange={(e) => handleCheck(e, setFilter)}
                      />
                    </label>
                  ))}
                </div>
              ) : (
                ""
              )}
              {brand && brand.length > 0 ? (
                <div className="">
                  <span className="uppercase text-lg font-medium">brand</span>
                  {brand?.map((item, index) => (
                    <label className="label cursor-pointer" key={index}>
                      <span className="label-text uppercase">{item}</span>
                      <input
                        type="checkbox"
                        className="checkbox"
                        value={item}
                        onChange={(e) => handleCheck(e, setFilterBrand)}
                      />
                    </label>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="flex-[5] flex flex-wrap justify-center items-center gap-5">
            {(filter.length == 0 && filterBrand.length == 0
              ? list
              : filter.length != 0 && filterBrand.length == 0
              ? list.filter((item) => filter.includes(item.category))
              : filter.length == 0 && filterBrand.length != 0
              ? list.filter((item) => filterBrand.includes(item.brand))
              : list
                  .filter((item) => filter.includes(item.category))
                  .filter((item) => filterBrand.includes(item.brand))
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

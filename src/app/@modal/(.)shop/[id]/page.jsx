"use client";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { getProduct } from "@/service/product.service";
import { addToCart } from "@/redux/cartSlice";
import { useZoomImageMove } from "@zoom-image/react";
import Modal from "@/components/Modal/Modal";

function Product() {
  const params = useParams();
  const dispatch = useDispatch();
  const { list } = useSelector((store) => store.product);

  const containerRef = useRef(null);
  const { createZoomImage } = useZoomImageMove();

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  const product = list.find((item) => item._id == params.id);

  useEffect(() => {
    createZoomImage(containerRef.current, { zoomImageSource: product?.image });
  }, [product]);

  const discount = product?.previousPrice - product?.price;
  const percentOff = Math.round((discount / product?.previousPrice) * 100);

  return (
    <Modal>
      <div className="px-10 !py-12 grid grid-cols-2 gap-5 text-lg bg-white rounded-md">
        <div
          className="flex justify-center items-center relative cursor-crosshair overflow-hidden"
          ref={containerRef}
        >
          <img
            src={product?.image}
            alt="product"
            className="w-[500px] h-[500px]"
          />
        </div>

        <div className="flex flex-col gap-2 justify-center">
          <div className="uppercase text-2xl">{product?.title}</div>
          <div>
            Brand: <span>{product?.brand}</span>
          </div>
          <div className="flex items-center">
            Price:
            {product?.previousPrice ? (
              <span className="flex items-center">
                <span className="line-through text-base text-gray-400 px-2">
                  ${product?.previousPrice}
                </span>
                <span className="text-red-400">${product?.price}</span>
                <span className="text-xs bg-red-400 text-white ml-2 px-3 py-1">
                  {percentOff}% Discount!
                </span>
              </span>
            ) : (
              <span className="text-red-400">${product?.price}</span>
            )}
          </div>
          <p>{product?.description}</p>
          <button
            className="btn border border-black text-lg w-40"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to cart
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default Product;

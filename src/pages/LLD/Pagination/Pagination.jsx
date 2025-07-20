import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ShimmerUI from "../InfiniteScroll/ShimmerUI";

const LIMIT = 12;
const Pagination = () => {
  const [showShimmer, setShowShimmer] = useState(false);
  const [products, setProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    fetchProductDetails();
  }, [pageNum]);

  const fetchProductDetails = async () => {
    try {
      setShowShimmer(true);
      let response = await fetch(
        `https://dummyjson.com/products?limit=${LIMIT}&skip=${
          pageNum * LIMIT
        }&select=id,title,description,price,thumbnail`
      );
      let data = await response.json();
      setShowShimmer(false);
      setProducts(data.products);
      let totalPages = Math.floor(data.total / LIMIT);
      setPageCount(totalPages);
    } catch (error) {
      console.log("Error while fetching products", error);
    }
  };

  return (
    <div>
      <div className="flex flex-wrap mx-2 my-4 justify-center items-center">
        {products?.length > 0 &&
          products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        {showShimmer && <ShimmerUI />}
      </div>
      <div className="flex flex-row p-2 m-4">
        <button
          disabled={pageNum == 1}
          className="px-4 py-1 border border-gray-200 cursor-pointer"
          onClick={() => setPageNum((page) => page - 1)}
        >
          Prev
        </button>
        {[...Array(pageCount).keys()].map((page, index) => (
          <p
            key={index}
            className={`mx-3 text-lg cursor-pointer ${
              pageNum === index + 1 ? `font-bold underline` : undefined
            }`}
            onClick={() => setPageNum(page + 1)}
          >
            {page + 1}
          </p>
        ))}
        <button
          disabled={pageNum >= pageCount}
          className="px-4 py-1 border border-gray-200 cursor-pointer"
          onClick={() => setPageNum((page) => page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;

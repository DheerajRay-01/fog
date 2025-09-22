import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { fetchProducts, setPage, setSortBy, setLimit } from "../Utils/slice/productSlice";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Toaster } from "react-hot-toast";
import { MdFormatListBulletedAdd } from "react-icons/md";
import AddProductForm from "../components/AddProductForm";
const ShopPage = () => {
  // console.log("hellloooo");
const [addForm,setAddForm] = useState(false)
  
  const dispatch = useDispatch();
  const {
    data: products,
    loading,
    error,
    totalCount,
    currentPage,
    totalPages,
    limit,
    sortBy,
  } = useSelector((state) => state.products);

  const showOptions = [8, 16, 32, 64];
  const sortOptions = ["Default", "Price", "Name"];

  // Fetch products whenever page, limit, or sort changes
  useEffect(() => {
    dispatch(fetchProducts());
    console.log("hello");
    
  }, [dispatch, currentPage, limit, sortBy]);

  const handlePrev = () => currentPage > 1 && dispatch(setPage(currentPage - 1));
  const handleNext = () => currentPage < totalPages && dispatch(setPage(currentPage + 1));
  const handlePageClick = (page) => dispatch(setPage(page));

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);

  return (
    <div className="w-full">
      {/* Banner */}
      <div>
        <img
          src="banner.png"
          alt="Shop Banner"
          className="w-full object-cover max-h-[300px] sm:max-h-[400px] md:max-h-[500px]"
        />
      </div>

      {/* Controls */}
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between p-4 md:p-6 bg-[#F2E5D8] gap-3 md:gap-6">
        {/* Left: Showing info */}
        <div className="text-gray-700 text-sm sm:text-base w-full md:w-auto mb-2 md:mb-0">
          Showing {(currentPage - 1) * limit + 1} -{" "}
          {Math.min(currentPage * limit, totalCount)} of {totalCount} results
        </div>

        {/* Right: Show & Sort */}
        <div className="flex flex-wrap sm:flex-row items-center gap-3 sm:gap-6 w-full md:w-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 w-full sm:w-auto">
            <span className="text-gray-700 text-sm sm:text-base">Show</span>
            <select
              value={limit}
              onChange={(e) => dispatch(setLimit(Number(e.target.value)))}
              className="border p-2 rounded-md text-sm sm:text-base w-full sm:w-auto"
            >
              {showOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 w-full sm:w-auto">
            <span className="text-gray-700 text-sm sm:text-base">Sort by</span>
            <select
              value={sortBy}
              onChange={(e) => dispatch(setSortBy(e.target.value))}
              className="border p-2 rounded-md text-sm sm:text-base w-full sm:w-auto"
            >
              {sortOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="bg-amber-50 py-10 px-4 md:px-10">
        {loading ? (
          <p className="text-center">Loading products...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <>
            <div
              className="max-w-7xl mx-auto grid gap-6 sm:gap-8
                        grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
                        justify-items-center"
            >
              {products.map((product) => (
                <ProductCard
                  key={product._id}
                  product={{
                    ...product,
                    productImage: product.productImage || "product.png",
                  }}
                />
              ))}
            </div>


            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-6 flex-wrap">
              <button
                className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
                onClick={handlePrev}
                disabled={currentPage <= 1}
              >
                <IoIosArrowBack />
              </button>

              {pageNumbers.map((num) => (
                <button
                  key={num}
                  className={`px-3 py-1 rounded ${
                    num === currentPage ? "bg-gray-700 text-white" : "bg-gray-200"
                  }`}
                  onClick={() => handlePageClick(num)}
                >
                  {num}
                </button>
              ))}

              <button
                className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
                onClick={handleNext}
                disabled={currentPage >= totalPages}
              >
                <IoIosArrowForward />
              </button>
            </div>
          </>
        )}

      </div>
    <div onClick={()=>setAddForm(true)} className="group sticky  bottom-10 left-6 bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-4 py-2 rounded-full h-[50px] w-fit flex gap-2 justify-center items-center shadow-md transition">
  <MdFormatListBulletedAdd size={28} />
  <span className="hidden group-hover:flex">Add Product</span>
</div>

<AddProductForm isOpen={addForm} onClose={()=>setAddForm(false)}/>


      <Toaster
  position="top-center"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{}}
  toasterId="default"
  toastOptions={{
    // Define default options
    className: '',
    duration: 5000,
    removeDelay: 1000,
    style: {
      background: '#363636',
      color: '#fff',
    },

    // Default options for specific types
    success: {
      duration: 3000,
      iconTheme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  }}
/>
    </div>

  );
};

export default ShopPage;

// // import React, { useState, useEffect } from 'react';
// // import ProductCard from '../components/ProductCard';
// // import ProductControls from '../components/ProductControls';

// // const ShopPage = () => {
// //     // State to manage the number of products to display per page
// //     const [showPerPage, setShowPerPage] = useState(16);

// //     // State to manage the sorting option
// //     const [sortBy, setSortBy] = useState('Default');

// //     // Function to generate dummy product data
// //     const generateProducts = (count) => {
// //         const products = [];
// //         for (let i = 1; i <= count; i++) {
// //             products.push({
// //                 id: i,
// //                 name: `Syltherine ${i}`,
// //                 description: 'Stylish cafe chair',
// //                 originalPrice: 3500000 + i * 100000,
// //                 salePrice: 2500000 + i * 50000,
// //                 discount: 30,
// //                 productImage: 'product.png',
// //             });
// //         }
// //         return products;
// //     };

// //     // Generate an array of 32 products (to match the dummy data from ProductControls)
// //     const allProducts = generateProducts(32);

// //     // Filter and sort products based on state
// //     const visibleProducts = allProducts
// //         .slice(0, showPerPage) // Filter by 'showPerPage'
// //         .sort((a, b) => { // Sort by 'sortBy'
// //             if (sortBy === 'Price') {
// //                 return a.salePrice - b.salePrice;
// //             }
// //             if (sortBy === 'Name') {
// //                 return a.name.localeCompare(b.name);
// //             }
// //             return 0; // Default or other sort options
// //         });

// //     return (
// //         <div className="w-full">
// //             {/* Banner image for the shop page */}
// //             <div>
// //                 <img
// //                     src="banner.png"
// //                     alt="Shop Banner"
// //                     className="w-full object-cover max-h-[300px] sm:max-h-[400px] md:max-h-[500px]"
// //                 />
// //             </div>

// //             {/* Product Controls */}
// //             <ProductControls
// //                 totalResults={allProducts.length}
// //                 showPerPage={showPerPage}
// //                 setShowPerPage={setShowPerPage}
// //                 sortBy={sortBy}
// //                 setSortBy={setSortBy}
// //             />

// //             {/* Product Grid Section */}
// //             <div className="bg-amber-50 py-10 px-4 md:px-10">
// //                 <div
// //                     className="max-w-7xl mx-auto grid gap-6 sm:gap-8
// //                                 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
// //                                 justify-items-center"
// //                 >
// //                     {visibleProducts.map((product) => (
// //                         <ProductCard key={product.id} product={product} />
// //                     ))}
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default ShopPage;



// // *****************************************************


// // import React, { useEffect, useState } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import ProductCard from "../components/ProductCard";
// // import ProductControls from "../components/ProductControls";
// // import { fetchProducts } from "../Utils/slice/productSlice";

// // const ShopPage = () => {
// //   const dispatch = useDispatch();
// //   const { data: products, loading, error, totalCount } = useSelector(
// //     (state) => state.products
// //   );

// //   // State to manage products per page and sorting
// //   const [showPerPage, setShowPerPage] = useState(16);
// //   const [sortBy, setSortBy] = useState("Default");

// //   // Fetch products on mount
// //   useEffect(() => {
// //     dispatch(fetchProducts());
// //   }, [dispatch]);

// //   // Sort products
// //   const sortedProducts = [...products].sort((a, b) => {
// //     if (sortBy === "Price") return a.salePrice - b.salePrice;
// //     if (sortBy === "Name") return a.name.localeCompare(b.name);
// //     return 0; // Default
// //   });

// //   // Slice by showPerPage
// //   const visibleProducts = sortedProducts.slice(0, showPerPage);

// //   return (
// //     <div className="w-full">
// //       {/* Banner */}
// //       <div>
// //         <img
// //           src="banner.png"
// //           alt="Shop Banner"
// //           className="w-full object-cover max-h-[300px] sm:max-h-[400px] md:max-h-[500px]"
// //         />
// //       </div>

// //       {/* Product Controls */}
// //       <ProductControls
// //         totalResults={totalCount || products.length}
// //         showPerPage={showPerPage}
// //         setShowPerPage={setShowPerPage}
// //         sortBy={sortBy}
// //         setSortBy={setSortBy}
// //       />

// //       {/* Product Grid */}
// //       <div className="bg-amber-50 py-10 px-4 md:px-10">
// //         {loading ? (
// //           <p className="text-center">Loading products...</p>
// //         ) : error ? (
// //           <p className="text-center text-red-500">{error}</p>
// //         ) : (
// //           <div
// //             className="max-w-7xl mx-auto grid gap-6 sm:gap-8
// //                         grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
// //                         justify-items-center"
// //           >
// //             {visibleProducts.map((product) => (
// //               <ProductCard
// //                 key={product._id}
// //                 product={{
// //                   ...product,
// //                   productImage: product.productImage || "product.png", // default image
// //                 }}
// //               />
// //             ))}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ShopPage;



// // ******************************************************************************


// // import React, { useEffect, useState } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import ProductCard from "../components/ProductCard";
// // import ProductControls from "../components/ProductControls";
// // import { fetchProducts, setPage } from "../Utils/slice/productSlice";
// // import { IoIosArrowBack } from "react-icons/io";
// // import { IoIosArrowForward } from "react-icons/io";

// // const ShopPage = () => {
// //   const dispatch = useDispatch();
// //   const { data: products, loading, error, totalCount, currentPage, totalPages } = useSelector(
// //     (state) => state.products
// //   );

// //   const [showPerPage, setShowPerPage] = useState(16);
// //   const [sortBy, setSortBy] = useState("Default");

// //   useEffect(() => {
// //     dispatch(fetchProducts());
// //   }, [dispatch, currentPage]);

// //   const sortedProducts = [...products].sort((a, b) => {
// //     if (sortBy === "Price") return a.salePrice - b.salePrice;
// //     if (sortBy === "Name") return a.name.localeCompare(b.name);
// //     return 0;
// //   });

// //   const visibleProducts = sortedProducts.slice(0, showPerPage);

// //   const handlePrev = () => currentPage > 1 && dispatch(setPage(currentPage - 1));
// //   const handleNext = () => currentPage < totalPages && dispatch(setPage(currentPage + 1));
// //   const handlePageClick = (page) => dispatch(setPage(page));

// //   // Generate page numbers
// //   const pageNumbers = [];
// //   for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);

// //   return (
// //     <div className="w-full">
// //       {/* Banner */}
// //       <div>
// //         <img
// //           src="banner.png"
// //           alt="Shop Banner"
// //           className="w-full object-cover max-h-[300px] sm:max-h-[400px] md:max-h-[500px]"
// //         />
// //       </div>

// //       {/* Product Controls */}
// //       <ProductControls
// //         totalResults={totalCount || products.length}
// //         showPerPage={showPerPage}
// //         setShowPerPage={setShowPerPage}
// //         sortBy={sortBy}
// //         setSortBy={setSortBy}
// //       />

// //       {/* Product Grid */}
// //       <div className="bg-amber-50 py-10 px-4 md:px-10">
// //         {loading ? (
// //           <p className="text-center">Loading products...</p>
// //         ) : error ? (
// //           <p className="text-center text-red-500">{error}</p>
// //         ) : (
// //           <>
// //             <div
// //               className="max-w-7xl mx-auto grid gap-6 sm:gap-8
// //                         grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
// //                         justify-items-center"
// //             >
// //               {visibleProducts.map((product) => (
// //                 <ProductCard
// //                   key={product._id}
// //                   product={{ ...product, productImage: product.productImage || "product.png" }}
// //                 />
// //               ))}
// //             </div>

// //             {/* Pagination */}
// //             <div className="flex justify-center gap-2 mt-6 flex-wrap">
// //               <button
// //                 className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
// //                 onClick={handlePrev}
// //                 disabled={currentPage <= 1}
// //               >
// //                 <IoIosArrowBack/>
// //               </button>

// //               {pageNumbers.map((num) => (
// //                 <button
// //                   key={num}
// //                   className={`px-3 py-1 rounded ${
// //                     num === currentPage ? "bg-gray-700 text-white" : "bg-gray-200"
// //                   }`}
// //                   onClick={() => handlePageClick(num)}
// //                 >
// //                   {num}
// //                 </button>
// //               ))}

// //               <button
// //                 className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
// //                 onClick={handleNext}
// //                 disabled={currentPage >= totalPages}
// //               >
// //               <IoIosArrowForward/>
// //               </button>
// //             </div>
// //           </>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ShopPage;

// // *********************************************************
// // import React, { useEffect } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import ProductCard from "../components/ProductCard";
// // import ProductControls from "../components/ProductControls";
// // import { fetchProducts, setPage, setSortBy, setLimit } from "../Utils/slice/productSlice";
// // import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// // const ShopPage = () => {
// //   const dispatch = useDispatch();
// //   const { data: products, loading, error, totalCount, currentPage, totalPages, sortBy, limit } =
// //     useSelector((state) => state.products);

// //   useEffect(() => {
// //     dispatch(fetchProducts());
// //   }, [dispatch, currentPage, sortBy, limit]);

// //   const handlePrev = () => currentPage > 1 && dispatch(setPage(currentPage - 1));
// //   const handleNext = () => currentPage < totalPages && dispatch(setPage(currentPage + 1));
// //   const handlePageClick = (page) => dispatch(setPage(page));

// //   return (
// //     <div className="w-full">
// //       <div>
// //         <img
// //           src="banner.png"
// //           alt="Shop Banner"
// //           className="w-full object-cover max-h-[300px] sm:max-h-[400px] md:max-h-[500px]"
// //         />
// //       </div>

// //       <ProductControls
// //         totalResults={totalCount}
// //         showPerPage={limit}
// //         setShowPerPage={(val) => dispatch(setLimit(val))}
// //         sortBy={sortBy}
// //         setSortBy={(val) => dispatch(setSortBy(val))}
// //       />

// //       <div className="bg-amber-50 py-10 px-4 md:px-10">
// //         {loading ? (
// //           <p className="text-center">Loading products...</p>
// //         ) : error ? (
// //           <p className="text-center text-red-500">{error}</p>
// //         ) : (
// //           <>
// //             <div className="max-w-7xl mx-auto grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
// //               {products.map((product) => (
// //                 <ProductCard
// //                   key={product._id}
// //                   product={{ ...product, productImage: product.productImage || "product.png" }}
// //                 />
// //               ))}
// //             </div>

// //             {/* Pagination */}
// //             <div className="flex justify-center gap-2 mt-6 flex-wrap">
// //               <button
// //                 className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
// //                 onClick={handlePrev}
// //                 disabled={currentPage <= 1}
// //               >
// //                 <IoIosArrowBack />
// //               </button>

// //               {[...Array(totalPages)].map((_, idx) => {
// //                 const num = idx + 1;
// //                 return (
// //                   <button
// //                     key={num}
// //                     className={`px-3 py-1 rounded ${
// //                       num === currentPage ? "bg-gray-700 text-white" : "bg-gray-200"
// //                     }`}
// //                     onClick={() => handlePageClick(num)}
// //                   >
// //                     {num}
// //                   </button>
// //                 );
// //               })}

// //               <button
// //                 className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
// //                 onClick={handleNext}
// //                 disabled={currentPage >= totalPages}
// //               >
// //                 <IoIosArrowForward />
// //               </button>
// //             </div>
// //           </>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ShopPage;


// // ************************



// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import ProductCard from "../components/ProductCard";
// import { fetchProducts, setPage, setSortBy, setLimit } from "../Utils/slice/productSlice";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// const ShopPage = () => {
//   const dispatch = useDispatch();
//   const {
//     data: products,
//     loading,
//     error,
//     totalCount,
//     currentPage,
//     totalPages,
//     limit,
//     sortBy,
//   } = useSelector((state) => state.products);

//   const showOptions = [8, 16, 32, 64];
//   const sortOptions = ["Default", "Price", "Name"];

//   // Fetch products whenever page, limit, or sort changes
//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch, currentPage, limit, sortBy]);

//   const handlePrev = () => currentPage > 1 && dispatch(setPage(currentPage - 1));
//   const handleNext = () => currentPage < totalPages && dispatch(setPage(currentPage + 1));
//   const handlePageClick = (page) => dispatch(setPage(page));

//   // Generate page numbers
//   const pageNumbers = [];
//   for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);

//   return (
//     <div className="w-full">
//       {/* Banner */}
//       <div>
//         <img
//           src="banner.png"
//           alt="Shop Banner"
//           className="w-full object-cover max-h-[300px] sm:max-h-[400px] md:max-h-[500px]"
//         />
//       </div>

//       {/* Controls */}
//       <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-[#F2E5D8] gap-4">
//         {/* Left: Showing info */}
//         <div className="text-gray-700">
//           Showing {(currentPage - 1) * limit + 1} -{" "}
//           {Math.min(currentPage * limit, totalCount)} of {totalCount} results
//         </div>

//         {/* Right: Show & Sort */}
//         <div className="flex items-center gap-4">
//           <div className="flex items-center gap-2">
//             <span className="text-gray-700">Show</span>
//             <select
//               value={limit}
//               onChange={(e) => dispatch(setLimit(Number(e.target.value)))}
//               className="border p-2 rounded-md"
//             >
//               {showOptions.map((option) => (
//                 <option key={option} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="flex items-center gap-2">
//             <span className="text-gray-700">Sort by</span>
//             <select
//               value={sortBy}
//               onChange={(e) => dispatch(setSortBy(e.target.value))}
//               className="border p-2 rounded-md"
//             >
//               {sortOptions.map((option) => (
//                 <option key={option} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>
//       </div>

//       {/* Product Grid */}
//       <div className="bg-amber-50 py-10 px-4 md:px-10">
//         {loading ? (
//           <p className="text-center">Loading products...</p>
//         ) : error ? (
//           <p className="text-center text-red-500">{error}</p>
//         ) : (
//           <>
//             <div
//               className="max-w-7xl mx-auto grid gap-6 sm:gap-8
//                         grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
//                         justify-items-center"
//             >
//               {products.map((product) => (
//                 <ProductCard
//                   key={product._id}
//                   product={{
//                     ...product,
//                     productImage: product.productImage || "product.png",
//                   }}
//                 />
//               ))}
//             </div>

//             {/* Pagination */}
//             <div className="flex justify-center gap-2 mt-6 flex-wrap">
//               <button
//                 className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
//                 onClick={handlePrev}
//                 disabled={currentPage <= 1}
//               >
//                 <IoIosArrowBack />
//               </button>

//               {pageNumbers.map((num) => (
//                 <button
//                   key={num}
//                   className={`px-3 py-1 rounded ${
//                     num === currentPage ? "bg-gray-700 text-white" : "bg-gray-200"
//                   }`}
//                   onClick={() => handlePageClick(num)}
//                 >
//                   {num}
//                 </button>
//               ))}

//               <button
//                 className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
//                 onClick={handleNext}
//                 disabled={currentPage >= totalPages}
//               >
//                 <IoIosArrowForward />
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ShopPage;






import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { fetchProducts, setPage, setSortBy, setLimit } from "../Utils/slice/productSlice";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ShopPage = () => {
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
    </div>
  );
};

export default ShopPage;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../Utils/slice/productSlice";
import toast from "react-hot-toast";

const ProductFormModal = ({ isOpen, onClose, initialData }) => {
// console.log(initialData);
const dispatch = useDispatch()

  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log();
    dispatch(updateProduct({id:initialData._id,productData:formData}))
    toast.success("Update Successfully")
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-6 relative">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          {initialData ? "Update Product" : "Add Product"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded-md focus:ring-2 focus:ring-yellow-400"
          />

          {/* Brand & Category */}
          <div className="flex gap-3">
            <input
              type="text"
              name="brand"
              placeholder="Brand"
              value={formData.brand}
              onChange={handleChange}
              required
              className="w-1/2 border p-2 rounded-md focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-1/2 border p-2 rounded-md focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Prices */}
          <div className="flex gap-3">
            <input
              type="number"
              name="originalPrice"
              placeholder="Original Price"
              value={formData.originalPrice}
              onChange={handleChange}
              required
              className="w-1/2 border p-2 rounded-md focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="number"
              name="salePrice"
              placeholder="Sale Price"
              value={formData.salePrice}
              onChange={handleChange}
              required
              className="w-1/2 border p-2 rounded-md focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Discount */}
          <input
            type="number"
            name="discount"
            placeholder="Discount %"
            value={formData.discount}
            onChange={handleChange}
            min="0"
            max="100"
            className="w-full border p-2 rounded-md focus:ring-2 focus:ring-yellow-400"
          />

          {/* Description */}
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            className="w-full border p-2 rounded-md focus:ring-2 focus:ring-yellow-400"
          />

          {/* Product Image */}
          <input
            type="text"
            name="productImage"
            placeholder="Image URL"
            value={formData.productImage}
            onChange={handleChange}
            className="w-full border p-2 rounded-md focus:ring-2 focus:ring-yellow-400"
          />

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-yellow-500 text-white hover:bg-yellow-600"
            >
              {initialData ? "Update" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductFormModal;

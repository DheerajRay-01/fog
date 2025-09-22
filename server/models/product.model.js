import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    brand: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },

    originalPrice: {
      type: Number,
      required: [true, "Original price is required"],
      min: [0, "Price cannot be negative"],
    },
    salePrice: {
      type: Number,
      required: [true, "Sale price is required"],
      min: [0, "Sale price cannot be negative"],
    },
    discount: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },

    productImage: { type: String, default: "product.png" },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;

// import Product from "../models/product.model.js";

// // ✅ Fetch products with pagination
// export const getProducts = async (req, res) => {
//   try {
//     let { page , limit } = req.query;
//     page = parseInt(page);
//     limit = parseInt(limit);

//     const total = await Product.countDocuments();
//     const products = await Product.find()
//       .sort({ createdAt: -1 })
//       .skip((page - 1) * limit)
//       .limit(limit);

//     res.status(200).json({
//       data: products,
//       total,
//       page,
//       pages: Math.ceil(total / limit),
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching products", error });
//   }
// };

// // ✅ Add single or multiple products
// export const addProducts = async (req, res) => {
//   try {
//     let products = req.body;

//     // Convert single object to array
//     if (!Array.isArray(products)) products = [products];

//     const savedProducts = await Product.insertMany(products);
//     res.status(201).json(savedProducts.length === 1 ? savedProducts[0] : savedProducts);
//   } catch (error) {
//     res.status(500).json({ message: "Error adding products", error });
//   }
// };

// // ✅ Update product by ID
// export const updateProduct = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
//       new: true,
//       runValidators: true,
//     });

//     if (!updatedProduct)
//       return res.status(404).json({ message: "Product not found" });

//     res.status(200).json(updatedProduct);
//   } catch (error) {
//     res.status(500).json({ message: "Error updating product", error });
//   }
// };

// // ✅ Delete product by ID
// export const deleteProduct = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedProduct = await Product.findByIdAndDelete(id);

//     if (!deletedProduct)
//       return res.status(404).json({ message: "Product not found" });

//     res.status(200).json({ message: "Product deleted successfully", id });
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting product", error });
//   }
// };



import Product from "../models/product.model.js";

// Fetch products with pagination
// export const getProducts = async (req, res) => {
//   try {
//     let { page = 1, limit = 8 } = req.query;
//     page = parseInt(page);
//     limit = parseInt(limit);

//     const total = await Product.countDocuments();
//     const products = await Product.find()
//       .sort({ createdAt: -1 })
//       .skip((page - 1) * limit)
//       .limit(limit);

//     res.status(200).json({
//       data: products,
//       total,
//       page,
//       pages: Math.ceil(total / limit),
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching products", error });
//   }
// };

// export const getProducts = async (req, res) => {
//   try {
//     let { page = 1, limit = 8, sort } = req.query;
//     page = parseInt(page);
//     limit = parseInt(limit);

//     const total = await Product.countDocuments();
//     const query = Product.find();

//     // Sorting
//     if (sort) query.sort({ [sort]: 1 }); // ascending order

//     const products = await query.skip((page - 1) * limit).limit(limit);

//     res.status(200).json({
//       data: products,
//       total,
//       page,
//       pages: Math.ceil(total / limit),
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching products", error });
//   }
// };

export const getProducts = async (req, res) => {
  try {
    let { page = 1, limit = 8, sort = "" } = req.query;
    page = parseInt(page);
    limit = parseInt(limit);

    const total = await Product.countDocuments();
    const query = Product.find();

    // Sorting
    if (sort) {
      // Use 1 for ascending
      query.sort({ [sort]: 1 });
    } else {
      // Default: newest first
      query.sort({ createdAt: -1 });
    }

    const products = await query.skip((page - 1) * limit).limit(limit);

    res.status(200).json({
      data: products,
      total,
      page,
      pages: Math.ceil(total / limit),
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
};



// Add single or multiple products
export const addProducts = async (req, res) => {
  try {
    let products = req.body;
    if (!Array.isArray(products)) products = [products];

    const savedProducts = await Product.insertMany(products);
    res.status(201).json(
      savedProducts.length === 1 ? savedProducts[0] : savedProducts
    );
  } catch (error) {
    res.status(500).json({ message: "Error adding products", error });
  }
};

// Update product by ID
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedProduct)
      return res.status(404).json({ message: "Product not found" });

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error });
  }
};

// Delete product by ID
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct)
      return res.status(404).json({ message: "Product not found" });

    res.status(200).json({ message: "Product deleted successfully", id });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error });
  }
};

// import express from "express";
// import {
//   getProducts,
//   addProducts,
//   updateProduct,
//   deleteProduct,
// } from "../controller/product.controller.js";

// const router = express.Router();

// // Fetch all products with pagination
// router.get("/getProducts", getProducts);

// // Add product(s)
// router.post("/addProducts", addProducts);

// // Update product
// router.put("/updateProduct/:id", updateProduct);

// // Delete product
// router.delete("/deleteProduct/:id", deleteProduct);

// export default router;



import express from "express";
import {
  getProducts,
  addProducts,
  updateProduct,
  deleteProduct,
} from "../controller/product.controller.js";

const router = express.Router();

router.get("/getProducts", getProducts);
router.post("/addProducts", addProducts);
router.put("/updateProduct/:id", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);

export default router;

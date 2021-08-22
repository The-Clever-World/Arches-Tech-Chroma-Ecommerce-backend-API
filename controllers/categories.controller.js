import Category from "../models/categories.model.js";
import Product from "../models/product.model.js";
/**
 * @purpose get all categories
 * @route  GET /categories/
 * @access  Public
 */

export const getAllCategories = async (req, res, next) => {
  const categories = await Category.find().populate("products");
  if (!categories) {
    res.status(404);
    const error = new Error("No categories found");
    next(error);
  }
  res.status(200);
  res.render("index", { categories: categories });
};

/**
 * @purpose get all product from a specific category
 * @route GET /categories/:id
 * @access Public
 */

export const getProductsFromCategory = async (req, res, next) => {
  const categoryProducts = await Category.findById(req.params.id).populate(
    "products"
  );

  if (!categoryProducts) {
    res.status(404);
    const error = new Error("No Products found");
    next(error);
  }

  res
    .status(200)
    .render("category.ejs", { categoryProducts: categoryProducts });
};


// ADMIN //

/**
 * @purpose add product with category
 * @route POST /products/add
 * @access ADMIN
 */

export const addProductWithCategory = async (req, res, next) => {
  const {
    categoryName,
    categoryImage,
    productName,
    productPrice,
    productImages, // array
    productCountInStock,
    productRating,
    productNumReviews,
    productKeyFeatures, // array
    productSpecifications,
    productHighlights,
    productOverview
  } = req.body;

  try {
    // create product
    const product = new Product({
      name: productName,
      description: {
        keyFeatures: productKeyFeatures,
        specifications: productSpecifications,
        highlights: productHighlights,
        overview: productOverview,
      },
      images: productImages,
      price: productPrice,
      countInStock: productCountInStock,
      rating: productRating,
      numReviews: productNumReviews,
    })
    await product.save();

    console.log(product);

    const category = await Category.findOne({ name: categoryName });
    if (category) {
      // update category
      category.image = categoryImage;
      category.products.push(product._id);
      await category.save();
      res.status(200).json({ category: category, product: product });

    } else {
      const category = new Category({
        name: categoryName,
        image: categoryImage,
        product: [product._id]
      });
      await category.save();
      res.status(200).json({ category: category, product: product });
    }
    // res.status(200).render("dashboard.ejs", { product });
  } catch (error) {
    console.log(error);
  }
};


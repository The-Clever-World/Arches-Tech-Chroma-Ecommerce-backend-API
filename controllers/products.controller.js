import Product from "../models/product.model.js";

/**
 * @purpose get all product from a search
 * @route GET /products/search/?searched="text-words"
 * @access Public
 */

export const getProductFromSearch = async (req, res, next) => {
    const slug = req.query?.searched;
    if (!slug) {
        res.status(404);
        const error = new Error("No Query Provided");
        next(error);
    }

    const products = await Product.find({ $text: { $search: slug } });

    console.log(products);
    res.status(200).send(products);
};

// $regex: /789$/



/**
 * @purpose get particular product from id
 * @route GET /products/:id
 * @access Public
 */

export const getProductsFromId = async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        res.status(404);
        const error = new Error("No product found");
        next(error);
    }

    console.log(product);
    res.status(200).send(product);
};

  // $regex: /789$/

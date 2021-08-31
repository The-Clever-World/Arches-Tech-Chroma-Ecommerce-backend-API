import Category from "../models/categories.model.js";

const myAccountController = async (req, res) => {
    const categories = await Category.find().populate("products");
    res.render("myAccount.ejs", { categories: categories })
}

export { myAccountController }
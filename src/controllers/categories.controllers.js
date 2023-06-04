const Categories = require("../models/categories.models");


const posCategories = async (req, res) => {
    const newCategories = req.body;
    try {
const result = await Categories.create(newCategories);
        res.status(201).json(result);
} catch (error) {
    res.status(400).json(error)
}};

const categoriesById =  async (req, res) => { }

module.exports = {
    posCategories,
    categoriesById
}
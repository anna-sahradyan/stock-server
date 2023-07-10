const asyncHandler = require("express-async-handler");

const createProduct = asyncHandler(async (req, res, next) => {
res.send("Product is created")
});


module.exports = {
    createProduct,
}
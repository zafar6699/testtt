exports.Product = async (req, res) => {
    res.render("./admin/product", { title: "Product" , layout: "admin"})
}
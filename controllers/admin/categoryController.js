exports.Category = async (req, res) => {
    res.render("./admin/category", { title: "Category" , layout: "admin"})
}
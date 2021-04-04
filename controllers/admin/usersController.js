exports.Users = async (req, res) => {
    res.render("./admin/users", { title: "Users" , layout: "admin"})
}
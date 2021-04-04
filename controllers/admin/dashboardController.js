exports.Dashboard = async (req, res) => {
    res.render("./admin/dashboard", { title: "Dashboard" , layout: "admin"})
}
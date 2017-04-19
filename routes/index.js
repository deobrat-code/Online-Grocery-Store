const adminRoutes = require('./admin/index');
const usersRoutes = require('./users/index');

const mainRoutes = (app) => {

    /* home page routes */
    app.use("/$/", (req, res) => {
        res.render('index');
    });

    /* customized routes */
    app.use("/admin", adminRoutes);         // admin routes
    app.use("/user", usersRoutes);          // user routes

    /* non existing page configuration */
    app.use("*", (req, res) => {
        res.render('alerts/error', {
            code: 404,
            message: `Page Not Found`,
            url: req.originalUrl
        });
    });
};

module.exports = mainRoutes;
'use strict';
module.exports = function (app) {
    const userRoutes = require('../controllers/controller');

    // User Routes
    app.route('/api/users')
        .get(userRoutes.list_all_users)
        .post(userRoutes.create_a_user);

    app.route('/api/users/:userId')
        .get(userRoutes.read_a_user)
        .put(userRoutes.update_a_user)
        .delete(userRoutes.delete_a_user)
}

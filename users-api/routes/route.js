'use strict';
module.exports = function(app) {
    const userRoutes = require('../controllers/controller');

    // User Routes
    app.route('/users')
        .get(userRoutes.list_all_users)
        .post(userRoutes.create_a_user);

    app.route('/users/:taskId')
        .get(userRoutes.read_a_user)
        .put(userRoutes.update_a_user)
        .delete(userRoutes.delete_a_user)
}

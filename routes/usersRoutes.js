const usersController = require('../controllers/usersController');
const UsersControler = require ('../controllers/usersController');

module.exports = (app) => { 
// para mostrar datos 
    app.get('/api/users/getAll',UsersControler.getAll);


    // crear datos  

    app.post ('/api/users/create',usersController.register);
    // login 
    app.post ('/api/users/login',usersController.login);

}

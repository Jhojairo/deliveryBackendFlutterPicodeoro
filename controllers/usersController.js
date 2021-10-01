
const { request } = require('http');
const User = require('../models/user'); // user esta en el archivo usar que se exporto con module.xport
module.exports = {
    async getAll(req, res, next){
        try {
            const data =await User.getAll();
            console.log(`Usuarios :${data}`);
            return res.status(201).json(data);

        }
        catch(error){
            console.log(`error : ${error}`);
            return res.status(501).json({
                    success:false,
                    massage: 'error  al obtener los usuarios ' 
                } );

    

        }
    },

    /**funcion asincrona para registrar usuario nuevo  */
    async register(req, res, next){

try {
    const user = req.body;
    const data= await User.create(user);

    return res.status(201).json({
        success: true,
        message: 'Se registro nuevo usuario ',
        data:data.id
    });

} 
catch (error) {
    console.log(`Error : ${error} `);
    return res.status(501).json({
        success: false,
        message: 'Error al registrar usuario',
        error:error

    });
    
}

    }

};

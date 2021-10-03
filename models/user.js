
const db = require('../config/config'); // se exporta la bariable db del archivo config.js
<<<<<<< HEAD
const crypto =require('crypto');
const { use } = require('passport');

=======
<<<<<<< HEAD
const crypto =require('crypto');
>>>>>>> 536319cf17d6d27c6c8ac08d2247e88c24393bea

=======
const crypto = require('crypto'),
>>>>>>> 1ec531a7528e40af644b2aae708d3302a36b55cc
const User = ()=>{}; 

    User.getAll =  ()=>{
        const sql =`
        SELECT 
        *
         FROM 
            users        
        `;
        
        return db.manyOrNone(sql);//maniOrNone retorna muchos o ningun unsario 
    }



/**
 * 
 * @param {*} id 
 * @param {*} callback 
 * @returns 
 */
//  sql funcion para encontrar usuario por id  
   
User.findById = (id, callback) => {

    const sql = `
    SELECT
        id,
        email,
        name,
        lastname,
        image,
        phone,
        password,
        session_token
    FROM
        users
    WHERE
        id = $1`;
    
    return db.oneOrNone(sql, id).then(user => { callback(null, user); })

}
    /**
     * 
     * @param {retortna el email del usuario para el login} email 
     * @returns 
     */

     User.findByEmail = (email) => {
        const sql = `
        SELECT
            id,
            email,
            name,
            lastname,
            image,
            phone,
            password,
            session_token
        FROM
            users
        WHERE
            email = $1
        `
        return db.oneOrNone(sql, email);
    

}


    /**creando un nuevo usuario en la base de datos   */

    

    User.create = (user)=>{
<<<<<<< HEAD
        const myPasswordHashed =crypto.createHash('md5').update(user.password).digest('hex');
        user.password=myPasswordHashed;
        

=======
<<<<<<< HEAD
        const myPasswordHashed = crypto.createHash('md5').update(user.password
            ).digest('hex');
            user.password=myPasswordHashed;
=======
        const myPasswordHashed = crypto.createHash('md5').update(user.password).digest('hex');
        user.password=myPasswordHashed;
>>>>>>> 1ec531a7528e40af644b2aae708d3302a36b55cc
>>>>>>> 536319cf17d6d27c6c8ac08d2247e88c24393bea
        const sql = `INSERT INTO 
        users(
            email,
            name,
            lastname,
            phone,           
            image,
            password,
            created_at,
            updated_at

        )
        VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id `;

        return db.oneOrNone(sql,[
            user.email,
            user.name,
            user.lastname,
            user.phone,
            user.image,
            user.password,
            new Date(),
            new Date()
        ]);
        
    }
    User.isPasswordMached=(userPassword, hash)=>{
        const myPasswordHashed=crypto.createHash('md5').update(userPassword).digest('hex');
        if (myPasswordHashed === hash) {
            return true;
            
        }
    }
module.exports=User; // se exporta user para usarlo en otro archivo 

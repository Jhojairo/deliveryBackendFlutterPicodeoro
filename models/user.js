
const db = require('../config/config'); // se exporta la bariable db del archivo config.js

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

    /**creando un nuevo usuario en la base de datos   */

    
    User.create = (user)=>{
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

module.exports=User; // se exporta user para usarlo en otro archivo 
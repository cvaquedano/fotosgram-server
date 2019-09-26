import { Router,Request,Response } from "express";
import { Usuario } from "../models/usuario.model";
import bcrypt from 'bcrypt'

const userRoutes = Router();

userRoutes.get('/prueba',(req: Request ,res: Response) =>{
    res.json({
        ok: true,
        mensaje: 'Todo bien'
    })

});

userRoutes.post('/create',(req: Request ,res: Response)=>{
    const user = {
        nombre: req.body.nombre,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password,10),
        avatar: req.body.avatar
    }

    Usuario.create(user).then( userDB =>{

        res.json({
            ok: true,
            mensaje: 'Todo bien',
            user: userDB
        });

    }).catch(err =>{
        res.json({
            ok: false,
            err
        })
    });
});
export default userRoutes;
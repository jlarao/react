const express = require('express');
const bcrypt = require('bcryptjs');
const  Usuario  = require('../models/Usuario');
const { generarJWT } = require('../helpers/jwt');
const { response } = require('express');

const crearUsuario = async (req, res = response)=>{
    console.log(req.body);
    const { email, password } = req.body;
    try{
        let usuario = await Usuario.findOne({ email });
        console.log(usuario);
        if(usuario){
            return res.status(400).json({
                ok: false,
                message: 'El usuario ya existe'
            });
        }

    const newUser = new Usuario( req.body );
    //encriptar contraseña
    const salt = bcrypt.genSaltSync();
    newUser.password = bcrypt.hashSync(password, salt);
    await newUser.save();
        
    //generar JWT
        const token = await generarJWT(newUser.id, newUser.name);
    console.log('Peticion POST');
    res.status(201).json({
        ok: true,
        message: 'Peticion crear usuario',
        uid: newUser.id,
        name: newUser.name,
        token
        // name,
        // email,
        // password
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Error al crear usuario',
            error
        });
    }
}

const loginUsuario = async(req, res = response)=>{
    try {
        console.log(req.body);
    const { email, password } = req.body;
    let usuario = await Usuario.findOne({ email });
    if(!usuario){
        return res.status(400).json({
            ok: false,
            message: 'El usuario no existe'
        });
    }

    //confirmar contraseña
    const validPassword = bcrypt.compareSync(password, usuario.password);
    if(! validPassword ){
        return res.status(400).json({
            ok: false,
            message: 'Contraseña incorrecta'
        });
    }

    //generar JWT
    const token = await generarJWT( usuario.id, usuario.name );

    //respuesta
    res.status(201).json({
        ok: true,
        message: 'Peticion login',
        uid: usuario.id,
        name: usuario.name,
        token
    })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Error login usuario',
            error
        });
        
    }


    
}

const revalidarToken = async(req, res = response)=>{

    const { uid, name } = req;
    const token = await generarJWT(uid, name);
    console.log('Peticion GET');
    res.json({
        ok: true,
        uid: uid,
        name: name,
        token: token,
        message: 'Peticion revalidar token'
        });
}



module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}
const { response } = require('express')
const bcryptjs = require('bcryptjs')
const User = require('../models/Users')


const createUser = async( req, res = response ) => {
    try {
        const { email } = req.body
        
        let user = await User.findOne({email: email})

        if ( user ) {
            return res.status(400).json({
                ok: false,
                message: 'Este correo ya esta registrado',
            })
        }
        
        user = new User(req.body)
        
        // Encrypt password 

        await user.save()
    
        res.status(201).json({
            ok: true,
            message: 'Register success',
            uid: user.id,
            name: user.name
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Por favor hable con el administrador',
        })      
    }
}

const RenewToken = ( req, res = response ) => {
    res.json({
        ok: true,
        message: 'Renew'
    })
}

const loginUser = ( req, res = response ) => {

    const { email, password} = req.body

    res.status(200).json({
        ok: true,
        message: 'Login',
        email: email,
        password: password
    })
}

module.exports = {
    createUser,
    RenewToken,
    loginUser
}
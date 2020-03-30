'use strict'

const express = require('express')
const ProductCtrl = require('../controllers/product')
const userCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')
const api = express.Router()

api.get('/product',auth, ProductCtrl.getProducts)//peticion tipo get para mostrar productos
api.get('/product/:productId', ProductCtrl.getProduct)//peticion tipo get para acceder a un unico producto(registro)
api.post('/product',auth, ProductCtrl.saveProduct)//peticion tipo post para subir productos
api.put('/product/:productId',auth, ProductCtrl.updateProduct)//peticion tipo put para actualizar registros
api.delete('/product/:productId',auth, ProductCtrl.deleteProduct)//peticion tipo delete para borrar un producto(registro)
api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)
api.get('/private',auth, (req, res) => {
    res.status(200).send({message: 'Tienes acceso' })
})

module.exports = api
const {Router} = require('express');
const routes = Router();



routes.get('/user', function(req, res){
  return res.status(200).json({mensage: "Olá mundo"})

})

module.exports = routes

const colaboradoras = require('../models/colaboradoras')
const SECRET = process.env.SECRET
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken') 

                                                                                                
const creat = (req, res) => {

const senhaComHash = bcrypt.hashSync(req.body.senha, 10)
req.body.senha = senhaComHash

    let colaboradora = new colaboradoras(req.body)

colaboradora.save(function(err){
    if(err){ return res.status(500).send('deu erro em salvar nega') }
    
   return res.status(200).send('ae gata, ta tudo bem por aqui no post')
})

}


const getAll = (req, res) => {
    colaboradoras.find(function(err, colaboradora){
        if(err){ return res.status(500).send('cadê todo mundo?')}

        return res.status(200).send(colaboradora)
    })
}

const login = (req, res) => {
    colaboradoras.findOne({ email: req.body.email }, function(err, colaboradora) {
        if(!colaboradora){ return res.status(404).send(`não existe o email ${req.body.email} não fofinea`)}

       const senhaValida = bcrypt.compareSync(req.body.senha, colaboradora.senha)

       if(!senhaValida){
           return res.status(403).send('esquecesse a senha?')
       }
       const token = jwt.sign({email: req.body.email}, SECRET)
       res.status(200).send(token)
    })
}

module.exports = {
    creat,
    getAll,
    login
}
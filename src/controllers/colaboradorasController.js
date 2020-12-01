
const colaboradoras = require('../models/colaboradoras')
const SECRET = process.env.SECRET

const creat = (req, res) => {

    let colaboradora = new colaboradoras(req.body)

colaboradora.save(function(err){
    if(err){ return res.status(500).send('deu erro em salvar nega') }
    
   return res.status(200).send('ae gata, ta tudo bem por aqui no post')
})

}

module.exports = {
    creat
}
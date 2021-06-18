const apiAdapter = require('../../apiAdapter')

const {URL_SERVICE_USER } = process.env

const api = apiAdapter(URL_SERVICE_USER)

module.exports = async (req,res) =>{
    try{
        console.log('tes')
        const user = await api.post('/users/register', req.body)
        return res.json(user.data)
    }catch (e) {

        if(e.code === 'ECONNREFUSED'){
            return res.status(500).json({status:'error', message:'service unavailable'})
        }

        const {status,data} = e.response
        return res.status(status).json(data)

    }
}
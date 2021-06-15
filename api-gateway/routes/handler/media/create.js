const apiAdapter = require('../../apiAdapter')

const {URL_SERVICE_MEDIA } = process.env

const api = apiAdapter(URL_SERVICE_MEDIA)

module.exports = async (req,res) =>{
    try{
        const media = await api.post('/media', req.body)
        return res.json(media.data)
    }catch (e) {

        if(e.code === 'ECONNREFUSED'){
            return res.status(500).json({status:'error', message:'service unavailable'})
        }

        const {status,data} = e.response
        return res.status(status).json(data)

    }
}
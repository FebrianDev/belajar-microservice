const {User} = require('../../../models')

module.exports = async (req,res) =>{
    try{

        const userIds = req.query.user_ids || []

        const sqlOptions = {attributes:['id','name','email','role','profession','avatar']}

        if(userIds.length > 0 ){
            sqlOptions.where = {
                id:userIds
            }
        }

        const user = await User.findAll(sqlOptions)

        return res.json({
            status:'success',
            data:user
        })
    }catch (e) {
        return res.json({status:'error', message:e.message})
    }
}
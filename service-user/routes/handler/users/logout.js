const {RefreshToken} = require('../../../models')

module.exports = async (req, res) => {

    try {
        const userId = req.body.user_id
        const user = await RefreshToken.findOne({where: {user_id: userId}})
        console.log(user)
        if (!user) {
            return res.status(404).json({
                status: 'error',
                message: 'user not found'
            })
        }

        await RefreshToken.destroy({
            where: {
                user_id: userId
            }
        })

        return res.json({
            status: 'success',
            message: 'refresh token deleted'
        })
    } catch (e) {
        return res.json({
            status:'error',
            message:e.message
        })
    }
}
const {User} = require('../../../models')
const bcrypt = require('bcrypt')
const Validator = require('fastest-validator')

const v = new Validator()

module.exports = async (req,res) =>{
    const schema = {
        name:'string|empty:false',
        email:'email|empty:false',
        password:'string|min:6',
        profession: 'string|optional'
    }

    const validate = v.validate(req.body, schema)

    if(validate.length){
        return res.status(400).json({
            status:'error',
            message:validate
        })
    }

    const user = await User.findOne({where:{email:req.body.email}})

    if(user){
        return res.status(400).json({
            status:'error',
            message:'email already exist'
        })
    }

    const password = await bcrypt.hash(req.body.password, 10)
    const data = {
        name:req.body.name,
        password:password,
        email:req.body.email,
        profession: req.body.profession,
        role:'student'
    }

    const createUser = await User.create(data)

    return res.status(200).json({
        message:'success',
        data:{
            id:createUser.id
        }
    })
}
const userDb = require('../schemas/userSchema')

module.exports = {
    addUser: (req, res) => {
        const {
            name,
            image,
            age,
            email,
            city
        } = req.body

        const newUser = new userDb()
        newUser.name = name
        newUser.image = image
        newUser.age = age
        newUser.email = email
        newUser.city = city

        newUser.save().then(data => {
            res.send({success: true, message: "Vartotojas pridetas"})
        })
    },
    getUsers: async (req, res) => {
        const users = await userDb.find()
        res.send({success: true, users})
    },
    deleteUser: async (req, res) => {
        const {id} = req.params
        console.log(id)
        await userDb.findByIdAndDelete(id)
        const users = await userDb.find()
        res.send({success: true, users})
    }

}
module.exports = (req, res, next) => {
    const {
        name,
        image,
        age,
        email,
        city
    } = req.body

    function errorSend(message) {
        res.send({success: false, message})
    }

    if(name.length < 2  || name.length > 15) {
        return errorSend('Vardas negali buti trumpesnis nei 3 simboliai ir ilgesnis nei 15 simboliu.')
    }

    if(age.Number < 18) {
        return errorSend('Vartotojas turi buti vyresnis negu 18 metu.')
    }

    if(email.indexOf("@") < 0) {
        return errorSend('Neteisingas el.pastas')
    }
    if(email)

    next()
}
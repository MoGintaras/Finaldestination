module.exports = (req, res, next) => {
    const {
        title,
        quantity,
        price,
    } = req.body

    function errorSend(message) {
        res.send({success: false, message})
    }

    if(title.length > 50 || title.length < 3) {
        return errorSend('Title length is not valid')
    }

    if(quantity.length === 0) {
        return errorSend('Quantity must be set and contain only numbers')
    }

    if(price.length === 0) {
        return errorSend('Price must be set and contain only numbers')
    }

    next()
}
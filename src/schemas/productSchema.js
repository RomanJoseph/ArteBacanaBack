import joi from "joi"

const productSchema = joi.object({
    name: joi.string().required(),
    seller: joi.string().required(),
    stock: joi.number().required(),
    type: joi.string().required(),
    image: joi.string().uri().required(),
    price: joi.number().required(),
    description: joi.string().required(),
})

export { productSchema }
import express from 'express'
import asyncHandler from 'express-async-handler'

import ConsumerProducts from './../models/consumerProductModel.js';

// @desc    Fetch all products
// @rout    GET /consumer
// @access  public
const getConsumerProducts = asyncHandler(async (req, res) => {
    const consumerProducts = await ConsumerProducts.find({})
    res.json(consumerProducts);
})

// @desc    Filter by location and product name all products
// @rout    POST /consumer/filter
// @access  public
const getConsumerProductsFilter = asyncHandler(async (req, res) => {
    const consumerProducts = await ConsumerProducts.find({prod_name: req.body.prod_name, avalaible_location: req.body.avalaible_location})
    res.json(consumerProducts);
})

// @desc    Fetch Consumer Product by id
// @rout    GET /consumer/:id
// @access  public
const getConsumerProductById = asyncHandler(async (req, res) => {
    const consumerProduct = await ConsumerProducts.findById(req.params.id);

    if(consumerProduct) {
        res.json(consumerProduct);
    } else {
        res.status(404)
        throw new Error('Consumer Product not Found')
    }
})

// @desc    Delete consumer product
// @rout    DELETE /consumer/:id
// @access  private/admin
const deleteConsumerProduct = asyncHandler(async (req, res) => {
    const consumerProduct = await ConsumerProducts.findById(req.params.id);

    if(consumerProduct) {
        consumerProduct.remove()
        res.json({ message: 'Consumer product removed' });
    } else {
        res.status(404)
        throw new Error('Consumer Product not Found')
    }
})

// @desc    Create Consumer
// @rout    POST /consumer/
// @access  private/ Admin
const createConsumer = asyncHandler(async (req, res) => {
    const consumerProduct = new ConsumerProducts({
        prod_name: "Sample name",
        user: req.user._id,
        seller_name: "Sample seller",
        image: '/images/consumer/mogra_rice.jpg',
        price: 0,
        prod_size: "0kg",
        quantity: 0,
        avalaible_location: "Sample location"
    })

    const createdconsumerProduct = await consumerProduct.save()
    res.status(201).json(createdconsumerProduct)
})

// @desc    Update Consumer
// @rout    PUT /consumer/:id
// @access  private/ Admin
const updateConsumer = asyncHandler(async (req, res) => {
    const { prod_name, price, image, seller_name, prod_size, quantity, avalaible_location } = req.body

    const updateConsumerproduct = await ConsumerProducts.findById(req.params.id)

    if (updateConsumerproduct) {

        updateConsumerproduct.prod_name = prod_name
        updateConsumerproduct.price = price
        updateConsumerproduct.image = image
        updateConsumerproduct.seller_name = seller_name
        updateConsumerproduct.quantity = quantity
        updateConsumerproduct.prod_size = prod_size
        updateConsumerproduct.avalaible_location = avalaible_location

        const updatedConsumer = await updateConsumerproduct.save()
        res.status(201).json(updatedConsumer)
    } else {
        res.status(401)
        throw new Error('Product not found')
    }
})


// @desc    Consumer Review
// @rout    POST /consumer/:id/review
// @access  private/ Admin
const createConsumerReview = asyncHandler(async (req, res) => {
    const { rating, comment } = req.body

    const consumerProducts = await ConsumerProducts.findById(req.params.id)

    if (ConsumerProducts) {
        const alreadyReviewed = consumerProducts.reviews.find(r => r.user.toString() === req.user._id.toString())
        if (alreadyReviewed) {
            res.status(400)
            throw new Error('Product already reviewed')
        }

        const review = {
            name: req.user.name,
            rating: Number(rating),
            comment,
            user: req.user._id
        }

        consumerProducts.reviews.push(review)

        consumerProducts.numReviews = consumerProducts.reviews.length

        consumerProducts.rating = consumerProducts.reviews.reduce((acc, item) => item.rating + acc, 0) / consumerProducts.reviews.length

        await consumerProducts.save()

        res.status(201).json({ message: 'Review added' })

    } else {
        res.status(401)
        throw new Error('Product not found')
    }
})

export {
    getConsumerProducts,
    getConsumerProductById,
    deleteConsumerProduct,
    createConsumer,
    updateConsumer,
    createConsumerReview,
    getConsumerProductsFilter
}
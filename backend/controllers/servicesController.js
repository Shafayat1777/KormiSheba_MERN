const { model, default: mongoose } = require('mongoose')
const Service = require('../models/servicesModel')

// get all services
const getServices = async (req, res) => {
    const user_id = req.user._id
    
    const services = await Service.find({user_id}).sort({createdAt: -1})
    
    res.status(200).json(services)
}

// get a single service
const getService = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such service exists'})
    }

    const service = await Service.findById(id)
    
    if (!service){
        return res.status(404).json({error: 'No such service found'})
    }

    res.status(200).json(service)
}

// create service
const createService = async (req, res) => {
    const { title, main_description, price } = req.body
    
    // add doc to db
    try{
        const user_id = req.user._id
        const service = await Service.create({ title, main_description, price, user_id })
        res.status(200).json(service)
    } catch(error) {
        res.status(400).json({ error: error.message })
    }
}

// delete service
const deleteService = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such service exists'})
    }

    const service = await Service.findOneAndDelete({_id: id})
    
    if (!service){
        return res.status(404).json({error: 'No such service found'})
    }

    res.status(200).json(service)
}

// update service
const updateService = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such service exists'})
    }

    const service = await Service.findOneAndUpdate({_id: id},{...req.body})
    
    if (!service){
        return res.status(404).json({error: 'No such service found'})
    }

    res.status(200).json(service)
}



module.exports = {
    createService,
    getServices,
    getService,
    deleteService,
    updateService
}
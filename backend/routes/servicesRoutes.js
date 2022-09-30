const express = require('express')
const { 
    createService,
    getServices,
    getService,
    deleteService,
    updateService
 } = require('../controllers/servicesController')

const router = express.Router()



// GET all services
router.get('/', getServices)

// GET single service
router.get('/:id', getService)

// POST new service
router.post('/', createService)

// DELETE a service
router.post('/:id', deleteService)

// UPDATE a service
router.patch('/:id', updateService)

module.exports = router
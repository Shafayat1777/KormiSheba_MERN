const express = require('express')
const { 
    createService,
    getServices,
    getService,
    deleteService,
    updateService
 } = require('../controllers/servicesController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require Auth for all service routes
router.use(requireAuth)

// GET all services
router.get('/', getServices)

// GET single service
router.get('/:id', getService)

// POST new service
router.post('/', createService)

// DELETE a service
router.delete('/:id', deleteService)

// UPDATE a service
router.patch('/:id', updateService)

module.exports = router
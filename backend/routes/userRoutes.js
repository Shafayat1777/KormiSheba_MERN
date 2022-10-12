const express = require('express')

// controller functions
const { loginUser,
        signupUser,
        updateUser,
        profileUser } = require('../controllers/userController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router() 

// for uploading files
// router.use(upload.single('avatar'))

//login route
router.post('/login', loginUser)

//signup route
router.post('/signup', signupUser)

// require Auth for user update route
router.use(requireAuth)

//profile route
router.get('/profile', profileUser)
module.exports = router

//update route
router.post('/update', updateUser)
module.exports = router
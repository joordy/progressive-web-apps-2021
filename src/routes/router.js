// Import packages
const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: true })

// Import routes
const { home } = require('./../renders/home')
const { homePost } = require('./../renders/homePost')
const { detail } = require('./../renders/detail')
const { profile } = require('./../renders/profile')
const { offline } = require('./../renders/offline')
const { error } = require('./../renders/error')

// Setting get routes
router.get('/', home)
router.get('/image/:id', detail)
router.get('/profile', profile)
router.get('/offline/', offline)
// router.get('/*', error)
router.get('/*', error)
// Setting post routes
router.post('/', urlencodedParser, homePost)

// Export router module
module.exports = router

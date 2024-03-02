const express = require('express');
const axios = require('axios');
const { getAllsubscriber, createSubscriber, getSubscriberById, getSubscriberByName } = require('../controllers/subscriberController');

const router = express.Router();
//get all subscriber
router.route('/subscribers').get(getAllsubscriber)

//get subscriber by name
router.route('/subscribers/name/:name').get(getSubscriberByName);

// get subscriber by id
router.route('/subscribers/id/:id').get(getSubscriberById);

//create a new subscriber
router.route('/subscribers/new').post(createSubscriber);


module.exports = router;
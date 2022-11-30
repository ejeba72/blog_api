const { Router } = require('express');
const { generalLogic } = require('../controllers/generalController');

const router = Router();

router.route('/').get(generalLogic)

module.exports = {generalRouter: router}
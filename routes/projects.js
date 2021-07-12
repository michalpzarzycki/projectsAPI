const express = require('express');
const { read } = require('../controllers/projects')
const router = express.Router()

router.get('/projects', read)



module.exports = router;
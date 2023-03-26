const express = require('express');
const stuRouter = express.Router();
const Cstu = require('../Controllers/Cstudents');

stuRouter.post('/stuOne', Cstu.stuEnrollmentOne);
stuRouter.post('/stuMany', Cstu.stuEnrollmentMany);
stuRouter.get('/stuFindOne', Cstu.stuFindOne);

module.exports = stuRouter;

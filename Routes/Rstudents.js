const express = require('express');
const stuRouter = express.Router();
const Cstu = require('../Controllers/Cstudents');

stuRouter.get('/stuOne', Cstu.stuFindOne);
stuRouter.get('/stuMany', Cstu.stuFindMany);

stuRouter.post('/stuOne', Cstu.stuEnrollmentOne);
stuRouter.post('/stuMany', Cstu.stuEnrollmentMany);

stuRouter.put('/stuOne', Cstu.stuUpdateOne);
stuRouter.put('/stuMany', Cstu.stuUpdateMany);

stuRouter.delete('/stuOne', Cstu.stuDeleteOne);
stuRouter.delete('/stuMany', Cstu.stuDeleteMany);

module.exports = stuRouter;

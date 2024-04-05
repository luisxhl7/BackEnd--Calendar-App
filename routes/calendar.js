const { Router } = require('express');

const { addEvent, getEvent, getEvents, updateEvent, deleteEvent } = require('../controller/event');
const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();

// todas las peticiones de aqui requieren el JWT
router.use( validateJWT )

router.get(
    '/getEvent',
    getEvent
)

router.get(
    '/getEvents',
    getEvents
)
 
router.post(
    '/addEvent',
    addEvent
)

router.put(
    '/updateEvent/:id',
    updateEvent
)

router.delete(
    '/deleteEvent/:id',
    deleteEvent
)


module.exports = router;
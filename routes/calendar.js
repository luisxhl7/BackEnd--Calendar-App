const { Router } = require('express');

const { addEvent, getEvent, getEvents, updateEvent, deleteEvent } = require('../controller/event');
const { validateJWT } = require('../middlewares/validate-jwt');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { isDate } = require('../helpers/isDate');

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
    [
        check('title', 'El nombre es obligatorio').not().isEmpty(),
        check('dateInit', 'La fecha de inicio es obligatorio').custom( isDate ),
        check('dateEnd', 'La fecha de final es obligatorio').custom( isDate ),
        validateFields
    ], 
    addEvent
)

router.put(
    '/updateEvent/:id',
    [
        check('title', 'El nombre es obligatorio').not().isEmpty(),
        check('dateInit', 'La fecha de inicio es obligatorio').custom( isDate ),
        check('dateEnd', 'La fecha de final es obligatorio').custom( isDate ),
        validateFields
    ], 
    updateEvent
)

router.delete(
    '/deleteEvent/:id',
    deleteEvent
)


module.exports = router;
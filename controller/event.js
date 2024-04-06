const { response } = require('express')
const EventCalendar = require('../models/EventCalendar')


const getEvent = async( req, res = response ) => {

    res.json({
        ok: true,
        message: 'get event',
    })
}

const getEvents = async( req, res = response ) => {

    const events = await EventCalendar.find().populate('user', 'name')

    res.json({
        ok: true,
        message: 'get events',
        events: events
    })
}

const addEvent = async( req, res = response ) => {

    const event = new EventCalendar( req.body )

    try {
        event.user = req.uid;

        const saveEvent = await event.save();

        res.json({
            ok: true,
            message: 'add event success',
            event: saveEvent
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'hable con el administrados',
        })
    }
}

const updateEvent = async( req, res = response ) => {
    const eventId = req.params.id

    try {

        const event = await EventCalendar.findById(eventId)

        if (!event) {
            return res.status(404).json({
                ok: false,
                message: 'Evento no existe por ese id',
            }) 
        }

        if (event.user.toString() !== req.uid) {
            return res.status(401).json({
                ok: false,
                message: 'no tiene privilegio de modificar este evento',
            })
        }

        const newEvent = { 
            ...req.body, 
            user: req.uid
        }

        const eventUpdated = await EventCalendar.findByIdAndUpdate(eventId, newEvent, {new: true})

        res.json({
            ok: true,
            message: 'update event success',
            event: eventUpdated
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'hable con el administrador',
        })
    }

}

const deleteEvent = async( req, res = response ) => {

    const eventId = req.params.id

    try {

        const event = await EventCalendar.findById(eventId)

        if (!event) {
            return res.status(404).json({
                ok: false,
                message: 'Evento no existe por ese id',
            }) 
        }

        if (event.user.toString() !== req.uid) {
            return res.status(401).json({
                ok: false,
                message: 'no tiene privilegio de modificar este evento',
            })
        }

        await EventCalendar.findByIdAndDelete(eventId)

        res.json({
            ok: true,
            message: 'remove event success',
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'hable con el administrador',
        })
    }
}

module.exports = {
    getEvent,
    getEvents,
    addEvent,
    updateEvent,
    deleteEvent
}
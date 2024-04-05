const { response } = require('express')

const getEvent = async( req, res = response ) => {

    res.json({
        ok: true,
        message: 'get event',
    })
}

const getEvents = async( req, res = response ) => {

    res.json({
        ok: true,
        message: 'get events',
    })
}

const addEvent = async( req, res = response ) => {

    res.json({
        ok: true,
        message: 'add event',
    })
}

const updateEvent = async( req, res = response ) => {

    res.json({
        ok: true,
        message: 'update event',
    })
}

const deleteEvent = async( req, res = response ) => {

    res.json({
        ok: true,
        message: 'delete event',
    })
}

module.exports = {
    getEvent,
    getEvents,
    addEvent,
    updateEvent,
    deleteEvent
}
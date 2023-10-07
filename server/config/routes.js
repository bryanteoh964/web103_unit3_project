import express from 'express'

import LocationsController from '../controllers/locations.js'
import EventsController from '../controllers/events.js'

const router = express.Router()

// routes to get all events, events by ID, and events by location
router.get('/events', EventsController.getEvents)
router.get('/events/:id', EventsController.getEventsById)
router.get('/events/location/:location', EventsController.getEventsByLocation)

// routes to get all locations
router.get('/locations', LocationsController.getLocations)
router.get('/locations/:id', LocationsController.getLocationsById)

export default router
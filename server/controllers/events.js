import Event from '../models/event.js';

// get all events from the database
const getEvents = async (req, res) => {
    try {
      const results = await Event.findAll()
      res.status(200).json(results.rows)
    }
    catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
  
  // get events by ID from the database
  const getEventsById = async (req, res) => {
    try {
      const results = await Event.findOne(req.params.id)
      res.status(200).json(results.rows[0])
    }
    catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
  
  // get events by platform from the database
  const getEventsByLocation = async (req, res) => {
    try {
      const results = await Event.findAll(req.params.platform)
      res.status(200).json(results.rows)
    }
    catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
  
  export default {
    getEvents,
    getEventsById,
    getEventsByLocation
  }
  
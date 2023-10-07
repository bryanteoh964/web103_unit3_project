import Location from '../models/location.js';

// get all locations from the database
const getLocations = async (req, res) => {
    try {
      const results = await Location.findAll()
      res.status(200).json(results.rows)
    }
    catch (error) {
      res.status(400).json({ error: error.message })
    }
}

// get locations by ID from the database
const getLocationsById = async (req, res) => {
  try {
    const results = await Location.findOne(req.params.id)
    res.status(200).json(results.rows[0])
  }
  catch (error) {
    res.status(400).json({ error: error.message })
  }
}


export default {
    getLocations,
    getLocationsById
}
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

export default {
    getLocations
}
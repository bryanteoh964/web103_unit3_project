import { pool } from '../config/database.js'
import '../config/dotenv.js'
import eventData from '../data/events.js'
import locationData from '../data/locations.js'

const createEventsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS events;

    CREATE TABLE IF NOT EXISTS events (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      date DATE NOT NULL,
      time TIME NOT NULL,
      image VARCHAR(255) NOT NULL,
      location_id INTEGER,
      FOREIGN KEY (location_id) REFERENCES locations(id)
    )
  `

  try {
    await pool.query(createTableQuery)
    console.log('🎉 events table created successfully')
  } catch (err) {
    console.error('⚠️ error creating events table', err)
  }
}

const seedEventsTable = async () => {
  await createEventsTable()

  eventData.forEach((event) => {
    const insertQuery = {
      text: 'INSERT INTO events (id, title, date, time, image, location_id) VALUES ($1, $2, $3, $4, $5, $6)'
    }

    const values = [
      event.id,
      event.title,
      event.date,
      event.time,
      event.image,
      event.location_id
    ]

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error('⚠️ error inserting event', err)
        return
      }
      console.log(`✅ ${event.title} added successfully`)
    })
  })
}

const createLocationsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS locations;

    CREATE TABLE IF NOT EXISTS locations (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      address VARCHAR(255) NOT NULL,
      city VARCHAR(255) NOT NULL,
      state VARCHAR(50) NOT NULL,
      zip VARCHAR(10) NOT NULL,
      image VARCHAR(255) NOT NULL
    )
  `

  try {
    await pool.query(createTableQuery)
    console.log('🎉 locations table created successfully')
  } catch (err) {
    console.error('⚠️ error creating events table', err)
  }
}

const seedLocationsTable = async () => {
  await createLocationsTable()

  locationData.forEach((location) => {
    const insertQuery = {
      text: 'INSERT INTO locations (id, name, address, city, state, zip, image) VALUES ($1, $2, $3, $4, $5, $6, $7)'
    }

    const values = [
      location.id,
      location.name,
      location.address,
      location.city,
      location.state,
      location.zip,
      location.image
    ]

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error('⚠️ error inserting location', err)
        return
      }
      console.log(`✅ ${location.name} added successfully`)
    })
  })
}

seedEventsTable()
// seedLocationsTable()
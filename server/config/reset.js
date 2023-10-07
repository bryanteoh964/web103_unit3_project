import { pool } from '../config/database.js'
import '../config/dotenv.js'
import eventData from '../data/events.js'

const createEventsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS events;

    CREATE TABLE IF NOT EXISTS events (
      id SERIAL PRIMARY KEY,
      tourTitle VARCHAR(255) NOT NULL,
      eventLocation VARCHAR(255) NOT NULL,
      artist VARCHAR(255) NOT NULL,
      image VARCHAR(255) NOT NULL,
      date TIMESTAMP NOT NULL
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
      text: 'INSERT INTO events (id, tourTitle, eventLocation, artist, image, date) VALUES ($1, $2, $3, $4, $5, $6)'
    }

    const values = [
      event.id,
      event.tourTitle,
      event.eventLocation,
      event.artist,
      event.image,
      event.date
    ]

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error('⚠️ error inserting event', err)
        return
      }
      console.log(`✅ ${tourTitle.name} added successfully`)
    })
  })
}

seedEventsTable()
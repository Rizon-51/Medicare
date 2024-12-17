import express from 'express'
import cors from 'cors'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

const appointmentsFile = path.join(__dirname, 'appointments.json')

// Ensure appointments.json exists
async function initializeAppointmentsFile() {
  try {
    await fs.access(appointmentsFile)
  } catch {
    await fs.writeFile(appointmentsFile, '[]')
  }
}

// Get all appointments
app.get('/api/appointments', async (req, res) => {
  try {
    const data = await fs.readFile(appointmentsFile, 'utf8')
    res.json(JSON.parse(data))
  } catch (error) {
    res.status(500).json({ error: 'Error reading appointments' })
  }
})

// Create new appointment
app.post('/api/appointments', async (req, res) => {
  try {
    const data = await fs.readFile(appointmentsFile, 'utf8')
    const appointments = JSON.parse(data)
    
    const newAppointment = {
      id: Date.now(),
      ...req.body,
      date: new Date().toISOString()
    }
    
    appointments.push(newAppointment)
    await fs.writeFile(appointmentsFile, JSON.stringify(appointments, null, 2))
    
    res.status(201).json(newAppointment)
  } catch (error) {
    res.status(500).json({ error: 'Error saving appointment' })
  }
})

// Update appointment
app.put('/api/appointments/:id', async (req, res) => {
  try {
    const data = await fs.readFile(appointmentsFile, 'utf8')
    const appointments = JSON.parse(data)
    const id = parseInt(req.params.id)
    
    const index = appointments.findIndex(apt => apt.id === id)
    if (index === -1) {
      return res.status(404).json({ error: 'Appointment not found' })
    }
    
    appointments[index] = {
      ...appointments[index],
      ...req.body,
      id // Preserve the original ID
    }
    
    await fs.writeFile(appointmentsFile, JSON.stringify(appointments, null, 2))
    res.json(appointments[index])
  } catch (error) {
    res.status(500).json({ error: 'Error updating appointment' })
  }
})

// Delete appointment
app.delete('/api/appointments/:id', async (req, res) => {
  try {
    const data = await fs.readFile(appointmentsFile, 'utf8')
    const appointments = JSON.parse(data)
    const id = parseInt(req.params.id)
    
    const filteredAppointments = appointments.filter(apt => apt.id !== id)
    
    if (appointments.length === filteredAppointments.length) {
      return res.status(404).json({ error: 'Appointment not found' })
    }
    
    await fs.writeFile(appointmentsFile, JSON.stringify(filteredAppointments, null, 2))
    res.json({ message: 'Appointment deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Error deleting appointment' })
  }
})

app.get('/', (req, res) => {
  res.send('Medical server is running..')
})

// Initialize the appointments file and start the server
initializeAppointmentsFile().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
  })
})
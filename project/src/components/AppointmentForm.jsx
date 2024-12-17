import { useState, useEffect } from 'react'

function AppointmentForm({ onAppointmentSubmitted, editingAppointment }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    issue: ''
  })

  useEffect(() => {
    if (editingAppointment) {
      setFormData({
        name: editingAppointment.name,
        phone: editingAppointment.phone,
        issue: editingAppointment.issue
      })
    }
  }, [editingAppointment])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const url = editingAppointment
        ? `http://localhost:3000/api/appointments/${editingAppointment.id}`
        : 'http://localhost:3000/api/appointments'
      
      const method = editingAppointment ? 'PUT' : 'POST'
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        alert(editingAppointment ? 'Appointment updated successfully!' : 'Appointment submitted successfully!')
        setFormData({ name: '', phone: '', issue: '' })
        if (onAppointmentSubmitted) {
          onAppointmentSubmitted()
        }
      }
    } catch (error) {
      console.error('Error submitting appointment:', error)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {editingAppointment ? 'Update Appointment' : 'Book an Appointment'}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="issue">
            Health Issue
          </label>
          <textarea
            id="issue"
            name="issue"
            value={formData.issue}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          {editingAppointment ? 'Update Appointment' : 'Submit Appointment'}
        </button>
      </form>
    </div>
  )
}

export default AppointmentForm
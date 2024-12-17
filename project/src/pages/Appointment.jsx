import { useState, useCallback } from 'react'
import AppointmentForm from '../components/AppointmentForm'
import AppointmentsList from '../components/AppointmentsList'

function Appointment() {
  const [listKey, setListKey] = useState(0)
  const [editingAppointment, setEditingAppointment] = useState(null)

  const handleAppointmentSubmitted = useCallback(() => {
    setListKey(prev => prev + 1)
    setEditingAppointment(null)
  }, [])

  const handleEdit = useCallback((appointment) => {
    setEditingAppointment(appointment)
  }, [])

  const handleDelete = useCallback(() => {
    setListKey(prev => prev + 1)
  }, [])

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Manage Appointments</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <AppointmentForm 
              onAppointmentSubmitted={handleAppointmentSubmitted}
              editingAppointment={editingAppointment}
            />
          </div>
          <div>
            <AppointmentsList 
              key={listKey}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appointment
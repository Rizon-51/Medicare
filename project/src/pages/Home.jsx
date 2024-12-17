import Banner from '../components/Banner'
import AppointmentForm from '../components/AppointmentForm'

function Home() {
  return (
    <div>
      <Banner />
      <div className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Book Your Appointment</h2>
          <AppointmentForm />
        </div>
      </div>
    </div>
  )
}

export default Home
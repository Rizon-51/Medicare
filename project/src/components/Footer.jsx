function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MediCare</h3>
            <p className="text-gray-300">
              Providing quality healthcare services since 1990
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300">Phone: (123) 456-7890</p>
            <p className="text-gray-300">Email: info@medicare.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Address</h3>
            <p className="text-gray-300">
              123 Healthcare Street<br />
              Medical District<br />
              City, State 12345
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">© 2024 MediCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
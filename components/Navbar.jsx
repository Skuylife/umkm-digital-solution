export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center border-b bg-white sticky top-0 z-50">
      
      {/* Logo / Brand */}
      <a href="#home" className="text-xl font-bold text-indigo-600">
        ArafahDev
      </a>

      {/* Menu */}
      <div className="flex items-center gap-6">
        <a
          href="#about"
          className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition"
        >
          Tentang
        </a>
        <a
          href="#services"
          className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition"
        >
          Layanan
        </a>
        <a
          href="#pricing"
          className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition"
        >
          Harga
        </a>

        {/* CTA */}
        <a
          href="#contact"
          className="ml-4 bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition"
        >
          Konsultasi
        </a>
      </div>
    </nav>
  )
}
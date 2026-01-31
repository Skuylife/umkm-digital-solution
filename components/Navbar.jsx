export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center border-b bg-white sticky top-0 z-50">
      
      {/* Brand */}
      <a href="#home" className="text-xl font-bold text-indigo-600">
        ArafahDev
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">
        <a href="#about" className="text-sm font-medium text-gray-600 hover:text-indigo-600">
          Tentang
        </a>
        <a href="#services" className="text-sm font-medium text-gray-600 hover:text-indigo-600">
          Layanan
        </a>
        <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-indigo-600">
          Harga
        </a>
        <a
          href="#contact"
          className="ml-4 bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700"
        >
          Konsultasi
        </a>
      </div>

      {/* Mobile CTA */}
      <a
        href="#contact"
        className="md:hidden bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
      >
        Konsultasi
      </a>
    </nav>
  )
}
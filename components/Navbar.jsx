export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center border-b bg-white sticky top-0 z-50">
      <h1 className="text-xl font-bold text-indigo-600">
        ArafahDev
      </h1>
      <a
        href="#contact"
        className="text-sm font-medium text-gray-600 hover:text-indigo-600"
      >
        Kontak
      </a>
    </nav>
  )
}
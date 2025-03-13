import React, { useState } from 'react';
import { Coins, Store, Users, ShoppingBag, ArrowRight, CheckCircle, ShoppingCart } from 'lucide-react';

type ViewType = 'customer' | 'business';
type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  type_b: string;
};

function App() {
  const [activeView, setActiveView] = useState<ViewType>('customer');
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    type_b: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <ShoppingCart className="h-8 w-8 text-gray-500" />
              <span className="ml-4 text-2xl font-bold text-gray-900">KipiMarket</span>
            </div>
            <div className="flex space-x-6">
  <button
    onClick={() => setActiveView('customer')}
    className={`px-4 py-2 text-lg font-medium transition-all duration-300 ease-in-out
      ${activeView === 'customer' 
        ? 'text-black font-semibold text-2xl text-shadow-lg' // Sombra al texto cuando está activo
        : 'text-gray-600 hover:text-black hover:font-semibold hover:scale-105 hover:text-shadow-md' // Efectos hover
      }`}
  >
    Clientes
  </button>
  <button
    onClick={() => setActiveView('business')}
    className={`px-4 py-2 text-lg font-medium transition-all duration-300 ease-in-out
      ${activeView === 'business' 
        ? 'text-black font-semibold text-2xl text-shadow-lg' // Sombra al texto cuando está activo
        : 'text-gray-600 hover:text-black hover:font-semibold hover:scale-105 hover:text-shadow-md' // Efectos hover
      }`}
  >
    Negocios
  </button>
</div>

          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeView === 'customer' ? (
          <div key="customer" className="space-y-16">
            {/* Hero Section */}
            <div className="text-center md:flex items-center justify-between space-x-8">
              {/* Texto */}
              <div className="md:w-1/2">
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
                  Compra desde tu <span className="text-gray-500">WorldApp</span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl hero-text">
                  Explora, compra y paga de manera rápida y sencilla con tus monedas WLD en la WorldApp. ¡La forma más práctica de comprar sin complicaciones!
                </p>
              </div>

              {/* Imagen */}
              <div className="md:w-1/2 relative">
                <img
                  src="/images/clientes.png"
                  alt="clientes"
                  className="w-full h-full object-cover opacity-0 fade-in-image"
                />
              </div>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-xl shadow-sm animate-fadeInRight">
                <ShoppingBag className="h-12 w-12 text-gray-500 hover:text-gray-800 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Pago fáciles</h3>
                <p className="text-gray-600">Pague sin problemas con sus Worldcoins directamente desde WorldApp.</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm animate-fadeInRight">
                <CheckCircle className="h-12 w-12 text-gray-500 hover:text-gray-800 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Productos verificados</h3>
                <p className="text-gray-600">Compre en empresas confiables y verificadas en nuestro mercado.</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm animate-fadeInRight">
                <Store className="h-12 w-12 text-gray-500 hover:text-gray-800 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Amplia selección</h3>
                <p className="text-gray-600">Acceda a una amplia gama de productos y servicios.</p>
              </div>
            </div>


            {/* Form Section */}
            <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Más información</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Nombres</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Apellidos</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Correo</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Teléfono</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-500 hover:bg-gray-800"
                >
                  Solicitar información
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div key="business" className="space-y-16">
            {/* Hero Section */}
            <div className="text-center md:flex items-center justify-between space-x-8">
              {/* Texto */}
              <div className="md:w-1/2">
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
                  Haz crecer tu negocio con <span className="text-gray-500">KipiMarket</span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl hero-text">
                  Únete a una comunidad de más de un millón de usuarios registrados y verificados y expande tu negocio ofreciendo tus productos o servicios.
                </p>
              </div>
              {/* Imagen */}
              <div className="md:w-1/2 relative">
                <img
                  src="/images/negocios.png"
                  alt="negocios"
                  className="w-full h-full object-cover opacity-0 fade-in-image"
                />
              </div>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-xl shadow-sm animate-fadeInRight">
                <Users className="h-12 w-12 text-gray-500 hover:text-gray-800 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Usuarios verificados</h3>
                <p className="text-gray-600">Acceda a una comunidad en crecimiento de más de 1 millón de usuarios verificados de World</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm animate-fadeInRight">
                <Coins className="h-12 w-12 text-gray-500 hover:text-gray-800 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Amplía tus formas de pago</h3>
                <p className="text-gray-600">Recibe pagos en Worldcoin y ofrece a tus clientes una forma moderna, rápida y segura de pagar.</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm animate-fadeInRight">
                <Store className="h-12 w-12 text-gray-500 hover:text-gray-800 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Crecimiento empresarial</h3>
                <p className="text-gray-600">Promocione sus productos a una comunidad de criptomonedas comprometida</p>
              </div>
            </div>

            {/* Form Section */}
            <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Quiero unirme a KipiMarket</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Nombres</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Apellidos</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Tipo de negocio</label>
                  <input
                    type="text"
                    name="type_b"
                    value={formData.type_b}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Número de Celular</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-500 hover:bg-gray-700"
                >
                  Solicitar unirme
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm">&copy; 2025 KipiMarket. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

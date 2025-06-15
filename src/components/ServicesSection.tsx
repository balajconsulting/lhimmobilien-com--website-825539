import React from 'react'

export default function ServicesSection() {
  const services = [{"name":"Reparaturen","description":"Schnelle und zuverlässige Reparaturen","icon":"🔧"},{"name":"Neuanfertigungen","description":"Maßgeschneiderte Lösungen","icon":"🏗️"},{"name":"Beratung","description":"Professionelle Fachberatung","icon":"💡"}]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-heading mb-4">
            Unsere Leistungen
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: any, index: number) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
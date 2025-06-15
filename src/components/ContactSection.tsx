import React from 'react'

export default function ContactSection() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold font-heading mb-6">
              Kontakt aufnehmen
            </h2>
            <p className="text-lg mb-8">
              Kontaktieren Sie LH.Immobilien für eine persönliche Beratung
            </p>
            <div className="space-y-4">
              
              <div className="flex items-center">
                <span className="mr-3">📧</span>
                <a href="mailto:info@lhimmobilien.com/" className="hover:text-primary transition-colors">
                  info@lhimmobilien.com/
                </a>
              </div>
              
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-primary focus:outline-none"
              />
              <input 
                type="email" 
                placeholder="E-Mail" 
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-primary focus:outline-none"
              />
              <textarea 
                placeholder="Nachricht" 
                rows={4}
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-primary focus:outline-none"
              />
              <button 
                type="submit" 
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/80 transition-colors"
              >
                Nachricht senden
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
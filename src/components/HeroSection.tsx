import React from 'react'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold font-heading mb-6">
          LH.Immobilien - Meisterhafte Handwerkskunst
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          ame,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,c
        </p>
        <div className="space-x-4">
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Angebot anfordern
          </button>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur">
            <p className="font-semibold">Kostenlose Beratung</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur">
            <p className="font-semibold">Meisterqualität</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur">
            <p className="font-semibold">Faire Preise</p>
          </div>
        </div>
      </div>
    </section>
  )
}
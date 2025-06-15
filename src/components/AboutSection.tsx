import React from 'react'

export default function AboutSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold font-heading mb-6">
              Über uns
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              LH.Immobilien html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summa
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">200+</div>
                <div className="text-gray-600">Projekte</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">20+</div>
                <div className="text-gray-600">Jahre Erfahrung</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">150+</div>
                <div className="text-gray-600">Zufriedene Kunden</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            
            <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Bild hier einfügen</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
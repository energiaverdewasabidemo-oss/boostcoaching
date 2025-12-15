import React, { useEffect, useRef, useState } from 'react';
import { Star, Check, Award, ArrowRight, Sparkles, Crown, Zap } from 'lucide-react';

const Memberships = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const plans = [
    {
      name: "Mensual",
      subtitle: "Flexible",
      price: "19.99",
      priceDetail: "€19.99/mes",
      totalPrice: null,
      period: "/mes",
      popular: false,
      icon: Zap,
      badge: null,
      features: [
        "Acceso completo a todos los programas",
        "200+ entrenamientos on-demand",
        "Planes nutricionales incluidos",
        "Videos en 4K de cada ejercicio",
        "Seguimiento de progreso",
        "Comunidad global",
        "Actualizaciones mensuales",
        "Cancela cuando quieras"
      ]
    },
    {
      name: "Anual",
      subtitle: "Mejor Valor",
      price: "9.99",
      priceDetail: "€119.99 al año",
      totalPrice: "€119.99",
      period: "/mes",
      popular: true,
      icon: Crown,
      badge: "AHORRA 50%",
      trial: "7 DÍAS GRATIS",
      features: [
        "Todo del plan mensual",
        "Ahorra €120 al año",
        "7 días de prueba gratis",
        "Contenido exclusivo anual",
        "Acceso prioritario a nuevos programas",
        "Challenges premium con premios",
        "Badge exclusivo en la comunidad",
        "Soporte premium 24/7"
      ]
    }
  ];

  return (
    <section ref={sectionRef} id="pricing" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gold/10 border border-gold/30 rounded-full px-6 py-3 mb-8">
              <Sparkles className="w-5 h-5 text-gold mr-3" />
              <span className="text-gold font-bold text-sm tracking-wider">PRECIOS</span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-gray-900">
              Empieza tu
              <span className="block text-gold mt-2">Transformación Hoy</span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Acceso instantáneo a todos los programas, entrenamientos y contenido premium. Cancela cuando quieras.
            </p>
          </div>

          {/* Plans Grid - 2 columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div key={index} className="relative">
                {/* Badges */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gold text-black px-5 py-2 rounded-full font-black text-sm shadow-xl animate-pulse">
                      {plan.badge}
                    </div>
                  </div>
                )}

                {plan.popular && (
                  <div className="absolute -top-4 right-4 z-20">
                    <div className="bg-gold text-black px-4 py-2 rounded-full font-black text-xs shadow-xl flex items-center gap-2">
                      <Star className="w-4 h-4 fill-current" />
                      MEJOR VALOR
                    </div>
                  </div>
                )}

                {plan.trial && (
                  <div className="absolute top-6 left-6 z-20">
                    <div className="bg-white text-gray-900 px-3 py-1 rounded-lg font-black text-xs shadow-lg border-2 border-gold">
                      {plan.trial}
                    </div>
                  </div>
                )}

                <div className={`relative h-full flex flex-col rounded-3xl p-10 transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-gray-900 to-black border-4 border-gold shadow-2xl transform lg:scale-110 z-10'
                    : 'bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-gold/30'
                }`}>

                  {/* Icon */}
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 ${
                    plan.popular ? 'bg-gold/20' : 'bg-gray-50 border-2 border-gray-200'
                  }`}>
                    <plan.icon className={`w-10 h-10 ${plan.popular ? 'text-gold' : 'text-gray-900'}`} />
                  </div>

                  {/* Plan Name */}
                  <h3 className={`text-3xl font-black mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm font-bold mb-6 ${plan.popular ? 'text-gold' : 'text-gray-600'}`}>
                    {plan.subtitle}
                  </p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline mb-2">
                      <span className={`text-6xl font-black ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                        €{plan.price}
                      </span>
                      <span className={`text-xl ml-2 ${plan.popular ? 'text-gray-400' : 'text-gray-600'}`}>
                        {plan.period}
                      </span>
                    </div>
                    <p className={`text-sm font-semibold ${plan.popular ? 'text-gray-300' : 'text-gray-500'}`}>
                      {plan.priceDetail}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-10 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          plan.popular ? 'bg-gold/20' : 'bg-gray-100'
                        }`}>
                          <Check className={`w-4 h-4 ${plan.popular ? 'text-gold' : 'text-gray-900'}`} />
                        </div>
                        <span className={`font-medium ${plan.popular ? 'text-gray-200' : 'text-gray-700'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="/checkout"
                    className={`w-full py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 group transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gold hover:bg-yellow-400 text-black shadow-xl'
                        : 'bg-gray-900 hover:bg-black text-white shadow-lg'
                    }`}
                  >
                    <span>EMPEZAR AHORA</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Guarantee */}
          <div className="bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5 border-2 border-gold/30 rounded-3xl p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="bg-gold/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 border-2 border-gold/40">
                <Award className="w-10 h-10 text-gold" />
              </div>

              <h3 className="text-4xl font-black text-gray-900 mb-4">
                Garantía de Satisfacción
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Si no estás satisfecho en los primeros 30 días, te devolvemos el{' '}
                <span className="text-gold font-black">100%</span> de tu dinero. Sin preguntas.
              </p>

              <div className="inline-flex items-center bg-white rounded-full px-6 py-3 border-2 border-gold/30">
                <Check className="w-5 h-5 text-gold mr-3" />
                <span className="text-gray-900 font-bold">30 días de garantía</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Memberships;
import React from 'react';
import { Dumbbell, Flame, Zap, Target, Award, TrendingUp, Repeat, Calendar } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: Flame,
      name: "Mass Builder",
      duration: "12 semanas",
      level: "Intermedio-Avanzado",
      description: "Programa intensivo para máxima hipertrofia",
      popular: true
    },
    {
      icon: Zap,
      name: "Shredded",
      duration: "8 semanas",
      level: "Todos los niveles",
      description: "Definición extrema manteniendo músculo",
      popular: false
    },
    {
      icon: Target,
      name: "Push Pull Legs",
      duration: "Continuo",
      level: "Intermedio",
      description: "El clásico split optimizado",
      popular: true
    },
    {
      icon: Award,
      name: "Olympia Prep",
      duration: "16 semanas",
      level: "Avanzado",
      description: "Preparación de competición profesional",
      popular: false
    },
    {
      icon: Dumbbell,
      name: "Bro Split",
      duration: "Continuo",
      level: "Principiante-Intermedio",
      description: "Un músculo por día, volumen alto",
      popular: false
    },
    {
      icon: TrendingUp,
      name: "Beginner Gains",
      duration: "10 semanas",
      level: "Principiante",
      description: "Fundamentos para novatos totales",
      popular: false
    },
    {
      icon: Repeat,
      name: "Upper Lower",
      duration: "Continuo",
      level: "Todos los niveles",
      description: "Frecuencia 2x para cada grupo muscular",
      popular: true
    },
    {
      icon: Calendar,
      name: "Arnold Split",
      duration: "Continuo",
      level: "Intermedio-Avanzado",
      description: "El legendario split del campeón",
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gold/10 border border-gold/30 rounded-full px-6 py-3 mb-8">
              <Dumbbell className="w-5 h-5 text-gold mr-3" />
              <span className="text-gold font-bold text-sm tracking-wider">PROGRAMAS</span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-gray-900">
              Elige tu
              <span className="block text-gold mt-2">Programa</span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Cada programa está diseñado con la experiencia de 15+ años compitiendo al máximo nivel. Selecciona según tu objetivo y nivel.
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`relative group rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                  program.popular
                    ? 'bg-gradient-to-br from-gray-900 to-black text-white shadow-2xl border-2 border-gold'
                    : 'bg-gray-50 hover:bg-white border-2 border-gray-200 hover:border-gold/30 shadow-lg hover:shadow-xl'
                }`}
              >
                {program.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gold text-black px-4 py-1 rounded-full font-black text-xs">
                      POPULAR
                    </div>
                  </div>
                )}

                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  program.popular ? 'bg-gold/20' : 'bg-white border-2 border-gray-200'
                }`}>
                  <program.icon className={`w-8 h-8 ${program.popular ? 'text-gold' : 'text-gray-900'}`} />
                </div>

                <h3 className={`text-2xl font-black mb-3 ${program.popular ? 'text-white' : 'text-gray-900'}`}>
                  {program.name}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className={`text-sm font-bold ${program.popular ? 'text-gold' : 'text-gray-600'}`}>
                    {program.duration}
                  </div>
                  <div className={`text-xs font-semibold ${program.popular ? 'text-gray-300' : 'text-gray-500'}`}>
                    {program.level}
                  </div>
                </div>

                <p className={`leading-relaxed ${program.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                  {program.description}
                </p>
              </div>
            ))}
          </div>

          {/* On-Demand Workouts */}
          <div className="bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5 rounded-3xl p-12 border-2 border-gold/30">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center bg-gold/20 border border-gold/40 rounded-full px-6 py-3 mb-6">
                <Zap className="w-5 h-5 text-gold mr-3" />
                <span className="text-gold font-bold text-sm tracking-wider">ENTRENAMIENTOS ON-DEMAND</span>
              </div>

              <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Más de 200+ Entrenamientos
              </h3>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                ¿No quieres seguir un programa completo? Accede a cientos de entrenamientos individuales organizados por músculo, tiempo y equipo disponible.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Pecho', 'Espalda', 'Piernas', 'Hombros', 'Brazos', 'Core', 'Full Body', 'Cardio'].map((muscle, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-4 border-2 border-gray-200 hover:border-gold transition-colors"
                  >
                    <div className="font-black text-gray-900">{muscle}</div>
                    <div className="text-sm text-gray-500">25+ workouts</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-600 text-lg mb-6">
              Todos los programas incluidos con tu suscripción
            </p>
            <a
              href="#pricing"
              className="inline-flex items-center bg-gray-900 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-black transition-all duration-300 shadow-xl"
            >
              Ver Planes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;

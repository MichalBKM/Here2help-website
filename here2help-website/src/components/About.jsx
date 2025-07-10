import { Card, CardContent } from '@/components/ui/card.jsx'
import { Smartphone, Cloud, Brain, Shield } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Intuitive interface designed for quick access during emergencies and everyday needs."
    },
    {
      icon: Cloud,
      title: "Azure Cloud Integration",
      description: "Powered by Microsoft Azure services for scalability, reliability, and real-time processing."
    },
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Smart text and voice analysis to categorize requests and match helpers efficiently."
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Built-in rating system and user verification to ensure safe community interactions."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span style={{color: 'var(--here2help-purple)'}}>Here2help</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            In a world where community connections are diminishing, Here2help brings back the spirit of 
            mutual aid through technology. Our location-based application connects people who need help 
            with willing volunteers in their immediate vicinity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6" style={{color: 'var(--here2help-purple)'}}>
              The Problem We Solve
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                In our daily lives, we often encounter small but important needs - from simple car troubles 
                to helping elderly neighbors with groceries. Currently, there's no unified platform that 
                provides immediate, local assistance with a simple user experience and advanced technology.
              </p>
              <p>
                We aim to restore the sense of belonging, compassion, and mutual aid at the click of a button, 
                creating a smart community where help is always nearby.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-100 to-orange-100 rounded-2xl p-8 shadow-lg">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2" style={{color: 'var(--here2help-purple)'}}>
                  Real-time
                </div>
                <div className="text-lg text-gray-600 mb-4">Community Assistance</div>
                <div className="flex justify-center space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{backgroundColor: 'var(--here2help-purple)'}}>
                    <span className="text-white font-bold">?</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-1 rounded" style={{backgroundColor: 'var(--here2help-orange)'}}></div>
                  </div>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{backgroundColor: 'var(--here2help-orange)'}}>
                    <span className="text-white font-bold">!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{backgroundColor: index % 2 === 0 ? 'var(--here2help-purple)' : 'var(--here2help-orange)'}}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-3" style={{color: 'var(--here2help-purple)'}}>
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Heart, Users, MapPin } from 'lucide-react'
import { siteContent } from '@/data/content.js'

const iconMap = {
  MapPin,
  Heart,
  Users
}

export default function Hero() {
  const { hero } = siteContent
  
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-orange-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20" style={{backgroundColor: 'var(--here2help-purple)'}}></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-20" style={{backgroundColor: 'var(--here2help-orange)'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo/Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 rounded-full flex items-center justify-center shadow-lg" style={{backgroundColor: 'var(--here2help-purple)'}}>
                <Heart className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center" style={{backgroundColor: 'var(--here2help-orange)'}}>
                <Users className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
            {hero.title}
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            {hero.subtitle}
          </p>
          
          {/* Key features */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {hero.features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon]
              return (
                <div key={index} className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  <IconComponent className="w-5 h-5" style={{color: index % 2 === 0 ? 'var(--here2help-purple)' : 'var(--here2help-orange)'}} />
                  <span className="text-gray-700">{feature.text}</span>
                </div>
              )
            })}
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {hero.buttons.map((button, index) => (
              <Button 
                key={index}
                size="lg" 
                className={button.type === 'primary' 
                  ? "text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  : "font-semibold px-8 py-3 rounded-full border-2 hover:shadow-lg transition-all duration-300"
                }
                variant={button.type === 'primary' ? 'default' : 'outline'}
                style={button.type === 'primary' 
                  ? {backgroundColor: 'var(--here2help-purple)'}
                  : {borderColor: 'var(--here2help-orange)', color: 'var(--here2help-orange)'}
                }
              >
                {button.text}
                {button.type === 'primary' && <ArrowRight className="ml-2 w-5 h-5" />}
              </Button>
            ))}
          </div>
          
          {/* University project badge */}
          <div className="mt-12">
            <p className="text-sm text-gray-500 mb-2">{hero.badge.subtitle}</p>
            <p className="text-lg font-semibold text-gray-700">{hero.badge.title}</p>
          </div>
        </div>
      </div>
    </section>
  )
}


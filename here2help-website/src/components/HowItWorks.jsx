import { Card, CardContent } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { MessageSquare, MapPin, Users, Star, Mic, Image } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Request Help",
      description: "Open the app and describe what you need help with using text or voice input. Our AI automatically categorizes your request.",
      userType: "Help Seeker"
    },
    {
      icon: MapPin,
      title: "Location Matching",
      description: "Your request appears on an interactive map, visible to nearby volunteers in real-time with location-based filtering.",
      userType: "System"
    },
    {
      icon: Users,
      title: "Volunteer Response",
      description: "Nearby helpers receive notifications and can respond with 'I'm on my way!' to assist with your request.",
      userType: "Helper"
    },
    {
      icon: Star,
      title: "Rate & Review",
      description: "After help is provided, both parties can rate each other, building trust and community reputation.",
      userType: "Both"
    }
  ]

  const userTypes = [
    {
      title: "Help Seeker",
      description: "Anyone who needs assistance - from simple tasks to urgent help",
      features: [
        "Voice and text input with AI analysis",
        "Real-time location sharing",
        "Priority level selection",
        "Helper tracking and updates"
      ],
      color: "var(--here2help-purple)"
    },
    {
      title: "Helper/Volunteer",
      description: "Community members willing to assist others in their area",
      features: [
        "Choose help categories you're comfortable with",
        "Receive notifications based on proximity",
        "View request details and location",
        "Build reputation through ratings"
      ],
      color: "var(--here2help-orange)"
    },
    {
      title: "System Admin",
      description: "Manages the platform and monitors community activity",
      features: [
        "View all requests and activity",
        "Monitor user statistics and engagement",
        "Manage categories and settings",
        "Generate reports and analytics"
      ],
      color: "var(--here2help-purple)"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* How it works steps */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How <span style={{color: 'var(--here2help-orange)'}}>It Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, fast, and effective - get help or provide help in just a few taps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{backgroundColor: index % 2 === 0 ? 'var(--here2help-purple)' : 'var(--here2help-orange)'}}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-sm font-bold" style={{color: index % 2 === 0 ? 'var(--here2help-purple)' : 'var(--here2help-orange)'}}>
                        {index + 1}
                      </div>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold mb-3" style={{color: 'var(--here2help-purple)'}}>
                    {step.title}
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="inline-block px-3 py-1 rounded-full text-sm font-medium" style={{backgroundColor: index % 2 === 0 ? 'var(--here2help-purple)' : 'var(--here2help-orange)', color: 'white'}}>
                    {step.userType}
                  </div>
                </CardContent>
              </Card>
              
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-1 rounded transform -translate-y-1/2 z-10" style={{backgroundColor: 'var(--here2help-orange)'}}></div>
              )}
            </div>
          ))}
        </div>

        {/* User types */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-6" style={{color: 'var(--here2help-purple)'}}>
            User Types & Features
          </h3>
          <p className="text-lg text-gray-600">
            Different roles, unified community experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {userTypes.map((userType, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: userType.color}}>
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2" style={{color: userType.color}}>
                    {userType.title}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {userType.description}
                  </p>
                </div>
                <ul className="space-y-2">
                  {userType.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: userType.color}}></div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key features highlight */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4" style={{color: 'var(--here2help-purple)'}}>
              Advanced Features
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Mic className="w-12 h-12 mx-auto mb-4" style={{color: 'var(--here2help-orange)'}} />
              <h4 className="font-semibold mb-2">Voice Input</h4>
              <p className="text-gray-600 text-sm">Speech-to-text for hands-free requests, especially useful while driving or for accessibility</p>
            </div>
            <div className="text-center">
              <Image className="w-12 h-12 mx-auto mb-4" style={{color: 'var(--here2help-purple)'}} />
              <h4 className="font-semibold mb-2">Image Analysis</h4>
              <p className="text-gray-600 text-sm">AI-powered image recognition to better understand and categorize help requests</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4" style={{color: 'var(--here2help-orange)'}} />
              <h4 className="font-semibold mb-2">Real-time Tracking</h4>
              <p className="text-gray-600 text-sm">Live location updates and status tracking for both helpers and help seekers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


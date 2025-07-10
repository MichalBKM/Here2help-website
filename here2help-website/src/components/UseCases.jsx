import { Card, CardContent } from '@/components/ui/card.jsx'
import { Star, Clock, MapPin, MessageCircle } from 'lucide-react'

export default function UseCases() {
  const scenarios = [
    {
      title: "Emergency Diaper Run",
      user: "David",
      situation: "Father alone at home with a month-old baby at 8:30 PM",
      request: "Hey, does anyone have diapers for a newborn nearby? I'm alone with the baby and can't leave to buy some right now...",
      helper: "Naama",
      helperProfile: "Mother living in the same building, marked 'Family Support' in her help categories",
      outcome: "Naama responded 'I'm on my way' and delivered diapers within minutes. Baby calmed down, David rated Naama 5 stars.",
      rating: 5,
      timeToHelp: "5 minutes",
      category: "Family Support"
    },
    {
      title: "Roadside Car Trouble",
      user: "Daniel",
      situation: "Stuck on the roadside with car trouble",
      request: "Voice message automatically converted to text: Car trouble, need help with cables",
      helper: "Yossi",
      helperProfile: "Traveling in opposite direction, marked as device repair helper",
      outcome: "Yossi arrived with cables and helped start the car. However, Daniel felt the long wait was stressful, especially alone at night.",
      rating: 3,
      timeToHelp: "25 minutes",
      category: "Vehicle Assistance"
    },
    {
      title: "Urgent Printer Fix",
      user: "Tamar",
      situation: "Engineering student trying to print assignment at checkpoint building",
      request: "URGENT HELP! Does anyone know how to fix a printer? I'm at checkpoint building, not at home, assignment due tomorrow!!!",
      helper: "Alon → Gil",
      helperProfile: "Alon marked as device repair helper but didn't show up. Request automatically transferred to Gil after 20 minutes.",
      outcome: "Gil arrived and helped fix the printer. Tamar rated Gil 5 stars, Alon received 0 stars for not showing up despite confirming.",
      rating: 5,
      timeToHelp: "30 minutes (after transfer)",
      category: "Technical Support"
    }
  ]

  const getRatingStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'fill-current' : ''}`}
        style={{color: i < rating ? 'var(--here2help-orange)' : '#e5e7eb'}}
      />
    ))
  }

  const getCategoryColor = (category) => {
    const colors = {
      'Family Support': 'var(--here2help-purple)',
      'Vehicle Assistance': 'var(--here2help-orange)',
      'Technical Support': 'var(--here2help-purple)'
    }
    return colors[category] || 'var(--here2help-purple)'
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real <span style={{color: 'var(--here2help-purple)'}}>Use Cases</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how Here2help makes a difference in real community situations, 
            connecting neighbors and building stronger communities
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {scenarios.map((scenario, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
              <CardContent className="p-6 h-full flex flex-col">
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold" style={{color: 'var(--here2help-purple)'}}>
                      {scenario.title}
                    </h3>
                    <div className="px-3 py-1 rounded-full text-xs font-medium text-white" style={{backgroundColor: getCategoryColor(scenario.category)}}>
                      {scenario.category}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    <strong>{scenario.user}:</strong> {scenario.situation}
                  </p>
                </div>

                {/* Request */}
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-start gap-2">
                    <MessageCircle className="w-4 h-4 mt-1 flex-shrink-0" style={{color: 'var(--here2help-purple)'}} />
                    <p className="text-sm text-gray-700 italic">
                      "{scenario.request}"
                    </p>
                  </div>
                </div>

                {/* Helper info */}
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">
                    <strong style={{color: 'var(--here2help-orange)'}}>Helper:</strong> {scenario.helper}
                  </p>
                  <p className="text-xs text-gray-500">
                    {scenario.helperProfile}
                  </p>
                </div>

                {/* Outcome */}
                <div className="flex-grow mb-4">
                  <p className="text-sm text-gray-700">
                    {scenario.outcome}
                  </p>
                </div>

                {/* Stats */}
                <div className="border-t pt-4 mt-auto">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {getRatingStars(scenario.rating)}
                      <span className="text-sm text-gray-600 ml-1">({scenario.rating}/5)</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      {scenario.timeToHelp}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key insights */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-8" style={{color: 'var(--here2help-purple)'}}>
            Key Insights from Real Usage
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: 'var(--here2help-purple)'}}>
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Response Time Matters</h4>
              <p className="text-gray-600 text-sm">
                Quick response times (under 10 minutes) lead to higher satisfaction rates and stronger community bonds.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: 'var(--here2help-orange)'}}>
                <Star className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Trust Through Ratings</h4>
              <p className="text-gray-600 text-sm">
                The rating system helps build community trust and ensures accountability for both helpers and help seekers.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: 'var(--here2help-purple)'}}>
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">Location is Key</h4>
              <p className="text-gray-600 text-sm">
                Proximity-based matching ensures helpers can respond quickly and efficiently to nearby requests.
              </p>
            </div>
          </div>
        </div>

        {/* Community impact */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-100 to-orange-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4" style={{color: 'var(--here2help-purple)'}}>
              Building Stronger Communities
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              These real scenarios demonstrate how technology can restore the spirit of mutual aid and 
              community support. Here2help doesn't just solve immediate problems - it builds lasting 
              connections between neighbors and strengthens the social fabric of our communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


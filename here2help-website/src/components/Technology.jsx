import { Card, CardContent } from '@/components/ui/card.jsx'
import { Cloud, Database, Zap, Shield, Brain, Globe } from 'lucide-react'

export default function Technology() {
  const technologies = [
    {
      icon: Cloud,
      title: "Microsoft Azure",
      description: "Cloud infrastructure powering scalable, reliable services",
      services: ["Azure App Service", "Azure Functions", "Azure AD B2C", "Azure Maps"]
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Robust data storage and real-time synchronization",
      services: ["Azure SQL Database", "Azure Cosmos DB", "Azure Blob Storage", "SignalR"]
    },
    {
      icon: Brain,
      title: "AI & Analytics",
      description: "Smart text and speech processing for better user experience",
      services: ["Azure Text Analytics", "Azure Speech Services", "Computer Vision", "Power BI"]
    },
    {
      icon: Zap,
      title: "Real-time Features",
      description: "Instant notifications and live updates",
      services: ["Notification Hub", "SignalR", "Azure Functions", "Real-time Maps"]
    }
  ]

  const features = [
    {
      icon: Globe,
      title: "Location-Based Services",
      description: "Precise geolocation and mapping for accurate help matching"
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description: "Enterprise-grade security with user authentication and data protection"
    },
    {
      icon: Zap,
      title: "Scalable Architecture",
      description: "Built to handle growing user base and increasing request volume"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technology <span style={{color: 'var(--here2help-orange)'}}>Stack</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built with cutting-edge cloud technologies and AI services to deliver 
            a seamless, intelligent, and scalable community aid platform
          </p>
        </div>

        {/* Main technology cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: index % 2 === 0 ? 'var(--here2help-purple)' : 'var(--here2help-orange)'}}>
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2" style={{color: 'var(--here2help-purple)'}}>
                    {tech.title}
                  </h4>
                  <p className="text-gray-600 mb-4 text-sm">
                    {tech.description}
                  </p>
                </div>
                <div className="space-y-2">
                  {tech.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{backgroundColor: index % 2 === 0 ? 'var(--here2help-purple)' : 'var(--here2help-orange)'}}></div>
                      <span className="text-gray-600 text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Architecture overview */}
        <div className="bg-gradient-to-br from-purple-50 to-orange-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4" style={{color: 'var(--here2help-purple)'}}>
              System Architecture
            </h3>
            <p className="text-gray-600">
              A comprehensive IoT and cloud-based solution designed for scalability and performance
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="font-semibold mb-3" style={{color: 'var(--here2help-purple)'}}>Frontend</h4>
                <p className="text-gray-600 text-sm mb-4">Mobile-first responsive design with intuitive UX</p>
                <div className="space-y-1 text-xs text-gray-500">
                  <div>React Native / Progressive Web App</div>
                  <div>Real-time UI updates</div>
                  <div>Offline capability</div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="font-semibold mb-3" style={{color: 'var(--here2help-orange)'}}>Backend</h4>
                <p className="text-gray-600 text-sm mb-4">Serverless architecture with Azure Functions</p>
                <div className="space-y-1 text-xs text-gray-500">
                  <div>RESTful APIs</div>
                  <div>Event-driven processing</div>
                  <div>Auto-scaling</div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="font-semibold mb-3" style={{color: 'var(--here2help-purple)'}}>AI Services</h4>
                <p className="text-gray-600 text-sm mb-4">Intelligent request processing and matching</p>
                <div className="space-y-1 text-xs text-gray-500">
                  <div>Natural language processing</div>
                  <div>Image recognition</div>
                  <div>Smart categorization</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{backgroundColor: 'var(--here2help-purple)'}}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h4 className="text-xl font-semibold mb-3" style={{color: 'var(--here2help-purple)'}}>
                {feature.title}
              </h4>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Innovation highlight */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4" style={{borderColor: 'var(--here2help-orange)'}}>
            <h3 className="text-2xl font-bold mb-4" style={{color: 'var(--here2help-purple)'}}>
              Innovation & Integration
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Here2help represents a unique integration of advanced cloud technologies with social impact. 
              By combining IoT capabilities, AI-powered analysis, and real-time communication, we've created 
              an automated system that provides comprehensive solutions for various community needs while 
              maintaining accessibility for users with different abilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


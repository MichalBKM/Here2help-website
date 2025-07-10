import { Card, CardContent } from '@/components/ui/card.jsx'
import { Users, GraduationCap, Code, Database } from 'lucide-react'

export default function Team() {
  // Based on the PDF, the team members are mentioned as:
  // שי דקל, אסף מלכי ומיכל ברקיים (Shai Dekel, Asaf Malki, and Michal Barkayim)
  const teamMembers = [
    {
      name: "Shai Dekel",
      role: "Full Stack Developer",
      specialization: "Frontend Development & UI/UX Design",
      contributions: [
        "Mobile-first responsive design",
        "Real-time user interface",
        "User experience optimization",
        "Component architecture"
      ]
    },
    {
      name: "Asaf Malki", 
      role: "Backend Developer",
      specialization: "Cloud Architecture & Azure Services",
      contributions: [
        "Azure cloud infrastructure",
        "API development and integration",
        "Database design and optimization",
        "Serverless functions implementation"
      ]
    },
    {
      name: "Michal Barkayim",
      role: "AI/ML Developer",
      specialization: "Artificial Intelligence & Data Analytics",
      contributions: [
        "Speech-to-text integration",
        "Text analytics and categorization",
        "Image recognition features",
        "Smart matching algorithms"
      ]
    }
  ]

  const projectDetails = [
    {
      icon: GraduationCap,
      title: "Academic Context",
      description: "University Computer Science Project",
      details: "E2E Full Stack Management IoT Course"
    },
    {
      icon: Code,
      title: "Development Approach",
      description: "Agile methodology with iterative development",
      details: "Focus on user-centered design and community impact"
    },
    {
      icon: Database,
      title: "Technical Scope",
      description: "End-to-end solution covering all aspects",
      details: "From mobile frontend to cloud backend and AI services"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet the <span style={{color: 'var(--here2help-orange)'}}>Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A dedicated team of computer science students passionate about using technology 
            to create positive social impact and strengthen community connections
          </p>
        </div>

        {/* Team members */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                {/* Avatar placeholder */}
                <div className="mb-6 flex justify-center">
                  <div className="w-24 h-24 rounded-full flex items-center justify-center text-white text-2xl font-bold" style={{backgroundColor: index % 2 === 0 ? 'var(--here2help-purple)' : 'var(--here2help-orange)'}}>
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2" style={{color: 'var(--here2help-purple)'}}>
                  {member.name}
                </h3>
                <p className="font-semibold mb-2" style={{color: 'var(--here2help-orange)'}}>
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {member.specialization}
                </p>
                
                <div className="text-left">
                  <h4 className="font-semibold mb-3 text-center" style={{color: 'var(--here2help-purple)'}}>
                    Key Contributions
                  </h4>
                  <ul className="space-y-2">
                    {member.contributions.map((contribution, contribIndex) => (
                      <li key={contribIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: index % 2 === 0 ? 'var(--here2help-purple)' : 'var(--here2help-orange)'}}></div>
                        <span className="text-gray-600 text-sm">{contribution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project context */}
        <div className="bg-gradient-to-br from-purple-50 to-orange-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4" style={{color: 'var(--here2help-purple)'}}>
              Project Context
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here2help was developed as part of an advanced computer science curriculum, 
              combining theoretical knowledge with practical application to address real-world challenges
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {projectDetails.map((detail, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: 'var(--here2help-purple)'}}>
                  <detail.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2" style={{color: 'var(--here2help-purple)'}}>
                  {detail.title}
                </h4>
                <p className="text-gray-600 text-sm mb-2">
                  {detail.description}
                </p>
                <p className="text-gray-500 text-xs">
                  {detail.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Development philosophy */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4" style={{borderColor: 'var(--here2help-orange)'}}>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{backgroundColor: 'var(--here2help-purple)'}}>
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4" style={{color: 'var(--here2help-purple)'}}>
              Our Development Philosophy
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We believe technology should serve humanity and strengthen communities. Here2help represents 
              our commitment to creating solutions that are not only technically sophisticated but also 
              socially meaningful. By combining advanced cloud technologies with intuitive design, 
              we've built a platform that makes mutual aid accessible, efficient, and trustworthy.
            </p>
          </div>
        </div>

        {/* Future vision */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6" style={{color: 'var(--here2help-orange)'}}>
            Looking Forward
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            As we continue to develop and refine Here2help, our goal is to expand its reach and impact, 
            creating stronger, more connected communities where help is always just a tap away. 
            This project represents the beginning of our journey in using technology for social good.
          </p>
        </div>
      </div>
    </section>
  )
}


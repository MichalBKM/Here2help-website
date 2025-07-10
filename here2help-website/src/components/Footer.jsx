import { Heart, Mail, Github, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{backgroundColor: 'var(--here2help-purple)'}}>
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Here2help</h3>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              A smart community mutual aid application that connects people who need help 
              with volunteers in real-time, powered by location-based technology and AI.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Built with</span>
              <Heart className="w-4 h-4" style={{color: 'var(--here2help-orange)'}} />
              <span>for stronger communities</span>
            </div>
          </div>

          {/* Project info */}
          <div>
            <h4 className="font-semibold mb-4" style={{color: 'var(--here2help-orange)'}}>
              Project Info
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>University CS Project</li>
              <li>E2E Full Stack Management</li>
              <li>IoT Integration</li>
              <li>Azure Cloud Platform</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4" style={{color: 'var(--here2help-orange)'}}>
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <span className="text-sm">Academic Project</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Github className="w-4 h-4" />
                <span className="text-sm">Open Source</span>
              </div>
            </div>
          </div>
        </div>

        {/* Team credits */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="text-center">
            <h4 className="font-semibold mb-4" style={{color: 'var(--here2help-purple)'}}>
              Development Team
            </h4>
            <div className="flex flex-wrap justify-center gap-6 text-gray-300">
              <span>Shai Dekel</span>
              <span>•</span>
              <span>Asaf Malki</span>
              <span>•</span>
              <span>Michal Barkayim</span>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Here2help. University Computer Science Project.
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Powered by</span>
              <span className="font-semibold" style={{color: 'var(--here2help-orange)'}}>Microsoft Azure</span>
            </div>
          </div>
        </div>

        {/* Mission statement */}
        <div className="mt-8 text-center">
          <div className="bg-gray-800 rounded-lg p-6">
            <p className="text-gray-300 italic">
              "Restoring the sense of belonging, compassion, and mutual aid at the click of a button"
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}


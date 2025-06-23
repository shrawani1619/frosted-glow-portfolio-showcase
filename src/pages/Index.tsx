
import { useState } from "react";
import { Github, Linkedin, Mail, ExternalLink, Download, Code, Palette, Smartphone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with React and Node.js",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      live: "#",
      github: "#"
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio with glassmorphism design",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
      tech: ["React", "Tailwind", "Framer Motion"],
      live: "#",
      github: "#"
    },
    {
      title: "Mobile App UI",
      description: "Beautiful mobile app interface design",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      tech: ["React Native", "Expo", "TypeScript"],
      live: "#",
      github: "#"
    }
  ];

  const skills = [
    { name: "Frontend Development", icon: Code, level: 90 },
    { name: "UI/UX Design", icon: Palette, level: 85 },
    { name: "Mobile Development", icon: Smartphone, level: 80 },
    { name: "Web Development", icon: Globe, level: 95 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-float" style={{animationDelay: '-3s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl animate-float" style={{animationDelay: '-1.5s'}}></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 backdrop-blur-md bg-white/10 border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </h1>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10 pt-20 pb-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-12 border border-white/20 shadow-xl max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Hello, I'm Alex
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Creative Frontend Developer & UI/UX Designer
              </p>
              <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
                I craft beautiful, responsive web experiences with modern technologies and thoughtful design
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </Button>
                <Button variant="outline" className="backdrop-blur-md bg-white/20 border-white/30 hover:bg-white/30 px-8 py-3 rounded-full transition-all duration-300">
                  View Projects
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate about creating seamless digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20 shadow-xl">
              <h4 className="text-2xl font-semibold mb-6 text-gray-800">My Story</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With over 5 years of experience in web development, I specialize in creating modern, 
                user-friendly applications that deliver exceptional user experiences. I'm passionate 
                about clean code, innovative design, and staying up-to-date with the latest technologies.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not coding, you can find me exploring new design trends, contributing to 
                open-source projects, or enjoying a good cup of coffee while brainstorming the next big idea.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="backdrop-blur-md bg-white/10 rounded-xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <skill.icon className="w-8 h-8 text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h5 className="font-semibold text-gray-800 mb-2">{skill.name}</h5>
                  <div className="w-full bg-gray-200/50 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 mt-1">{skill.level}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A showcase of my recent work and creative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                onMouseEnter={() => setActiveProject(index)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h4>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" className="flex-1 backdrop-blur-sm bg-white/20 border-white/30 hover:bg-white/30">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 backdrop-blur-sm bg-white/20 border-white/30 hover:bg-white/30">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-12 border border-white/20 shadow-xl text-center">
              <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Let's Work Together
              </h3>
              <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                Have a project in mind? I'd love to hear about it. Let's create something amazing together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
                <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </Button>
              </div>

              <div className="flex justify-center space-x-6">
                <a href="#" className="w-12 h-12 backdrop-blur-md bg-white/20 rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all duration-300 group">
                  <Github className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
                </a>
                <a href="#" className="w-12 h-12 backdrop-blur-md bg-white/20 rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all duration-300 group">
                  <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
                </a>
                <a href="#" className="w-12 h-12 backdrop-blur-md bg-white/20 rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all duration-300 group">
                  <Mail className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 backdrop-blur-md bg-white/10 border-t border-white/20 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600">
            © 2024 Alex Portfolio. Crafted with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

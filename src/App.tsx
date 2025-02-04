import React, { useEffect, useState } from 'react';
import { Shield, Code, Cloud, Award, Book, Mail, MapPin, Linkedin, Github, Twitter, Lock, Key, Database, Cpu, Server } from 'lucide-react';

function FloatingObjects() {
  const [objects, setObjects] = useState<Array<{ id: number; icon: JSX.Element; style: React.CSSProperties }>>([]);

  useEffect(() => {
    const icons = [Lock, Key, Database, Shield, Cpu, Server];
    const newObjects = Array.from({ length: 15 }, (_, i) => {
      const Icon = icons[i % icons.length];
      const size = Math.random() * 30 + 20;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const duration = Math.random() * 10 + 15;
      const translateX = (Math.random() - 0.5) * 200;
      const translateY = (Math.random() - 0.5) * 200;
      const rotate = (Math.random() - 0.5) * 360;

      return {
        id: i,
        icon: <Icon size={size} />,
        style: {
          left: `${left}%`,
          top: `${top}%`,
          animation: `float ${duration}s ease-in-out infinite`,
          '--translate-x': `${translateX}px`,
          '--translate-y': `${translateY}px`,
          '--rotate': `${rotate}deg`,
        } as React.CSSProperties,
      };
    });
    setObjects(newObjects);
  }, []);

  return (
    <div className="floating-objects">
      {objects.map(obj => (
        <div key={obj.id} className="floating-object" style={obj.style}>
          {obj.icon}
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="animated-background min-h-screen text-white perspective-1000">
      <FloatingObjects />
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 md:py-24 transform hover:translate-z-10 transition-transform duration-500 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 hover:scale-105 transition-transform duration-300 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Rohan Naagar</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 transform hover:translate-y-[-5px] transition-all duration-300">Cybersecurity Expert, IT Leader & Innovator</p>
          <p className="text-lg text-gray-400 hover:text-gray-300 transition-colors duration-300">🚀 Empowering Innovation, Enhancing Technology</p>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16 transform hover:translate-z-5 transition-transform duration-500 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto backdrop-blur-sm bg-gray-800/30 p-8 rounded-xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">About Me</h2>
            <p className="text-gray-300 leading-relaxed mb-6 hover:translate-x-1 transform transition-transform duration-300">
              I am a cybersecurity expert, IT leader, and technology enthusiast based in Faridabad, Haryana, India. With a strong foundation in cybersecurity, IT management, and software development, I specialize in network security, penetration testing, risk management, and cloud security.
            </p>
            <p className="text-gray-300 leading-relaxed hover:translate-x-1 transform transition-transform duration-300">
              With expertise in Python, Java, Rust, C++, and cloud computing, I have built several secure, scalable, and high-performance systems for businesses and organizations. My passion for artificial intelligence, ethical hacking, and cybersecurity drives me to develop solutions that safeguard digital assets while pushing the boundaries of technological innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Shield className="w-12 h-12 mb-4 text-blue-400" />,
                title: "Cybersecurity",
                items: ["Ethical Hacking", "Network Security", "Penetration Testing", "Incident Response"],
                color: "from-blue-500/20 to-blue-600/20"
              },
              {
                icon: <Code className="w-12 h-12 mb-4 text-green-400" />,
                title: "Development",
                items: ["Python | Java | Rust", "C++ | JavaScript", "DevSecOps", "Blockchain Security"],
                color: "from-green-500/20 to-green-600/20"
              },
              {
                icon: <Cloud className="w-12 h-12 mb-4 text-purple-400" />,
                title: "Cloud & DevOps",
                items: ["AWS | Azure", "Docker | Kubernetes", "Terraform", "CI/CD"],
                color: "from-purple-500/20 to-purple-600/20"
              }
            ].map((expertise, index) => (
              <div key={index} className={`bg-gradient-to-br ${expertise.color} p-6 rounded-xl backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 hover:translate-z-10 transform transition-all duration-500 group`}>
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {expertise.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{expertise.title}</h3>
                <ul className="text-gray-300 space-y-2">
                  {expertise.items.map((item, i) => (
                    <li key={i} className="hover:translate-x-2 transform transition-transform duration-300">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              'Certified Ethical Hacker (CEH)',
              'CompTIA Security+',
              'CISSP',
              'AWS Certified Solutions Architect',
              'Azure Security Engineer Associate',
              'OSCP'
            ].map((cert, index) => (
              <div key={index} className="bg-gray-900/50 p-4 rounded-xl backdrop-blur-sm flex items-center hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 transform transition-all duration-300">
                <Award className="w-6 h-6 mr-3 text-yellow-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-300">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Education</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                degree: 'Master of Technology (M.Tech) in Cyber Security',
                school: 'Gurgaon University'
              },
              {
                degree: 'Bachelor of Technology (B.Tech) in Cyber Security',
                school: 'Gurgaon University'
              },
              {
                degree: 'IB Diploma',
                school: 'International Baccalaureate (IB)'
              }
            ].map((edu, index) => (
              <div key={index} className="bg-gray-800/30 p-6 rounded-xl backdrop-blur-sm flex items-start hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 transform transition-all duration-300">
                <Book className="w-6 h-6 mr-4 text-blue-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h3 className="font-semibold text-lg">{edu.degree}</h3>
                  <p className="text-gray-400">{edu.school}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Connect With Me</h2>
          <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <Mail className="w-5 h-5" />,
                text: "Rohan150907@gmail.com",
                href: "mailto:Rohan150907@gmail.com"
              },
              {
                icon: <MapPin className="w-5 h-5" />,
                text: "Faridabad, Haryana, India"
              },
              {
                icon: <Linkedin className="w-5 h-5" />,
                text: "Rohan Naagar",
                href: "https://linkedin.com/in/rohan-naagar"
              },
              {
                icon: <Github className="w-5 h-5" />,
                text: "@RohanCyberOps",
                href: "https://github.com/RohanCyberOps"
              },
              {
                icon: <Twitter className="w-5 h-5" />,
                text: "@rohannaagar666",
                href: "https://twitter.com/rohannaagar666"
              }
            ].map((contact, index) => (
              contact.href ? (
                <a 
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 hover:scale-105 transform hover:translate-x-2"
                >
                  {contact.icon}
                  <span>{contact.text}</span>
                </a>
              ) : (
                <div key={index} className="flex items-center space-x-3 text-gray-300">
                  {contact.icon}
                  <span>{contact.text}</span>
                </div>
              )
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
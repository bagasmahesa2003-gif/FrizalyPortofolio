import { useEffect } from 'react';
import AOS from 'aos';
import { 
  Palette, Video, Camera, Briefcase, GraduationCap, 
  Phone, Mail, MapPin, MessageCircle, Instagram
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <>
      <header className="h-screen flex items-center justify-center hero-bg text-center px-4">
          <div data-aos="fade-up" data-aos-duration="1000">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">Muhammad Bagus <span className="text-gradient">Afriza Aly</span></h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-2 font-light tracking-wide">Content Creator & Visual Designer</p>
              <p className="text-gray-400 max-w-lg mx-auto mb-8">Creating visual stories through design, photo, and video.</p>
              <a href="#about" className="btn-gradient inline-block px-8 py-4 rounded-lg font-semibold uppercase tracking-wider">
                  Learn More
              </a>
          </div>
      </header>

      <section id="about" className="py-24 px-6 md:px-24">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div data-aos="fade-right">
                  <div className="relative">
                      <img src="/aly.png" alt="Profile" className="rounded-2xl shadow-2xl border-2 border-white/10" />
                      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl"></div>
                  </div>
              </div>
              <div data-aos="fade-left">
                  <h2 className="text-4xl font-bold mb-6">About <span className="text-red-500">Me</span></h2>
                  <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                      A passionate content creator with a strong interest in visual communication and brand identity. Experienced in turning ideas into engaging content through photography, video, storytelling, and creative visual design.
                  </p>
                  <div className="flex flex-wrap gap-4">
                      <span className="glass px-4 py-2 rounded-full text-sm text-blue-400 border-blue-500/30">✨ Adaptable</span>
                      <span className="glass px-4 py-2 rounded-full text-sm text-red-400 border-red-500/30">🎨 Creative</span>
                      <span className="glass px-4 py-2 rounded-full text-sm text-blue-400 border-blue-500/30">🤝 Collaborative</span>
                  </div>
              </div>
          </div>
      </section>

      <section id="skills" className="py-24 bg-[#0d0d0d]">
          <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center mb-16" data-aos="fade-up">My <span className="text-blue-500">Expertise</span></h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                  <div className="glass p-8 rounded-2xl transition hover:border-red-500/50 group" data-aos="zoom-in" data-aos-delay="100">
                      <Palette className="w-12 h-12 mb-6 text-red-500 transition group-hover:scale-110" />
                      <h3 className="text-xl font-bold mb-2">Graphic Design</h3>
                      <p className="text-gray-400 text-sm">Visual concepts and layouts for digital and print media.</p>
                  </div>
                  <div className="glass p-8 rounded-2xl transition hover:border-blue-500/50 group" data-aos="zoom-in" data-aos-delay="200">
                      <Video className="w-12 h-12 mb-6 text-blue-500 transition group-hover:scale-110" />
                      <h3 className="text-xl font-bold mb-2">Video Editing</h3>
                      <p className="text-gray-400 text-sm">Dynamic storytelling through professional cutting and motion.</p>
                  </div>
                  <div className="glass p-8 rounded-2xl transition hover:border-red-500/50 group" data-aos="zoom-in" data-aos-delay="300">
                      <Camera className="w-12 h-12 mb-6 text-red-500 transition group-hover:scale-110" />
                      <h3 className="text-xl font-bold mb-2">Photography</h3>
                      <p className="text-gray-400 text-sm">Capturing high-quality visual assets for brand identity.</p>
                  </div>
              </div>

              <div className="flex flex-wrap justify-center gap-6" data-aos="fade-up">
                  <div className="flex items-center space-x-2 glass px-6 py-3 rounded-xl border-white/5">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span className="font-medium">Adobe Photoshop</span>
                  </div>
                  <div className="flex items-center space-x-2 glass px-6 py-3 rounded-xl border-white/5">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span className="font-medium">Illustrator</span>
                  </div>
                  <div className="flex items-center space-x-2 glass px-6 py-3 rounded-xl border-white/5">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span className="font-medium">Premiere Pro</span>
                  </div>
                  <div className="flex items-center space-x-2 glass px-6 py-3 rounded-xl border-white/5">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span className="font-medium">CapCut</span>
                  </div>
                  <div className="flex items-center space-x-2 glass px-6 py-3 rounded-xl border-white/5">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span className="font-medium">Canva</span>
                  </div>
              </div>
          </div>
      </section>

      <section className="py-24 bg-[#0d0d0d] px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
              
              <div>
                  <h2 className="text-3xl font-bold mb-10 flex items-center">
                      <Briefcase className="mr-4 text-red-500" /> Experience
                  </h2>
                  <div className="space-y-8 border-l-2 border-white/10 pl-8">
                      <div className="relative" data-aos="fade-up">
                          <div className="absolute -left-[41px] top-1 w-4 h-4 bg-red-500 rounded-full border-4 border-black"></div>
                          <h4 className="text-xl font-bold">Content Creator</h4>
                          <p className="text-blue-500 mb-2">Alpha Global Agency | Feb 2025 – Jul 2025</p>
                          <ul className="text-gray-400 text-sm space-y-2 list-disc ml-4">
                              <li>Created visual content and copy for multiple brands</li>
                              <li>Collaborated with design and strategy team</li>
                              <li>Managed content production timeline</li>
                          </ul>
                      </div>
                      <div className="relative" data-aos="fade-up">
                          <div className="absolute -left-[41px] top-1 w-4 h-4 bg-blue-500 rounded-full border-4 border-black"></div>
                          <h4 className="text-xl font-bold">Creative Team / Operational Staff</h4>
                          <p className="text-red-500 mb-2">Shawarma Stop | Aug 2025 – Mar 2026</p>
                          <ul className="text-gray-400 text-sm space-y-2 list-disc ml-4">
                              <li>Designed promotional materials and menu</li>
                              <li>Created marketing content</li>
                              <li>Helped develop brand visual identity</li>
                          </ul>
                      </div>
                  </div>
              </div>

              <div>
                  <h2 className="text-3xl font-bold mb-10 flex items-center">
                      <GraduationCap className="mr-4 text-blue-500" /> Education
                  </h2>
                  <div className="space-y-6">
                      <div className="glass p-6 rounded-xl border-l-4 border-blue-500" data-aos="fade-up">
                          <h4 className="text-lg font-bold uppercase tracking-tight">Politeknik SSR</h4>
                          <p className="text-blue-400">D3 Visual Communication Design</p>
                          <p className="text-gray-500 text-sm">2022 – 2025</p>
                      </div>
                      <div className="glass p-6 rounded-xl border-l-4 border-red-500" data-aos="fade-up">
                          <h4 className="text-lg font-bold uppercase tracking-tight">SMK 1 Al-Haddid</h4>
                          <p className="text-red-400">Automotive Major</p>
                          <p className="text-gray-500 text-sm">2019 – 2022</p>
                      </div>
                  </div>
              </div>

          </div>
      </section>

      {/* Projects Banner Section */}
      <section id="projects-section" className="py-24 px-6 md:px-24 bg-gradient-to-b from-[#0d0d0d] to-black">
          <div className="max-w-4xl mx-auto text-center" data-aos="zoom-in">
              <img src="/backpro.png" alt="Projects Overview" className="w-full h-64 md:h-96 object-cover rounded-2xl mb-8 shadow-2xl border border-white/10" />
              <Link to="/projects" className="btn-gradient inline-block px-10 py-5 rounded-xl font-bold uppercase tracking-widest text-lg shadow-[0_10px_40px_-10px_rgba(59,130,246,0.6)]">
                  View Full Projects
              </Link>
          </div>
      </section>

      <section id="contact" className="py-24 px-6 md:px-24">
          <div className="max-w-5xl mx-auto glass rounded-3xl overflow-hidden grid md:grid-cols-2 shadow-2xl">
              <div className="p-12 bg-gradient-to-br from-red-600/20 to-blue-600/20">
                  <h2 className="text-4xl font-bold mb-8">Get In <span className="text-blue-500">Touch</span></h2>
                  <div className="space-y-6">
                      <div className="flex items-center">
                          <Phone className="w-6 h-6 mr-4 text-red-500" />
                          <a href="https://wa.me/6289602859497" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">0896 0285 9497</a>
                      </div>
                      <div className="flex items-center">
                          <Mail className="w-6 h-6 mr-4 text-blue-500" />
                          <a href="mailto:frizaly1922@gmail.com" className="hover:text-blue-500 transition">frizaly1922@gmail.com</a>
                      </div>
                      <div className="flex items-center">
                          <MapPin className="w-6 h-6 mr-4 text-red-500" />
                          <span>Cileungsi, Bogor, Indonesia</span>
                      </div>
                      <div className="flex items-center">
                          <Instagram className="w-6 h-6 mr-4 text-blue-500" />
                          <a href="https://www.instagram.com/frizalyoo/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
                              @frizalyoo
                          </a>
                      </div>
                  </div>
                  <div className="mt-12">
                      <a href="https://wa.me/6289602859497" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-500 transition px-6 py-4 rounded-xl font-bold">
                          <MessageCircle />
                          <span>WhatsApp Me</span>
                      </a>
                  </div>
              </div>
              <div className="p-12">
                  <form className="space-y-4" onSubmit={(e) => { 
                      e.preventDefault(); 
                      const formData = new FormData(e.currentTarget);
                      const name = formData.get('name');
                      const email = formData.get('email');
                      const message = formData.get('message');
                      window.location.href = `mailto:frizaly1922@gmail.com?subject=Message from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
                  }}>
                      <div>
                          <label className="text-xs uppercase font-bold text-gray-500 mb-2 block">Your Name</label>
                          <input type="text" name="name" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition" />
                      </div>
                      <div>
                          <label className="text-xs uppercase font-bold text-gray-500 mb-2 block">Email Address</label>
                          <input type="email" name="email" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition" />
                      </div>
                      <div>
                          <label className="text-xs uppercase font-bold text-gray-500 mb-2 block">Message</label>
                          <textarea name="message" required rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"></textarea>
                      </div>
                      <button type="submit" className="w-full btn-gradient py-4 rounded-lg font-bold uppercase tracking-widest text-sm">Send Message</button>
                  </form>
              </div>
          </div>
      </section>
    </>
  );
}

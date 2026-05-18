import { useEffect } from 'react';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto mb-4" data-aos="fade-right">
        <Link to="/#projects-section" className="inline-flex items-center text-gray-400 hover:text-white transition group">
          <ArrowLeft className="w-5 h-5 mr-2 transition group-hover:-translate-x-1" />
          <span className="font-medium uppercase tracking-widest text-sm">Back</span>
        </Link>
      </div>
      <h2 className="text-4xl font-bold mb-12 text-center" data-aos="fade-down">
        My <span className="text-red-500">Projects</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        
        <div className="portfolio-card relative overflow-hidden rounded-xl h-80 glass group" data-aos="fade-up">
            <img src="/public_alpa/alpa1.png" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500" alt="Project 1" />
            <div className="absolute inset-x-0 bottom-0 top-auto md:inset-0 bg-gradient-to-t from-black/90 to-transparent md:bg-black/80 flex flex-col justify-end md:justify-center items-center py-6 px-4 text-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-300">
                <h4 className="font-bold text-lg mb-2">Alpha Global</h4>
                <Link to="/project/1" className="btn-gradient px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider inline-block">View Details</Link>
            </div>
        </div>

        <div className="portfolio-card relative overflow-hidden rounded-xl h-80 glass group" data-aos="fade-up" data-aos-delay="100">
            <img src="/public_otot/otot1.png" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500" alt="Project 2" />
            <div className="absolute inset-x-0 bottom-0 top-auto md:inset-0 bg-gradient-to-t from-blue-900/90 to-transparent md:bg-blue-900/80 flex flex-col justify-end md:justify-center items-center py-6 px-4 text-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-300">
                <h4 className="font-bold text-lg mb-2">Projec One Percent</h4>
                <Link to="/project/2" className="btn-gradient px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider inline-block">View Details</Link>
            </div>
        </div>

        <div className="portfolio-card relative overflow-hidden rounded-xl h-80 glass group" data-aos="fade-up" data-aos-delay="200">
            <img src="/public_vip/vip4.png" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500" alt="Project 3" />
            <div className="absolute inset-x-0 bottom-0 top-auto md:inset-0 bg-gradient-to-t from-red-900/90 to-transparent md:bg-red-900/80 flex flex-col justify-end md:justify-center items-center py-6 px-4 text-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-300">
                <h4 className="font-bold text-lg mb-2">VIP Brand</h4>
                <Link to="/project/3" className="btn-gradient px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider inline-block">View Details</Link>
            </div>
        </div>

        <div className="portfolio-card relative overflow-hidden rounded-xl h-80 glass group" data-aos="fade-up" data-aos-delay="300">
            <img src="/public_skin/skin3.png" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500" alt="Project 4" />
            <div className="absolute inset-x-0 bottom-0 top-auto md:inset-0 bg-gradient-to-t from-black/90 to-transparent md:bg-black/80 flex flex-col justify-end md:justify-center items-center py-6 px-4 text-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-300">
                <h4 className="font-bold text-lg mb-2">Skincare</h4>
                <Link to="/project/4" className="btn-gradient px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider inline-block">View Details</Link>
            </div>
        </div>

        <div className="portfolio-card relative overflow-hidden rounded-xl h-80 glass group" data-aos="fade-up" data-aos-delay="400">
            <img src="/public_random/ran11.png" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500" alt="Project 5" />
            <div className="absolute inset-x-0 bottom-0 top-auto md:inset-0 bg-gradient-to-t from-purple-900/90 to-transparent md:bg-purple-900/80 flex flex-col justify-end md:justify-center items-center py-6 px-4 text-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-300">
                <h4 className="font-bold text-lg mb-2">My Random Project</h4>
                <Link to="/project/5" className="btn-gradient px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider inline-block">View Details</Link>
            </div>
        </div>

      </div>
    </div>
  );
}

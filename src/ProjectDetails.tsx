import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import AOS from 'aos';
import { ArrowLeft } from 'lucide-react';

export default function ProjectDetails() {
  const { id } = useParams();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
    window.scrollTo(0, 0);
  }, []);

  const galleries: Record<string, string[]> = {
    '1': [
      '/public_alpa/alpa1.png',
      '/public_alpa/alpa2.png',
      '/public_alpa/alpa3.png',
      '/public_alpa/alpa4.png',
      '/public_alpa/alpa5.png',
      '/public_alpa/alpa6.png',
      '/public_alpa/alpa7.png',
      '/public_alpa/alpa8.png'
    ],
    '2': [
      '/public_otot/otot1.png',
      '/public_otot/otot2.png',
      '/public_otot/otot3.png',
      '/public_otot/otot4.png',
      '/public_otot/otot5.png'
    ],
    '3': [
      '/public_vip/vip1.png',
      '/public_vip/vip2.png',
      '/public_vip/vip3.png',
      '/public_vip/vip4.png',
      '/public_vip/vip5.png',
      '/public_vip/vip6.png'
    ],
    '4': [
      '/public_skin/skin1.png',
      '/public_skin/skin2.png',
      '/public_skin/skin3.png',
      '/public_skin/skin4.png',
      '/public_skin/skin5.png',
      '/public_skin/skin6.png',
      '/public_skin/skin7.png',
      '/public_skin/skin8.png',
      '/public_skin/skin9.png',
      '/public_skin/skin10.png'
    ],
    '5': [
      '/public_random/ran1.png',
      '/public_random/ran2.png',
      '/public_random/ran3.jpg',
      '/public_random/ran4.png',
      '/public_random/ran5.png',
      '/public_random/ran6.png',
      '/public_random/ran7.jpg',
      '/public_random/ran8.jpg',
      '/public_random/ran9.jpg',
      '/public_random/ran10.png',
      '/public_random/ran11.png'
    ]
  };

  const images = id && galleries[id] ? galleries[id] : galleries['1'];

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto mb-8" data-aos="fade-right">
        <Link to="/projects" className="inline-flex items-center text-gray-400 hover:text-white transition group">
          <ArrowLeft className="w-5 h-5 mr-2 transition group-hover:-translate-x-1" />
          <span className="font-medium uppercase tracking-widest text-sm">Back to Projects</span>
        </Link>
      </div>
      
      <h2 className="text-4xl font-bold mb-12 text-center" data-aos="fade-down">
        Project <span className="text-red-500">Gallery</span>
      </h2>

      <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((src, index) => (
          <div key={index} className="break-inside-avoid" data-aos="fade-up" data-aos-delay={(index % 3) * 100}>
            <img 
              src={src} 
              className="w-full rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-white/5" 
              alt={`Gallery photo ${index + 1}`} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

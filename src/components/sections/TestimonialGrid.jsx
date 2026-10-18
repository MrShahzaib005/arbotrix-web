import { Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    content: "The 8-week ROS2 and Nav2 architecture training fundamentally changed how we approach autonomous navigation. The hardware integration phase was seamless.",
    author: "Asad N.",
    role: "Robotics Engineering Intern",
    rating: 5,
  },
  {
    id: 2,
    content: "Deploying the Tera-X chassis for our off-road payload testing saved us months of R&D. The mechanical design and tab-and-slot joints are incredibly robust under heavy load.",
    author: "Saim A.",
    role: "Lead Hardware Engineer",
    rating: 5,
  },
  {
    id: 3,
    content: "The custom LoRa telemetry controllers Arbotrix built give us zero-latency emergency stops across massive distances. Absolute game-changer for field safety.",
    author: "Kashaf N.",
    role: "Operations Director",
    rating: 5,
  }
];

export default function TestimonialGrid() {
  return (
    <section className="relative py-24 bg-slate-50 border-t border-slate-200 overflow-hidden">
      {/* Background blueprint aesthetic */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-black uppercase tracking-widest text-blue-700 mb-6 shadow-sm">
            Proven Results
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-900 uppercase tracking-tighter mb-4">
            Trusted by Engineers
          </h2>
          <p className="text-slate-500 font-medium max-w-xl mx-auto">
            From heavy-payload UGV deployments to foundational autonomous robotics training, see what our partners and students have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 relative group overflow-hidden flex flex-col"
            >
              {/* Subtle top border gradient on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <Quote className="w-10 h-10 text-slate-100 mb-6 group-hover:text-blue-50 transition-colors duration-300" />
              
              <p className="text-slate-700 text-sm leading-relaxed font-medium mb-8 flex-grow">
                "{testimonial.content}"
              </p>
              
              <div className="flex flex-col gap-1 pt-6 border-t border-slate-100 mt-auto">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <h4 className="text-slate-900 font-black uppercase tracking-widest text-[11px]">
                  {testimonial.author}
                </h4>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-[9px]">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
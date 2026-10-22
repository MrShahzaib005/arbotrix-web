import { Quote, Star } from "lucide-react";

export default function TestimonialGrid({ badge, title, subtitle, testimonials = [] }) {
  if (testimonials.length === 0) return null;

  return (
    <section className="relative py-24 bg-slate-50 border-t border-slate-200 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-black uppercase tracking-widest text-blue-700 mb-6 shadow-sm">
            {badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-900 uppercase tracking-tighter mb-4">
            {title}
          </h2>
          <p className="text-slate-500 font-medium max-w-xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 relative group overflow-hidden flex flex-col"
            >
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
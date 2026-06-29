import{Link}from'react-router-dom'
import SectionHeader from'../components/SectionHeader'
const features=[
{icon:'🏛️',title:'Grand Ballroom',desc:'3000 sq ft of elegance seating up to 500 guests with crystal chandeliers.'},
{icon:'🍽️',title:'Catering Excellence',desc:'In-house chefs crafting exquisite multi-cuisine menus for every palate.'},
{icon:'🎵',title:'Premium AV Setup',desc:'State-of-the-art sound, lighting, and projection for unforgettable events.'},
{icon:'🌿',title:'Garden Venue',desc:'Lush outdoor spaces perfect for daytime receptions and ceremonies.'},
{icon:'🅿️',title:'Ample Parking',desc:'Secure parking for 300+ vehicles with valet service available.'},
{icon:'💐',title:'Décor & Florals',desc:'In-house decoration team turning your vision into breathtaking reality.'},
]
const stats=[
{num:'500+',label:'Events Hosted'},
{num:'15+',label:'Years Experience'},
{num:'10k+',label:'Happy Guests'},
{num:'98%',label:'Satisfaction Rate'},
]
const testimonials=[
{name:'Priya & Arjun',event:'Wedding',text:'Regal Halls made our wedding absolutely perfect. Every detail was handled with care.'},
{name:'Mr. Ramesh K.',event:'Corporate Event',text:'Outstanding venue for our annual conference. Professional staff and excellent facilities.'},
{name:'Sunita Sharma',event:'Birthday Celebration',text:'The décor team transformed the hall beautifully. Our guests were truly impressed!'},
]
export default function Home(){
return(
<main>
<section className="min-h-screen flex items-center justify-center relative overflow-hidden"
style={{background:'linear-gradient(135deg,#1c1008 0%,#3d1f0a 50%,#1c1008 100%)'}}>
<div className="absolute inset-0 opacity-10"
style={{backgroundImage:'radial-gradient(circle,#d97706 1px,transparent 1px)',backgroundSize:'40px 40px'}}/>
<div className="relative text-center px-4 max-w-4xl mx-auto pt-16">
<p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">Welcome to Regal Halls</p>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
Where Every<br/><span className="text-amber-400">Celebration</span><br/>Becomes a Memory
</h1>
<p className="text-stone-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
Premium function hall for weddings, receptions, corporate events, and social gatherings.
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<Link to="/contact" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg shadow-amber-900/40">
Book Your Event →
</Link>
<Link to="/gallery" className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-stone-900 px-8 py-4 rounded-full font-semibold text-lg transition-all">
View Gallery
</Link>
</div>
</div>
</section>
<section className="py-16 bg-amber-700">
<div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
{stats.map(s=>(
<div key={s.num}>
<div className="text-4xl font-bold text-white">{s.num}</div>
<div className="text-amber-200 text-sm mt-1">{s.label}</div>
</div>
))}
</div>
</section>
<section className="py-20 bg-white">
<div className="max-w-6xl mx-auto px-4">
<SectionHeader title="Everything You Need" subtitle="World-class amenities to make your event extraordinary"/>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
{features.map(f=>(
<div key={f.title} className="border border-stone-100 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all group">
<div className="text-4xl mb-4">{f.icon}</div>
<h3 className="text-xl font-semibold text-stone-800 mb-2 group-hover:text-amber-700 transition-colors">{f.title}</h3>
<p className="text-stone-500 text-sm leading-relaxed">{f.desc}</p>
</div>
))}
</div>
</div>
</section>
<section className="py-20 bg-stone-50">
<div className="max-w-6xl mx-auto px-4">
<SectionHeader title="What Our Clients Say" subtitle="Real stories from real celebrations"/>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{testimonials.map(t=>(
<div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
<p className="text-amber-500 text-2xl mb-3">❝</p>
<p className="text-stone-600 text-sm leading-relaxed mb-4">{t.text}</p>
<div>
<p className="font-semibold text-stone-800">{t.name}</p>
<p className="text-xs text-amber-600">{t.event}</p>
</div>
</div>
))}
</div>
</div>
</section>
<section className="py-20 bg-stone-900 text-center px-4">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Plan Your Event?</h2>
<p className="text-stone-400 mb-8 max-w-lg mx-auto">Let us help you create an unforgettable experience. Contact us today for availability and pricing.</p>
<Link to="/contact" className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 inline-block">
Get in Touch →
</Link>
</section>
</main>
)
}

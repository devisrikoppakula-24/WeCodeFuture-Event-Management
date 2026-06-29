import SectionHeader from'../components/SectionHeader'
import{Link}from'react-router-dom'
const packages=[
{name:'Silver',price:'₹50,000',guests:'Up to 100',color:'bg-stone-100',badge:'',features:['Basic Hall (1 floor)','Standard Lighting','Catering for 100','Parking for 50','2 hrs setup time']},
{name:'Gold',price:'₹1,20,000',guests:'Up to 300',color:'bg-amber-50',badge:'Most Popular',features:['Grand Ballroom','Premium Lighting & AV','Catering for 300','Valet Parking','Décor Package Included','6 hrs setup time']},
{name:'Platinum',price:'₹2,50,000',guests:'Up to 500',color:'bg-stone-900',badge:'Premium',features:['Full Venue Access','Custom Lighting Design','Catering + Bar Setup','Valet for 300 cars','Full Floral Décor','Photography Coordination','24hr dedicated coordinator']},
]
const events=[
{icon:'💍',name:'Weddings & Receptions'},
{icon:'🎂',name:'Birthday Celebrations'},
{icon:'💼',name:'Corporate Events'},
{icon:'🎓',name:'Graduations'},
{icon:'💃',name:'Sangeet & Mehendi'},
{icon:'🤝',name:'Conferences & Seminars'},
{icon:'🍰',name:'Baby Showers'},
{icon:'🏆',name:'Award Ceremonies'},
]
export default function Services(){
return(
<main className="pt-16">
<section className="py-20 bg-gradient-to-br from-stone-900 to-stone-800 text-center px-4">
<h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
<p className="text-stone-400 max-w-xl mx-auto">Tailored packages for every occasion and budget</p>
</section>
<section className="py-20 bg-white">
<div className="max-w-6xl mx-auto px-4">
<SectionHeader title="Event Types We Host" subtitle="From intimate gatherings to grand celebrations"/>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
{events.map(e=>(
<div key={e.name} className="text-center p-5 rounded-2xl border border-stone-100 hover:border-amber-300 hover:shadow-md transition-all">
<div className="text-4xl mb-2">{e.icon}</div>
<p className="text-sm font-medium text-stone-700">{e.name}</p>
</div>
))}
</div>
</div>
</section>
<section className="py-20 bg-stone-50">
<div className="max-w-6xl mx-auto px-4">
<SectionHeader title="Pricing Packages" subtitle="Transparent pricing with no hidden charges"/>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
{packages.map(p=>(
<div key={p.name} className={`rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow relative ${p.color}`}>
{p.badge&&<span className="absolute top-4 right-4 bg-amber-600 text-white text-xs px-3 py-1 rounded-full">{p.badge}</span>}
<h3 className={`text-2xl font-bold mb-1 ${p.name==='Platinum'?'text-white':'text-stone-800'}`}>{p.name}</h3>
<p className={`text-3xl font-bold text-amber-600 mb-1`}>{p.price}</p>
<p className={`text-sm mb-6 ${p.name==='Platinum'?'text-stone-400':'text-stone-500'}`}>{p.guests} guests</p>
<ul className="space-y-2">
{p.features.map(f=>(
<li key={f} className={`text-sm flex items-center gap-2 ${p.name==='Platinum'?'text-stone-300':'text-stone-600'}`}>
<span className="text-amber-500">✓</span>{f}
</li>
))}
</ul>
<Link to="/contact" className="mt-6 block text-center bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-full text-sm font-semibold transition-colors">
Book This Package
</Link>
</div>
))}
</div>
</div>
</section>
</main>
)
}

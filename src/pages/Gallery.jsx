import{useState}from'react'
import SectionHeader from'../components/SectionHeader'
const cats=['All','Weddings','Corporate','Birthday','Décor']
const items=[
{cat:'Weddings',label:'Grand Wedding Setup',bg:'bg-rose-200',emoji:'💍'},
{cat:'Weddings',label:'Reception Hall',bg:'bg-pink-200',emoji:'🌹'},
{cat:'Weddings',label:'Floral Stage',bg:'bg-red-100',emoji:'💐'},
{cat:'Corporate',label:'Conference Hall',bg:'bg-blue-200',emoji:'💼'},
{cat:'Corporate',label:'Award Night',bg:'bg-indigo-200',emoji:'🏆'},
{cat:'Corporate',label:'Product Launch',bg:'bg-sky-200',emoji:'🎯'},
{cat:'Birthday',label:'Kids Birthday',bg:'bg-yellow-200',emoji:'🎂'},
{cat:'Birthday',label:'Surprise Party',bg:'bg-orange-200',emoji:'🎉'},
{cat:'Birthday',label:'Milestone 50th',bg:'bg-lime-200',emoji:'🥳'},
{cat:'Décor',label:'Luxury Table Setup',bg:'bg-purple-200',emoji:'🕯️'},
{cat:'Décor',label:'Mandap Decoration',bg:'bg-amber-200',emoji:'✨'},
{cat:'Décor',label:'Balloon Arch',bg:'bg-teal-200',emoji:'🎈'},
]
export default function Gallery(){
const[active,setActive]=useState('All')
const filtered=active==='All'?items:items.filter(i=>i.cat===active)
return(
<main className="pt-16">
<section className="py-20 bg-gradient-to-br from-stone-900 to-stone-800 text-center px-4">
<h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Gallery</h1>
<p className="text-stone-400">A glimpse of the beautiful events we've hosted</p>
</section>
<section className="py-20 bg-white">
<div className="max-w-6xl mx-auto px-4">
<SectionHeader title="Event Highlights" subtitle="Browse through our finest moments"/>
<div className="flex flex-wrap justify-center gap-3 mb-10">
{cats.map(c=>(
<button key={c} onClick={()=>setActive(c)}
className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${active===c?'bg-amber-600 text-white':'bg-stone-100 text-stone-600 hover:bg-amber-100'}`}>
{c}
</button>
))}
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
{filtered.map((item,i)=>(
<div key={i} className={`${item.bg} rounded-2xl aspect-square flex flex-col items-center justify-center hover:scale-105 transition-transform cursor-pointer shadow-sm`}>
<span className="text-5xl mb-2">{item.emoji}</span>
<p className="text-xs font-semibold text-stone-700 text-center px-2">{item.label}</p>
<span className="text-xs text-stone-500 mt-1">{item.cat}</span>
</div>
))}
</div>
</div>
</section>
</main>
)
}

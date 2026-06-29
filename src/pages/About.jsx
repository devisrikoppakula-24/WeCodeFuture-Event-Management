import SectionHeader from'../components/SectionHeader'
const team=[
{name:'Rajan Mehta',role:'Founder & Director',emoji:'👨‍💼'},
{name:'Priya Nair',role:'Event Coordinator',emoji:'👩‍💼'},
{name:'Aakash Patel',role:'Head Chef',emoji:'👨‍🍳'},
{name:'Divya Rao',role:'Décor Specialist',emoji:'👩‍🎨'},
]
const values=[
{icon:'💎',title:'Excellence',desc:'We never compromise on quality, from décor to catering.'},
{icon:'🤝',title:'Trust',desc:'Transparent pricing and honest communication always.'},
{icon:'❤️',title:'Personal Touch',desc:'Every event is treated as our own celebration.'},
{icon:'🌱',title:'Sustainability',desc:'Eco-friendly practices integrated into every event.'},
]
export default function About(){
return(
<main className="pt-16">
<section className="py-20 bg-gradient-to-br from-stone-900 to-stone-800 text-center px-4">
<h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
<p className="text-stone-400">The story behind Regal Halls</p>
</section>
<section className="py-20 bg-white">
<div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl font-bold text-stone-800 mb-4">A Legacy of Celebrations</h2>
<p className="text-stone-500 leading-relaxed mb-4">
Founded in 2009, Regal Halls has been the premier destination for unforgettable events in the city. What started as a single hall has grown into a full-service event venue capable of hosting 500+ guests.
</p>
<p className="text-stone-500 leading-relaxed mb-4">
Our team of dedicated professionals ensures that every event — whether an intimate birthday or a grand wedding — is executed with flawless precision and heartfelt care.
</p>
<div className="flex gap-6 mt-6">
<div className="text-center">
<p className="text-3xl font-bold text-amber-600">15+</p>
<p className="text-sm text-stone-500">Years</p>
</div>
<div className="text-center">
<p className="text-3xl font-bold text-amber-600">500+</p>
<p className="text-sm text-stone-500">Events</p>
</div>
<div className="text-center">
<p className="text-3xl font-bold text-amber-600">50+</p>
<p className="text-sm text-stone-500">Staff</p>
</div>
</div>
</div>
<div className="bg-amber-50 rounded-3xl p-10 text-center">
<div className="text-8xl mb-4">🏛️</div>
<h3 className="text-xl font-bold text-stone-800">Regal Halls</h3>
<p className="text-stone-500 text-sm mt-2">Est. 2009 · 123 Grand Avenue</p>
<p className="text-amber-600 font-semibold mt-4 italic">"Your moments, our pride."</p>
</div>
</div>
</section>
<section className="py-20 bg-stone-50">
<div className="max-w-6xl mx-auto px-4">
<SectionHeader title="Our Values" subtitle="Principles that guide everything we do"/>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
{values.map(v=>(
<div key={v.title} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
<div className="text-4xl mb-3">{v.icon}</div>
<h3 className="font-bold text-stone-800 mb-2">{v.title}</h3>
<p className="text-stone-500 text-sm">{v.desc}</p>
</div>
))}
</div>
</div>
</section>
<section className="py-20 bg-white">
<div className="max-w-5xl mx-auto px-4">
<SectionHeader title="Meet the Team" subtitle="The people who make magic happen"/>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
{team.map(t=>(
<div key={t.name} className="text-center">
<div className="w-24 h-24 rounded-full bg-amber-100 flex items-center justify-center text-5xl mx-auto mb-3">
{t.emoji}
</div>
<p className="font-semibold text-stone-800">{t.name}</p>
<p className="text-xs text-amber-600">{t.role}</p>
</div>
))}
</div>
</div>
</section>
</main>
)
}

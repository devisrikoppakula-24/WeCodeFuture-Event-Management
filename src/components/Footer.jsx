import{Link}from'react-router-dom'
export default function Footer(){
return(
<footer className="bg-stone-900 text-stone-300 pt-12 pb-6">
<div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
<div>
<h3 className="text-white text-xl mb-3">✦ Regal Halls</h3>
<p className="text-sm leading-relaxed">Creating timeless memories in breathtaking spaces. Your dream event, our expertise.</p>
</div>
<div>
<h4 className="text-white font-semibold mb-3">Quick Links</h4>
<ul className="space-y-2 text-sm">
{[['/',('Home')],['/services','Services'],['/gallery','Gallery'],['/about','About'],['/contact','Contact']].map(([path,label])=>(
<li key={path}><Link to={path} className="hover:text-amber-400 transition-colors">{label}</Link></li>
))}
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-3">Contact</h4>
<p className="text-sm leading-loose">
📍 123 Grand Avenue, City<br/>
📞 +91 98765 43210<br/>
✉️ info@regalhalls.com<br/>
🕐 Mon–Sun: 9AM – 9PM
</p>
</div>
</div>
<div className="max-w-6xl mx-auto px-4 mt-8 pt-4 border-t border-stone-700 text-center text-xs text-stone-500">
© 2025 Regal Halls. All rights reserved.
</div>
</footer>
)
}

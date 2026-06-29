import{useState}from'react'
import{Link,useLocation}from'react-router-dom'
const links=[['/',('Home')],['/services','Services'],['/gallery','Gallery'],['/about','About'],['/contact','Contact']]
export default function Navbar(){
const[open,setOpen]=useState(false)
const{pathname}=useLocation()
return(
<nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur shadow-sm">
<div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
<Link to="/" className="text-2xl font-bold text-amber-700" style={{fontFamily:'Playfair Display,serif'}}>
✦ Regal Halls
</Link>
<ul className="hidden md:flex gap-8">
{links.map(([path,label])=>(
<li key={path}>
<Link to={path} className={`font-medium transition-colors ${pathname===path?'text-amber-700 border-b-2 border-amber-700':'text-gray-600 hover:text-amber-700'}`}>
{label}
</Link>
</li>
))}
</ul>
<Link to="/contact" className="hidden md:inline-block bg-amber-700 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-amber-800 transition-colors">
Book Now
</Link>
<button className="md:hidden text-gray-700 text-2xl" onClick={()=>setOpen(!open)}>
{open?'✕':'☰'}
</button>
</div>
{open&&(
<div className="md:hidden bg-white border-t px-4 pb-4">
{links.map(([path,label])=>(
<Link key={path} to={path} onClick={()=>setOpen(false)}
className={`block py-2 font-medium ${pathname===path?'text-amber-700':'text-gray-700'}`}>
{label}
</Link>
))}
<Link to="/contact" onClick={()=>setOpen(false)}
className="block mt-2 bg-amber-700 text-white text-center px-4 py-2 rounded-full text-sm font-semibold">
Book Now
</Link>
</div>
)}
</nav>
)
}

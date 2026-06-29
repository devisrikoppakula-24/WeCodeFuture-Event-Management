import{useState}from'react'
import SectionHeader from'../components/SectionHeader'
export default function Contact(){
const[form,setForm]=useState({name:'',email:'',phone:'',date:'',event:'',guests:'',message:''})
const[sent,setSent]=useState(false)
const handleChange=e=>setForm({...form,[e.target.name]:e.target.value})
const handleSubmit=e=>{
e.preventDefault()
setSent(true)
}
return(
<main className="pt-16">
<section className="py-20 bg-gradient-to-br from-stone-900 to-stone-800 text-center px-4">
<h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Book Your Event</h1>
<p className="text-stone-400">Fill the form below and we'll get back to you within 24 hours</p>
</section>
<section className="py-20 bg-white">
<div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12">
<div>
<SectionHeader title="Get In Touch" subtitle=""/>
{sent?(
<div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
<div className="text-5xl mb-3">✅</div>
<h3 className="text-xl font-bold text-green-800 mb-2">Enquiry Sent!</h3>
<p className="text-green-600">We'll contact you within 24 hours to confirm your booking.</p>
<button onClick={()=>setSent(false)} className="mt-4 text-sm text-stone-500 underline">Send another enquiry</button>
</div>
):(
<form onSubmit={handleSubmit} className="space-y-4">
{[
{name:'name',placeholder:'Your Full Name',type:'text'},
{name:'email',placeholder:'Email Address',type:'email'},
{name:'phone',placeholder:'Phone Number',type:'tel'},
{name:'date',placeholder:'Event Date',type:'date'},
].map(f=>(
<input key={f.name} name={f.name} type={f.type} placeholder={f.placeholder} required
value={form[f.name]} onChange={handleChange}
className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-700 focus:outline-none focus:border-amber-400 transition-colors"/>
))}
<select name="event" required value={form.event} onChange={handleChange}
className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-700 focus:outline-none focus:border-amber-400 transition-colors">
<option value="">Select Event Type</option>
{['Wedding','Reception','Corporate Event','Birthday','Sangeet','Conference','Other'].map(e=>(
<option key={e}>{e}</option>
))}
</select>
<select name="guests" required value={form.guests} onChange={handleChange}
className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-700 focus:outline-none focus:border-amber-400 transition-colors">
<option value="">Expected Guests</option>
{['1–50','51–100','101–200','201–300','301–500','500+'].map(g=>(
<option key={g}>{g}</option>
))}
</select>
<textarea name="message" placeholder="Any special requirements or questions..." rows={3}
value={form.message} onChange={handleChange}
className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-700 focus:outline-none focus:border-amber-400 transition-colors resize-none"/>
<button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-xl font-semibold transition-colors">
Send Enquiry →
</button>
</form>
)}
</div>
<div>
<div className="bg-stone-50 rounded-2xl p-6 mb-6">
<h3 className="font-bold text-stone-800 mb-4 text-lg">Contact Information</h3>
<div className="space-y-4 text-stone-600 text-sm">
<p>📍 <span className="font-medium">Address:</span> 123 Grand Avenue, City – 500001</p>
<p>📞 <span className="font-medium">Phone:</span> +91 98765 43210</p>
<p>✉️ <span className="font-medium">Email:</span> info@regalhalls.com</p>
<p>🕐 <span className="font-medium">Hours:</span> Mon–Sun, 9AM – 9PM</p>
</div>
</div>
<div className="bg-stone-50 rounded-2xl p-6">
<h3 className="font-bold text-stone-800 mb-4 text-lg">Why Book With Us?</h3>
<ul className="space-y-3 text-sm text-stone-600">
{['Free site visit before booking','Flexible payment plans','Dedicated event coordinator','Cancellation policy available','In-house catering & décor'].map(item=>(
<li key={item} className="flex items-center gap-2">
<span className="text-amber-500 font-bold">✓</span>{item}
</li>
))}
</ul>
</div>
</div>
</div>
</section>
</main>
)
}

export default function SectionHeader({title,subtitle}){
return(
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">{title}</h2>
<p className="text-stone-500 max-w-xl mx-auto">{subtitle}</p>
<div className="mt-4 w-16 h-1 bg-amber-600 mx-auto rounded-full"/>
</div>
)
}

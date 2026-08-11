const products=[
{name:"Auriculares Bluetooth A6S",category:"Audio",price:10000,image:"/a6s-1.jpg",description:"Auriculares inalámbricos con estuche de carga y controles táctiles."},
{name:"AirPods Pro 2",category:"Audio",price:null,image:"/placeholder.svg",description:"Consultar disponibilidad y precio."},
{name:"JBL inalámbricos con vincha",category:"Audio",price:null,image:"/placeholder.svg",description:"Auriculares inalámbricos con vincha. Consultar disponibilidad."},
{name:"Cables USB-C y Lightning",category:"Carga",price:null,image:"/placeholder.svg",description:"Cables y accesorios de carga. Consultar modelos y precios."},
{name:"Vasos térmicos",category:"Accesorios",price:null,image:"/placeholder.svg",description:"Vasos térmicos con indicador de temperatura. Consultar modelos y precios."}];
const whatsappNumber="5490000000000";
const money=v=>v?`$${v.toLocaleString("es-AR")}`:"Consultar";
const wa=p=>`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola Kairós, me interesa el producto "${p.name}". ¿Sigue disponible?`)}`;
export default function Home(){return <main>
<header className="hero"><div className="hero-inner"><div className="brand">Kairós</div><p className="eyebrow">TECNOLOGÍA · ACCESORIOS · ESTILO</p><h1>Encontrá lo que buscás.</h1><p className="subtitle">Un catálogo simple, claro y directo. Elegí tu producto y consultá por WhatsApp.</p><a className="hero-button" href="#catalogo">Ver catálogo</a></div></header>
<section id="catalogo" className="catalog"><div className="section-head"><div><p className="eyebrow">CATÁLOGO</p><h2>Productos destacados</h2></div><span>{products.length} productos</span></div>
<div className="grid">{products.map(p=><article className="card" key={p.name}><div className="photo"><img src={p.image} alt={p.name}/></div><div className="card-body"><p className="category">{p.category}</p><h3>{p.name}</h3><p className="description">{p.description}</p><div className="bottom"><strong>{money(p.price)}</strong><a href={wa(p)} target="_blank" rel="noreferrer">WhatsApp</a></div></div></article>)}</div></section>
<footer><strong>Kairós</strong><span>Catálogo online</span></footer>
<a className="floating-whatsapp" href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola Kairós, quiero consultar por un producto.")}`} target="_blank" rel="noreferrer">WhatsApp</a>
</main>}
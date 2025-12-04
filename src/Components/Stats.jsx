const products = [
  { img: "/p1.jpg", name: "Camisa de Seda Branca", price: "R$120,00" },
  { img: "/p2.jpg", name: "Vestido Longo Estampado", price: "R$175,00" },
  { img: "/p3.jpg", name: "Vestido Longo Vermelho", price: "R$150,00" },
  { img: "/p4.jpg", name: "Vestido Longo Creme", price: "R$155,00" },
  { img: "/p5.jpg", name: "Vestido Amarelo Florido", price: "R$159,00" },
  { img: "/p6.jpg", name: "Shorts Jeans Simples", price: "R$29,00" },
  { img: "/p7.jpg", name: "Calça Skinny", price: "R$49,00" },
  { img: "/p8.jpg", name: "Saia Jeans Reta", price: "R$69,00" },
];
 
function Stats() {
   return (
    <section className="products-section">
      <h2>CONFIRA NOSSAS NOVIDADES</h2>
 
      <div className="products-grid">
        {products.map((p, i) => (
          <div key={i} className="product-card">
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.price}</p>
            <button>Comprar</button>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Stats;
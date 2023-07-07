import clientPromise from "../../../lib/mongodb";

async function getProducts( type ) {
   try {
       const client = await clientPromise;
       const db = client.db("women");

       const products = await db
           .collection("products")
           .find({ category: type })
           .toArray();
           
        return products
   } catch (e) {
       console.error(e);
   }
}

export default async function Page({ params }) {
    let productData = getProducts(params.id)
    let [products] = await Promise.all([productData])

    let category = params.id.replace(/-|and/g, item => item === '-' ? ' ' : '&')

    return (
        <>
            <h2>{category.toUpperCase()} FOR WOMEN</h2>
            <ul>{Array.from(products).map((item,i) => {
                return (
                    <div className="card" style={{width: 18 + "rem"}}>
                        <img src={item.img} className="card-img-top" alt={`Picture of Women's ${item.title}`}/>
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">${item.price}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>)
            })}</ul>
        </>
    )
}
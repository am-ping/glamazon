import clientPromise from "../../../lib/mongodb";
import Image from 'next/image'

export async function getProducts( type ) {
   try {
       const client = await clientPromise;
       const db = client.db("men");

       const products = await db
           .collection("products")
           .find({ category: type })
           .toArray();
           
        return products
   } catch (e) {
       console.error(e);
   }
}

// href={`/product/${item._id}`} 

export default async function Page({ params }) {
    let productData = getProducts(params.id)
    let [products] = await Promise.all([productData])

    let category = params.id.replace(/-|and/g, item => item === '-' ? ' ' : '&')

    return (
        <>
            <h2 className="display-3 mb-4">{category.toUpperCase()} FOR MEN</h2>
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-4">{Array.from(products).map(item => {
                return (
                    <>
                        <div key={item._id} className="col" data-bs-toggle="modal" data-bs-target={`#productModal${item._id}`}>
                            <div className="card h-100">
                                <Image src={item.img} className="card-img-top h-100" alt={`Picture of Men's ${item.title}`}/>
                                <div className="card-body">
                                    <h6 className="card-title lead">{item.title}</h6>
                                    <p className="card-title lead">${item.price}</p>
                                    <div>{item.colors.map((color,id) => {
                                        return <span key={id} className="colorC" style={{backgroundColor:color}}></span>
                                    })}</div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id={`productModal${item._id}`} tabIndex={-1} aria-labelledby="productModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h2 className="modal-title display-6" id="productModalLabel">Men&apos;s {item.title}</h2>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body card" style={{maxWidth: 540 + "px"}}>
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <Image src={item.img} className="img-fluid rounded" alt={`Picture of Men's ${item.title}`} />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body mx-3">
                                                    <h3 className="display-6 card-title">{item.title}</h3>
                                                    <p className="card-title lead">${item.price}</p>

                                                    <div className="grid gap-3">{item.colors.map((color,id) => {
                                                        return (
                                                            <>
                                                                <input type="radio" key={id} className="btn-check" name="colors" id={`${color}${item._id}`} autoComplete="off" />
                                                                <label className="btn btn-outline-secondary colors colorS" style={{backgroundColor:color}} for={`${color}${item._id}`}></label>
                                                            </>
                                                        )
                                                    })}</div>

                                                    <p className="card-text">Sizes</p>
                                                    <div className="d-flex justify-content-between">

                                                        <input type="radio" className="btn-check" name="options" id={`xsmall${item._id}`} autoComplete="off" />
                                                        <label className="btn btn-outline-secondary options" for={`xsmall${item._id}`}>X-Small</label>

                                                        <input type="radio" className="btn-check" name="options" id={`small${item._id}`} autoComplete="off" />
                                                        <label className="btn btn-outline-secondary options" for={`small${item._id}`}>Small</label>

                                                        <input type="radio" className="btn-check" name="options" id={`medium${item._id}`} autoComplete="off" />
                                                        <label className="btn btn-outline-secondary options" for={`medium${item._id}`}>Medium</label>

                                                        <input type="radio" className="btn-check" name="options" id={`large${item._id}`} autoComplete="off" />
                                                        <label className="btn btn-outline-secondary options" for={`large${item._id}`}>Large</label>

                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>)
            })}</div>
        </>
    )
}
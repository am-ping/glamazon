// import axios from 'axios';

// export default function ProductList({ product }) {
//     const options = {
//         method: 'GET',
//         url: `https://google-data-scraper.p.rapidapi.com/search/shop/${'shirt'}`,
//         params: {api_key: process.env.NEXT_PUBLIC_API_KEY},
//         headers: {
//           'X-RapidAPI-Key': 'ddec3f077cmsh771cd7137c7324fp14e8abjsne3d5ff2e4a6a',
//           'X-RapidAPI-Host': 'google-data-scraper.p.rapidapi.com'
//         }
//     };
    
//     axios.request(options).then(function (response) {
//         console.log(response.data.shopping_results.slice(0,5)[0]);
//     }).catch(function (error) {
//         console.error(error);
//     });

//     return (
//         <p>{res}</p>
//     )
// }

export default function Page({ params }) {
    let category = params.id.replace(/-|and/g, item => item === '-' ? ' ' : '&')
    return (
        <>
            <h2>{category.toUpperCase()} FOR MEN</h2>
            {/* <ProductList product={'mens ' + category} /> */}
        </>
    )
}

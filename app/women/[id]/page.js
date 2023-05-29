export default function Page({ params }) {
    let category = params.id.replace(/-|and/g, item => item === '-' ? ' ' : '&')
    return <p>{category.toUpperCase()} FOR WOMEN</p>
}

// import axios from 'axios';

// function ProductList() {
//     const options = {
//         method: 'GET',
//         url: 'https://google-data-scraper.p.rapidapi.com/search/shop/shirt',
//         params: {api_key: process.env.NEXT_PUBLIC_API_KEY},
//         headers: {
//           'X-RapidAPI-Key': 'ddec3f077cmsh771cd7137c7324fp14e8abjsne3d5ff2e4a6a',
//           'X-RapidAPI-Host': 'google-data-scraper.p.rapidapi.com'
//         }
//     };
      
//     axios.request(options).then(function (response) {
//         console.log(response.data.shopping_results);
//     }).catch(function (error) {
//         console.error(error);
//     });
// }

// export default ProductList;
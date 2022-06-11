const products = [
    // { 
    //     id: '1',  name: 'iphone 12',  price: 1000, category: 'celular', 
    //     img:'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020.jpg.og.jpg?202108061040', 
    //     stock: 25, 
    //     description:'Apple iPhone 12,incluye caja, cargador y garantia oficial Apple por 12 meses'
    // },
    // { id: '2',  name: 'samsung s21', price: 800, category: 'celular', 
    //  img:'https://cdn.pocket-lint.com/r/s/1200x630/assets/images/155378-phones-review-hands-on-samsung-galaxy-s21-ultra-image1-luae09ici4.JPG',
    //   stock: 16, description:'Dispositivo de Alta Gama, ultimo lanzamiento de la Marca Samsung'},
    // { id: '3', name: 'iPad Apple 8va Gen', price: 1200, category: 'tablet', 
    // img:'https://medias.musimundo.com/medias/00406046-143516-143516-01-143516-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MjI1MnxpbWFnZS9qcGVnfGhjMC9oYWMvMTAyODM0OTc0NTU2NDYvMDA0MDYwNDYtMTQzNTE2LTE0MzUxNl8wMS0xNDM1MTZfMDEuanBnX3NpemU1MTV8MzA0NmMzNGFhZjUwMDY2YjY5MjU0MjlkMGJlYWMxODAxZjE5ODJhZmJlOTczZThmZjE2NTQxMjU5NjE2OTA4Yw', 
    // stock: 10, description:'iPad de 8va generacion, incluye caja, cargador y garantia oficial Apple por 12 meses'},
    // {id:'4',name:'Auricular Inalámbrico',price:100,category: 'accesorio-computacion', 
    // img:'https://http2.mlstatic.com/D_NQ_NP_2X_933418-MLA40865317836_022020-F.webp', stock:15,description:'Auriculares tipo vincha, 30hr de Reproducción'},
    // {id:'5',name:'Mouse Inalámbrico',price:200, category: '
    // img:'https://http2.mlstatic.com/D_NQ_NP_2X_967723-MLA45141065269_032021-F.webp', stock:15,description:'Mouse inalámbrico de excelente calidad, lo mejor de Logitech'},
    // {id:'6',name:'Teclado Mecánico',price:300, category: 'accesorio-computacion',img:'https://http2.mlstatic.com/D_NQ_NP_2X_935185-MLA46504064329_062021-F.webp', stock:15,description:'Teclado mecánico de gran performance'},
    // {id:'7',name:'Camara Web Logitech',price:500,category: 'accesorio-computacion', img:'https://http2.mlstatic.com/D_NQ_NP_2X_613460-MLA49274276309_032022-F.webp', stock:15,description:'Camara web de 720px con 1.2mpx'},
    // {id:'8',name:'HHD',price:900,category: 'accesorio-computacion', img:'https://http2.mlstatic.com/D_NQ_NP_2X_891138-MLA41014284929_032020-F.webp', stock:15,description:'Disco rigido de gran capacidad'},
    // {id:'9',name:'SSD Kingston',price:1000,category: 'accesorio-computacion', 
    // img:'https://http2.mlstatic.com/D_NQ_NP_670396-MLA48158690358_112021-O.webp',
    //  stock:15,description:'Disco de almacenamiento de baja capacidad pero alto rendimiento'},
    //  { id: '10', name: 'Samsung Galaxy Tab A7 Lite SM-T220', price: 2900, category: 'tablet', 
    //  img:'https://http2.mlstatic.com/D_NQ_NP_2X_909806-MLA47146793018_082021-F.webp', 
    //  stock: 15, description:'Esta tablet Samsung es la compañera ideal, con capacidad de sobra para cada una de tus actividades. El diseño delgado, compacto y portátil, con facilidad para sostener en una mano, lo convierte en una combinación perfecta de rendimiento y versatilidad.'},
    //  { id: '11', name: 'Xiaomi Pad 5', price: 99000, category: 'tablet', 
    //  img:'https://http2.mlstatic.com/D_NQ_NP_2X_924929-MLA48591245172_122021-F.webp', 
    //  stock: 15, description:' Su diseño delgado, compacto y portátil es la combinación perfecta de rendimiento y versatilidad'}
    //  ,{id:'12',name:'Samsung Galaxy A52 ',price:10000,category: 'celular', 
    //  img:'https://http2.mlstatic.com/D_Q_NP_927874-MLA45401334658_032021-AB.webp',
    //   stock:15,description:'Fotografía profesional en tu bolsillo'},

    //   {id:'13',name:'Funda Sumergible ',price:10000,category: 'accesorio-celular', 
    //  img:'https://http2.mlstatic.com/D_NQ_NP_2X_670940-MLA49330430326_032022-F.webp',
    //   stock:15,description:'FUNDA SUMERGIBLE PROTECTORA AGUA WATERPROOF BOLSA DE CELULAR'},

    //   {id:'14',name:'Soporte Sopapa Master ',price:1800,category: 'accesorio-celular', 
    //   img:'https://http2.mlstatic.com/D_NQ_NP_2X_620068-MLA47935184826_102021-F.webp',
    //    stock:15,description:'Porta Celular Auto Soporte Sopapa Y Ventilacion Holder 2en1'},
    ]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getItem = (id)=>{
 
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.find(prod=> prod.id === id ))
        }, 500)
    })
}
export const getProductsByCategory = (categoryId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        },500)
    })
}
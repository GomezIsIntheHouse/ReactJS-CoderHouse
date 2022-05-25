const products = [
    { 
        id: '1',  name: 'iphone 12',  price: 1000, category: 'celular', 
        img:'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020.jpg.og.jpg?202108061040', 
        stock: 25, 
        description:'Descripcion de Iphone 12'
    },
    { id: '2',  name: 'samsung s21', price: 800, category: 'celular', 
     img:'https://cdn.pocket-lint.com/r/s/1200x630/assets/images/155378-phones-review-hands-on-samsung-galaxy-s21-ultra-image1-luae09ici4.JPG',
      stock: 16, description:'Descripcion de Samsung s21'},
    { id: '3', name: 'Ipad 8va', price: 1200, category: 'tablet', 
    img:'https://medias.musimundo.com/medias/00406046-143516-143516-01-143516-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MjI1MnxpbWFnZS9qcGVnfGhjMC9oYWMvMTAyODM0OTc0NTU2NDYvMDA0MDYwNDYtMTQzNTE2LTE0MzUxNl8wMS0xNDM1MTZfMDEuanBnX3NpemU1MTV8MzA0NmMzNGFhZjUwMDY2YjY5MjU0MjlkMGJlYWMxODAxZjE5ODJhZmJlOTczZThmZjE2NTQxMjU5NjE2OTA4Yw', 
    stock: 10, description:'Descripcion de Ipad'},
    {id:4,name:'Auricular',price:100,category: 'Accesorio Celular', 
    img:'https://cdn.pocket-lint.com/r/s/1200x630/assets/images/155378-phones-review-hands-on-samsung-galaxy-s21-ultra-image1-luae09ici4.JPG', stock:15,description:'Descripcion de auricular'},
    {id:5,name:'Mouse',price:200, category: 'Accesorio Computadora',img:'https://cdn.pocket-lint.com/r/s/1200x630/assets/images/155378-phones-review-hands-on-samsung-galaxy-s21-ultra-image1-luae09ici4.JPG', stock:15,description:'Descripcion de mouses'},
    {id:6,name:'Teclado',price:300, category: 'Accesorio Computadora',img:'https://cdn.pocket-lint.com/r/s/1200x630/assets/images/155378-phones-review-hands-on-samsung-galaxy-s21-ultra-image1-luae09ici4.JPG', stock:15,description:'Descripcion de teclado'},
    {id:7,name:'Camara Web',price:500,category: 'Accesorio Computadora', img:'https://cdn.pocket-lint.com/r/s/1200x630/assets/images/155378-phones-review-hands-on-samsung-galaxy-s21-ultra-image1-luae09ici4.JPG', stock:15,description:'Descripcion de camara'},
    {id:8,name:'HHD',price:900,category: 'Componente Computadora', img:'https://cdn.pocket-lint.com/r/s/1200x630/assets/images/155378-phones-review-hands-on-samsung-galaxy-s21-ultra-image1-luae09ici4.JPG', stock:15,description:'Descripcion de hhd'},
    {id:9,name:'SSD',price:1000,category: 'Componente Computadora', 
    img:'https://http2.mlstatic.com/D_NQ_NP_670396-MLA48158690358_112021-O.webp',
     stock:15,description:'Descripcion de ssd'},
    
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}
const products = [
    {
        id: 1,
        name: "Zapatos Nike",
        productType: "Zapatos deportivos",
        price: 50000,
        rating: 4,
        image: 
            "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/idatfhqf6nsjwhppatrv/nike-air-skylon-2-white-amp-grand-purple-release-date.jpg",
        description: 
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        size: 36,
    },
    {
        id: 2,
        name: "Chaqueta de cuero",
        productType: "Chaqueta",
        price: 70000,
        rating: 5,
        image: 
            "https://bosico.vteximg.com.br/arquivos/ids/1660846-345-345/Chaqueta-CQ8YNG-NEGRO_1.jpg?v=637803101274330000",
        description: 
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        size: "L"
    },
    {
        id: 3,
        name: "Jeans bota campana",
        productType: "Jeans",
        price: 40000,
        rating: 4,
        image: 
            "https://pasajecali.com/wp-content/uploads/2021/02/IMG-20210212-WA0036.jpg",
        description: 
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        size: "36"
    },
    {
        id: 4,
        name: "Blusa cuello bandeja",
        productType: "blusas",
        price: 35000,
        rating: 5,
        image: 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNGyJgxA11yeZ0lCjdD0r3nyfvyfrCuVrizw&usqp=CAU",
        description: 
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        size: "M"
    },
    {
        id: 5,
        name: "Zapatos Nike",
        productType: "Zapatos deportivos",
        price: 50000,
        rating: 4,
        image: 
            "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/idatfhqf6nsjwhppatrv/nike-air-skylon-2-white-amp-grand-purple-release-date.jpg",
        description: 
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        size: 36,
    },
    {
        id: 6,
        name: "Chaqueta de cuero",
        productType: "Chaqueta",
        price: 70000,
        rating: 5,
        image: 
            "https://bosico.vteximg.com.br/arquivos/ids/1660846-345-345/Chaqueta-CQ8YNG-NEGRO_1.jpg?v=637803101274330000",
        description: 
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        size: "L"
    },
    {
        id: 7,
        name: "Jeans bota campana",
        productType: "Jeans",
        price: 40000,
        rating: 4,
        image: 
            "https://pasajecali.com/wp-content/uploads/2021/02/IMG-20210212-WA0036.jpg",
        description: 
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        size: "36"
    },
    {
        id: 8,
        name: "Blusa cuello bandeja",
        productType: "blusas",
        price: 35000,
        rating: 5,
        image: 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNGyJgxA11yeZ0lCjdD0r3nyfvyfrCuVrizw&usqp=CAU",
        description: 
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        size: "M"
    },
    {
        id: 9,
        name: "Zapatos Nike",
        productType: "Zapatos deportivos",
        price: 50000,
        rating: 4,
        image: 
            "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/idatfhqf6nsjwhppatrv/nike-air-skylon-2-white-amp-grand-purple-release-date.jpg",
        description: 
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        size: 36,
    },
    {
        id: 10,
        name: "Chaqueta de cuero",
        productType: "Chaqueta",
        price: 70000,
        rating: 5,
        image: 
            "https://bosico.vteximg.com.br/arquivos/ids/1660846-345-345/Chaqueta-CQ8YNG-NEGRO_1.jpg?v=637803101274330000",
        description: 
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        size: "L"
    },
    {
        id: 11,
        name: "Jeans bota campana",
        productType: "Jeans",
        price: 40000,
        rating: 4,
        image: 
            "https://pasajecali.com/wp-content/uploads/2021/02/IMG-20210212-WA0036.jpg",
        description: 
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        size: "36"
    },
    {
        id: 12,
        name: "Blusa cuello bandeja",
        productType: "blusas",
        price: 35000,
        rating: 5,
        image: 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNGyJgxA11yeZ0lCjdD0r3nyfvyfrCuVrizw&usqp=CAU",
        description: 
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        size: "M"
    },
    {
        id: 13,
        name: "Zapatos Nike",
        productType: "Zapatos deportivos",
        price: 50000,
        rating: 4,
        image: 
            "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/idatfhqf6nsjwhppatrv/nike-air-skylon-2-white-amp-grand-purple-release-date.jpg",
        description: 
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        size: 36,
    },
    {
        id: 14,
        name: "Chaqueta de cuero",
        productType: "Chaqueta",
        price: 70000,
        rating: 5,
        image: 
            "https://bosico.vteximg.com.br/arquivos/ids/1660846-345-345/Chaqueta-CQ8YNG-NEGRO_1.jpg?v=637803101274330000",
        description: 
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        size: "L"
    },
    {
        id: 15,
        name: "Jeans bota campana",
        productType: "Jeans",
        price: 40000,
        rating: 4,
        image: 
            "https://pasajecali.com/wp-content/uploads/2021/02/IMG-20210212-WA0036.jpg",
        description: 
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        size: "36"
    },
    {
        id: 16,
        name: "Blusa cuello bandeja",
        productType: "blusas",
        price: 35000,
        rating: 5,
        image: 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNGyJgxA11yeZ0lCjdD0r3nyfvyfrCuVrizw&usqp=CAU",
        description: 
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        size: "M"
    },
    {
        id: 17,
        name: "Zapatos Nike",
        productType: "Zapatos deportivos",
        price: 50000,
        rating: 4,
        image: 
            "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/idatfhqf6nsjwhppatrv/nike-air-skylon-2-white-amp-grand-purple-release-date.jpg",
        description: 
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        size: 36,
    },
    {
        id: 18,
        name: "Chaqueta de cuero",
        productType: "Chaqueta",
        price: 70000,
        rating: 5,
        image: 
            "https://bosico.vteximg.com.br/arquivos/ids/1660846-345-345/Chaqueta-CQ8YNG-NEGRO_1.jpg?v=637803101274330000",
        description: 
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        size: "L"
    },
    {
        id: 19,
        name: "Jeans bota campana",
        productType: "Jeans",
        price: 40000,
        rating: 4,
        image: 
            "https://pasajecali.com/wp-content/uploads/2021/02/IMG-20210212-WA0036.jpg",
        description: 
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        size: "36"
    },
    {
        id: 20,
        name: "Blusa cuello bandeja",
        productType: "blusas",
        price: 35000,
        rating: 5,
        image: 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNGyJgxA11yeZ0lCjdD0r3nyfvyfrCuVrizw&usqp=CAU",
        description: 
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        size: "M"
    },
]

export default products;
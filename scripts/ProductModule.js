const ProductModule = ( function(){

    const products = [
        {
            vare: "Spicy meatballs",
            pris: 149,
            kategori: "Pizza",
            bilde: "bilde.jpg"
        },
        {
            vare: "Fresh pineapple",
            pris: 199,
            kategori: "Pizza",
            bilde: "bilde.jpg"
        },
        {
            vare: "Chill beef",
            pris: 299,
            kategori: "Pizza",
            bilde: "bilde.jpg"
        },
        {
            vare: "Calzone",
            pris: 129,
            kategori: "Calzone",
            bilde: "bilde.jpg"
        },
        {
            vare: "Kebabpizza",
            pris: 299,
            kategori: "Pizza",
            bilde: "bilde.jpg"
        },
        {
            vare: "Double pepperoni",
            pris: 199,
            kategori: "Pizza",
            bilde: "bilde.jpg"
        },
        {
            vare: "Mexicana",
            pris: 319,
            kategori: "Pizza",
            bilde: "bilde.jpg"
        },
        {
            vare: "Cola",
            pris: 40,
            kategori: "brus",
            bilde: "soda.jpg"
        },
        {
            vare: "Fanta",
            pris: 40,
            kategori: "brus",
            bilde: "soda.jpg"
        },
        {
            vare: "Pepsi Max",
            pris: 40,
            kategori: "brus",
            bilde: "soda.jpg"
        },
        {
            vare: "Sprite",
            pris: 40,
            kategori: "brus",
            bilde: "soda.jpg"
        }
    ];

    const getAllProducts = () => products;

    return { getAllProducts } 

}() ); // end Module

export default ProductModule;
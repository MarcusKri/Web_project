const ProductModule = ( function(){

    const products = [
        {
            vare: "Spicy meatballs",
            pris: 179,
            kategori: "Pizza",
            bilde: "pizza.jpg"
        },
        {
            vare: "Fresh pineapple",
            pris: 199,
            kategori: "Pizza",
            bilde: "pizza6.jpg"
        },
        {
            vare: "Chill beef",
            pris: 259,
            kategori: "Pizza",
            bilde: "pizza1.jpg"
        },
        {
            vare: "Calzone",
            pris: 129,
            kategori: "Calzone",
            bilde: "calzone.jpg"
        },
        {
            vare: "Kebabpizza",
            pris: 279,
            kategori: "Pizza",
            bilde: "pizza2.jpg"
        },
        {
            vare: "Double pepperoni",
            pris: 199,
            kategori: "Pizza",
            bilde: "pizza3.jpg"
        },
        {
            vare: "Mexicana",
            pris: 239,
            kategori: "Pizza",
            bilde: "pizza4.jpg"
        },
        {
            vare: "Real American",
            pris: 309,
            kategori: "Pizza",
            bilde: "pizza5.jpg"
        },
        {
            vare: "Glutenfri Pepperoni",
            pris: 249,
            kategori: "Pizza",
            bilde: "pizza7.jpg"
        }
    ];

    const drinks = [
        {
            vare: "Cola",
            pris: 40,
            kategori: "brus",
            bilde: "cola.jpg"
        },
        {
            vare: "Fanta",
            pris: 40,
            kategori: "brus",
            bilde: "fanta.jpg"
        },
        {
            vare: "Cola Zero",
            pris: 40,
            kategori: "brus",
            bilde: "colazero.jpg"
        },
        {
            vare: "Sprite",
            pris: 40,
            kategori: "brus",
            bilde: "sprite.jpg"
        },
        {
            vare: "Bonaqua",
            pris: 35,
            kategori: "brus",
            bilde: "bonaqua.jpg"
        },
        {
            vare: "Urge",
            pris: 40,
            kategori: "brus",
            bilde: "urge.jpg"
        }
    ];

    const getAllProducts = () => products;
    const getAllDrinks = () => drinks;

    return { getAllProducts, getAllDrinks } 

}() ); // end Module

export default ProductModule;
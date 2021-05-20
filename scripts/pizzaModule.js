const pizzaModule= (function(){
    const meny = [
        {
            vare: "Spicy meatballs",
            pris: 849,
            kategori: "Pizza",
            bilde: "bilde.jpg"
        },
        {
            vare: "Fresh pineapple",
            pris: 299,
            kategori: "Pizza",
            bilde: "bilde.jpg"
        },
        {
            vare: "Chill beef",
            pris: 1099,
            kategori: "Pizza",
            bilde: "bilde.jpg"
        },
        {
            vare: "Calzone",
            pris: 799,
            kategori: "Calzone",
            bilde: "bilde.jpg"
        },
        {
            vare: "Kebabpizza",
            pris: 899,
            kategori: "Pizza",
            bilde: "bilde.jpg"
        },
        {
            vare: "Double pepperoni",
            pris: 699,
            kategori: "Pizza",
            bilde: "bilde.jpg"
        },
        {
            vare: "Mexicana",
            pris: 999,
            kategori: "Pizza",
            bilde: "bilde.jpg"
        },
        {
            vare: "Cola",
            pris: 40,
            kategori: "brus",
            bilde: "bilde.jpg"
        },
        {
            vare: "Fanta",
            pris: 40,
            kategori: "brus",
            bilde: "bilde.jpg"
        },
        {
            vare: "Pepsi Max",
            pris: 40,
            kategori: "brus",
            bilde: "bilde.jpg"
        },
        {
            vare: "Sprite",
            pris: 40,
            kategori: "brus",
            bilde: "bilde.jpg"
        },
    ];

    const getAll = () => meny;

    const getByCategory = ( kategori ) => meny.filter( course => course.kategori.toLowerCase() === toLowerCase() );

    return {
        getAll,
        getByCategory
    }
}())

export default pizzaModule;
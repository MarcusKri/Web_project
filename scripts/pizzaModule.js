const pizzaModule= (function(){
    const meny = [
        {
            vare: "Spicy meatballs",
            pris: 849,
            kategori: "Pizza"
        },
        {
            vare: "Fresh pineapple",
            pris: 299,
            kategori: "Pizza"
        },
        {
            vare: "Chill beef",
            pris: 1099,
            kategori: "Pizza"
        },
        {
            vare: "Calzone",
            pris: 799,
            kategori: "Calzone"
        },
        {
            vare: "Kebabpizza",
            pris: 899,
            kategori: "Pizza"
        },
        {
            vare: "Double pepperoni",
            pris: 699,
            kategori: "Pizza"
        },
        {
            vare: "Mexicana",
            pris: 999,
            kategori: "pizza"
        },
        {
            vare: "Cola",
            pris: 40,
            kategori: "brus"
        },
        {
            vare: "Fanta",
            pris: 40,
            kategori: "brus"
        },
        {
            vare: "Pepsi Max",
            pris: 40,
            kategori: "brus"
        },
        {
            vare: "Sprite",
            pris: 40,
            kategori: "brus"
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
import pizzaModule from 'CourseModule.js';

const menuSection = document.querySelector("#section-menu");

const createMenu = () => {
    let htmlTxt = "";

    pizzaModule.getAll().array.forEach(element => {
    
        htmlTxt += `
            <article class="column is-4">
                <div>
                    <h3>${ meny.vare }</h3>
                    <p>Pris: ${ meny.pris }kr</p>
                    <img class="image is-fullwidth" src="images/${ meny.bilde }" alt="menu item">
                </div>
            </article>
            `;

    });

    menuSection.innerHTML = htmlTxt;
}
createMenu();
import ProductModule from './ProductModule.js'

const productsSection = document.querySelector("#products-section");
const productsSectionDrinks = document.querySelector("#products-section-drinks");


let htmlTxt = "";
ProductModule.getAllProducts().forEach( product => { 
    k = k+1;
    htmlTxt += `
        <article class="column is-4">
            <div class="card">
                <section class="card-image">
                    <img src="images/meny-produkter/${ product.bilde }" width="500px">
                </section>
                <section class="card-content">
                    <h3 class="has-text-weight-semibold">${ product.vare }</h3>
                    <p>Pris: ${ product.pris }kr</p>
                    <button class="button is-success mt-3" onclick="myStoageFunction()">Bestill</button>
                </section>
            </div>
        </article>
    `;
} );

let htmlTxt2 = "";
ProductModule.getAllDrinks().forEach( drinks => { 
    htmlTxt2 += `
        <article class="column is-4">
            <div class="card">
                <section class="card-image">
                    <img src="images/meny-produkter/${ drinks.bilde }" width="500px">
                </section>
                <section class="card-content">
                    <h3 class="has-text-weight-semibold">${ drinks.vare }</h3>
                    <p>Pris: ${ drinks.pris }kr</p>
                    <button class="button is-success mt-3" onclick="">Bestill</button>
                </section>
            </div>
        </article>
        

    `;
} );




productsSection.innerHTML = htmlTxt;
productsSectionDrinks.innerHTML = htmlTxt2;
import ProductModule from './ProductModule.js'

const productsSection = document.querySelector("#products-section");

let htmlTxt = "";
ProductModule.getAllProducts().forEach( product => { 
    htmlTxt += `
        <article class="column is-4">
            <div class="card">
                <section class="card-image">
                    <img src="images/meny-produkter/${ product.bilde }" width="500px">
                </section>
                <section class="card-content">
                    <h3 has-font-weight-bold>${ product.vare }</h3>
                    <p>Pris: ${ product.pris }kr</p>
                </section>
            </div>
        </article>
    `;
} );

productsSection.innerHTML = htmlTxt;
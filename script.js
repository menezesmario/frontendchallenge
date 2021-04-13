const loaderContainer = document.querySelector('loader')


let page = 1;

productsList = () => {
    const req = fetch(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`)
    .then(response => response.json())
    .then(jsonBody => {
        const items = jsonBody.products;

        showProductsIntoDOM = () => {
            let productsContainer = document.getElementById('products');
            items.map((data) => {
                productsContainer.innerHTML+= `                                
                    <div class="product" key=`+data.id+` >
                    <div class="img-container">
                        <img src="`+data.image+`" />
                    </div>
                        <p class="product-name">`+data.name+`</p>
                        <p class="product-description">`+data.description+`</p>
                        <p class="old-price">De: R$`+data.oldPrice+`,00</p>
                        <p class="price">Por: R$`+data.price+`,00</p>
                        <p class="instalments">ou `+data.installments.count+` x `+data.installments.value+`0</p>
                        <button class="btn-buy">Comprar</button>
                    </div>                
                
                `
            })
        }

        showProductsIntoDOM();  
            
    });
}

productsList()



const moreProducts = document.getElementsByClassName('more-products')
console.log(moreProducts)























































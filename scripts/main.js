// массив товаров
const products = [
    {
        name: "Футболка UZcotton мужская",
        specifications: {
            color: "Цвет: Белый",
            size: "Размер: 56"
        },
        img: "1",
        seller: {
            storehouse: "Коледино WB",
            sellerName: "OOO Вайлдберриз",
            sellerPlaceholder: {
                name: "OOO «МЕГАПРОФСТИЛЬ»",
                ogrn: "ОГРН: 5167746237148",
                adress: "129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34"
            }
        },
        quantity: 100,
        like: false,
        price: {
            current: 400,
            oldPrice: 800,
        }
    },{
        name: "Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",
        specifications: {
            color: "Цвет: Прозрачный"
        },
        img: "2",
        seller: {
            storehouse: "Коледино WB",
            sellerName: "OOO Вайлдберриз",
            sellerPlaceholder: {
                name: "OOO «МЕГАПРОФСТИЛЬ»",
                ogrn: "ОГРН: 5167746237148",
                adress: "129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34"
            }
        },
        quantity: 300,
        like: true,
        price: {
            current: 600,
            oldPrice: 1000,
        }
    },{
        name: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell',
        img: "3",
        seller: {
            storehouse: "Коледино WB",
            sellerName: "OOO Вайлдберриз",
            sellerPlaceholder: {
                name: "OOO «МЕГАПРОФСТИЛЬ»",
                ogrn: "ОГРН: 5167746237148",
                adress: "129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34"
            }
        },
        quantity: 200,
        like: false,
        price: {
            current: 800,
            oldPrice: 1200,
        }
    },

]


let shopList = document.querySelector('.shop-list');
// вывод товаров в корзину
function createCart(){
    const headerIconsCount = document.getElementById('header-icons-count');
    headerIconsCount.innerHTML = products.length;
    shopList.innerHTML = "";
    for(let i = 0; i < products.length; i++){
        let buyRow = document.createElement('div');
            let text = `
                    <div class="space-between buy-row-block-1">
                        <div class="space-between">
                            <div class="buy-row-checkbox">
                                <input type="checkbox" name="" id="check-buy-${i}">
                                <label for="check-buy-${i}"></label>
                            </div>
                            <img src="static/img/buy/buy-${products[i].img}.svg" alt="">
                        </div>
                        <div class="buy-card">
                            <div class="font-16">${products[i].name}</div>
                            <div class="specifications font-13">
                                <span>Цвет: белый</span><span>Размер: 56</span>
                            </div>
                            <div class="seller gray-font font-13">
                                <div class="bot-8">${products[i].seller.storehouse}</div>
                                <div class="bot-8 space-between hide">
                                    <span>${products[i].seller.sellerName}</span>
                                    <img src="static/img/i.svg" alt="">
                                    <div class="seller-placeholder font-13 display-none">
                                        <p class="bold">${products[i].seller.sellerPlaceholder.name} </p>
                                        <p class="bot-16">${products[i].seller.sellerPlaceholder.ogrn}</p>
                                        <p>${products[i].seller.sellerPlaceholder.adress}</p>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div class="space-between buy-row-block-2">
                        <div class="buy-count-row ">
                            <div class="buy-count space-between buy-count-row-items" id="buy-count-сontainer-${i}">
                                <button id="minus-buy-count-${i}">
                                    -
                                </button>
                                <input type="number" name="" value="${i + 5}" id="buy-count-${i}">
                                <button id="plus-buy-count-${i}">
                                    +
                                </button>
                            </div>
                            <div class="remains buy-count-row-items display-none text-right font-13" id="remains-block-${i}">
                                Осталось <span id="quantity-remains-buy-${i}">${products[i].quantity-(i+5)}</span> шт.
                            </div>
                            <div class="text-right like-trash buy-count-row-items display-none">
                                <button class="like">
                                    <input type="checkbox" ${products[i].like ? "checked" : NaN } name="" id="like-buy-${i}">
                                    <label for="like-buy-${i}"></label>
                                </button>
                                <button class="trash">
                                    <input type="checkbox" name="" id="trash-buy-${i}">
                                    <label for="trash-buy-${i}"></label>
                                </button>
                            </div>
                        </div>
                        <div class="buy-price">
                            <div class="bold" id="current-price-buy-${i}"></div>
                            <div class="gray-font font-13">
                                <span id="old-price-buy-${i}"></span>
                            </div>
                        </div>
                    </div>
            `
        buyRow.innerHTML = text;
        buyRow.className = 'buy-row space-between purpur-chek';
        buyRow.id = 'buy-row-' + i;
        shopList.appendChild( buyRow );
    }



// обработка счётчиков 

    function currentPrice(){
        // cчитается сумма заказа
        let summ = 0,
            oldSumm = 0,
            totalPrice = document.getElementById('total-price'),
            totalOldPrice = document.getElementById('old-price'),
            discount = document.getElementById('discount');
        for (j= 0; j < products.length; j++){
            const currentPriceBuy = document.getElementById(`current-price-buy-${j}`),
                oldPriceBuy = document.getElementById(`old-price-buy-${j}`),
                price = products[j].price.current,
                oldPrice = products[j].price.oldPrice,
                quantity = document.getElementById(`buy-count-${j}`).value,
                remainsBlock = document.getElementById(`remains-block-${j}`), 
                remains = document.getElementById(`quantity-remains-buy-${j}`),
                checkBuy = document.getElementById(`check-buy-${j}`);
            currentPriceBuy.innerHTML = (price * quantity).toLocaleString() + " сом";
            oldPriceBuy.innerHTML = (oldPrice * quantity).toLocaleString() + " сом";
            // считается количество товара в корзине
            if(checkBuy.checked){
                summ += price * quantity;
                oldSumm +=  oldPrice * quantity;
            }
            if ((products[j].quantity - quantity) <= 10){
                remainsBlock.classList.remove('display-none')
                remains.innerHTML = products[j].quantity - quantity;
            } else {
                remainsBlock.classList.add('display-none')
            }
            
        }
        let discountSumm = oldSumm - summ;
        totalPrice.innerHTML = summ.toLocaleString() + " сом";
        totalOldPrice.innerHTML = oldSumm.toLocaleString() + " сом";
        discount.innerHTML = "- " + discountSumm.toLocaleString() + " сом";
        
        // генерит кнопку заказа
        const immediately = document.querySelector("#immediately"),
            buttonOrder = document.querySelector("#button-order");
        function buttonOrderCreate () {
            if (immediately.checked){
                buttonOrder.innerHTML = "Оплатить " + summ + " cом";
            } else {
                buttonOrder.innerHTML = "Заказать"
            }
        }
        buttonOrderCreate ();
        immediately.addEventListener('change', ()=>{
            buttonOrderCreate();
        });
    }
    currentPrice();



    const cart = document.getElementById("cart");
    const buyCountContainers = cart.querySelectorAll(".buy-count");
    const inputs = cart.querySelectorAll("input[id^='buy-count']");

    function currentCheckInput(event) {
        const input = event.target,
            validValue = input.value.match(/^\d+$/),
            index = input.id.split("-").pop(),
            buttonPlus = document.getElementById(`plus-buy-count-${index}`);
        if (validValue) {
            const currentValue = parseInt(validValue[0]);
            if (currentValue < 1) {
                input.value = 1;
                buttonPlus.style.color = '#000000'; 
            } else if (currentValue > products[index].quantity) {
                input.value = products[index].quantity;
                currentPrice();
                buttonPlus.style.color = '#CCCCCC';
            } else {
                input.value = currentValue;
                buttonPlus.style.color = '#000000';
            }
            } else {
            input.value = 1;
            buttonPlus.style.color = '#000000';
        }
        currentPrice();
    }



    function increaseCounter(event) {
        const buyCount = event.target.closest(".buy-count"),
            input = buyCount.querySelector("input[type='number']"),
            buttonMinus = buyCount.querySelector("button[id^='minus-buy-count']"),
            buttonPlus = buyCount.querySelector("button[id^='plus-buy-count']"),
            index = input.id.split("-").pop();
            currentValue = parseInt(input.value);
        buttonMinus.style.color = '#000000';
        input.value = currentValue + 1;
        if (input.value >= products[index].quantity){
            buttonPlus.style.color = '#CCCCCC';
            input.value = products[index].quantity;
        }
        currentPrice();
        
    }

    function decreaseCounter(event) {
        const buyCount = event.target.closest(".buy-count"),
            input = buyCount.querySelector("input[type='number']"),
            buttonMinus = buyCount.querySelector("button[id^='minus-buy-count']"),
            buttonPlus = buyCount.querySelector("button[id^='plus-buy-count']"),
            currentValue = parseInt(input.value);
            buttonPlus.style.color = '#000000';
        if (currentValue > 1){
            input.value = currentValue - 1;
        } else {
            input.value = 1;
        }
        if (input.value === '1') {
            buttonMinus.style.color = '#CCCCCC';
        }
        currentPrice();
    }

    inputs.forEach((input) => {
        input.addEventListener("input", currentCheckInput);
    });

    buyCountContainers.forEach((container) => {
        const minusButton = container.querySelector("button[id^='minus-buy-count']");
        const plusButton = container.querySelector("button[id^='plus-buy-count']");

        minusButton.addEventListener("click", decreaseCounter);
        plusButton.addEventListener("click", increaseCounter);
    });

    const buyRows = cart.querySelectorAll("div[id^='buy-row']");
    buyRows.forEach((row) => {
        const likeTrashBlock = row.querySelector('.like-trash'),
            seller = row.querySelector('.seller'),
            sellerPlaceholder = row.querySelector('.seller-placeholder');
        row.addEventListener('mouseenter', () => {
            likeTrashBlock.classList.remove('display-none');
        });
        seller.addEventListener('mouseenter', () => {
            sellerPlaceholder.classList.remove('display-none');
        });

        row.addEventListener('mouseleave', () => {
            likeTrashBlock.classList.add('display-none');
        });
        seller.addEventListener('mouseleave', () => {
            sellerPlaceholder.classList.add('display-none');
        });
    });

    const likeButtons = cart.querySelectorAll("input[id^='like-buy']"),
        trashButtons = cart.querySelectorAll("input[id^='trash-buy']");


    likeButtons.forEach((button) => {
        button.addEventListener('change', () => {
            let index = button.id.split("-").pop();
            const liked = button.checked;
            products[index].like = liked;
            console.log(products);
        })
    });
    trashButtons.forEach((button) => {
        button.addEventListener('change', () => {
            let index = button.id.split("-").pop();
            products.splice(index,1);
            console.log(products);
            createCart();
        })
    })

    const allCheck = document.querySelector('#all-check'),
        checkBuys = cart.querySelectorAll("input[id^='check-buy']");

    checkBuys.forEach((check)=>{
        check.addEventListener('change',()=>{
            currentPrice();
            if (!check.checked){
                allCheck.checked = check.checked;
            }
            for (let i = 0; i < products.length; i++) {
                if (checkBuys[i].checked){
                    allCheck.checked = true;
                } else {
                    allCheck.checked = false;
                    break;
                }
            }
        })
    });    
    allCheck.addEventListener('click', () => {
        checkBuys.forEach((check) => {
            check.checked = allCheck.checked;
        });
        currentPrice();
    });
}

createCart();






// вывод стоимости




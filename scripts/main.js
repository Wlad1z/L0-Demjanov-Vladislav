// массивы 
const monthsInRussian = [
    "января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"
  ];
const currentDay = new Date();
const products = [
    {
        name: "Футболка UZcotton мужская",
        specifications : [
            "Цвет: Белый",
            " Размер: 56"
        ],
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
        storages: [
            {
                quantity: 60
            },
            {
                quantity: 40
            },
        ],
        like: false,
        price: {
            current: 400,
            oldPrice: 800,
            discount: 10
        },
        getTotalQuantity() {
            return this.storages.reduce((total, storage) => total + storage.quantity, 0);
        }
    },{
        name: "Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",
        specifications: [
            "Цвет: Прозрачный"
        ],
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
        storages: [
            {
                quantity: 100
            },
            {
                quantity: 50
            },
        ],
        like: true,
        price: {
            current: 600,
            oldPrice: 1000,
            discount: 10
        },
        getTotalQuantity() {
            return this.storages.reduce((total, storage) => total + storage.quantity, 0);
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
        storages: [
            {
                quantity: 90
            },
            {
                quantity: 40
            },
        ],
        like: false,
        price: {
            current: 800,
            oldPrice: 1200,
            discount: 10
        },
        getTotalQuantity() {
            return this.storages.reduce((total, storage) => total + storage.quantity, 0);
        }
    },

];

console.log(products)


let cartBlock = document.querySelector('#cart');
// вывод товаров в корзину
function createCart(){
    const headerIconsCount = document.getElementById('header-icons-count');
    const missintTotalBuy = document.getElementById('missint-total-buy');
    headerIconsCount.innerHTML = products.length;
    missintTotalBuy.innerHTML = products.length;
    cartBlock.innerHTML = "";
    for(let i = 0; i < products.length; i++){
        let buyRow = document.createElement('div');
            let text = `
                    <div class="space-between buy-row-block-1">
                        <div class="space-between">
                            <div class="buy-row-checkbox">
                                <input type="checkbox" checked name="" id="check-buy-${i}">
                                <label for="check-buy-${i}"></label>
                            </div>
                            <img src="static/img/buy/buy-${products[i].img}.jpg" alt="">
                        </div>
                        <div class="buy-card">
                            <div class="font-16">${products[i].name}</div>
                            <div class="specifications font-13">
                                <span> ${products[i].specifications ? products[i].specifications : " "}</span>
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
                                Осталось <span id="quantity-remains-buy-${i}"></span> шт.
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
                            <div class="discount font-13 white-bac display-none">
                                <div class="space-between bot-8">
                                    <span class="gray-font">Скидка ${Math.round(100/products[i].price.oldPrice*products[i].price.current)}%</span>
                                    <span>${products[i].price.oldPrice-products[i].price.current} сом</span>
                                </div>
                                <div class="space-between ">
                                    <span class="gray-font">Cкидка покупателя ${products[i].price.discount}%</span>
                                    <span>${products[i].price.current/ 100 * products[i].price.discount}  сом</span>
                                </div>
                            </div>
                        </div>
                    </div>
            `
        buyRow.innerHTML = text;
        buyRow.className = 'buy-row space-between purpur-chek';
        buyRow.id = 'buy-row-' + i;
        cartBlock.appendChild( buyRow );
    }

    const missingBlock = document.querySelector('#missing');
    function createMissingBlock (){
        missingBlock.innerHTML = "";
        for(let i = 0; i < products.length; i++){
            let buyRow = document.createElement('div');
                let text = `
                    <div class="space-between height-100">
                        <img src="static/img/buy/buy-${products[i].img}.jpg" alt="">
                        <div class="buy-card">
                            <div class="font-16">${products[i].name}</div>
                            <div class="specifications font-13">
                                <span>${products[i].specifications ? products[i].specifications : " "}</span>
                            </div>
                        </div>
                    </div>
                    <div class="text-right like-trash width-40 display-none">
                        <button class="like">
                            <input type="checkbox" ${products[i].like ? "checked" : NaN } name="" id="like-buy-missing-${i}">
                            <label for="like-buy-missing-${i}"></label>
                        </button>
                        <button class="trash">
                            <input type="checkbox" name="" id="trash-buy-missing-${i}">
                            <label for="trash-buy-missing-${i}"></label>
                        </button>
                    </div>
                `
            
            buyRow.innerHTML = text;
            buyRow.className = 'buy-row space-between .purpur-chek';
            buyRow.id = 'buy-row-missing-' + i;
            missingBlock.appendChild( buyRow );
        }
    }
    createMissingBlock ();


// обработка счётчиков 

    function currentPrice(){
        // cчитается сумма заказа
        let summ = 0,
            oldSumm = 0,
            quantityCheckBuys = 0,
            costBuysInCartsumm = 0,
            totalPrice = document.getElementById('total-price'),
            totalOldPrice = document.getElementById('old-price'),
            discount = document.getElementById('discount'),
            totalQuantity = document.querySelectorAll('.total-quantity'),
            costBuysInCart = document.getElementById('cost-buys-in-cart');
        for (j= 0; j < products.length; j++){
            const currentPriceBuy = document.getElementById(`current-price-buy-${j}`),
                oldPriceBuy = document.getElementById(`old-price-buy-${j}`),
                price = products[j].price.current,
                oldPrice = products[j].price.oldPrice,
                discountSize = products[j].price.discount,
                quantity = document.getElementById(`buy-count-${j}`).value,
                remainsBlock = document.getElementById(`remains-block-${j}`), 
                remains = document.getElementById(`quantity-remains-buy-${j}`),
                checkBuy = document.getElementById(`check-buy-${j}`);
            currentPriceBuy.innerHTML = ((price - price/100*discountSize) * quantity).toLocaleString() + " сом";
            oldPriceBuy.innerHTML = (oldPrice * quantity).toLocaleString() + " сом";
            costBuysInCartsumm += ((price - price/100*discountSize) * quantity)
            // считается количество товара в корзине
            if(checkBuy.checked){
                summ += (price - price/100*discountSize) * quantity;
                oldSumm +=  oldPrice * quantity;
                quantityCheckBuys += Number(quantity);
            }
            if ((products[j].getTotalQuantity() - quantity) <= 10){
                remainsBlock.classList.remove('display-none')
                remains.innerHTML = products[j].getTotalQuantity() - quantity;
            } else {
                remainsBlock.classList.add('display-none')
            }
        }
        let discountSumm = oldSumm - summ ;
        totalPrice.innerHTML = summ.toLocaleString() + " сом";
        totalOldPrice.innerHTML = oldSumm.toLocaleString() + " сом";
        discount.innerHTML = "- " + discountSumm.toLocaleString() + " сом";
        totalQuantity.forEach((target)=>{
            target.innerHTML = quantityCheckBuys + " товаров";
        });
        costBuysInCart.innerHTML = costBuysInCartsumm.toLocaleString() + " сом";
        
        
        
        // генерит кнопку заказа
        const immediately = document.querySelector("#immediately"),
            buttonOrder = document.querySelector("#button-order");
        function buttonOrderCreate () {
            if (immediately.checked){
                buttonOrder.innerHTML = "Оплатить " + summ.toLocaleString() + " cом";
                document.getElementById('pay-placeholder').classList.remove("display-none")
            } else {
                buttonOrder.innerHTML = "Заказать";
                document.getElementById('pay-placeholder').classList.add("display-none")
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
            } else if (currentValue >= (products[index].getTotalQuantity())) {
                input.value = products[index].getTotalQuantity();
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
        if (input.value >= products[index].getTotalQuantity()){
            buttonPlus.style.color = '#CCCCCC';
            input.value = products[index].getTotalQuantity();
        }
        currentPrice();
        currentDateDelivery ();
        
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
        currentDateDelivery ();
    }

    inputs.forEach((input) => {
        input.addEventListener("input", currentCheckInput);
        input.addEventListener("input", currentDateDelivery);
    });

    buyCountContainers.forEach((container) => {
        const minusButton = container.querySelector("button[id^='minus-buy-count']");
        const plusButton = container.querySelector("button[id^='plus-buy-count']");

        minusButton.addEventListener("click", decreaseCounter);
        plusButton.addEventListener("click", increaseCounter);
    });

    const buyRows = cart.querySelectorAll("div[id^='buy-row']"),
        buyRowMissing = missingBlock.querySelectorAll("div[id^='buy-row']");
    buyRows.forEach((row) => {
        const likeTrashBlock = row.querySelector('.like-trash'),
            seller = row.querySelector('.seller'),
            sellerPlaceholder = row.querySelector('.seller-placeholder'),
            spanPricePlaceholder = row.querySelector("span[id^='old-price-buy']"),
            pricePlaceholder = row.querySelector(".discount");
        
        row.addEventListener('mouseenter', () => {
            likeTrashBlock.classList.remove('display-none');
        });
        seller.addEventListener('mouseenter', () => {
            sellerPlaceholder.classList.remove('display-none');
        });
        spanPricePlaceholder.addEventListener('mouseenter', () => {
            pricePlaceholder.classList.remove('display-none');
        });

        row.addEventListener('mouseleave', () => {
            likeTrashBlock.classList.add('display-none');
        });
        seller.addEventListener('mouseleave', () => {
            sellerPlaceholder.classList.add('display-none');
        });
        spanPricePlaceholder.addEventListener('mouseleave', () => {
            pricePlaceholder.classList.add('display-none');
        });
    });
    buyRowMissing.forEach((row) => {
        const likeTrashBlock = row.querySelector('.like-trash');
        row.addEventListener('mouseenter', () => {
            likeTrashBlock.classList.remove('display-none');
        });

        row.addEventListener('mouseleave', () => {
            likeTrashBlock.classList.add('display-none');
        });
    });

    const likeButtons = cart.querySelectorAll("input[id^='like-buy']"),
        trashButtons = cart.querySelectorAll("input[id^='trash-buy']"),
        likeButtonsMissing = missingBlock.querySelectorAll("input[id^='like-buy']"),
        trashButtonsMissing = missingBlock.querySelectorAll("input[id^='trash-buy']");

    for (let i = 0; i < products.length; i++){
        likeButtons[i].addEventListener('change', () => {
            const liked = likeButtons[i].checked;
            likeButtonsMissing[i].checked = liked;
            products[i].like = liked;
            console.log(products);
        })
        likeButtonsMissing[i].addEventListener('change', () => {
            const liked = likeButtonsMissing[i].checked;
            likeButtons[i].checked = liked;
            products[i].like = liked;
            console.log(products);
        })
        trashButtons[i].addEventListener('change', () => {
            products.splice(i,1);
            console.log(products);
            createCart();
        })
        trashButtonsMissing[i].addEventListener('change', () => {
            products.splice(i,1);
            console.log(products);
            createCart();
        })
    }

   

    const allCheck = document.querySelector('#all-check'),
        checkBuys = cart.querySelectorAll("input[id^='check-buy']");

    checkBuys.forEach((check)=>{
        check.addEventListener('change',()=>{
            currentPrice();
            currentDateDelivery ();
            for (let i = 0; i <= products.length; i++) {
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
        currentDateDelivery ();
    });

    const storages = [
        {
            data: {
                start:{
                    date: currentDay.getDate() + 1,
                    month : monthsInRussian[currentDay.getMonth()]
                },
                end:{
                    date: currentDay.getDate() + 2,
                    month : monthsInRussian[currentDay.getMonth()]
                }
            },
        },{
            data: {
                start:{
                    date: currentDay.getDate() + 3,
                    month : monthsInRussian[currentDay.getMonth()]
                },
                end:{
                    date: currentDay.getDate() + 4,
                    month : monthsInRussian[currentDay.getMonth()]
                }
            },
        }
    ]

    const deliveryDate = document.getElementById("delivery-date");

    function currentDateDelivery (){
        deliveryDate.innerHTML = "";
        let row;
        let row0;
        let inputsAr = Array.from(inputs);
        if (inputsAr.every((input, index) => input.value <= products[index].storages[0].quantity)){
            row = document.createElement("div");
            row.innerHTML = `
                    <div class="width-13 font-bold-16 bot-8">${storages[0].data.start.date + "—"+ storages[0].data.end.date +" "+ storages[0].data.end.month}</div>
                        <div class="flex-start" id="wrapper-delivery-row-0">

                        <div>
                `
            row.className = 'bot-16 flex-start block';
            deliveryDate.appendChild(row);
            document.getElementById("order-date").innerHTML = storages[0].data.start.date + "—"+ storages[0].data.end.date +" "+ storages[0].data.end.month;
        } else {
            row = document.createElement("div");
            row.innerHTML = `
                    <div class="width-13 font-bold-16 bot-8">${storages[0].data.start.date + "—"+ storages[0].data.end.date +" "+ storages[0].data.end.month}</div>
                        <div class="flex-start" id="wrapper-delivery-row-0">

                        <div>
                `
            row.className = 'bot-16 flex-start block';
            deliveryDate.appendChild(row);


            row0 = document.createElement("div");
            row0.innerHTML = `
                    <div class="width-13 font-bold-16 bot-8">${storages[1].data.start.date + "—"+ storages[1].data.end.date +" "+ storages[1].data.end.month}</div>
                        <div class="flex-start" id="wrapper-delivery-row-1">

                        <div>
                `
            row0.className = 'bot-16 flex-start block';
            deliveryDate.appendChild(row0);
            document.getElementById("order-date").innerHTML = storages[0].data.start.date + "—"+ storages[1].data.end.date +" "+ storages[1].data.end.month;
        }
        
        for (let j = 0; j < products.length; j++){
            if(checkBuys[j].checked){
                if (inputs[j].value <= products[j].storages[0].quantity){
                    let div = document.createElement("div");
                    div.innerHTML = `
                        <div class="pos-relative delivery-buy">
                            <img src="static/img/buy/buy-${products[j].img}.jpg" alt="">
                            <span class="count">${inputs[j].value}</span>
                        </div>
                    `
                    div.className = 'flex-start';
                    document.getElementById('wrapper-delivery-row-0').appendChild( div);
                } else {
                    let div = document.createElement("div");
                    div.innerHTML = `
                        <div class="pos-relative delivery-buy">
                            <img src="static/img/buy/buy-${products[j].img}.jpg" alt="">
                            <span class="count">${products[j].storages[0].quantity}</span>
                        </div>
                    `
                    div.className = 'flex-start';
                    document.getElementById('wrapper-delivery-row-0').appendChild( div);
    
                    let div1 = document.createElement("div");
                    div1.innerHTML = `
                        <div class="pos-relative delivery-buy">
                            <img src="static/img/buy/buy-${products[j].img}.jpg" alt="">
                            <span class="count">${inputs[j].value - products[j].storages[0].quantity}</span>
                        </div>
                    `
                    div1.className = 'flex-start';
                    document.getElementById('wrapper-delivery-row-1').appendChild( div1);
                }
            }
        }
    }
    currentDateDelivery ();
}
createCart();


const shopLists = document.querySelectorAll(".shop-list"),
    hideButtons = document.querySelectorAll(".hide-button"),
    hideDivs = document.querySelectorAll(".hide-divs");

for (let i = 0; i <=1; i++){
    hideButtons[i].addEventListener("click", ()=>{
        shopLists[i].classList.toggle("display-none");
    })
}
hideButtons[0].addEventListener("click", ()=>{
    hideDivs.forEach((target)=>{
        target.classList.toggle('display-none')
    })
})

const cartPay = [
    {
        img: "mir",
        number: 1234123412341234,
        date: "01/23"
    },
    {
        img: "visa",
        number: 1234123412341234,
        date: "04/28"
    },
    {
        img: "master",
        number: 4276070014387171,
        date: "07/24"
    },
    {
        img: "maestro",
        number: 1234123412341234,
        date: "06/25"
    }
];
const courierAdress = [
    "Бишкек, улица Табышалиева, 57",
    "Бишкек, улица Жукеева-Пудовкина, 77/1",
    "Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1"
];
const deliveryPoints = [
    {
        adress: "г. Бишкек, улица Табышалиева, 57",
        rating: "5.00",
        start: 10,
        end: 20
    },
    {
        adress: "г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1",
        rating: "4.75",
        start: 10,
        end: 20
    },
    {
        adress: "г. Бишкек, улица Табышалиева, д. 57",
        rating: "4.99",
        start: 10,
        end: 18
    },
];

function formatCartNumber(num) {
    const numStr = num.toString();
    const formattedNum = [
        numStr.substring(0, 4),
        numStr.substring(4, 6) + '••  ••••',
        numStr.substring(12, 16)
    ].join(' ');
    return formattedNum;
}

const modalPayList = document.querySelector('#modal-pay-list');
    function createModalPayList (){
        modalPayList.innerHTML = "";
        for(let i = 0; i < cartPay.length; i++){
            let buyRow = document.createElement('div');
                let text = `
                    <div class="flex-start"> 
                        <input type="radio" ${i == 2 ? 'checked' : ""} name="pay-cart" id="pay-cart-${i}">
                        <label for="pay-cart-${i}"></label>
                        <img src="static/img/pay/${cartPay[i].img}.svg" alt="">
                        <span>${formatCartNumber(cartPay[i].number)}</span>
                    </div>
                `
            buyRow.innerHTML = text;
            buyRow.className = 'space-between pay-row';
            modalPayList.appendChild( buyRow );
        }
    }
createModalPayList ();

const payCartChekbox = document.querySelectorAll("input[id^='pay-cart']"),
    divCart = document.querySelectorAll(".pay-buy-cart"),
    changePayCarts = document.querySelectorAll(".change-pay-cart");

const moduleBlock = document.getElementById('modal-block'),
    modalPay = document.getElementById('modal-pay'),
    buttonChangeCartPay = document.getElementById('button-change-cart-pay');



changePayCarts.forEach((target)=>{
    target.addEventListener('click', ()=>{
        moduleBlock.classList.remove('display-none');
        modalPay.classList.remove('display-none');
        modalPay.style.display = 'flex';
    })
})

function changePayCart(){
    payCartChekbox.forEach((target)=>{
        if(target.checked){
            let index = target.id.split("-").pop();
            divCart.forEach((div)=>{
                div.innerHTML = `
                <img src="static/img/pay/${cartPay[index].img}.svg" alt="">
                <span>${formatCartNumber(cartPay[index].number)}</span>
                <span class="data-card">${cartPay[index].date}</span>
            `;
            })
        }
    });
}
changePayCart()

buttonChangeCartPay.addEventListener("click", ()=>{
    changePayCart();
    moduleBlock.classList.add('display-none');
    modalPay.style.display = 'none';
})


const courier = document.querySelector('#courier'),
    pointsDelivery = document.querySelector('#points-delivery');
function createModalDeliveryList (){
    courier.innerHTML = "";
    for(let i = 0; i < courierAdress.length; i++){
        let buyRow = document.createElement('div');
            let text = `
                    <div class="flex-start">
                        <div>
                            <input type="radio" name="delivery" id="delivery-adress-${i}">
                            <label for="delivery-adress-${i}"></label>
                        </div>
                        <div>
                            ${courierAdress[i]}
                        </div>
                    </div>
                        
                    <div class="like-trash">
                        <button class="trash">
                            <input type="checkbox" name="" id="trash-adress-${i}">
                            <label for="trash-adress-${i}"></label>
                        </button>
                    </div>
                `
        buyRow.innerHTML = text;
        buyRow.className = 'space-between';
        courier.appendChild( buyRow );
    }


    pointsDelivery.innerHTML = "";
    for(let i = 0; i < deliveryPoints.length; i++){
        let buyRow = document.createElement('div');
            let text = `
                    <div class="flex-start">
                        <div>
                            <input type="radio" ${i == 0 ? 'checked' : ""} name="delivery" id="delivery-points-${i}">
                            <label for="delivery-points-${i}"></label>
                        </div>
                        <div class="point-info">
                            ${deliveryPoints[i].adress}
                            <div class="font-13 gray-font">
                                <span class="rating">${deliveryPoints[i].rating}</span>
                                Пункт выдачи 
                            </div>
                        </div>
                    </div>
                        
                    <div class="like-trash">
                        <button class="trash">
                            <input type="checkbox" name="" id="trash-points-${i}">
                            <label for="trash-points-${i}"></label>
                        </button>
                    </div>
            `
        buyRow.innerHTML = text;
        buyRow.className = 'space-between';
        pointsDelivery.appendChild( buyRow );
    }
    
}
createModalDeliveryList ();




const deliveryChekbox = document.querySelectorAll("input[id^='delivery']"),
    deliveryWay = document.querySelectorAll("[id^='adress-point']"),
    divDelivery = document.querySelectorAll(".delivery-row"),
    changeDelivery = document.querySelectorAll(".change-delivery"),
    modalDelivery = document.getElementById('modal-delivery'),
    buttonChangeDelivery = document.getElementById('button-change-delivery');

deliveryChekbox.forEach((target)=>{
    let parent = target.parentNode.parentNode.parentNode,
        trashbutton = parent.querySelector("input[id^='trash']");
    if (!target.checked){
        trashbutton.addEventListener("click", ()=>{
            parent.classList.add("display-none")
        })
    } else {
        trashbutton.disabled = true;
    }
})

function checkDelivery (){
    deliveryChekbox.forEach((target) => {
        if(target.checked){
            if (target.id.includes('points')) {
                courierBlock.classList.add('display-none');
                deliveryButton[1].style.border = "2px solid rgba(203, 17, 171, 0.15)";

                pointDelivery.classList.remove('display-none');
                deliveryButton[0].style.border = "2px solid rgb(203, 17, 172)";
            } else {
                pointDelivery.classList.add('display-none')
                deliveryButton[0].style.border = "2px solid rgba(203, 17, 171, 0.15)";

                courierBlock.classList.remove('display-none');
                deliveryButton[1].style.border = "2px solid rgb(203, 17, 172)";
            }
        }
    });
}

changeDelivery.forEach((target)=>{
    target.addEventListener('click', ()=>{
        moduleBlock.classList.remove('display-none');
        modalDelivery.classList.remove('display-none');
        modalDelivery.style.display = 'flex';
        checkDelivery ();
    })
})

const deliveryButton = document.querySelectorAll(".way-delivery-buttton"),
    courierBlock = document.querySelector(".courier"),
    pointDelivery = document.querySelector(".points-delivery");
deliveryButton[0].addEventListener("click", ()=>{
    courierBlock.classList.add('display-none');
    deliveryButton[1].style.border = "2px solid rgba(203, 17, 171, 0.15)";

    pointDelivery.classList.remove('display-none');
    deliveryButton[0].style.border = "2px solid rgb(203, 17, 172)";
})
deliveryButton[1].addEventListener("click", ()=>{
    pointDelivery.classList.add('display-none')
    deliveryButton[0].style.border = "2px solid rgba(203, 17, 171, 0.15)";

    courierBlock.classList.remove('display-none');
    deliveryButton[1].style.border = "2px solid rgb(203, 17, 172)";
})

function changeDeliveryBlock(){
    deliveryChekbox.forEach((target)=>{
        id = target.id;
        if(target.checked){
            let index = target.id.split("-").pop();
            if (id.includes('points')){
                deliveryWay[0].innerHTML = "Пункт выдачи";
                divDelivery[0].innerHTML= `
                    <div class="bot-8">${deliveryPoints[index].adress}</div>
                    <div class="font-13"><span class="rating">${deliveryPoints[index].rating}</span>Ежедневно с ${deliveryPoints[index].start} до ${deliveryPoints[index].end} </div>
                `;
                deliveryWay[1].innerHTML = "Доставка в пункт выдачи";
                divDelivery[1].innerHTML= deliveryPoints[index].adress;
                courierBlock.classList.add('display-none');
            } else {
                deliveryWay[0].innerHTML = "Адрес доставки";
                divDelivery[0].innerHTML= `
                    <div class="bot-8">${courierAdress[index]}</div>
                    <div class="font-13"></span>Ежедневно с 10 до 20.00 </div>
                `;
                deliveryWay[1].innerHTML = "Доставка курьером";
                divDelivery[1].innerHTML= courierAdress[index];
                pointDelivery.classList.add('display-none');
            }
        }
    });
}

changeDeliveryBlock();

buttonChangeDelivery.addEventListener("click", ()=>{
    changeDeliveryBlock();
    moduleBlock.classList.add('display-none');
    modalDelivery.classList.add('display-none');
    modalDelivery.style.display = 'none';
    checkDelivery ();
    deliveryChekbox.forEach((target)=>{
        let parent = target.parentNode.parentNode.parentNode,
            trashbutton = parent.querySelector("input[id^='trash']");
        if (!target.checked){
            trashbutton.addEventListener("click", ()=>{
                parent.classList.add("display-none")
            })
            trashbutton.disabled = false;
        } else {
            trashbutton.disabled = true;
        }
    })
})


moduleBlock.addEventListener("click", (event)=>{
    if (event.target === moduleBlock) {
        moduleBlock.classList.add('display-none');
        modalDelivery.classList.add('display-none');
        modalDelivery.style.display = 'none';
        moduleBlock.classList.add('display-none');
        modalPay.style.display = 'none';
        checkDelivery ();
    }
})
const closeModals = document.querySelectorAll(".close-modal");
closeModals.forEach((target)=>{
    target.addEventListener("click", ()=>{
        moduleBlock.classList.add('display-none');
        modalDelivery.classList.add('display-none');
        modalDelivery.style.display = 'none';
        moduleBlock.classList.add('display-none');
        modalPay.style.display = 'none';
        checkDelivery ();
    })
})

const greenSpans = document.querySelectorAll(".green"),
    deliveryPlaceholder = document.querySelectorAll(".placeholder-delivery");
for (let i = 0; i < greenSpans.length; i++){
    greenSpans[i].addEventListener('mouseenter', () => {
        deliveryPlaceholder[i].classList.remove('display-none');
    });
    greenSpans[i].addEventListener('mouseleave', () => {
        deliveryPlaceholder[i].classList.add('display-none');
    });
}

const inputForm = document.querySelectorAll(".input-form"),
    noselects = document.querySelectorAll(".noselect"),
    errPlaceholders = document.querySelectorAll(".err-placeholder");


function validatoin (){
    function showPlac(i){
        errPlaceholders[i].style.display = "block";
        inputForm[i].classList.add("err-input");
    };
    function hidePlac (i){
        errPlaceholders[i].style.display = "none";
        inputForm[i].classList.remove("err-input");
    };
    
    function validName(input) {
        const regular = /\d/;
        return regular.test(input.value);
    }
    for (let i = 0; i <= 1; i++){
        if (validName(inputForm[i])){
            showPlac(i)
        } else{
            hidePlac (i)
        }
    }

    function validEmail(input) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(input.value);
    }
    if (validEmail(inputForm[2]) || !inputForm[2].value){
        hidePlac(2);
    } else{
        showPlac(2);
    }
    
    
    let lengthNumber = inputForm[3].value.length;
    if (lengthNumber > 10 || !inputForm[3].value){
        hidePlac(3);
    } else{
        showPlac(3);
    }  
    
    let lengthINN = inputForm[4].value.length;
    if (lengthINN > 10 || !inputForm[4].value){
        hidePlac(4);
        document.getElementById('inn-placeholder').style.display = "block"
    } else{
        showPlac(4);
        document.getElementById('inn-placeholder').style.display = "none"
    }  
    
}


for (let i = 0; i < inputForm.length; i++){
    inputForm[i].addEventListener('focus', () => {
        noselects[i].classList.add('label-filled');
        
    });

    inputForm[i].addEventListener('mouseleave', () => {
        validatoin ();
        if(!inputForm[i].value && inputForm[i] !== document.activeElement){
            noselects[i].classList.remove('label-filled');
        }
    });
}

let buttonOrder = document.getElementById('button-order');
buttonOrder.addEventListener('click', ()=>{
    let success = true;
    function showPlac(i){
        errPlaceholders[i].style.display = "block";
        inputForm[i].classList.add("err-input");
        document.getElementById('inn-placeholder').style.display = "none"
    };
    inputForm.forEach((input, index) => {
        if (!input.value){
            showPlac(index);
            success = false;
            inputForm[0].scrollIntoView();
        }
    });
    if (success){
        alert("Успех!");
    }
})
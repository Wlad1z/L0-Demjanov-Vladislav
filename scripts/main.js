let products = {
    buy1 : {
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
        like: "false",
        price: {
            current: 400,
            oldPrice: 800,
        }
    }
}

for(let i = 0; i < products.length; i++){
    let span = document.createElement('span');
    span.innerText = ( products.buy1.name );
    console.log("sucsess!")
}
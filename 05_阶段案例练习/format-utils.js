function formatPrice (price){
    if (typeof price !== "number"){
        price = Number(price) || 0 //前面是false或者报错的话， 用两根管子后面的0
    }
    
    
    return "￥"+price.toFixed(2)
}
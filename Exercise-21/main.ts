///Question21:
interface item {
    name:string
    price:number
}
//Creating two objects:
var book: item={
    name: `Rich Dad Poor dad`
    price: 750
}
var toy: item={
    name: `Beating Drum`,
    price: 600
}
console.log(`name: ${book.name} , price:${book.price}`)
console.log(`name: ${toy.name} , price:${toy.price}`)


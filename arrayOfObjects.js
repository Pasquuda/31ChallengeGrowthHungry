/** ЗАДАЧА - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */


const cars = [
    {carBrand: 'Toyota', price: 17800, isAvailableForSale: true},
    {carBrand: 'Mazda', price: 15600, isAvailableForSale: false},
    {carBrand: 'Subaru', price: 16700, isAvailableForSale: true}
]

cars.push(
    {carBrand: 'Mustang', price: 19100, isAvailableForSale: false}
)
console.log(cars)
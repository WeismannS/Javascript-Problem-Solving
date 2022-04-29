 const arr = [5,5,5,5,5]
function shuffle(arr) {
if ([...new Set(arr)].length==arr.length) return arr
const newMap = arr.map(e=> Math.floor(Math.random() * 10))
return [...new Set(newMap)].length== newMap.length ? newMap : shuffle(arr)
}
// recursive function to get an array of guaranteed random numbers

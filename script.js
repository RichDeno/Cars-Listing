// 1. Define an array named 'cars'
var cars = ["Toyota", "Honda", "Mazda", "Mitsubishi", "Tesla", "Lexus"];

// 2. Log the first item and last item to the console
console.log("First car:", cars[0]); // First item
console.log("Last car:", cars[cars.length - 1]); // Last item

// 3. Add 'mercedes-benz' to the array
cars.push("Mercedes Benz");
console.log("Updated cars list:", cars);

// 4. Loop through all items in the array
console.log("Listing all cars:");
for (var i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
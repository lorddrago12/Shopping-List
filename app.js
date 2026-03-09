// ============================================
//           GROCERY SHOPPING LIST
// ============================================

const shoppingList = [];

function getShoppingListMsg(arr) {
  return `Current Shopping List: ${arr}`;
}

// --- Add some fruit ---
console.log("It will be nice to have some fruit to eat.");
shoppingList.push("Apples");
console.log(getShoppingListMsg(shoppingList));

shoppingList.push("Grapes");
console.log(getShoppingListMsg(shoppingList));

// --- Add cooking oil to the front ---
console.log("It looks like we need to get some cooking oil.");
shoppingList.unshift("Vegetable Oil");
console.log(getShoppingListMsg(shoppingList));

// --- Load up on snacks ---
shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");
console.log(getShoppingListMsg(shoppingList));

// --- Too much junk food, remove the last item ---
console.log("This looks like too much junk food.");
shoppingList.pop();
console.log(getShoppingListMsg(shoppingList));

// --- Add a dessert to the front ---
console.log("It might be nice to get a dessert.");
shoppingList.unshift("Chocolate Cake");
console.log(getShoppingListMsg(shoppingList));

// --- On second thought, let's be health conscious ---
console.log("On second thought, maybe we should be more health conscious.");
shoppingList.shift();
shoppingList[0] = "Canola Oil";
console.log(getShoppingListMsg(shoppingList));

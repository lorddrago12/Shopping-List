# 🛒 Shopping List Manager

A lightweight JavaScript utility that simulates building and managing a grocery shopping list using core array methods.

---

## 📋 Overview

This script walks through a realistic shopping trip scenario — adding fruit, reconsidering junk food, adding a dessert, then swapping it out for a healthier option. It demonstrates how JavaScript arrays work as mutable, ordered lists.

---

## 🚀 How to Run

```bash
node shoppingList.js
```

Or paste it directly into your browser's DevTools console.

---

## 🧠 Concepts Demonstrated

| Method | Description |
|---|---|
| `push(...items)` | Add one or more items to the **end** of the list |
| `pop()` | Remove the **last** item from the list |
| `unshift(item)` | Add an item to the **beginning** of the list |
| `shift()` | Remove the **first** item from the list |
| `arr[index] = value` | Directly **replace** an item at a given index |

---

## 🔄 Shopping List Walkthrough

```
Start:          []
+ Apples        ["Apples"]
+ Grapes        ["Apples", "Grapes"]
+ Veg Oil       ["Vegetable Oil", "Apples", "Grapes"]
+ Snacks        ["Vegetable Oil", "Apples", "Grapes", "Popcorn", "Beef Jerky", "Potato Chips"]
- Potato Chips  ["Vegetable Oil", "Apples", "Grapes", "Popcorn", "Beef Jerky"]
+ Cake          ["Chocolate Cake", "Vegetable Oil", "Apples", "Grapes", "Popcorn", "Beef Jerky"]
- Cake, swap    ["Canola Oil", "Apples", "Grapes", "Popcorn", "Beef Jerky"]
```

---

## 📦 Helper Function

```js
function getShoppingListMsg(arr) {
  return `Current Shopping List: ${arr}`;
}
```

A simple utility that formats and returns the current state of the shopping list as a readable string.

---

## 📁 File Structure

```
📂 project
 ┗ 📄 shoppingList.js   ← main script
 ┗ 📄 README.md         ← you are here
```

---

## 💡 Notes

- No external dependencies — pure vanilla JavaScript
- Array mutations happen **in place** (no reassignment needed)
- Great beginner exercise for understanding mutable data structures

---

*Happy shopping! 🥦*

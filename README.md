# OnlineStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Problem Statement
## Description:
  Create a single page application showcasing your new online store! Feel free to use any framework / libraries
  that you are confident in. Or, if that's not your thing, vanilla JS will do as well ;). You will find the list
  of available items in the "store_items.json" file.
    * bonus points if you use React / Redux!

## Requirements:
1. Display each item found in the "store_items.json" file. Each item should show the name, image, price, quantityRemaining (total number of each item remaining), and a button to add the item to the shopping cart.
2. Create a shopping cart on the same page which lists the added items.
3. The shopping card should include:
   1. names of items.
   2. price of item.
   3. total cost of all items in the cart.
   3. a way to remove the item from the cart.
   4. toggle to increase / decrease quantity (optional).
        - when increasing the quantity be sure to not go over the available quantity of each item!
    5. confirm purchase button that clears out the cart.
        - when confirming the purchase, update the quantity values in the list of items (optional).
# AMAZON Clone - Next.js + Tailwind + NextAuth + Firebase

Extra Features added:

- Added Re-Order button on Orders page that will add previous order items to the
  current basket.
- Implemented multiple quantities for items. Ever add item to basket will add
  the quantity of 1 and the remove will remove one to the quantity.
- Toggle Hamburguer to show list of options
- Change add to basekt to be '+' button quantity display and '-' button. Don't
  let go lower than 1.
  - Remove from basket butto should remove all quantities and not only one us
    '-' will do that functionality takes the item and all quantities
- Changed the checkout page from flex-grow to grid to avoid twitching and
  changes in the div width while updating the quantities of the products
- Used react-transition-group to change between classes and allow our products
  to have a smoth way out of our list when delted. Problem, due to re-render due
  to change in state, there is a limited time for the transiction to happen.

Features to be added to the build:

- Amnimate Product list

- Add green popup to the rightcorner "Added to basket" "Item Name" (create state
  do display and setTimeout to close it after 3 seconds and pop it from the
  state) - Special trick if you spam, stack the popup (update state with product
  name for each click), how to close one at a time

- Add image when the cart is empty and add a button to continue shopping and
  redirect to homepage

- Show Product Page after clicking in a product and display full description,
  collection of images bigger size
- Implement Watched products state: When clicking add Product to a basket or
  checking the product page add a redux state for watched products
- use the search bar to search for products or categories

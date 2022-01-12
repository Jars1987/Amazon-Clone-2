# AMAZON Clone - Next.js + Tailwind + NextAuth + Firebase

Extra Features added:

- Added Re-Order button on Orders page that will add previous order items to the
  current basket.
- Implemented multiple quantities for items. Ever add item to basket will add
  the quantity of 1 and the remove will remove one to the quantity.
- Toggle Hamburguer to show list of options
- Changed add to basekt to be '+' button quantity display and '-' button. -
  Button does not let go lower than 1.
  - Remove from basket button removes all quantities and not only one as '-'
    will do that functionality. It will take the clicked item and all quantities
- Changed the checkout page from flex-grow to grid to avoid twitching and
  changes in the div width while updating the quantities of the products
- Used react-transition-group to change between classes and allow our products
  to have a smoth way out of our list when delted. Problem, due to re-render due
  to change in state, there is a limited time for the transiction to happen.
  - Added image when the cart is empty and a text/button to continue shopping
    that redirects to homepage.
- Show Product Page after clicking in a product and display full description and
  Related products
  - Added Footered
  - Amnimate Product list. When hovering a product the product it will Sclae
    1.05%
  - Added Notification popup that fires on the top righ corner when an item is
    added to basket

Future Features:

- Implement Watched products state: When clicking add Product to a basket or
  checking the product page add a redux state for watched products

- use the search bar to search for products or categories

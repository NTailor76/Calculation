// //items in a shopping cart
// //let banana = 20;
// //let oranges = 15;

// // total cost of the 2 items

// //let TotalPrice = banana+oranges

// //console.log("Total Price £ " , TotalPrice);

// //Task 1: Shopping Cart Total - Let's calculate the total cost of items in a shopping cart.
// //Item Prices
// let coffeePrice = 5;
// let sandwichPrice = 8;
// let cookiePrice = 2;
// let muffinPrice = 3;

// // // Calculate quantities
// let coffeeQuantity = 2;
// let sandwichQuantity = 1;
// let cookieQuantity = 3;
// let muffinQuantity = 2;

// // //Calculate Subtotals
// let coffeeTotal = coffeePrice * coffeeQuantity;
// let sandwichTotal = sandwichPrice * sandwichQuantity;
// let cookieTotal = cookiePrice * cookieQuantity;
// let muffinTotal = muffinPrice * muffinQuantity;

// // //Calculate final Total
// let cartTotal = coffeeTotal + sandwichTotal + cookieTotal + muffinTotal;

// // //Output - Display the receipt
// console.log("======= SHopping cart ============")
// console.log("Coffee: £" + coffeeTotal);
// console.log("Sandwich: £" + sandwichTotal);
// console.log("Cookies: £" + cookieTotal);
// console.log("Muffins: £" + muffinTotal);

// console.log("_______________________________")
// console.log("Total: £" + cartTotal);
// console.log("_______________________________")


// // Task 2: Discount Calculator - Now let's calculate discounts using percentages.
// // Original price and discount information
// let shirtPrice = 25;
// let discountPercent = 20;
// let quantity = 23;

// // // convert the discount percentage to decimal
// let discountRate = 20 /100;
// let discountAmount = discountRate * (shirtPrice * quantity);
// let orginalPrice = shirtPrice * quantity;
// let pricePaid = orginalPrice - discountAmount;


// console.log("Original Price: £" + orginalPrice );
// console.log("Discount Rate give:" + discountPercent + "%");
// console.log("Discount give: £" + discountAmount);
// console.log("Price Paid: £" + pricePaid);

// //Task 3 - Task 3: Price Format Calculator - Let's combine string formatting with calculations to create professional-looking price displays
// // Product information
// let productName = "Wireless Mouse";
// let price = 29.99;
// let quantity = 2;
// // Calculate subtotal
// let subTotal = price * quantity;

// // console.log("=== Product Receipt ================================================================");

// console.log("____item__________ Price________Quantity________Total Price")
// console.log(productName + "     £"+price+"           "+quantity+"             £"+subTotal);

// console.log("___________________________________________________________________________________");
// console.log("                                           Total: £"+subTotal+"                    ");
// console.log("___________________________________________________________________________________");


// console.log("*************Thank Your - Hope we provided a Good Service ********************************")


// //Task 4: Multi-Step Calculator - Let's combine everything we've learned to create a complete order calculator.
//  // Order information
// let basePrice = 49.99;
// let quantity = 2;
// let discountPercent = 15;
// let taxRate = 8;  // 8% sales tax

// // Calculate subtotal (price * quantity)
// let discountRate = 15 /100;
// let actualTaxRate = 8/ 100;

// let totalPrice = basePrice * quantity;
// let discountPrice = totalPrice * discountRate
// let priceAfterDiscount = totalPrice - discountPrice;
// let taxPrice = priceAfterDiscount * actualTaxRate

// let actualPrice = totalPrice - discountPrice + taxPrice;



// // Your code here:
// // Calculate discount
// // Hint: Remember to convert percentage to decimal first
// // Your code here:
// // Calculate tax on the discounted amount
// // Your code here:
// // Display the detailed calculation
// console.log("=== Order Details ===");
// // Add your console.log statements to show each step of the calculation
// console.log("Total Price: £" + totalPrice.toFixed(2));
// console.log("Discount Price £" + discountPrice.toFixed(2));
// console.log("Tax Price: £" + taxPrice.toFixed(2));

// console.log("ActualPrice £"+actualPrice.toFixed(2))








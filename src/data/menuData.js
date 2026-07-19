export const MENU = {
  Pizza: [
    { n: "Chicken Tikka Pizza", d: "Spiced chicken tikka, onion, capsicum, mozzarella", p: "Rs 950 / 1450", spicy: true },
    { n: "BBQ Chicken Pizza", d: "Smoky BBQ chicken, red onion, BBQ drizzle", p: "Rs 999 / 1499" },
    { n: "Cheese Lovers Pizza", d: "Triple mozzarella & cheddar blend", p: "Rs 850 / 1300" },
    { n: "Fajita Pizza", d: "Grilled chicken fajita, peppers, jalapeño", p: "Rs 980 / 1480", spicy: true },
    { n: "Veggie Supreme", d: "Mushroom, olives, capsicum, corn, onion", p: "Rs 800 / 1250" },
    { n: "Seekh Kebab Pizza", d: "Minced beef seekh, onion, mint chutney swirl", p: "Rs 999 / 1499", spicy: true },
  ],
  Burgers: [
    { n: "Classic Beef Burger", d: "Grilled beef patty, cheddar, lettuce, house sauce", p: "Rs 450" },
    { n: "Zinger Burger", d: "Crispy fried chicken fillet, mayo, pickles", p: "Rs 420", spicy: true },
    { n: "BBQ Chicken Burger", d: "Char-grilled chicken, smoky BBQ sauce, onion rings", p: "Rs 480" },
    { n: "Double Patty Burger", d: "Two beef patties, double cheese, special sauce", p: "Rs 650" },
    { n: "Zinger Tower Burger", d: "Zinger fillet, hash brown, cheese slice", p: "Rs 550", spicy: true },
    { n: "Grilled Chicken Burger", d: "Lean grilled chicken breast, mustard mayo", p: "Rs 430" },
  ],
  BBQ: [
    { n: "Beef Seekh Kebab (6pc)", d: "Charcoal-grilled minced beef skewers", p: "Rs 750", spicy: true },
    { n: "Chicken Tikka (Full)", d: "Overnight marinated, char-grilled", p: "Rs 850", spicy: true },
    { n: "Chicken Boti (Full)", d: "Boneless chicken chunks, smoky finish", p: "Rs 900", spicy: true },
    { n: "Malai Boti (Full)", d: "Creamy mild marinade, char-grilled", p: "Rs 950" },
    { n: "Mixed Grill Platter", d: "Seekh, tikka & boti with naan and salad", p: "Rs 1600", spicy: true },
    { n: "Grilled Wings (6pc)", d: "Charcoal-grilled, tossed in house spice", p: "Rs 600", spicy: true },
  ],
  Sides: [
    { n: "Loaded Fries", d: "Cheese sauce, jalapeño, BBQ drizzle", p: "Rs 380" },
    { n: "Classic Fries", d: "Crispy golden fries, house seasoning", p: "Rs 250" },
    { n: "Garlic Naan", d: "Fresh-baked, brushed with garlic butter", p: "Rs 120" },
    { n: "Raita & Salad", d: "Fresh yogurt raita with side salad", p: "Rs 150" },
    { n: "Onion Rings", d: "Crispy battered onion rings", p: "Rs 300" },
    { n: "Chicken Nuggets (6pc)", d: "Crispy fried, served with dip", p: "Rs 350" },
  ],
  Drinks: [
    { n: "Soft Drink (Regular)", d: "Coke, Pepsi, Sprite, Fanta", p: "Rs 100" },
    { n: "Soft Drink (1.5L)", d: "Coke, Pepsi, Sprite, Fanta", p: "Rs 220" },
    { n: "Fresh Lime Soda", d: "Sweet, salted or mixed", p: "Rs 150" },
    { n: "Mint Margarita", d: "Chilled mint lemonade blend", p: "Rs 180" },
    { n: "Mineral Water", d: "500ml bottle", p: "Rs 60" },
    { n: "Lassi", d: "Sweet or salted, chilled", p: "Rs 200" },
  ],
};

export const CATEGORIES = Object.keys(MENU);

export const SHOP_INFO = {
  name: "Pizza & Burger and BBQ House",
  address: "Main Lahore Road, Bhikhi, 39401, Punjab, Pakistan",
  phone: "+92 306 1113008",
  phoneHref: "tel:+923061113008",
  facebook: "https://facebook.com",
  hours: "Open Daily · Closes 1 AM",
  service: "Dine-in & Takeout",
};
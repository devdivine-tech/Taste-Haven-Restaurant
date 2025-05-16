const drinksMenu = [
  {
    image: "/assets/images/food-menu/drinks-menu/fruit-cocktail.jpg",
    nameOfFood: "Fruit Cocktail",
    description: "Refreshing fruit cocktail with a mix of tropical flavors.",
    price: "#5,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Fruit%20Cocktail.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Fruit%20Cocktail.`
  },
  {
    image: "/assets/images/food-menu/drinks-menu/berry-smoothie.jpg",
    nameOfFood: "Berry Smoothie",
    description: "Creamy smoothie made with fresh berries and yogurt.",
    price: "#6,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Berry%20Smoothie.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Berry%20Smoothie.`
  },
  {
    image: "/assets/images/food-menu/drinks-menu/mango-lassi.jpg",
    nameOfFood: "Mango Lassi",
    description: "Sweet and creamy mango lassi made with fresh mangoes and yogurt.",
    price: "#4,500",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Mango%20Lassi.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Mango%20Lassi.`
  },
  {
    image: "/assets/images/food-menu/drinks-menu/iced-tea.jpg",
    nameOfFood: "Iced Tea",
    description: "Chilled iced tea with a hint of lemon and mint.",
    price: "#3,500",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Iced%20Tea.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Iced%20Tea.`
  },
  {
    image: "/assets/images/food-menu/drinks-menu/pina-colada.jpg",
    nameOfFood: "Pina Colada",
    description: "Creamy pina colada made with pineapple and coconut milk.",
    price: "#7,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Pina%20Colada.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Pina%20Colada.`
  },
  {
    image: "/assets/images/food-menu/drinks-menu/espresso.jpg",
    nameOfFood: "Espresso",
    description: "Rich and bold espresso shot, perfect for coffee lovers.",
    price: "#3,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Espresso.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Espresso.`
  },
  {
    image: "/assets/images/food-menu/drinks-menu/cappuccino.jpg",
    nameOfFood: "Cappuccino",
    description: "Creamy cappuccino topped with frothy milk.",
    price: "#4,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Cappuccino.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Cappuccino.`
  },
  {
    image: "/assets/images/food-menu/drinks-menu/latte.jpg",
    nameOfFood: "Latte",
    description: "Smooth latte with a perfect balance of coffee and milk.",
    price: "#4,500",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Latte.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Latte.`
  },
  {
    image: "/assets/images/food-menu/drinks-menu/mojito.jpg",
    nameOfFood: "Mojito",
    description: "Refreshing mojito with lime, mint, and soda.",
    price: "#6,500",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Mojito.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Mojito.`
  },
  {
    image: "/assets/images/food-menu/drinks-menu/orange-juice.jpg",
    nameOfFood: "Orange Juice",
    description: "Freshly squeezed orange juice, full of vitamin C.",
    price: "#3,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Orange%20Juice.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Orange%20Juice.`
  },
  {
    image: "/assets/images/food-menu/drinks-menu/lemonade.jpg",
    nameOfFood: "Lemonade",
    description: "Chilled lemonade with a tangy and sweet flavor.",
    price: "#3,500",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Lemonade.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Lemonade.`
  },
  {
    image: "/assets/images/food-menu/drinks-menu/milkshake.jpg",
    nameOfFood: "Milkshake",
    description: "Creamy milkshake available in chocolate, vanilla, and strawberry flavors.",
    price: "#5,500",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Milkshake.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Milkshake.`
  },
  {
    image: "/assets/images/food-menu/drinks-menu/iced-coffee.jpg",
    nameOfFood: "Iced Coffee",
    description: "Chilled coffee served over ice with a hint of sweetness.",
    price: "#4,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Iced%20Coffee.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Iced%20Coffee.`
  },
  {
    image: "/assets/images/food-menu/drinks-menu/green-tea.jpg",
    nameOfFood: "Green Tea",
    description: "Hot green tea with a soothing and earthy flavor.",
    price: "#3,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Green%20Tea.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Green%20Tea.`
  },
  {
    image: "/assets/images/food-menu/drinks-menu/hot-chocolate.jpg",
    nameOfFood: "Hot Chocolate",
    description: "Rich and creamy hot chocolate topped with whipped cream.",
    price: "#4,500",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Hot%20Chocolate.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Hot%20Chocolate.`
  },
  {
    image: "/assets/images/food-menu/drinks-menu/sparkling-water.jpg",
    nameOfFood: "Sparkling Water",
    description: "Refreshing sparkling water with a hint of lime.",
    price: "#2,500",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Sparkling%20Water.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Sparkling%20Water.`
  },
  {
    image: "/assets/images/food-menu/drinks-menu/coconut-water.jpg",
    nameOfFood: "Coconut Water",
    description: "Natural coconut water, perfect for hydration.",
    price: "#3,500",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Coconut%20Water.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Coconut%20Water.`
  },
  {
    image: "/assets/images/food-menu/drinks-menu/energy-drink.jpg",
    nameOfFood: "Energy Drink",
    description: "Boost your energy with our refreshing energy drink.",
    price: "#4,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Energy%20Drink.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Energy%20Drink.`
  },
  {
    image: "/assets/images/food-menu/drinks-menu/ginger-tea.jpg",
    nameOfFood: "Ginger Tea",
    description: "Hot ginger tea with a spicy and soothing flavor.",
    price: "#3,500",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Ginger%20Tea.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Ginger%20Tea.`
  },
  {
    image: "/assets/images/food-menu/drinks-menu/banana-smoothie.jpg",
    nameOfFood: "Banana Smoothie",
    description: "Creamy banana smoothie blended with milk and honey.",
    price: "#5,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Banana%20Smoothie.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Banana%20Smoothie.`
  }
];

const fastFoodMenu = [
  {
    image: "/assets/images/food-menu/fastFood-menu/burger-and-fries.jpg",
    nameOfFood: "Burger and Fries",
    description: "Juicy beef burger served with crispy golden fries.",
    price: "#10,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Burger%20and%20Fries.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Burger%20and%20Fries.`
  },
  {
    image: "/assets/images/food-menu/fastFood-menu/pepperoni-pizza.jpg",
    nameOfFood: "Pepperoni Pizza",
    description: "Cheesy pepperoni pizza with a crispy crust.",
    price: "#12,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Pepperoni%20Pizza.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Pepperoni%20Pizza.`
  },
  {
    image: "/assets/images/food-menu/fastFood-menu/chicken-wrap.jpg",
    nameOfFood: "Chicken Wrap",
    description: "Grilled chicken wrap with fresh vegetables and creamy sauce.",
    price: "#8,500",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Chicken%20Wrap.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Chicken%20Wrap.`
  },
  {
    image: "/assets/images/food-menu/fastFood-menu/hotdog.jpg",
    nameOfFood: "Hotdog",
    description: "Classic hotdog served with ketchup, mustard, and relish.",
    price: "#6,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Hotdog.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Hotdog.`
  },
  {
    image: "/assets/images/food-menu/fastFood-menu/chicken-nuggets.jpg",
    nameOfFood: "Chicken Nuggets",
    description: "Crispy chicken nuggets served with a side of barbecue sauce.",
    price: "#7,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Chicken%20Nuggets.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Chicken%20Nuggets.`
  },
  {
    image: "/assets/images/food-menu/fastFood-menu/cheese-sandwich.jpg",
    nameOfFood: "Cheese Sandwich",
    description: "Toasted cheese sandwich with a side of coleslaw.",
    price: "#5,500",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Cheese%20Sandwich.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Cheese%20Sandwich.`
  },
  {
    image: "/assets/images/food-menu/fastFood-menu/fried-chicken.jpg",
    nameOfFood: "Fried Chicken",
    description: "Crispy fried chicken served with a side of mashed potatoes.",
    price: "#9,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Fried%20Chicken.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Fried%20Chicken.`
  },
  {
    image: "/assets/images/food-menu/fastFood-menu/club-sandwich.jpg",
    nameOfFood: "Club Sandwich",
    description: "Triple-layered sandwich with chicken, bacon, lettuce, and tomato.",
    price: "#11,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Club%20Sandwich.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Club%20Sandwich.`
  },
  {
    image: "/assets/images/food-menu/fastFood-menu/fish-and-chips.jpg",
    nameOfFood: "Fish and Chips",
    description: "Golden fried fish served with crispy chips and tartar sauce.",
    price: "#10,500",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Fish%20and%20Chips.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Fish%20and%20Chips.`
  },
  {
    image: "/assets/images/food-menu/fastFood-menu/loaded-fries.jpg",
    nameOfFood: "Loaded Fries",
    description: "Fries topped with cheese, bacon, and ranch dressing.",
    price: "#8,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Loaded%20Fries.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Loaded%20Fries.`
  },
  {
    image: "/assets/images/food-menu/fastFood-menu/steak-sandwich.jpg",
    nameOfFood: "Steak Sandwich",
    description: "Grilled steak sandwich with caramelized onions and cheese.",
    price: "#12,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Steak%20Sandwich.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Steak%20Sandwich.`
  },
  {
    image: "/assets/images/food-menu/fastFood-menu/veggie-burger.jpg",
    nameOfFood: "Veggie Burger",
    description: "Plant-based burger served with lettuce, tomato, and vegan mayo.",
    price: "#9,500",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Veggie%20Burger.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Veggie%20Burger.`
  },
  {
    image: "/assets/images/food-menu/fastFood-menu/chicken-burger.jpg",
    nameOfFood: "Chicken Burger",
    description: "Crispy chicken burger with lettuce, tomato, and mayo.",
    price: "#10,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Chicken%20Burger.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Chicken%20Burger.`
  },
  {
    image: "/assets/images/food-menu/fastFood-menu/cheese-pizza.jpg",
    nameOfFood: "Cheese Pizza",
    description: "Classic cheese pizza with a crispy crust.",
    price: "#11,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Cheese%20Pizza.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Cheese%20Pizza.`
  },
  {
    image: "/assets/images/food-menu/fastFood-menu/bbq-wings.jpg",
    nameOfFood: "BBQ Wings",
    description: "Smoky barbecue wings served with a side of ranch dressing.",
    price: "#9,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20BBQ%20Wings.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20BBQ%20Wings.`
  },
  {
    image: "/assets/images/food-menu/fastFood-menu/tacos.jpg",
    nameOfFood: "Tacos",
    description: "Soft tacos filled with seasoned beef, lettuce, and cheese.",
    price: "#8,500",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Tacos.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Tacos.`
  },
  {
    image: "/assets/images/food-menu/fastFood-menu/chicken-parmesan.jpg",
    nameOfFood: "Chicken Parmesan",
    description: "Breaded chicken topped with marinara sauce and melted cheese.",
    price: "#13,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Chicken%20Parmesan.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Chicken%20Parmesan.`
  },
  {
    image: "/assets/images/food-menu/fastFood-menu/cheesy-garlic-bread.jpg",
    nameOfFood: "Cheesy Garlic Bread",
    description: "Garlic bread topped with melted mozzarella cheese.",
    price: "#6,500",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Cheesy%20Garlic%20Bread.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Cheesy%20Garlic%20Bread.`
  },
  {
    image: "/assets/images/food-menu/fastFood-menu/loaded-nachos.jpg",
    nameOfFood: "Loaded Nachos",
    description: "Nachos topped with cheese, jalapenos, and sour cream.",
    price: "#9,500",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Loaded%20Nachos.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Loaded%20Nachos.`
  },
  {
    image: "/assets/images/food-menu/fastFood-menu/chicken-tenders.jpg",
    nameOfFood: "Chicken Tenders",
    description: "Crispy chicken tenders served with honey mustard sauce.",
    price: "#8,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Chicken%20Tenders.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Chicken%20Tenders.`
  }
];

 const africanMenu = [
  {
    image: "/assets/images/food-menu/african-menu/egusi-and-pounded-yam.jpg",
    nameOfFood: "Egusi and Pounded Yam",
    description: "Traditional Nigerian Egusi soup served with soft pounded yam.",
    price: "#15,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Egusi%20and%20Pounded%20Yam.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Egusi%20and%20Pounded%20Yam.`
  },
  {
    image: "/assets/images/food-menu/african-menu/okra-soup-and-semolina.jpg",
    nameOfFood: "Okra Soup and Semolina",
    description: "Delicious okra soup served with semolina and assorted meat.",
    price: "#14,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Okra%20Soup%20and%20Semolina.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Okra%20Soup%20and%20Semolina.`
  },
  {
    image: "/assets/images/food-menu/african-menu/banga-soup-and-starch.jpg",
    nameOfFood: "Banga Soup and Starch",
    description: "Rich and flavorful Banga soup served with smooth starch.",
    price: "#16,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Banga%20Soup%20and%20Starch.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Banga%20Soup%20and%20Starch.`
  },
  {
    image: "/assets/images/food-menu/african-menu/afang-soup-and-fufu.jpg",
    nameOfFood: "Afang Soup and Fufu",
    description: "Traditional Afang soup served with fufu and assorted meat.",
    price: "#15,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Afang%20Soup%20and%20Fufu.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Afang%20Soup%20and%20Fufu.`
  },
  {
    image: "/assets/images/food-menu/african-menu/ogbono-soup-and-pounded-yam.jpg",
    nameOfFood: "Ogbono Soup and Pounded Yam",
    description: "Delicious Ogbono soup served with soft pounded yam.",
    price: "#14,500",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Ogbono%20Soup%20and%20Pounded%20Yam.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Ogbono%20Soup%20and%20Pounded%20Yam.`
  },
  {
    image: "/assets/images/food-menu/african-menu/edikaikong-and-semo.jpg",
    nameOfFood: "Edikaikong and Semovita",
    description: "Nutritious Edikaikong soup served with semovita.",
    price: "#16,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Edikaikong%20and%20Semovita.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Edikaikong%20and%20Semovita.`
  },
  {
    image: "/assets/images/food-menu/african-menu/nkwobi.jpg",
    nameOfFood: "Nkwobi",
    description: "Spicy and flavorful Nkwobi made with cow foot and traditional spices.",
    price: "#12,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Nkwobi.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Nkwobi.`
  },
  {
    image: "/assets/images/food-menu/african-menu/isi-ewu.jpg",
    nameOfFood: "Isi Ewu",
    description: "Delicious Isi Ewu (goat head) prepared with traditional spices.",
    price: "#13,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Isi%20Ewu.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Isi%20Ewu.`
  },
  {
    image: "/assets/images/food-menu/african-menu/pepper-soup.jpg",
    nameOfFood: "Catfish Pepper Soup",
    description: "Hot and spicy catfish pepper soup with fresh herbs.",
    price: "#14,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Catfish%20Pepper%20Soup.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Catfish%20Pepper%20Soup.`
  },
  {
    image: "/assets/images/food-menu/african-menu/beans-and-plantain.jpg",
    nameOfFood: "Beans and Plantain",
    description: "Well-cooked beans served with fried plantain.",
    price: "#10,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Beans%20and%20Plantain.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Beans%20and%20Plantain.`
  },
  {
    image: "/assets/images/food-menu/african-menu/eba-and-vegetable-soup.jpg",
    nameOfFood: "Eba and Vegetable Soup",
    description: "Tasty vegetable soup served with golden eba and assorted meat.",
    price: "#13,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Eba%20and%20Vegetable%20Soup.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Eba%20and%20Vegetable%20Soup.`
  },
  {
    image: "/assets/images/food-menu/african-menu/abacha-and-ugba.jpg",
    nameOfFood: "Abacha and Ugba",
    description: "Popular African salad made with cassava flakes and ugba, garnished with fish and spices.",
    price: "#11,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Abacha%20and%20Ugba.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Abacha%20and%20Ugba.`
  },
  {
    image: "/assets/images/food-menu/african-menu/tuwo-shinkafa-and-miyan-kuka.jpg",
    nameOfFood: "Tuwo Shinkafa and Miyan Kuka",
    description: "Northern Nigerian delicacy of rice tuwo served with baobab leaf soup.",
    price: "#14,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Tuwo%20Shinkafa%20and%20Miyan%20Kuka.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Tuwo%20Shinkafa%20and%20Miyan%20Kuka.`
  },
  {
    image: "/assets/images/food-menu/african-menu/white-rice-and-banga-soup.jpg",
    nameOfFood: "White Rice and Banga Soup",
    description: "Steamed white rice served with rich and flavorful Banga soup.",
    price: "#12,500",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20White%20Rice%20and%20Banga%20Soup.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20White%20Rice%20and%20Banga%20Soup.`
  },
  {
    image: "/assets/images/food-menu/african-menu/porridge-yam.jpg",
    nameOfFood: "Porridge Yam",
    description: "Creamy yam porridge cooked with palm oil, vegetables, and spices.",
    price: "#10,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Porridge%20Yam.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Porridge%20Yam.`
  },
  {
    image: "/assets/images/food-menu/african-menu/ekpang-nkukwo.jpg",
    nameOfFood: "Ekpang Nkukwo",
    description: "Traditional Efik dish made with grated cocoyam, wrapped in cocoyam leaves.",
    price: "#18,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Ekpang%20Nkukwo.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Ekpang%20Nkukwo.`
  },
  {
    image: "/assets/images/food-menu/african-menu/ogbono-soup-and-wheat.jpg",
    nameOfFood: "Ogbono Soup and Wheat",
    description: "Rich Ogbono soup served with soft wheat swallow and assorted meat.",
    price: "#14,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Ogbono%20Soup%20and%20Wheat.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Ogbono%20Soup%20and%20Wheat.`
  },
  {
    image: "/assets/images/food-menu/african-menu/peppered-snail.jpg",
    nameOfFood: "Peppered Snail",
    description: "Deliciously spiced and peppered snail, a perfect African delicacy.",
    price: "#15,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Peppered%20Snail.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Peppered%20Snail.`
  },
  {
    image: "/assets/images/food-menu/african-menu/akara-and-pap.jpg",
    nameOfFood: "Akara and Pap",
    description: "Crispy bean cakes (Akara) served with creamy pap (ogi).",
    price: "#8,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Akara%20and%20Pap.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Akara%20and%20Pap.`
  },
  {
    image: "/assets/images/food-menu/african-menu/ukodo.jpg",
    nameOfFood: "Ukodo (Yam Pepper Soup)",
    description: "Spicy yam pepper soup cooked with goat meat and aromatic spices.",
    price: "#17,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Ukodo%20(Yam%20Pepper%20Soup).`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Ukodo%20(Yam%20Pepper%20Soup).`
  }
];

const desertsMenu = [
  {
    image: "/assets/images/food-menu/deserts-menu/chocolate-cake.jpg",
    nameOfFood: "Chocolate Cake",
    description: "Rich and moist chocolate cake topped with creamy frosting.",
    price: "#8,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Chocolate%20Cake.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Chocolate%20Cake.`
  },
  {
    image: "/assets/images/food-menu/deserts-menu/vanilla-ice-cream.jpg",
    nameOfFood: "Vanilla Ice Cream",
    description: "Creamy vanilla ice cream served with chocolate syrup.",
    price: "#4,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Vanilla%20Ice%20Cream.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Vanilla%20Ice%20Cream.`
  },
  {
    image: "/assets/images/food-menu/deserts-menu/strawberry-cheesecake.jpg",
    nameOfFood: "Strawberry Cheesecake",
    description: "Delicious cheesecake topped with fresh strawberries.",
    price: "#7,500",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Strawberry%20Cheesecake.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Strawberry%20Cheesecake.`
  },
  {
    image: "/assets/images/food-menu/deserts-menu/apple-pie.jpg",
    nameOfFood: "Apple Pie",
    description: "Classic apple pie served with a scoop of vanilla ice cream.",
    price: "#6,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Apple%20Pie.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Apple%20Pie.`
  },
  {
    image: "/assets/images/food-menu/deserts-menu/fruit-salad.jpg",
    nameOfFood: "Fruit Salad",
    description: "Fresh fruit salad with a mix of tropical fruits.",
    price: "#5,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Fruit%20Salad.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Fruit%20Salad.`
  },
  {
    image: "/assets/images/food-menu/deserts-menu/red-velvet-cake.jpg",
    nameOfFood: "Red Velvet Cake",
    description: "Moist red velvet cake with cream cheese frosting.",
    price: "#9,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Red%20Velvet%20Cake.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Red%20Velvet%20Cake.`
  },
  {
    image: "/assets/images/food-menu/deserts-menu/banana-split.jpg",
    nameOfFood: "Banana Split",
    description: "Classic banana split topped with ice cream and chocolate syrup.",
    price: "#6,500",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Banana%20Split.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Banana%20Split.`
  },
  {
    image: "/assets/images/food-menu/deserts-menu/churros.jpg",
    nameOfFood: "Churros",
    description: "Crispy churros served with a side of chocolate dipping sauce.",
    price: "#5,500",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Churros.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Churros.`
  },
  {
    image: "/assets/images/food-menu/deserts-menu/tiramisu.jpg",
    nameOfFood: "Tiramisu",
    description: "Classic Italian desert made with coffee-soaked ladyfingers and mascarpone.",
    price: "#8,500",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Tiramisu.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Tiramisu.`
  },
  {
    image: "/assets/images/food-menu/deserts-menu/creme-brulee.jpg",
    nameOfFood: "Crème Brûlée",
    description: "Rich custard topped with a layer of caramelized sugar.",
    price: "#9,500",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Crème%20Brûlée.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Crème%20Brûlée.`
  },
  {
    image: "/assets/images/food-menu/deserts-menu/peach-cobbler.jpg",
    nameOfFood: "Peach Cobbler",
    description: "Warm peach cobbler served with a scoop of vanilla ice cream.",
    price: "#7,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Peach%20Cobbler.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Peach%20Cobbler.`
  },
  {
    image: "/assets/images/food-menu/deserts-menu/black-forest-cake.jpg",
    nameOfFood: "Black Forest Cake",
    description: "Decadent chocolate cake layered with cherries and whipped cream.",
    price: "#10,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Black%20Forest%20Cake.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Black%20Forest%20Cake.`
  },
  {
    image: "/assets/images/food-menu/deserts-menu/caramel-flan.jpg",
    nameOfFood: "Caramel Flan",
    description: "Smooth caramel flan with a rich and creamy texture.",
    price: "#6,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Caramel%20Flan.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Caramel%20Flan.`
  },
  {
    image: "/assets/images/food-menu/deserts-menu/macarons.jpg",
    nameOfFood: "Macarons",
    description: "Assorted macarons with a variety of flavors.",
    price: "#5,500",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Macarons.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Macarons.`
  },
  {
    image: "/assets/images/food-menu/deserts-menu/pavlova.jpg",
    nameOfFood: "Pavlova",
    description: "Light meringue desert topped with whipped cream and fresh fruits.",
    price: "#8,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Pavlova.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Pavlova.`
  },
  {
    image: "/assets/images/food-menu/deserts-menu/raspberry-tart.jpg",
    nameOfFood: "Raspberry Tart",
    description: "Buttery tart filled with fresh raspberries and cream.",
    price: "#7,500",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Raspberry%20Tart.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Raspberry%20Tart.`
  },
  {
    image: "/assets/images/food-menu/deserts-menu/cinnamon-rolls.jpg",
    nameOfFood: "Cinnamon Rolls",
    description: "Warm cinnamon rolls topped with cream cheese icing.",
    price: "#6,500",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Cinnamon%20Rolls.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Cinnamon%20Rolls.`
  },
  {
    image: "/assets/images/food-menu/deserts-menu/peanut-butter-brownies.jpg",
    nameOfFood: "Peanut Butter Brownies",
    description: "Fudgy brownies swirled with creamy peanut butter.",
    price: "#7,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Peanut%20Butter%20Brownies.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Peanut%20Butter%20Brownies.`
  },
  {
    image: "/assets/images/food-menu/deserts-menu/blueberry-muffins.jpg",
    nameOfFood: "Blueberry Muffins",
    description: "Soft muffins loaded with fresh blueberries.",
    price: "#5,000",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Blueberry%20Muffins.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%20Blueberry%20Muffins.`
  },
  {
    image: "/assets/images/food-menu/deserts-menu/cheesecake-brownies.jpg",
    nameOfFood: "Cheesecake Brownies",
    description: "Decadent brownies topped with creamy cheesecake.",
    price: "#8,500",
    whatsappLink: `https://wa.me/2348169383907?text=Hello%20I%20would%20like%20to%20order%20Cheesecake%20Brownies.`,
    email: `mailto:bludbrro@gmail.com?subject=Order&body=Hello%20I%20would%20like%20to%20order%Cheesecake%20Brownies.`
  }
];

const fullMenu = [
  ...fastFoodMenu,
  ...africanMenu,
  ...drinksMenu,
  ...desertsMenu
];
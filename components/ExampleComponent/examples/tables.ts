export const example = {
  "name": "Tables",
  "description": "Tables/Grids can be generated from either from a dictionary or from a list.  This example does both: from a dictionary for the header, and from a set of rows for the ingredients.  The table format can be specified either in shorthand format, or full json format.  This example uses the shorthand",
  "data": {
    "summary": {
      "dish": "Pizza",
      "prep_time": "30 min",
      "bake_time": "10 min",
      "servings": 8
    },
    "toppings": [
      {"type": "crust", "ingredient": "water", "amount": "3/4 cup"},
      {"type": "crust", "ingredient": "yeast", "amount": "1 package"},
      {"type": "crust", "ingredient": "cooking oil", "amount": "3 tbsp"},
      {"type": "crust", "ingredient": "salt", "amount": "1 tsp"},
      {"type": "meats", "ingredient": "pepperoni", "amount": "6 oz"},
      {"type": "meats", "ingredient": "sausage", "amount": "8 oz"},
      {"type": "vegetables", "ingredient": "onion", "amount": "1 medium"},
      {"type": "vegetables", "ingredient": "green pepper", "amount": "1"},
      {"type": "vegetables", "ingredient": "jalapeno", "amount": "3"}
    ],
    "directions": [
      "Add 1 package yeast to 3/4 cups very warm water",
      "Stir in 3 tbsp cooking oil and 1 tsp salt",
      "Mix in 2 1/2 cups flour",
      "Spread crust on pizza pan and add tomato sauce, cheese, and toppings",
      "Bake at 550 for 10 minutes"
    ]
  },
  "render_props": {
    ".summary": {
      "_table_format": [
        [["H", "Dish"], "dish", ["H", "Servings"], "servings"],
        [["H", "Prep Time"], "prep_time", ["H", "Bake Time"], "bake_time"]
      ]
    },
    ".toppings": {
      "_table_format": [
        [["H", "Topping"], ["H", "Amount"]]
      ]
    },
    ".toppings.row_data[]": {
      "_table_format": [
        ["ingredient", "amount"]
      ]
    }
  }
};
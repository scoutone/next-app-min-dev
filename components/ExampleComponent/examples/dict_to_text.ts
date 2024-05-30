export const example = {
  "name": "Dict to Text",
  "description": "The transform_js render property can be used to transform dictionary data into a simple string for rendering.  In this case we want to transform each element of the toppings list, so we will use the .toppings[] path selector",
  "data": {
    "summary": {
      "dish": "Pizza",
      "prep_time": "30 min",
      "bake_time": "10 min",
      "servings": 8
    },
    "toppings": [
      {type: "meats", ingredient: "pepperoni"},
      {type: "meats", ingredient: "sausage"},
      {type: "vegetables", ingredient: "onion"},
      {type: "vegetables", ingredient: "green pepper"},
      {type: "vegetables", ingredient: "jalapeno"}
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
    ".toppings[]": {
      "_transform_js": "data.type + ': ' + data.ingredient"
    }
  }
};
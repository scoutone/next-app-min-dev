export const example = {
  "name": "Numbering",
  "description": "By using render properties, the display format of any element in the structured data can be modified.  One example is to add numbering to a specific section (in this case, the directions)",
  "data": {
    "summary": {
      "dish": "Pizza",
      "prep_time": "30 min",
      "bake_time": "10 min",
      "servings": 8
    },
    "toppings": [
      "pepperoni",
      "sausage",
      "onion",
      "green pepper",
      "jalapeno"
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
    ".directions": {
      "_number": true
    }
  }
};
export const example = {
  "name": "Rollup As List",
  "description": "A list can optionally be rolled up as a list instead of a dictionary.  This will result in a set which does not have the headers like a dictionary. This example also orders the groups ascending, and the sub-lists descending (by the ingredient field)",
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
    ".toppings": {
      "_transform_js": "{ return rollup(data, 'type', '\"- \" + data.ingredient', 'desc', 'ingredient', 'asc', 'list'); }"
    }
  }
};
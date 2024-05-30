export const example = {
  "name": "Custom Render",
  "description": "Any element can be rendered with fully customizable jsx code by using the _render_jsx render property.  For this simple example, we will color the bake time red",
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
    ".summary.bake_time": {
      "_render_jsx": "<Text style={{color: 'red'}}>{props.data}</Text>"
    }
  }
};
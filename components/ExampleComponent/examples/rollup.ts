export const example = {
  "name": "Rollup",
  "description": "The rollup transform function can be used to \"roll up\" a list of items into a grouped set of lists.  By default they will be grouped in a dictionary with the grouping attribute as keys.  The rollup function has the following parameters:\n"+
                 "data: the json data to be rolled up\n" + 
                 "field_name: which data attribute to rollup on\n" + 
                 "formatter: an optional format lambda to be used to format each row\n" + 
                 "order: an optional ordering of the groups (asc/desc).  if none specified they will be grouped by first occurrence\n" + 
                 "order_values_field: optional field by which to group sub-lists\n" + 
                 "order_values: optional ordering of sub-list items to be used when the order_values_field is present (default asc)\n" + 
                 "rollup_as: whether to rollup as a list of lists or as a dictionary",
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
      "_transform_js": "{ return rollup(data, 'type', 'data.ingredient'); }"
    }
  }
};
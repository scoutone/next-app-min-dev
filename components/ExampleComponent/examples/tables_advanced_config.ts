export const example = {
  "name": "Tables Advanced Config",
  "description": "This example uses the detailed config to assign custom styles to the tables.  It also uses the _suppress_header, _suppress_hr, and _suppress_indent properties as an example of omitting both the summary header name, the horizontal rule (hr) and the indention of the section respectively.",
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
  "str_render_props": `{
    ".summary": {
      "_suppress_header" : true,
      "_suppress_hr": true,
      "_suppress_indent": true,
      "_table_format": {
        "border": 1,
        "style": {
          "table": {
            "border-collapse": "collapse"
          },
          "th": {
            "border": "1px solid",
            "min-width": "75px",
            "padding-left": "5px",
            "padding-right": "5px",
            "text-align": "right",
            "background-color": "#87e2f5"
          },
          "td": {
            "border": "1px solid",
            "min-width": "75px",
            "text-align": "center",
            "padding-left": "5px",
            "padding-right": "5px"
          }
        },
        "rows": [
          [["H", "Dish"], "dish", ["H", "Servings"], "servings"],
          [["H", "Prep Time"], "prep_time", ["H", "Bake Time"], "bake_time"]
        ]
      }
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
    },
    ".directions": {
      "_number": true
    }
  }`
};
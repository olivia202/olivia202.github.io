// var list_of_images= ["rotdlist/rotdnum1.jpg", "rotdlist/rotdnum2.jpg", "rotdlist/rotdnum3.jpg", "rotdlist/rotdnum4.jpg", "rotdlist/rotdnum7.jpg", "rotdlist/rotdnum8.jpg", "rotdlist//rotdnum9.jpg",  "rotdlist/rotdnum11.jpg", "rotdlist/rotdnum12.jpg", "rotdlist/rotdnum14.jpg", "rotdlist/rotdnum15.jpg"];
var recipe_name= ["HOMEADE ACAI BOWL", "PIZZA", "TOMATO SOUP", "RICE KRISPY TREATS", "FETTUCCINI ALFREDO", "THREE-LAYER BROWNIES", "BURRITO", "GRILLED CHEESE", "CHOCOLATE CHIP PANCAKES", "QUESADILLAS", "FISH TACOS"];

var acai_bowl="1 banana, 4 strawberries, 3 blackberries, 1/2 tablespoon acai powder, 1/2 cup almond milk, 2 pieces of ice, 1 cup almond milk, chopped nuts";
var recipe1="blend all ingredients, pour into a bowl, add fruits/nuts of choice on top, ENJOY!";
var pizza="crust, tomato sauce, cheese";
var recipe2="preheat oven to 350, spread tomato sauce evenly over crust, add grated cheese on top, cook until cripsy, ENJOY!";
var tomato_soup="2 cans diced tomatoes with basil, oregano and garlic, 1/4 cup butter, 2 garlic cloves, 6 tablespoons all-purpose flour, 48oz of chicken broth";
var recipe3="Place tomatoes with juices in a blender; cover and process until pureed. In a large saucepan, heat butter over medium-high heat. Add onion; cook and stir until tender. Add garlic; cook 1 minute longer. Remove from the heat; stir in flour until smooth. Cook for 1 minute. Gradually whisk in broth. Add pureed tomatoes; bring to a boil over medium heat, stirring occasionally. Reduce heat and simmer for 20-25 minutes to allow flavors to blend. If desired, sprinkle with cheese.";
var rice_crispies= "butter, miniature marshmallows, crispy cereal";
var recipe4="Melt butter in large sauce pan over low heat. Add marshmallows and stir until melted and well-blended. Cook 2 minutes longer, stirring constantly. Remove from heat. Add cereal. Stir until well coated. Using buttered spatula or waxed paper, press mixture evenly and firmly in buttered pan.";
var pasta= "24 ounces dry fettuccini pasta, 1 cup butter, 3/4 pint heavy cream, garlic salt, Romano cheese, Parmesan cheese"
var recipe5="Bring a large pot of lightly salted water to a boil. Add fettuccini and cook for 8 to 10 minutes or until al dente; drain. In a large saucepan, melt butter into cream over low heat. Add salt, pepper and garlic salt. Stir in cheese over medium heat until melted. Add pasta to sauce. ";
var brownies= "brownie batter, oreos, chocolate chip cookie dough";
var recipe6="preheat oven to 350, put chocolate chip cookie dough on the bottom of a pan, 1 layer of oreos, one layer of brownie on top, bake for ~10 minutes (until ready), ENJOY!";
var burrito= "meat of choice, taco seasoning, beans, warm tortillas, shredded cheese, sour cream and salsa";
var recipe7="Cook beef over medium heat until no longer pink; drain. Stir in taco seasoning. In a small saucepan, cook beans until heated through. Spoon beans off-center on each tortilla; top beef mixture. Sprinkle with cheese. Fold sides and ends of tortillas over filling and roll up.Brown burritos in oil on all sides. Serve with sour cream and salsa. ENJOY!";
var grilled_cheese="bread, cheese, butter";
var recipe9="Cut two slices of bread and butter the outsides. Put the cheese in between and put sandwich in a pan on the stove. Flip until both sides are cooked. ENJOY!";
var pancakes="1 cup all-purpose flour, 2 tablespoons sugar, 2 teaspoons baking powder, 1/2 teaspoon salt, 1 cup milk, 2 tablespoons melted unsalted butter, 1 large egg, 1 tablespoon vegetable oil";
var recipe10="Preheat oven to 200 degrees; have a baking sheet or heatproof platter ready to keep cooked pancakes warm in the oven. In a small bowl, whisk together flour, sugar, baking powder, and salt; set aside. Whisk together milk, butter (or oil), and egg. Add dry ingredients to milk mixture. For each pancake, spoon 2 to 3 tablespoons of batter onto skillet. Cook until surface of pancakes browned on the underside. ENJOY!";
var quesadillas="tortillas, cheese, meat/veggies of your choice";
var recipe12="Put ingredients on one half of a tortilla. Fold the tortilla in half and fry on the stove until ready ENJOY!.";
var fish_tacos="tortillas, fish, cheese, sauce/garnish of choice";
var recipe13="Heat tortillas. Fry/bake fish in small enough pieces to fit in the tortilla. Put all the other ingredients in the tortillas. ENJOY!";

var real_recipe= [acai_bowl, pizza, tomato_soup, rice_crispies, pasta, brownies, burrito, grilled_cheese, pancakes, quesadillas, fish_tacos];
var recipe_directions= [recipe1, recipe2, recipe3, recipe4, recipe5, recipe6, recipe7, recipe9, recipe10, recipe12, recipe13];


window.onload = function(){
    var num= Math.floor(Math.random() * list_of_images.length);
    var img= list_of_images[num];
    change_img(img);
    var name= recipe_name[num];
    change_name(name);
    var recipe=real_recipe[num];
    add_recipe(recipe);
    var directions=recipe_directions[num];
    add_directions(directions);
}



function change_img(img){
  document.getElementById("image").src = img;
}
function change_name(name){
  document.getElementById("recipe_name").innerHTML = name;
}
function add_recipe(recipe){
  document.getElementById("real_recipe").innerHTML = recipe;
}
function add_directions(directions){
  document.getElementById("recipe_directions").innerHTML = directions;
}

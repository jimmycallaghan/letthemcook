

function buildNaehrwerte(recipe) {
    // Loop around to the next element in the array list and repeat

    var Naehrwerte = recipe.nutrition;

    for (let i = 0; i <Naehrwerte.length; i++) {

        var newNutritionalValuesToAdd = '';
        
        newNutritionalValuesToAdd = '<tr>';
        newNutritionalValuesToAdd += '<td>' + Naehrwerte[i].amount + '</td>';
        newNutritionalValuesToAdd += '<td>' + Naehrwerte[i].name + '</td>';
        newNutritionalValuesToAdd += '</tr>';

        $('#NutritionalValuesTable').append(newNutritionalValuesToAdd);
}}

function buildIngredients(recipe) {
    // Loop around to the next element in the array list and repeat

    var ingredients = recipe.ingredients;

    for (let i = 0; i <ingredients.length; i++) {

        // Create a new string called newRecipeToAdd
        var newRecipeToAdd = '';

        // We need to decide, for this number i, whether it should use the tableOdd
        // or tableEven class. We default to tableOdd (which is defined in the css
        // to have a background color of white).
        let trClass = 'tableOdd';

        // If we perform the operation i%2, on even numbers we will get a result of
        // zero. On odd numbers we will get a result of 1. If we get a zero, change
        // the class to tableEven.
        if (i%2 === 0) {
            trClass = 'tableEven';
        }

        newRecipeToAdd =  '<tr class="' + trClass + '">';
        newRecipeToAdd += '<td class="ingAmount">' + ingredients[i].amount + ' ' + ingredients[i].unit + '</td>';
        newRecipeToAdd += '<td class="ingName">' + ingredients[i].name + '</td>';
        newRecipeToAdd += '</tr>';

        // Find the div with id=recipes on the page and add the new html to it.
        $('#ingredientTable').append(newRecipeToAdd);
    }}

function buildMethod(recipe) {

    var method = recipe.method;

    // Loop around to the next element in the array list and repeat
    for (let i = 0; i <method.length; i++) {

        // We need to decide, for this number i, whether it should use the tableOdd
        // or tableEven class. We default to tableOdd (which is defined in the css
        // to have a background color of white).
        let trClass = 'tableOdd';

        // If we perform the operation i%2, on even numbers we will get a result of
        // zero. On odd numbers we will get a result of 1. If we get a zero, change
        // the class to tableEven.
        if (i%2 === 0) {
            trClass = 'tableEven';
        }

        var newStepToAdd = '';

        newStepToAdd = '<tr class="' + trClass + '">';
        newStepToAdd += '<td class="methodStepCol1">Step ' + (i+1) + ':</td>';
        newStepToAdd += '<td class="methodStepCol2">' + method[i] + '</td>';
        newStepToAdd += '</tr>';

        $('#methodTable').append(newStepToAdd);
    }}

function buildTitle(recipe) {
    $('#titel').append(recipe.name);
}

function addRecipeData(recipe) {
    $('#cookTimeText').append(recipe.infos.cookingTime + " mins");
    $('#difficulty').append(recipe.infos.difficulty);
    $('#dateAdded').append(recipe.infos.dateAdded);
}

function addRecipeImage(recipe) {
    // <img src="img/clock.jpg" alt="image clock;" class="InfoRecipeImg">
    $('#recipeImg').append('<img src="' + recipe.img.src + '" alt="' + recipe.img.alt + '" class="img">');
}

function buildPage(recipeId) {
    buildTitle(recipes[recipeId]);
    addRecipeImage(recipes[recipeId]);
    buildIngredients(recipes[recipeId]);
    buildNaehrwerte(recipes[recipeId]);
    buildMethod(recipes[recipeId]);
    addRecipeData(recipes[recipeId]);
}

// Stole this from internet:
// https://stackoverflow.com/questions/19491336/how-to-get-url-parameter-using-jquery-or-plain-javascript
function getQueryParam(param, defaultValue = undefined) {
    location.search.substr(1)
        .split("&")
        .some(function(item) { // returns first occurence and stops
            return item.split("=")[0] == param && (defaultValue = item.split("=")[1], true)
        })
    return defaultValue
}
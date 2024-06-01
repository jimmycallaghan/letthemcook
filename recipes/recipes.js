// All of the page building goes in here...
function buildrecipe(recipe) {

    for (let i = 0; i < ingredients.length; i++) {

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
        newRecipeToAdd += '<td class="ingAmount">' + recipe[i].amount + ' ' + recipe[i].unit + '</td>';
        newRecipeToAdd += '<td class="ingName">' + recipe[i].name + '</td>';
        newRecipeToAdd += '</tr>';

        // Find the div with id=recipes on the page and add the new html to it.
        $('#ingredientTable').append(newRecipeToAdd);
        
}}

function buildNährwerte(Nährwerte) {
    // Loop around to the next element in the array list and repeat

    for (let i = 0; i <Nährwerte.length; i++) {

        var newNutritionalValuesToAdd = '';
        
        newNutritionalValuesToAdd = '<tr>';
        newNutritionalValuesToAdd += '<td>' + Nährwerte[i].amount + '</td>';
        newNutritionalValuesToAdd += '<td>' + Nährwerte[i].name + '</td>';
        newNutritionalValuesToAdd += '</tr>';

        $('#NutritionalValuesTable').append(newNutritionalValuesToAdd);
}}

function buildTitle(title) {

    $('#titel').append(title);

}
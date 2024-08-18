import React from "react";
import RecipeItem from "./RecipeItem";

const RecipeList = ({ recipes, onEdit, onDelete, searchTerm, sortOrder }) => {
  const filteredAndSortedRecipes = recipes
    .filter(
      (recipe) =>
        recipe.strRecipe.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.strInstructions.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.strRecipe.localeCompare(b.strRecipe);
      } else {
        return b.strRecipe.localeCompare(a.strRecipe);
      }
    });

  return (
    <div className="space-y-4">
      {filteredAndSortedRecipes.map((recipe) => (
        <RecipeItem
          key={recipe.idRecipe}
          recipe={recipe}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};
export default RecipeList;

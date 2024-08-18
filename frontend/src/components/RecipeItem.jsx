import React from "react";

const RecipeItem = ({ recipe, onEdit, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="flex flex-col md:flex-row">
        {recipe.strMealThumb && (
          <div className="md:w-1/3 mb-4 md:mb-0 md:mr-4">
            <img
              src={recipe.strMealThumb}
              alt={recipe.strRecipe}
              className="w-full h-48 object-cover rounded"
            />
          </div>
        )}
        <div className={`${recipe.strMealThumb ? "md:w-2/3" : "w-full"}`}>
          <h3 className="text-xl font-bold mb-2">{recipe.strRecipe}</h3>
          <p className="text-gray-700 text-base mb-2">
            {recipe.strCategory} - {recipe.strArea}
          </p>
          <p className="text-gray-700 text-base mb-4">{recipe.strInstructions}</p>
          <div className="flex flex-wrap space-x-2 mb-4">
            <button
              onClick={() => onEdit(recipe)}
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(recipe.idRecipe)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Delete
            </button>
            {recipe.strYoutube && (
              <a
                href={recipe.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Watch on YouTube
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;

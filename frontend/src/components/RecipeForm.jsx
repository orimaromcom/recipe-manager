import React, { useState } from "react";

const RecipeForm = ({ onSubmit, initialData }) => {
  const [recipe, setRecipe] = useState(
    initialData || {
      strRecipe: "",
      strCategory: "",
      strArea: "",
      strInstructions: "",
      strMealThumb: "",
      strTags: "",
      strYoutube: "",
    }
  );

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(recipe);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div>
        <input
          name="strRecipe"
          value={recipe.strRecipe}
          onChange={handleChange}
          placeholder="Recipe Name"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex space-x-4">
        <input
          name="strCategory"
          value={recipe.strCategory}
          onChange={handleChange}
          placeholder="Category"
          className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <input
          name="strArea"
          value={recipe.strArea}
          onChange={handleChange}
          placeholder="Area"
          className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div>
        <textarea
          name="strInstructions"
          value={recipe.strInstructions}
          onChange={handleChange}
          placeholder="Instructions"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
        />
      </div>
      <div>
        <input
          name="strMealThumb"
          value={recipe.strMealThumb}
          onChange={handleChange}
          placeholder="Image URL"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div>
        <input
          name="strTags"
          value={recipe.strTags}
          onChange={handleChange}
          placeholder="Tags"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div>
        <input
          name="strYoutube"
          value={recipe.strYoutube}
          onChange={handleChange}
          placeholder="YouTube Link"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {initialData ? "Update" : "Add"} Recipe
        </button>
      </div>
    </form>
  );
};
export default RecipeForm;

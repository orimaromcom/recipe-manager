import React, { useState, useEffect } from "react";
import axios from "axios";

import RecipeForm from "./components/RecipeForm";
import RecipeList from "./components/RecipeList";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [editingRecipe, setEditingRecipe] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    const response = await axios.get("http://localhost:3000/recipes");
    setRecipes(response.data);
  };

  const handleSubmit = async (recipe) => {
    if (editingRecipe) {
      await axios.put(`http://localhost:3000/recipes/${editingRecipe.idRecipe}`, recipe);
    } else {
      await axios.post("http://localhost:3000/recipes", recipe);
    }
    fetchRecipes();
    setEditingRecipe(null);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/recipes/${id}`);
    fetchRecipes();
  };

  const handleEdit = (recipe) => {
    setEditingRecipe(recipe);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-bold mb-8 text-center">Recipe Manager</h1>

      <div className="mb-4 flex space-x-2">
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={handleSearch}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button
          onClick={handleSort}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Sort {sortOrder === "asc" ? "A-Z" : "Z-A"}
        </button>
      </div>

      <RecipeList
        recipes={recipes}
        onEdit={handleEdit}
        onDelete={handleDelete}
        searchTerm={searchTerm}
        sortOrder={sortOrder}
      />
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">
          {editingRecipe ? "Edit Recipe" : "Add New Recipe"}
        </h2>
        <RecipeForm onSubmit={handleSubmit} initialData={editingRecipe} />
      </div>
    </div>
  );
};

export default App;

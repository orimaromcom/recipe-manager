const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const app = express();
const port = 3000;
const dbPath = path.join(__dirname, "db.json");

app.use(cors());
app.use(express.json());

function readDB() {
  try {
    const data = fs.readFileSync(dbPath, "utf8");

    return JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      return { recipes: [], lastId: 0 };
    }
    throw error;
  }
}

function writeDB(data) {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

app.get("/recipes", (req, res) => {
  try {
    const db = readDB();

    res.json(db.recipes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching recipes", error: error.message });
  }
});

app.post("/recipes", (req, res) => {
  try {
    const {
      strRecipe,
      strCategory,
      strArea,
      strInstructions,
      strMealThumb,
      strTags,
      strYoutube,
    } = req.body;

    if (!strRecipe || !strInstructions) {
      return res
        .status(400)
        .json({ message: "Recipe name and instructions are required" });
    }

    const db = readDB();
    const newId = Number(db.lastId) + 1;

    const newRecipe = {
      idRecipe: newId,
      strRecipe,
      strCategory,
      strArea,
      strInstructions,
      strMealThumb,
      strTags,
      strYoutube,
    };

    db.recipes.push(newRecipe);
    db.lastId = newId;
    writeDB(db);
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(500).json({ message: "Error creating recipe", error: error.message });
  }
});

app.put("/recipes/:id", (req, res) => {
  try {
    const idRecipe = req.params.id;
    const {
      strRecipe,
      strCategory,
      strArea,
      strInstructions,
      strMealThumb,
      strTags,
      strYoutube,
    } = req.body;

    if (!strRecipe || !strInstructions) {
      return res
        .status(400)
        .json({ message: "Recipe name and instructions are required" });
    }

    const db = readDB();
    let updatedRecipe = null;

    db.recipes = db.recipes.map((recipe) => {
      console.log(recipe.idRecipe, idRecipe);

      if (recipe.idRecipe === Number(idRecipe)) {
        updatedRecipe = {
          ...recipe,
          strRecipe,
          strCategory,
          strArea,
          strInstructions,
          strMealThumb,
          strTags,
          strYoutube,
        };
        return updatedRecipe;
      }
      return recipe;
    });

    if (updatedRecipe) {
      writeDB(db);
      res.json(updatedRecipe);
    } else {
      res.status(404).json({ message: "Recipe not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating recipe", error: error.message });
  }
});

app.delete("/recipes/:id", (req, res) => {
  try {
    const idRecipe = req.params.id;
    const db = readDB();
    const index = db.recipes.findIndex((recipe) => recipe.idRecipe === Number(idRecipe));

    if (index !== -1) {
      db.recipes.splice(index, 1);
      writeDB(db);
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Recipe not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting recipe", error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

import MainLayout from "./Components/Layout/mainLayout";
import {Routes, Route} from 'react-router-dom';
import RecipeOverview from "./pages/RecipeOverview";
import PageItem from "./Components/PageItem";
import Recipe from "../src/pages/Recipe"
import DownloadPage from "./pages/Download";

// Call this site MyRecipeBook, the main concept can be people 
// adding their own recipes and downloading them into their own book for easy reference or gifts for friends.
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
        <Route index element={<PageItem />} />

          <Route path=":country" element={<RecipeOverview />} />
          <Route path=":country/:recipe" element={<Recipe />}/> 

          <Route path="/download" element={<DownloadPage/>} ></Route>

        </Route>
      </Routes>
    </div>
  );
}

export default App;

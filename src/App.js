import React from "react";
import logo from "./assets/images/image-omelette.jpeg";

function App() {
  return (
    <>
      <div className="bg-white mx-auto max-w-[55rem] lg:p-8 lg:md:p-16 lg:rounded-2xl shadow-lg  lg:mt-20 lg:mb-20">
          <div className="w-full">
            <img className="lg:rounded-2xl w-full" src={logo} alt="omlette" />
          </div>
          <div className="mx-auto max-w-[55rem] p-8 lg:rounded-2xl " >
            
          <div >
            <h1 className="font-young-serif text-4xl md:text-5xl mb-4">Simple Omlette Recipe</h1>
            <p className="font-outfit text-lg md:text-xl text-Wenge-Brown">
              An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.
            </p>
          </div>
        

        <div className="bg-rose-white mt-8 md:mt-12 p-6 md:p-10 rounded-2xl ">
          <h2 className="text-dark-raspberry font-bold text-xl md:text-2xl mb-4">Preparation time</h2>
          <div className="px-4 md:px-8">
            <ul className="list-disc text-base md:text-lg text-Wenge-Brown grid gap-5">
              <li><span className="font-bold">Total</span>: Approximately 10 minutes</li>
              <li><span className="font-bold">Preparation</span>: 5 minutes</li>
              <li><span className="font-bold">Cooking</span>: 5 minutes</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 md:mt-12 border-b-2 border-Light-Grey pb-8 md:pb-12">
          <h2 className="text-3xl md:text-4xl text-Nutmeg font-young-serif mb-6">Ingredients</h2>
          <ul className="list-disc px-4 md:px-8 text-lg md:text-xl text-Wenge-Brown">
            <li>2-3 large eggs.</li>
            <li>Salt, to taste.</li>
            <li>Pepper, to taste.</li>
            <li>1 tablespoon butter or oil.</li>
            <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs.</li>
          </ul>
        </div>

        <div className="mt-8 md:mt-12 border-b-2 border-Light-Grey pb-8 md:pb-12">
          <h2 className="text-3xl md:text-4xl text-Nutmeg font-young-serif mb-6">Instructions</h2>
          <ol className="list-decimal px-4 md:px-8 text-lg md:text-xl text-Wenge-Brown marker:text-Nutmeg marker:font-bold">
            <li><span className="font-bold" >Beat the eggs</span>: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</li>
            <li><span className="font-bold" >Heat the pan</span>: Place a non-stick frying pan over medium heat and add butter or oil.</li>
            <li><span className="font-bold" >Cook the omelette</span>: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</li>
            <li><span className="font-bold" >Add fillings (optional)</span>: When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</li>
            <li><span className="font-bold" >Fold and serve</span>: As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</li>
            <li><span className="font-bold" >Enjoy</span>: Serve hot, with additional salt and pepper if needed.</li>
          </ol>
        </div>

        <div className="mt-8 md:mt-12">
          <h2 className="text-3xl md:text-4xl text-Nutmeg font-young-serif mb-4">Nutrition</h2>
          <p className="text-lg md:text-xl font-outfit mb-4 text-Wenge-Brown">
            The table below shows nutritional values per serving without the additional fillings.
          </p>
          <table className="table-auto w-full text-Wenge-Brown">
            <tbody>
              <tr className="border-b-2 border-Light-Grey h-12">
                <td>Calories</td>
                <td className="text-Nutmeg font-bold">277kcal</td>
              </tr>
              <tr className="border-b-2 border-Light-Grey h-12">
                <td>Carbs</td>
                <td className="text-Nutmeg font-bold">0g</td>
              </tr>
              <tr className="border-b-2 border-Light-Grey h-12">
                <td>Protein</td>
                <td className="text-Nutmeg font-bold">20g</td>
              </tr>
              <tr className="h-12">
                <td>Fat</td>
                <td className="text-Nutmeg font-bold">22g</td>
              </tr>
            </tbody>
          </table>
        </div>
          </div>


          
      </div>
    </>
  );
}

export default App;

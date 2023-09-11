/** @format */

// Select the form elements
const inputValue = document.getElementById("searchInput");
const submitButton = document.getElementById("submitButton");
const searchForm = document.getElementById("searchForm");

const getApi = async (foodName) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const meals = data.meals;

    const cards = document.querySelector(".cards");
    cards.innerHTML = "";

    meals.forEach((meal) => {
      const mealName = meal.strMeal;
      const mealImg = meal.strMealThumb;
      const mealVideo = meal.strYoutube;

      const card = document.createElement("div");
      card.setAttribute("class", "card");

      card.innerHTML = `
        <div class="card" style="width: 18rem">
            <img src="${mealImg}" class="p-4" alt="${mealName} Image">
            <div class="card-body">
                <h5 class="card-title text-center">${mealName}</h5>
                <div class="text-center my-4">
                  <a href="${mealVideo}" class="btn btn-dark p-2 px-3">Watch Video</a>
                </div>
            </div>
        </div>
      `;

      cards.appendChild(card);
    });
  } catch (error) {
    console.error("This is an error occurred:", error);
  }
};

searchForm.addEventListener("click", async function (e) {
  e.preventDefault();

  const value = inputValue.value;
  getApi(value);
});

getApi("chicken");

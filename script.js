const meals = [
    {
        name: "Butter Chicken",
        ingredients: ["chicken", "butter", "cream", "tomato", "garlic", "onion"],
        recipe: "Cook chicken, make sauce with butter, cream, and tomato, mix together.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLeCZHU4mOasH9a_n9NNx4RJLRqxGHjgfqgK7IqdmOBjArCxI88tkxVVd8aTP4wIQEX6iqJ-x_03ygq-VBZEYxCnCDvuC5kDEvAVhHpbN_"
    },
    {
        name: "Pasta ",
        ingredients: ["pasta", "cream", "cheese", "garlic", "butter"],
        recipe: "Boil pasta, make Alfredo sauce with butter, cream, and cheese.",
        image: "https://www.spicebangla.com/wp-content/uploads/2024/08/Spicy-Pasta-recipe-optimised-scaled.webp"
    },
    {
        name: "Veggie Stir Fry",
        ingredients: ["broccoli", "carrot", "soy sauce", "garlic", "ginger"],
        recipe: "Stir fry vegetables with soy sauce, garlic, and ginger.",
        image: "https://vismaifood.com/storage/app/uploads/public/366/81f/046/thumb__700_0_0_0_auto.jpg"
    },
    {
        name: "Chicken Biryani",
        ingredients: ["chicken", "rice", "yogurt", "onion", "spices", "garlic"],
        recipe: "Marinate chicken, cook rice, and layer them to make biryani.",
        image: "https://www.apnachef.com/wp-content/uploads/2023/12/chicken-biryani-50-people-wide.jpg"
    },
    {
        name: "Palak Paneer",
        ingredients: ["spinach", "paneer", "garlic", "onion", "tomato", "ginger"],
        recipe: "Blanch spinach, cook onion, ginger, and garlic, then mix with paneer.",
        image: "https://www.cookwithmanali.com/wp-content/uploads/2019/08/Palak-Paneer-500x500.jpg"
    },
    {
        name: "Aloo Gobi",
        ingredients: ["potato", "cauliflower", "turmeric", "garlic", "onion", "cumin"],
        recipe: "Cook potatoes and cauliflower with turmeric, garlic, and cumin.",
        image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/aloo-gobi-recipe.jpg"
    },
    {
        name: "Chole Bhature",
        ingredients: ["chickpeas", "flour", "onion", "tomato", "garlic", "spices"],
        recipe: "Cook chickpeas, make spicy gravy, and serve with fried bhature.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Chole_Bhature_At_Local_Street.jpg/1200px-Chole_Bhature_At_Local_Street.jpg"
    },
    {
        name: "Tandoori Chicken",
        ingredients: ["chicken", "yogurt", "garlic", "ginger", "spices", "lemon"],
        recipe: "Marinate chicken with yogurt and spices, cook in tandoor or oven.",
        image: "https://sinfullyspicy.com/wp-content/uploads/2014/07/1200-by-1200-images-2.jpg"
    },
    {
        name: "Paneer Butter Masala",
        ingredients: ["paneer", "butter", "cream", "tomato", "garlic", "onion", "spices"],
        recipe: "Cook paneer in a rich butter and cream-based gravy.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpiCiOVd2z7Qhnu1FDY90QF7zkYcLfP1jgyA&s"
    },
    {
        name: "Chicken Tikka Masala",
        ingredients: ["chicken", "yogurt", "onion", "garlic", "ginger", "tomato", "cream", "spices"],
        recipe: "Marinate chicken, cook with masala gravy, and add cream.",
        image: "https://shahzadidevje.com/wp-content/uploads/2023/02/Tandoori-Chicken-tikka-2-2.jpg"
    },
    {
        name: "Biryani",
        ingredients: ["rice", "chicken", "yogurt", "onion", "garlic", "spices"],
        recipe: "Cook chicken and rice together with spices to make biryani.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Ja24UiG96COANQY6LXyBO8eDYqBxYweOoQ&s"
    },
    {
        name: "Dosa",
        ingredients: ["rice", "urad dal", "water", "salt"],
        recipe: "Grind rice and dal to make a batter, then cook on a hot griddle.",
        image: "https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__700_0_0_0_auto.jpg"
    }
];
function findMeal() {
    const input = document.getElementById('ingredients').value.toLowerCase().split(',').map(item => item.trim());
    const suggestions = document.getElementById('mealSuggestion');
    suggestions.innerHTML = ''; 
    const matchingMeals = meals.filter(meal => {
        return meal.ingredients.some(ingredient => input.includes(ingredient.toLowerCase())); 
    });
    if (matchingMeals.length > 0) {
        matchingMeals.forEach(meal => {
            const mealCard = document.createElement('div');
            mealCard.classList.add('meal-card');
            mealCard.innerHTML = `
                <h2>${meal.name}</h2>
                <p><strong>Ingredients:</strong></p>
                <ul>
                    ${meal.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
                <p><strong>Recipe:</strong> ${meal.recipe}</p>
                <img src="${meal.image}" alt="${meal.name}">
            `;
            suggestions.appendChild(mealCard);
        });
    } else {
        suggestions.innerHTML = `<p>No meal can be made with the entered ingredients. Please try again.</p>`;
    }
}

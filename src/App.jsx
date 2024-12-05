import "./App.css";
import { useState } from "react";
import IngredientList from "./components/IngredientList";
import BurgerStack from "./components/BurgerStack";

const App = () => {
	const [stack, setStack] = useState([]);

	const ingredients = [
		{ name: "Kaiser Bun", color: "saddlebrown" },
		{ name: "Sesame Bun", color: "sandybrown" },
		{ name: "Gluten Free Bun", color: "peru" },
		{ name: "Lettuce Wrap", color: "olivedrab" },
		{ name: "Beef Patty", color: "#3F250B" },
		{ name: "Soy Patty", color: "#3F250B" },
		{ name: "Black Bean Patty", color: "#3F250B" },
		{ name: "Chicken Patty", color: "burlywood" },
		{ name: "Lettuce", color: "lawngreen" },
		{ name: "Tomato", color: "tomato" },
		{ name: "Bacon", color: "maroon" },
		{ name: "Onion", color: "lightyellow" },
		{ name: "Cheddar Cheese", color: "#FDE18B" },
		{ name: "Swiss Cheese", color: "#F1E1A8" },
	];

	const handleAdd = (ingredient) => {
		if (stack.length < ingredients.length) {
			setStack([ingredient, ...stack]);
		}
	};

	const handleRemove = (index) => {
		setStack(stack.filter((_, i) => i !== index));
	};

	return (
		<main>
			<h1>Burger Stacker</h1>
			<section>
				<IngredientList
					ingredients={ingredients}
					handleAdd={handleAdd}
				/>
				<BurgerStack stack={stack} handleRemove={handleRemove} />
			</section>
		</main>
	);
};

export default App;

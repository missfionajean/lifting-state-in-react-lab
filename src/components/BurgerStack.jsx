const BurgerStack = (props) => {
	return (
        <ul>
            {props.stack.length ? "" : <li>Click [+] To Add An Ingredient</li>}
			{props.stack.map((ingredient, index) => (
				<li key={index} style={{backgroundColor: ingredient.color}}>
					{ingredient.name}
                    <button onClick={() => props.handleRemove(index)}>x</button>
				</li>
			))}
		</ul>
    )
};

export default BurgerStack;

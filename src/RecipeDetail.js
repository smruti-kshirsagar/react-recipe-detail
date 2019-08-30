import React from 'react'

class RecipeDetail extends React.Component {
    render() {
        const recipeArray = this.props.recipeArray;
        const ingredients = recipeArray.ingredients;
        const steps = recipeArray.steps;
        return (
            <section className="recipe-detail" id="recipe-detail">
                <div className="recipe-name">{recipeArray.name}</div>
                <div className="recipe-ingredient">
                    <div className="recipe-name">INGREDIENTS</div>
                    {ingredients && ingredients.map((item,i) => (
                        <div key={i}>
                            <span>{item.amount} </span>
                            <span>{item.measurement} </span>
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
                <div className="recipe-steps">
                    <div className="recipe-name">STEPS</div>
                    {steps && steps.map((item,i) => (
                        <div key={i}>{item}</div>
                    ))}
                </div>
            </section>
        )
    }
}

export default RecipeDetail
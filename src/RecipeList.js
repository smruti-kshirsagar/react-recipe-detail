import React from "react"

class RecipeList extends React.Component {
    render() {
        const recipeName = this.props.recipeName;
        return (
            <li 
            onClick={() => this.props.recipeHandler(this.props.index)}>
                {recipeName}
            </li>
        )
    }
}

export default RecipeList
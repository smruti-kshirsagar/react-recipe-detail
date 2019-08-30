import React from 'react'
import ReactDOM from 'react-dom'
import RecipeHome from './RecipeHome'
import './App.css'

class App extends React.Component {
    render() {
        return (
            <div>
                <RecipeHome />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
import { recipes } from './data'

function Recipe({ id, name, ingredients }: {
    id: string
    name: string
    ingredients: string[]
}) {
    return (
        <>
            <h2>name</h2>
            <ul>
                {ingredients.map(ingredient =>
                    <li key={ingredient}>
                        {ingredient}
                    </li>
                )}
            </ul>
        </>
    );
}


export default function Recipes() {

    return (
        <div>
            <h1 className="text-4xl">Recipes</h1>
            {recipes.map(recipe=>
                <Recipe {... recipe} key={recipe.id}/>
            )}
        </div>
    );
}
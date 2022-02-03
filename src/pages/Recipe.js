import React, {useContext, useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import {Data} from "../data"
import {Context} from "../Context"

function Recipe(){
    const [isDisabled, setDisabled] = useState(false)

    let params = useParams()

    const firstArrayFind = Data.find(item => params.country === item.country)

    const finalArrayFind = firstArrayFind.recipes.find(item=> params.recipe === item.name)
    const recipe = finalArrayFind

    const {favouriteRec, recInBook} = useContext(Context)


    useEffect(() => {
        const doesExist = recInBook.some(item => item.name === recipe.name)
        setDisabled(doesExist)
        
    })

    const styles = {

        ingredients: {

        "text-align": "left",
        "line-height": "180%"
    },
        instructionsUl:{
        "list-style": "none"
    },
        instructionsLi:{
        "margin-bottom": "20px"
        }}
    
    return(
        <div>
            <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div class="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 class="display-4 fw-normal">{recipe.name}</h1>
                    <p class="lead fw-normal">Add small mini description. 2-3 sentences</p>
                </div>
            </div>

            <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
                <div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div class="my-3 p-3">
                        <h2 class="display-5">Another headline</h2>
                        <p class="lead">And an even wittier subheading.</p>
                        <ul style={styles.ingredients}>{recipe.ingredients.map(ingredient => <li>{ingredient}</li>)}</ul>
                    </div>
                </div>
                <div class="me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden" style={{backgroundColor: "#AA2307"}}>
                    <div class="my-3 py-3">
                        <h2 class="display-5">Another headline</h2>
                        <p class="lead">And an even wittier subheading.</p>
                        <ul style={styles.instructionsUl}>{recipe.instructions.map(instructions => <li style={styles.instructionsLi}>{instructions}</li>)}</ul>
                    </div>
                </div>
            </div>
            <div class="d-grid gap-2 col-2 mx-auto">
                <button disabled={isDisabled} class="btn btn-warning btn-lg" type="button" onClick={() => favouriteRec(recipe)}>Add to book</button>
            </div>
        </div>
    )
}

export default Recipe
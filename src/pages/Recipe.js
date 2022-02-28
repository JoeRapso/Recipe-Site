import React, {useContext} from "react"
import {useParams} from "react-router-dom"
import {Data} from "../data"
import {Context} from "../Context"

function Recipe(){

    let params = useParams()

    const firstArrayFind = Data.find(item => params.country === item.country)

    const finalArrayFind = firstArrayFind.recipes.find(item=> params.recipe === item.name)
    const recipe = finalArrayFind

    const {favouriteRec, recInBook} = useContext(Context)

    function btnDisable(id){
        if (recInBook.some(item => item.name === id) === true){
            return true
        } else return false
    } 

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
        },
        button: {
        "margin-bottom": "12px"
        }
    }
    
    return(
        <div>
            <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
                <div class="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 class="display-4 fw-normal">{recipe.name}</h1>
                </div>
            <img class="img-fluid" src={recipe.img} height="700" width="700" alt={recipe.name}/>
            </div>

            <div class="d-md-flex flex-md-equal w-100 my-md-3 text-white ps-md-3">
                <div class="me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden" style={{backgroundColor: "#6082B6"}}>
                    <div>
                        <h2 class="display-5">Ingredients</h2>
                        <ul style={styles.ingredients}>{recipe.ingredients.map(ingredient => <li>{ingredient}</li>)}</ul>
                    </div>
                </div>
                <div class="me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden" style={{backgroundColor: "#AA2307"}}>
                    <div>
                        <h2 class="display-5">Instructions</h2>
                        <ul style={styles.instructionsUl}>{recipe.instructions.map(instructions => <li style={styles.instructionsLi}>{instructions}</li>)}</ul>
                    </div>
                </div>
            </div>
            <div class="d-grid gap-2 col-4 mx-auto" style={styles.button}>
                <button disabled={btnDisable(recipe.name)} class="btn btn-warning btn-lg" type="button" onClick={() => favouriteRec(recipe)}>Add to book</button>
            </div>
        </div>
    )
}

export default Recipe
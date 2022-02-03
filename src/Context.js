import React,{useState} from "react"

const Context = React.createContext()

function ContextProvider(props){
    const [recInBook, setRecInBook] = useState([])

    function favouriteRec(recipeObj){
        setRecInBook([...recInBook, recipeObj])

    }

    function removeRecipe(name){
        setRecInBook(prevItems => prevItems.filter(item => item.name !== name))
    }

    return (
        <Context.Provider value={{favouriteRec, recInBook, removeRecipe}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}

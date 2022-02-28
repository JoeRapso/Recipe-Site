import React, {useContext} from "react";
import {Context} from "../Context"


function DownloadPage(){
    const {recInBook, removeRecipe} = useContext(Context)

    const items = recInBook.map(item =>(
        <li class="list-group-item d-flex justify-content-between align-items-center">
          {item.name}
        <button type="button" class="btn btn-danger btn-sm rounded-pill badge" onClick={() => removeRecipe(item.name)}>Remove</button>
        </li>
  ))
    
    function download(){
        
        let opt = {
            filename: "recipes"
        }
        const pdfEl = recInBook.map(element =>(
            `<h1 style="margin-bottom:30px;">${element.name}</h1>` +
            `<h4 style="padding-bottom:10px">Ingredients</h4>` +
            `<p>${element.ingredients.join('. ')}.</p> ` +
            `<h4 style="padding-bottom:10px">Instructions</h4>` +
            `<p>${element.instructions.join('<hr style="color: white;margin-bottom:5px;"/>')}</p> <hr style="line-height: 8px"/>`
        )).join('')
        window.html2pdf().set(opt).from(pdfEl, "string").save();

    }
    console.log(recInBook)

    return(
        <div class="container" style={{height: "100vh"}}>
            {recInBook.length > 0 ? 
                <ul class="list-group" style={{paddingTop: "5px"}}>
                    {items}
                <div class="d-grid gap-2 col-4 mx-auto">
                    <button class="btn btn-warning" type="button" style={{paddingTop: "5px"}} onClick={() => download()}>Download now</button>
                </div>
                </ul> : <h2>You have added no recipes. Add some to be able to download.</h2>
            }
        </div>
    )
}

export default DownloadPage
import React, {Component} from 'react'
import "./GifList.css"

class GifList extends Component{

    state = {
        gif: []
    }

   genList = () => {
    return this.props.gifs.map((gif,idx) => {
        return (idx <= 2) ? <li key={idx}><img className="img" src={gif.images.original.url} alt=""/></li> : null
    })
   }

    render(){
        return(
            <ul className="img-list">
                {this.genList()}
            </ul>
        )
    }
}

export default GifList;
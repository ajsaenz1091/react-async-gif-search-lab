import React, {Component} from 'react'
import GifList from "../components/GifList"
import GifSearch from "../components/GifSearch"
import "./GiftListContainer.css"


class GifListContainer extends Component{

    state = {
        gifs: []
    }

    handleFetch = (term) => {
        const key = 'qsZF4F7svONEb6GUW7IrVnVvx8sAskhe'
        let url = `https://api.giphy.com/v1/gifs/search?q=${term}&api_key=${key}&rating=g`
        fetch(url)
        .then(res => res.json())
        .then(gifData => {
            console.log(gifData.data)
            return this.setState({gifs:gifData.data})})
    }


    render(){
        return(
            <div className="gif-container">
                <GifList gifs={this.state.gifs}/>
                <GifSearch handleFetch={this.handleFetch}/>
            </div>
        )
    }
}

export default GifListContainer;
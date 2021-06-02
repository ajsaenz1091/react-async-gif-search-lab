import React, {Component} from 'react'


class GifSearch extends Component{

    constructor(){
        super();
        this.state = {
            term: ''
        }
    }

   handleChange = (e) => {
        e.persist()
        this.setState({term: e.target.value})
   }

   handleSubmit = (e) => {
       e.preventDefault()
       this.props.handleFetch(this.state.term)
   }

    render(){
        return(
            <form className="text-center" onSubmit={this.handleSubmit}>
                <h3>Enter a Search Term</h3>
                <input className="form-control-plaintext" onChange={this.handleChange} type="text" value={this.state.term}/>
                <input className="btn btn-success" type="submit" value="Submit"/>
            </form>
        )
    }
}

export default GifSearch;
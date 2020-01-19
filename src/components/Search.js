import React from "react";
import './style.css';

class Search extends React.Component {
    state={
        term: ""
    };

    handleOnChange = event => {
        this.setState({
            term: event.target.value
        });
       
    }
// we call the callback func here not in the element cz we need to handle the form submit preventDefault
    handleOnSubmit = event => {
        event.preventDefault();
        this.props.searchVideo(this.state.term)
         console.log(this.state.term)
    }

render() {
        return( 

            <div>
            <form onSubmit={this.handleOnSubmit}>
            <div className="search">

                <input
                placeholder="Search..."
                className="form-control form-control-lg"
                type="text"
                value={this.state.term}
                onChange={this.handleOnChange}
                
                />
            </div>
            </form>
        </div>
        )
    }
}

export default Search
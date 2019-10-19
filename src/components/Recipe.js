import React, { Component } from 'react';
import axios from 'axios';
import './Recipe.css'


 class Recipe extends Component {
  
  constructor(props){
    super(props)
    this.state = {
        itemsHeading:[],
        show:20,
        loading:true

    }
  }

  

  componentDidMount() {
    const APP_ID = 'f75874ca';
    const APP_KEY = 'eda1384922444fcaa9caf56e9921ea96';
    const exampleRequ =`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=${this.state.show}`;
    axios.get(`${exampleRequ}`).then(response => this.setState({
          itemsHeading:response.data.hits,
          loading:false
    }))

  }

  loadNextPage = (e) => {
    this.setState({
      show:this.state.show+4
    })
    const exampleRequ =`https://api.edamam.com/search?q=chicken&app_id=f75874ca&app_key=eda1384922444fcaa9caf56e9921ea96&from=0&to=${this.state.show+4}`;
    axios.get(`${exampleRequ}`).then(response => this.setState({
          itemsHeading:response.data.hits,
          loading:false
    }))

      e.preventDefault();
      console.log(this.state.show);
  }


  render() {
    const {itemsHeading,loading} = this.state
    console.log(itemsHeading);
      if (loading === true) {
      return <div className="col text-center py-5"><h1>Loading</h1></div>
    }
    
    return (
          <div className="recipe-wrapper">
            <div className="container">
           
              <div className="row">
                  {
                    itemsHeading.map( (x,i) => (
                         <div className="col-md-3" key={i}>
                            <div className="recipe-item">
                              <h1>{x.recipe.label}</h1>
                              <div className="recipe-thum">
                                <img src={x.recipe.image} alt=""/>
                              </div>
                              <div className="recipe-info">
                               <ul>
                                 {x.recipe.healthLabels.map((singheltl,i) => (
                                   
                                      <li key={i}>{singheltl}</li>
                                    
                                  ))}
                                 </ul>
                              </div>
                            </div>
                         </div>
                      ))
                  }
              </div>
            </div>
           <div className="load-more-button">
             <div className="container">
             <div className="row">
              <div className="col-md-12">
                <button onClick={this.loadNextPage}>Next</button>
              </div>
             </div>
            </div>
           </div>
          </div>
    )
  }
}

export default Recipe;

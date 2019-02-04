import React, { Component } from "react"
import axios from "axios"
import Card from "./components/Card/Card.js"
import CardContainer from "./components/Card/CardContainer.js"
import CitySearchBar from "./components/SearchBar/CitySearchBar.js"
import NameSearchBar from "./components/SearchBar/NameSearchBar.js"
import "./App.css"

const URL = "https://opentable.herokuapp.com/api/restaurants?city="

class App extends Component {
  state = {
    restaurants: null,
    masterData: null,
    city: "",
    searchName: ""
  }

  componentDidMount = () => {
    let prevData = JSON.parse(localStorage.getItem("restaurantData"))
    if (prevData) {
      this.setState({
      masterData: prevData,
      restaurants: prevData
    })
  }
  }
  
  searchByCity = event => {
    event.preventDefault()
    this.getData(this.state.city.trim().toLowerCase())
    this.setState({city: ""})
  }
  
  getData = city => {
    axios.get(URL + city)
      .then(res => {
        this.setState({
          restaurants: res.data.restaurants,
          masterData: res.data.restaurants
        },
        () => this.saveToMemory()
      )})
      .catch(err => console.log(err));
  }

  saveToMemory = () => {
    localStorage.setItem("restaurantData", JSON.stringify(this.state.masterData))
  }
  
  handleCityChange = event => {
    const { name, value } = event.target
    this.setState({[name]: value})
  }
  
  handleExtend = (index, event) => {
    let copyOfData = [...this.state.restaurants]
    copyOfData[index].isExtended = true
    this.setState({ restaurants: copyOfData })
  }
  
  handleClosure = (index, event) => {
    let copyOfData = [...this.state.restaurants]
    copyOfData[index].isExtended = false
    this.setState({ restaurants: copyOfData })
  }
  
  updateListForName = () => {
    let updatedDataArr = [];
    let copyOfData = [...this.state.masterData]
    let substring = this.state.searchName.toLowerCase()
    copyOfData.forEach(restaurant => {
      let name = restaurant.name.toLowerCase();
      if (name.includes(substring)) {
        updatedDataArr.push(restaurant)
      }
    })
    this.setState({ restaurants: updatedDataArr })
  }
  
  handleNameChange = event => {
    const { name, value } = event.target;
    
    this.setState({
      [name]: value
    },
    () => this.updateListForName());
  }

  render() {
    return (
      <div id="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="col-6 col-md-3"></div>
            <div className="col-sm-6">
              <CardContainer>
                <form id="cityForm" onSubmit={this.searchByCity}>
                <CitySearchBar
                  value={this.state.city}
                  onChange={this.handleCityChange}
                  placeholder="Enter a city"
                  name="city"
                />
                   <button className="btn btn-primary" onClick={this.searchByCity}>
                    Submit
                  </button>
                  </form>
                <NameSearchBar
                  value={this.state.searchName}
                  onChange={this.handleNameChange}
                  placeholder="Search your results by restaurant name"
                  name="searchName"
                />
                {this.state.restaurants !== null ? (
                  <div id="cards-container">
                    {this.state.restaurants.map((restaurant, index) => (
                      <Card
                        key={restaurant.id}
                        index={index}
                        price={restaurant.price}
                        address={restaurant.address}
                        city={restaurant.city}
                        pic={restaurant.image_url}
                        name={restaurant.name}
                        postalCode={restaurant.postal_code}
                        reserveURL={restaurant.reserve_url}
                        isExtended={restaurant.isExtended}
                        handleExtend={this.handleExtend}
                        handleClosure={this.handleClosure}
                      />
                    ))}
                  </div>
                ) : (
                    <div id="noDataMsg">
                    <p id="noDataP">Hungry?</p>
                    <p>Why not search for restaurants in your area?</p>
                    </div>
                  )}
              </CardContainer>
            </div>
            <div className="col-6 col-md-3"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;


import axios from "axios";

describe('#getData() using Promises', () => {
    it('should load restaurant data with city params', () => {
      return axios.get("http://opentable.herokuapp.com/api/restaurants?city=toronto")
      .then(data => {
        expect(data).toBeDefined()
        expect(data.data.restaurants).toBeDefined()
      })
    })
  })

describe('#getData() using Promises', () => {
    it('should load restaurant data with montreal passed in as a city', () => {
      return axios.get("http://opentable.herokuapp.com/api/restaurants?city=montreal")
      .then(data => {
        expect(data).toBeDefined()
        expect(data.data.restaurants).toBeDefined()
      })
    })
  })
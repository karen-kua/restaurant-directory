**1. Q: How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.**

A: I spent roughly 3 hours on the coding test.  Roughly half was spent on the actual set up and code with the other half spent on styling. 

If I could add to this coding test, I would add the following functionalities/features: 

* I would add a feature to save/bookmark a user's favourite restaurants.  To do this, we would use local storage if we're purely running on the browser. If we are able to add in a node express environment, we can store saved/bookmarked restaurants into a database or write to a file.

* If we were able to add in a node express environment with a database, I would add in the ability to create accounts and log into accounts.  This would include session token verification with JWT and a middleware before any API calls are called as well as the matching of hashed/encrypted passwords (passwords would be encrypted with libraries like bcrypt). Having accounts allows for users to store their saved/booked restaurants.

* If we were able to make this a node express app with user account verification, we could also add "tags" to different restaurants and query restaurants by tags.

**2. Q: What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.**

A: The  most useful feature that was added to my chosen language (React) was the feature to expand and collapse the restaurants' descriptions.  If they are collapsed, only the name appears, whereas when you expand the card, you will get the following details:

- The name of the restaurant (clikable anchor tag to the Open Table url)
- The address (street, city, and postal code)
- The price (toFixed(2))

Being able to expand and collapse information allows for users to have more interaction with the web page, making it better stylistically.  It also allows for more restaurants to show up, even on a smaller screen (when the cards are collapsed). 

A turnary alongside with a boolean prop are used in the child stateless component called Cards.  The turnary allows the program to render different contexts for the card when the user expands/collapses the card depending on the boolean value that's passed down as a prop. (props.isExtended must be true when the card has expanded)

-----Snippet of Code of Card.js-----
const Card = props => (

  props.isExtended ? (
    <div className="card">
      <div className="row">

        <div className="col-md-3">
          <img src={props.pic} alt={props.name}/>
        </div>

    <div className="col-md-7">
          <a href={props.reserveURL} target="blank_">{props.name}</a>
          
          <div className="detailsClass">
            <p>
              <span className="subHeaders">Price: </span> 
              ${props.price.toFixed(2)}
            </p>
            <p>
              <span className="subHeaders">Address: </span>
              {props.address}
            </p>
            <p>
              <span className="subHeaders">City: </span>
              {props.city}
            </p>
            <p>
              <span className="subHeaders">Postal Code: </span>
              {props.postalCode}
            </p>
          </div> 
          </div>

          <div className="col-md-2">
          <i 
          className="fas fa-minus extendSymbol"  
          onClick={(event) => props.handleClosure(props.index, event)}>
          </i>
          </div>

      </div>
    </div>
  ): 
  <div className="card">
      <div className="row">

        <div className="col-md-7" id="headerDiv">
          <header className="headerClass">{props.name}</header>
        </div>

        <div className="col-md-2">
          <i 
          id="iID"
          className="fa fa-plus extendSymbol"  
          onClick={(event) => props.handleExtend(props.index, event)}>
          </i>
          </div>
          
      </div>
    </div>
);
export default Card;

**3. Q: How would you track down a performance issue in production? Have you ever had to do this?**

A: You can track down perforamnce issues in production in various ways:
- Use JMeter
- Check DNS and network connection
- Check the status of servers
- Go through code to refactor code that could be optimized (eg. instead of nested  loops where you get O(N by the power of the number of loops), you can write in O(N) by using hashmaps)

I have had to refactor code, check DNS and network connections, check the status of servers for MySQL and MongoDB databases, and check the status of the hosting environment.  I have not done JMeter scripting, but I have read some blogs about it.

**4: Q: How would you improve the API that you just used?**

A: I would improve the API that I just used by doing the following:

- add in the "limit" parameter, making the data set that's returned as large as 100 or more restaurants 
- add in the "review_counnt" attribute as a key in the returned object for each restaurant. We would then be able to sort the restaurants by restaurants with the highest to lowest number of reviews. 
- add in the "category" attribute as a key in the returned object for each restaurant. We would then be able to query the results by cuisine. 

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

class Dashboard extends Component {
  mapListItems() {
    if (this.props.initialState.length !== 0) {
      console.log('going in the if');
      return this.props.initialState.map(item => {
        if (item.length == 0) {
          return;
        }
        return (
          <div>
            <Link
              to={{
                pathname: '/trip/' + item.id
              }}
              className="collection-item"
            >
              {item.address}
            </Link>
          </div>
        );
      });
    } else {
      return (
        <div>
          <h2>Welcome to TravelBudd!</h2>
          <br />
          <br />
          <div class="explainFeatures">
            <div class="img-with-text">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1HKkqYhof3jMwXJvmgglpuYkBp4nzn6H4rahcNiFPgCpFFqNA"
                height="200"
              />
              <h5>
                TravelBudd was made for those who love to travel but need assistance in budgeting for their trip!
              </h5>
            </div>
            <div class="img-with-text">
              <img
                src="https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/1434727/1160/772/m1/fpnw/wm0/money-bag-icon-flat-01-.jpg?1467978237&s=449288bbf1e0dfb5c584b17d46b302a3"
                height="200"
              />
              <h5>
                We are dedicated to all your travel expense needs, all organized in one place and page!
              </h5>
            </div>
            <div class="img-with-text">
              <img
                src="https://cdn0.iconfinder.com/data/icons/hotel-icons-rounded/110/Hotel-512.png"
                height="200"
              />
              <h5>
                We make it easier for you to organize accommodation, transportation, activities, and so much more with our built in expense categories!
              </h5>
            </div>
          </div>
          <br />
          <h5 align="center">  
        {' '}<Link to="plan/add">
            <button class="startButton">
                Start Budget
            </button>
        </Link>{' '}
        <br/>
            or 
        <br/> 
            click the red button on the bottom right corner.
        <br/>
        <br/>
         </h5>
        </div>
      );
    }
    return;
  }

  render() {
    return (
      <div className="container">
        <div className="collection">{this.mapListItems()} </div>
        <div className="fixed-action-btn">
          <Link to="plan/add">
            <Button variant="fab" color="secondary" aria-label="add">
              <AddIcon />
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log('state changed: ', state);
  return { initialState: state };
};

export default connect(mapStateToProps)(Dashboard);

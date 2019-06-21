import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addParkToUserFavorites } from "../actions/userActions";

class ParkDetail extends Component {
  render() {
    const renderParkDetail = () => {
      if (this.props.selectedPark && this.props.currentUser.favorites) {
        const checkFavorites = this.props.currentUser.favorites.filter(
          park => park.name === this.props.selectedPark.name
        );
        console.log(checkFavorites);
        return (
          <div className="ui cards">
            <div className="card">
              <div className="content">
                <div className="header">{this.props.selectedPark.name}</div>
                <div className="description">
                  <strong>Description: </strong>
                  {this.props.selectedPark.description}
                </div>
                <div className="description">
                  <strong>States: </strong>
                  {this.props.selectedPark.states}
                </div>
                <div className="description">
                  <strong>Directions: </strong>
                  <a
                    href={this.props.selectedPark.directionsUrl}
                    target="_blank"
                  >
                    {this.props.selectedPark.directionsUrl}
                  </a>
                </div>
                <div className="description">
                  <strong>Weather: </strong>
                  {this.props.selectedPark.weatherInfo}
                </div>
              </div>
              <div>
                {checkFavorites.length > 0 ? (
                  <div className="ui bottom attached button">
                    <i className="heart icon" />One Of Your Favorites
                  </div>
                ) : (
                  <div
                    className="ui bottom attached button"
                    onClick={() => {
                      console.log("A");
                      this.props.addParkToUserFavorites(
                        this.props.selectedPark,
                        this.props.currentUser
                      );
                      console.log("B");
                    }}
                  >
                    <i className="add icon" />
                    Add To Favorites
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      }
    };

    return <div>{renderParkDetail()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    selectedPark: state.parks.selectedPark,
    currentUser: state.user.currentUser
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addParkToUserFavorites
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ParkDetail);

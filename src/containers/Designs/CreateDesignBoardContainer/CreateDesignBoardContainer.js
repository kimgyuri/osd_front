import React, { Component } from "react";
import CreateBoard from "components/Designs/CreateBoard";
import { connect } from "react-redux";
import { CreateDesignBoardRequest, GetDesignBoardRequest } from "actions/Designs/DesignBoard";

class CreateDesignBoardContainer extends Component {
  render() {
    return(
      <CreateBoard {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.Authentication.status.token
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    CreateDesignBoardRequest: (data, design_id, token) => {
      return dispatch(CreateDesignBoardRequest(data, design_id, token));
    },
    GetDesignBoardRequest: (id) => {
      return dispatch(GetDesignBoardRequest(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateDesignBoardContainer);

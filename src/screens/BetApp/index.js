import React from 'react';
import { connect } from 'react-redux';
import { getCategoriesRequest } from '@redux/modules/bet';


import BetMain from '../../screens/BetMain';
import BetCategory from '../../screens/BetCategory';

class BetApp extends React.Component {

  componentDidMount() {
    this.props.getCategoriesRequest();
  }

  render() {
    return (
      <React.Fragment>
        {this.props.isBonusOpen ? <BetMain /> : <BetCategory />}
      </React.Fragment>
    )
  }
}


const mapStateTopProps = ({ bet }) => ({
  category: bet.category,
  isBonusOpen: bet.isBonusOpen,
});

const mapDispatchToProps = {
  getCategoriesRequest,
};

export default connect(mapStateTopProps, mapDispatchToProps)(BetApp);

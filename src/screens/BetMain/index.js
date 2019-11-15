import React from 'react';
import { connect } from 'react-redux';

import { getBonusesRequest, clickLinkRequest } from '@redux/modules/bet';
import TopBar from '../../components/TopBar';
import Card from './components/Card';

import * as S from './styled';


class BetMain extends React.Component {

  componentDidMount() {
    this.props.getBonusesRequest();
  }

  render() {
    const { bonuses, loading } = this.props;
    return (
      <React.Fragment>
        <TopBar />
        <S.Container>
          <S.Title>Бонусы</S.Title>
          {bonuses && bonuses.map(bonus => <Card onLinkClick={this.props.clickLinkRequest} bonus={bonus} />)}
        </S.Container>
      </React.Fragment>
    );
  }
}

const mapStateTopProps = ({ bet }) => ({
  bonuses: bet.bonuses,
  loading: bet.loadingBonuses,
});

const mapDispatchToProps = {
  getBonusesRequest,
  clickLinkRequest,
};

export default connect(mapStateTopProps, mapDispatchToProps)(BetMain);

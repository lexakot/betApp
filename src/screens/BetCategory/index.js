import React from 'react';
import { ImageBackground, ActivityIndicator, RefreshControl } from 'react-native';
import { connect } from 'react-redux';

import { likeBetRequest, clickLinkRequest, getBetsRequest } from '@redux/modules/bet';

import TopBar from '../../components/TopBar';
import Card from './components/Card';

import * as S from './styled';

const source = 'http://api-taptobet.somee.com/';

const BetCategory = (props) => {
  const { bets, category, loading } = props;
  return (
    <React.Fragment>
      <TopBar componentId={props.componentId} />
      <ImageBackground blurRadius={10} source={{ uri: `${source}${category.backgroundPath}` }} style={{ width: '100%', height: '100%' }}>
        {!loading ? <S.Container>
          <RefreshControl refreshing={loading} onRefresh={() => props.getBetsRequest(category.id)} />
          <S.Title>{category.title}</S.Title>
          {bets && bets.map(bet => <Card onLikePress={props.likeBetRequest} onLinkPress={props.clickLinkRequest} bet={bet} />)}
        </S.Container> : <ActivityIndicator size="large" />}
      </ImageBackground>
    </React.Fragment>
  );
}

const mapStateTopProps = ({ bet }) => ({
  category: bet.category,
  bets: bet.bets,
  loading: bet.loading,
});

const mapDispatchToProps = {
  likeBetRequest,
  clickLinkRequest,
  getBetsRequest,
};

export default connect(mapStateTopProps, mapDispatchToProps)(BetCategory);

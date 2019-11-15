import React from 'react';
import { connect } from 'react-redux';

import { requestLogout } from '@redux/modules/auth';

import PrimaryButton from '@components/PrimaryButton';
import apps from '@apps';

import * as S from './styled';

const Drawer = (props) => {
  const logout = () => {
    props.requestLogout();
    apps.singleScreen();
  };
  return (
    <S.Container>
      <PrimaryButton title="Logout" onPress={logout} />
    </S.Container>
  );
};

const mapDispatchToProps = {
  requestLogout,
};

export default connect(null, mapDispatchToProps)(Drawer);

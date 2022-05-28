import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, ViewProps} from 'react-native';

export default function CenterView({children}: ViewProps) {
  return <View style={styles.main}>{children}</View>;
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

CenterView.defaultProps = {
  children: null,
};

CenterView.propTypes = {
  children: PropTypes.node,
};

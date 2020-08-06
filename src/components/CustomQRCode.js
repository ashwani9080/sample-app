import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';
import QRCode from 'react-native-qrcode-svg';

// import Fonts from '@utils/Fonts';
import countryConfig from '@config/countryConfig';
import Colors from '@utils/Colors';

const CustomQRCode = ({url, errorText}) => {
  return (
    <View testID="container" style={styles.container}>
      {url ? (
        <QRCode value={url} size={215} />
      ) : (
        <View style={styles.qrContainer}>
          <Text
            style={[
              styles.errorText,
              // Fonts[countryConfig.countryCode].fontRoboto16R,
            ]}>
            {errorText}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 18,
  },
  errorText: {
    color: Colors.raw.black60,
  },
  qrContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 215,
    width: 215,
  },
});

CustomQRCode.propsTypes = {
  url: PropTypes.string,
  errorText: PropTypes.string,
};

CustomQRCode.defaultProps = {
  url: '',
  errorText: '',
};

export default CustomQRCode;

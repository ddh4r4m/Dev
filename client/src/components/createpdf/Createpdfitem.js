import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import './table.css';
import {
  Page,
  Text,
  View,
  Image,
  Font,
  Document,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Oswald'
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: 'Oswald'
  },
  text: {
    margin: 12,
    fontSize: 10,
    textAlign: 'justify',
    fontFamily: 'Times-Roman'
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey'
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey'
  },
  content: {
    padding: 2,
    '@media max-width: 100': {
      flexDirection: 'column'
    },
    '@media min-width: 100': {
      flexDirection: 'row'
    }
  },
  block: {
    height: 'auto',
    width: 110,
    backgroundColor: 'red'
  }
});

const Createpdfitem = ({
  userdata: { text, year, policestation, _id, natureofcrime, crimeregisterno }
}) => (
  <View style={styles.content}>
    <View style={[styles.block, { backgroundColor: 'red' }]}>
      <Text style={styles.text}>
        Praesent condimentum, nisl ut ultricies sodales, orci est molestie
        justo, eget ullamcorper turpis arcu ac sem. In hac habitasse platea
      </Text>
    </View>
    <View style={[styles.block, { backgroundColor: 'green' }]}>
      <Text style={styles.text}>
        Praesent condimentum, nisl ut ultricies sodales, orci est molestie
        justo, eget ullamcorper turpis arcu ac sem. In hac habitasse platea
        Nullam et bibendum metus, id ultricies quam.
      </Text>
    </View>
    <View style={[styles.block, { backgroundColor: 'red' }]}>
      <Text style={styles.text}>{year} </Text>
    </View>
    <View style={[styles.block, { backgroundColor: 'green' }]}>
      <Text style={styles.text}>{text} </Text>
    </View>
    <View style={[styles.block, { backgroundColor: 'red' }]}>
      <Text style={styles.text}>{policestation} </Text>
    </View>
    <View style={[styles.block, { backgroundColor: 'green' }]}>
      <Text style={styles.text}>{crimeregisterno} </Text>
    </View>
    <View style={[styles.block, { backgroundColor: 'red' }]}>
      <Text style={styles.text}>{natureofcrime} </Text>
    </View>
  </View>
);

Createpdfitem.propTypes = {
  userdata: PropTypes.object.isRequired
};

export default Createpdfitem;

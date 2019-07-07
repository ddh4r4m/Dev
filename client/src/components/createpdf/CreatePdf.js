import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { getUsersdata } from '../../actions/userdata';
import Spinner from '../layout/Spinner';
import Createpdfitem from '../../components/createpdf/Createpdfitem';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';

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
  PDFDownloadLink,
  BlobProvider
} from '@react-pdf/renderer';

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 15,
    paddingBottom: 35,
    paddingRight: 14,
    paddingLeft: 14
    // paddingHorizontal: 35
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
    margin: 1,
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
    marginBottom: 10,
    textAlign: 'center',
    color: 'grey'
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 10,
    bottom: 1,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey'
  },
  content: {
    margin: -2,
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
    backgroundColor: 'red',
    border: 1
  },
  smallblock: {
    height: 'auto',
    width: 50,
    backgroundColor: 'red',
    border: 1
  },
  vsmallblock: {
    height: 'auto',
    width: 30,
    backgroundColor: 'red',
    border: 1
  },
  unbreakable: { width: '100%', height: 400 }
});

const CreatePdf = ({ getUsersdata, userdata: { usersdata, loading } }) => {
  useEffect(() => {
    getUsersdata();
  }, [getUsersdata]);

  const Quixote = () => (
    <Document>
      <Page style={styles.body} wrap size='A4' orientation='landscape'>
        <Text style={styles.header} fixed>
          ~ GOVERNMENT Of INDIA ~
        </Text>
        <Text style={styles.title}>Atrocity Act</Text>
        <Text style={styles.author}>Miguel de Cervantes</Text>
        {/* <Image style={styles.image} src='/static/images/quijote1.jpg' /> */}
        <Text style={styles.subtitle}>
          Capítulo I: Que trata de la condición y ejercicio del famoso hidalgo
          D. Quijote de la Mancha
        </Text>

        <Text style={styles.subtitle}>
          Capítulo II: Que trata de la primera salida que de su tierra hizo el
          ingenioso Don Quijote
        </Text>
        {/* <Image style={styles.image} src='/static/images/quijote2.png' /> */}

        <View style={styles.content}>
          <View style={[styles.block, { backgroundColor: '' }]}>
            <Text style={styles.text}>Praesent condimentum</Text>
          </View>
          <View style={[styles.block, { backgroundColor: '' }]}>
            <Text style={styles.text}>Pnisl ut ultric</Text>
          </View>
          <View style={[styles.block, { backgroundColor: '' }]}>
            <Text style={styles.text}>year</Text>
          </View>
          <View style={[styles.vsmallblock, { backgroundColor: '' }]}>
            <Text style={styles.text}>text </Text>
          </View>
          <View style={[styles.block, { backgroundColor: '' }]}>
            <Text style={styles.text}>policestation </Text>
          </View>
          <View style={[styles.block, { backgroundColor: '' }]}>
            <Text style={styles.text}>crimeregisterno </Text>
          </View>
          <View style={[styles.block, { backgroundColor: '' }]}>
            <Text style={styles.text}>natureofcrime </Text>
          </View>
        </View>
        <View style={styles.content}>
          {usersdata.length > 0 ? (
            usersdata.map(userdata => (
              <Createpdfitem key={userdata._id} userdata={userdata} />
            ))
          ) : (
            <Text>No Data Found</Text>
          )}
        </View>
        <View style={styles.content}>
          {usersdata.length > 0 ? (
            usersdata.map(userdata => (
              <Createpdfitem key={userdata._id} userdata={userdata} />
            ))
          ) : (
            <Text>No Data Found</Text>
          )}
        </View>
        <View style={styles.content}>
          {usersdata.length > 0 ? (
            usersdata.map(userdata => (
              <Createpdfitem key={userdata._id} userdata={userdata} />
            ))
          ) : (
            <Text>No Data Found</Text>
          )}
        </View>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );

  return loading ? (
    <Spinner />
  ) : (
    <PDFViewer width={1000} height={900}>
      <Quixote />
    </PDFViewer>
  );
};

CreatePdf.propTypes = {
  getUsersdata: PropTypes.func.isRequired,
  userdata: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  userdata: state.userdata
});

export default withRouter(
  connect(
    mapStateToProps,
    { getUsersdata }
  )(CreatePdf)
);

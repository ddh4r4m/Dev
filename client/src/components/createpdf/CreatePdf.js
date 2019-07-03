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
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman',
    border: 1
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
    width: 200,
    backgroundColor: 'red'
  }
});

var myarray = { width: 841.89, height: 595.28 };
console.log(typeof myarray);

const CreatePdf = ({ getUsersdata, userdata: { usersdata, loading } }) => {
  useEffect(() => {
    getUsersdata();
  }, [getUsersdata]);

  const Quixote = () => (
    <Document>
      <Page style={styles.body} wrap size='A4' orientation='landscape'>
        <Text style={styles.header} fixed>
          ~ Created with react-pdf ~
        </Text>
        <Text style={styles.title}>Don Quijote de la Mancha</Text>
        <Text style={styles.author}>Miguel de Cervantes</Text>
        {/* <Image style={styles.image} src='/static/images/quijote1.jpg' /> */}
        <Text style={styles.subtitle}>
          Capítulo I: Que trata de la condición y ejercicio del famoso hidalgo
          D. Quijote de la Mancha
        </Text>

        <Text style={styles.subtitle} break>
          Capítulo II: Que trata de la primera salida que de su tierra hizo el
          ingenioso Don Quijote
        </Text>
        {/* <Image style={styles.image} src='/static/images/quijote2.png' /> */}
        <Text>
          Serial No. Police Station FIR No. SectionsApplied Victim Accused
        </Text>
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

export default connect(
  mapStateToProps,
  { getUsersdata }
)(CreatePdf);

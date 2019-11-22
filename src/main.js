import { DoctorNameSearch } from  './backend.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// API Framework

$(document).ready(function() {
  $('#sumbitForm').submit(function(event) {
    event.preventDefault();

    $('#outputInfo').text(`${response.data[0].profile.first_name}`);
    const getElements = function(response) {
      let listLength = response.data.length;
      console.log(listLength);
    }

      const doctorName = $('#nameInput').val();


      (async () => {
        let doctorNameSearch = new DoctorNameSearch();
        let response = await doctorNameSearch.getDoctorNameSearch(doctorName);
        getElements(response);
      })();


    });
  });

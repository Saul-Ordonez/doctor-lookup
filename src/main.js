import { DoctorNameSearch } from  './backend.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// API Framework

$(document).ready(function() {
  $('#nameSearch').submit(function(event) {
    event.preventDefault();

    const nameInput = $('#nameInput').val();
  });
});

(async () => {
  let doctorNameSearch = new DoctorNameSearch();
  let jsonifiedResponse = await doctorNameSearch.getDoctorNameSearch();

  getElements(jsonifiedResponse);
})();

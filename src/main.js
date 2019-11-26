import { BetterDoctorAPI } from  './backend.js';
import { BetterDoctorSymptomAPI } from './backend.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#submitForm').submit(function(event) {
    event.preventDefault();

    const doctorName = $('#nameInput').val();

    (async () => {
      let betterDoctorAPI = new BetterDoctorAPI();
      let response = await betterDoctorAPI.getBetterDoctorAPI(doctorName);
      getElements(response);
    })();

    const getElements = function(response) {
      let dataLength = response.data.length;
      $("#outputDoctorSearch").text(" ");
      $("#outputSymptomSearch").text(" ");

      for(let i = 0;i < dataLength; i++){
        let node = document.createElement("LI");
        let textnode = document.createTextNode(`Name: ${response.data[i].profile.first_name} ${response.data[i].profile.last_name}, ${response.data[0].profile.title} Phone: ${response.data[i].practices[0].phones[0].number} Address: ${response.data[i].practices[0].visit_address.street} ${response.data[i].practices[0].visit_address.city} ${response.data[i].practices[0].visit_address.state}, ${response.data[i].practices[0].visit_address.zip} Accepting new Patents: ${response.data[i].practices[0].accepts_new_patients}`);
        node.appendChild(textnode);
        document.getElementById("outputInfo").appendChild(node);
      }
    };

  });
});

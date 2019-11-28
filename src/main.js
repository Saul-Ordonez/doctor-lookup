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
    const symptom = $('#symptomInput').val();

    (async () => {
      let betterDoctorAPI = new BetterDoctorAPI();
      let response = await betterDoctorAPI.getBetterDoctorAPI(doctorName);
      getElements(response);
    })();


    const getElements = function(response) {
      let dataLength = response.data.length;
      $("#outputDoctorSearch").text(" ");

      if (dataLength === 0) {
        $("#outputDoctorSearch").text("I'm sorry, your search has no results");
      } else {
        for(let i = 0;i < dataLength; i++){
          let node = document.createElement("LI");
          let textnode = document.createTextNode(`Name: ${response.data[i].profile.first_name} ${response.data[i].profile.last_name}, ${response.data[0].profile.title} Phone: ${response.data[i].practices[0].phones[0].number} Address: ${response.data[i].practices[0].visit_address.street} ${response.data[i].practices[0].visit_address.city} ${response.data[i].practices[0].visit_address.state}, ${response.data[i].practices[0].visit_address.zip} Accepting new Patents: ${response.data[i].practices[0].accepts_new_patients}`);
          node.appendChild(textnode);
          document.getElementById("outputDoctorSearch").appendChild(node);
        }
      }

      (async () => {
        let betterDoctorSymptomAPI = new BetterDoctorSymptomAPI();
        let response2 = await betterDoctorSymptomAPI.getBetterDoctorAPI(symptom);
        getElements2(response2);
      })();
    };

    const getElements2 = function(response2) {
      let dataLength2 = response2.data.length;
      $("#outputSymptomSearch").text(" ");

      if (dataLength2 === 0) {
        $("#outputSymptomSearch").text("I'm sorry, your search has no results");
      } else {
        for(let i = 0;i < dataLength2; i++){
          let node2 = document.createElement("LI");
          let textnode2 = document.createTextNode(`Name: ${response2.data[i].profile.first_name} ${response2.data[i].profile.last_name}, ${response2.data[0].profile.title} Phone: ${response2.data[i].practices[0].phones[0].number} Address: ${response2.data[i].practices[0].visit_address.street} ${response2.data[i].practices[0].visit_address.city} ${response2.data[i].practices[0].visit_address.state}, ${response2.data[i].practices[0].visit_address.zip} Accepting new Patents: ${response2.data[i].practices[0].accepts_new_patients}`);
          node2.appendChild(textnode2);
          document.getElementById("outputSymptomSearch").appendChild(node2);
        }
      }
    };

  });
});

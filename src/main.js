import { BetterDoctorAPI } from  './backend.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// API Framework



(async () => {
  let betterDoctorAPI = new BetterDoctorAPI();
  const response = await betterDoctorAPI.getBetterDoctorAPI();
  getElements(response);
})();

const getElements = function(response) {
  console.log(response.data[0].profile.slug);
  $('#firstName').text(response.data[0].profile.first_name);
};
// $(document).ready(function() {
  //   $('#submitForm').submit(function(event) {
    //     event.preventDefault();

    // const doctorName = $('#nameInput').val();

    // const getElements = function(response) {
      //   let length = response.data.length;
      //   $('#outputInfo').text(" ");
      //
      //   //https://www.w3schools.com/jsref/met_document_createelement.asp
      //   //used for creating node
      //
      //   for(let i = 0; i < length; i++){
        //     let node = document.createElement("LI");
        //     let textnode = document.createTextNode(`Name: ${response.data[i].profile.first_name}`);
        //     node.appendChild(textnode);
        //     document.getElementById("#outputInfo").appendChild(node);
        //   }
        //
        // };

        (async () => {
          let betterDoctorAPI = new BetterDoctorAPI();
          let response = await betterDoctorAPI.getBetterDoctorAPI();
          getElements(response);
        })();

        //   });
        // });

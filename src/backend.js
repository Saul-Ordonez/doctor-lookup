export class DoctorNameSearch {
  async getDoctorNameSearch(doctorName){
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${doctorName}&location=or-portland&user_location=45.5051%2C-122.6750&skip=0&limit=10&user_key=212ad6ed443d09a0d5ff554485f44c1c`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}

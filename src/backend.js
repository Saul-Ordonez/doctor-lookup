export class BetterDoctorAPI {
  async getBetterDoctorAPI(doctorName){
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?first_name=${doctorName}&location=or-portland&user_location=45.5051%2C%20122.6750&sort=full-name-asc&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}

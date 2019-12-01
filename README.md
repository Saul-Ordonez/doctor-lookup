# Week 6 Project (Doctor Lookup)

#### Application uses BetterDoctor database to let user search for doctors in their area.

#### By **Saul Ordonez**

## Description

This webpage application will allow users to search a database for doctors in their area. Users can search by doctor name or by medical condition. The latter will produce a list of doctors that meet the criteria to treat that condition if any are available.

## Specs

Behavior | Input | Output
--- | --- | ---
**User enters value that is not within the parameters of the search will get error message** | User enters '45' in doctor search field | "Please enter a correct name" is displayed
**User searches for doctor in their area but none are found** | User enters 'Joe Schmoe' in the doctor search field | "I'm sorry there are no doctors with that name in your area" is displayed
**User searches for symptom in the the symptom search field but no doctor results are found** | User enters 'multiple sclerosis' in the symptom search field | "I'm sorry there are no doctors that can treat that in your area" is displayed
**User searches for a doctor** | User enters "Jon Smith" in the doctor search field | A list of the top 10 doctors most closely related to searched name is populated. Information including name, address, phone, and availability are displayed for each
**User searches for a symptom a doctor could treat** | User enters "headache" in the symptom search field | A list of the top 10 doctors most closely related to searched symptom is populated. Information including name, address, phone, and availability are displayed for each

## Setup/Installation Requirements

* Clone GitHub project repository and open index file into internet browser.
* Run 'npm install' in your command line in project root directory to install appropriate dependencies.
* Run 'npm run build' in your command line to bundle appropriate files.
* Run 'npm run start' in your command line to start live development server in browser.
>This project was tested and works with Google Chrome browser.

* internet service required when cloning project repository onto local computer.

**You will need to have an API key from https://developer.betterdoctor.com/ in order to use the database**


## Known Bugs

There are no known bugs at this time but may be subject to change.

## Support and contact details

If there are any issues or bugs the developer may not be aware of please contact at:

#### * sauleordonez@gmail.com
#### * (503)-382-9034

## Technologies Used

* HTML
* Javascript
* NPM Webpack
* CSS
* jQuery
* BetterDoctor API
* Bootstrap
* Atom text editor
* Google Chrome

### License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Copyright (c) 2019 **_Saul Ordonez_**

# Project Readme

This project is a web application that displays job postings fetched from a JSON server. The application is built using React Router Dom and Redux Store.

## Requirements

The following are the requirements for this project:

- Jobs should be fetched from the JSON server and displayed in the list. Different color codes are given for 'Internship', 'Full Time', 'Remote' jobs, according to that color code should be shown in the list.
- If you click on 'Add New Job' from the sidebar, you will be taken to the 'Create' page using the React Router Dom and if you click on the Save button with the required information, it will go to the Redux Store and be saved.
- If you click on 'All Available Jobs' from the sidebar, all the jobs will be shown. If you click on Internship, only the jobs of 'Internship' will be shown. Similarly, if you click on 'Full Time' and 'Remote' jobs, only 'Full Time' and 'Remote' jobs will be filtered.
- If you click on the edit button, it will take you to the edit page, and you will be able to edit all the details of the job. After changing the information and clicking on the Edit button, the information will be changed and will go to the 'All Available' page.
- On clicking the delete button, the job will be deleted.
- Search feature should be added. In that case, the job search will only be done by the job title, and it should be done on the client-side, not on the server-side.
- There is a filter dropdown next to search, clicking on it will sort according to Salary. That is, sometimes the salary will be sorted from 'low to high' (ascending), and sometimes 'high to low' (descending). This needs to be done on the client-side, not the server-side.

## Setup

Clone the repository to your local machine.

First of all, run the server. to do that, follow the instructions below:

0. Open new terminal.
1. Change Directory using the command `cd server`
2. Install the dependencies using the command `npm install`.
3. Start the application using the command `npm start`.
4. Access the server by opening `http://localhost:9000` in your browser.

Then to run this project, follow the instructions below:

0. Open another terminal.
1. Install the dependencies using the command `npm install`.
2. Start the JSON Server using the command `npm run server`.
3. Start the application using the command `npm start`.
4. Access the application by opening `http://localhost:3000` in your browser.

## Technologies

This project was built using the following technologies:

- React.js
- Redux Toolkit
- JSON Server
- JavaScript
- HTML
- CSS

Deployed Link: https://job-finder-sohel473.netlify.app/

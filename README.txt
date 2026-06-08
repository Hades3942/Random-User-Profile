README - Lab 5 Submission
========================

Student Name:    [Your Name]
Registration No: [Your Reg No]

Tasks Completed
---------------
- Question 1: Currency Converter (Frankfurter API)
  - Fetch & display conversion on button click
  - JSON inspection via console.log + comment on exact path
  - Invalid currency handling with explanation comment
  - Show rates date (data.date)
  - Rates table using Object.entries().forEach()

- Question 7: Profile Page (Random User API)
  - Load one profile on page load (photo + full name)
  - Deep JSON drilling: email, phone, full address
  - Extra fields: age and username
  - "Load Another Person" button without page reload
  - Error handling for network failure

How to Run
----------
fetch() does NOT work on file:// pages.
You must serve the folder over HTTP:

  1. Open a terminal in this folder
  2. Run:  python -m http.server
  3. Open: http://localhost:8000/
  4. Open q1_currency.html or q7_profile.html in your browser
  5. Keep the Console open (right-click -> Inspect -> Console) to see console.log output

Files
-----
  q1_currency.html  - Q1 page structure
  q1_currency.css   - Q1 styles
  q1_currency.js    - Q1 JavaScript logic

  q7_profile.html   - Q7 page structure
  q7_profile.css    - Q7 styles
  q7_profile.js     - Q7 JavaScript logic

  README.txt        - This file

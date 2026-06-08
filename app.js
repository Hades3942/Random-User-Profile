
// We asked for just 1 person using ?results=1
var API_URL = 'https://randomuser.me/api/?results=1';

// --- Helper function: builds and displays the profile card ---
function showProfile(person) {

  // TASK 1 - Full name (title + first + last):
  // The person object is deeply nested. Name lives at: data.results[0].name
  // We combine title, first and last for a complete name.
  var title    = person.name.title;    // e.g. "Mr"
  var first    = person.name.first;    // e.g. "James"
  var last     = person.name.last;     // e.g. "Wilson"
  var fullName = title + ' ' + first + ' ' + last;

  // Photo: person.picture.large gives a high-quality portrait image
  var photo = person.picture.large;

  // TASK 2 - Deep drilling for email, phone, address:
  // Email:   person.email
  // Phone:   person.phone
  // Address: built from person.location.street.number, .street.name, .city, .country
  var email   = person.email;
  var phone   = person.phone;
  var street  = person.location.street.number + ' ' + person.location.street.name;
  var city    = person.location.city;
  var country = person.location.country;
  var address = street + ', ' + city + ', ' + country;

  // TASK 3 - Extra fields:
  // Age:      person.dob.age
  // Username: person.login.username
  var age      = person.dob.age;
  var username = person.login.username;

  // Build the card HTML
  var card = document.getElementById('profileCard');
  card.innerHTML =
    '<img src="' + photo + '" alt="Profile photo of ' + fullName + '">' +
    '<h2>' + fullName + '</h2>' +
    '<p class="username">@' + username + '</p>' +
    '<div class="profile-info">' +
      '<p><span class="label">Email:</span> ' + email + '</p>' +
      '<p><span class="label">Phone:</span> ' + phone + '</p>' +
      '<p><span class="label">Address:</span> ' + address + '</p>' +
      '<p><span class="label">Age:</span> ' + age + '</p>' +
    '</div>';
}


// --- TASK 1 & 4: Load one profile function ---
function loadProfile() {

  // Clear any previous error
  document.getElementById('errorMsg').textContent = '';

  // Show loading placeholder while waiting for the API
  var card = document.getElementById('profileCard');
  card.innerHTML = '<p>Loading profile...</p>';

  fetch(API_URL)
    .then(function (response) {
      return response.json();  // Convert response body to a JavaScript object
    })
    .then(function (data) {

      // console.log(data) lets us inspect the full JSON structure in the browser Console.
      // The person object is at: data.results[0]
      // (results is an array, so [0] gives the first — and only — person we asked for)
      console.log(data);

      var person = data.results[0];
      showProfile(person);
    })
    .catch(function (error) {
      // TASK 5 - Handle failure:
      // If the network request fails, show a friendly message instead of a blank card.
      document.getElementById('profileCard').innerHTML = '';
      document.getElementById('errorMsg').textContent =
        'Could not load profile. Please check your connection and try again. (' + error.message + ')';
    });
}


// --- Run on page load (Task 1) ---
loadProfile();


// --- TASK 4: "Load Another Person" button ---
// Calls loadProfile() again — fetches a brand-new person without reloading the page
document.getElementById('newProfileBtn').addEventListener('click', function () {
  loadProfile();
});

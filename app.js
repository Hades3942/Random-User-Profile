// Function to fetch and display one profile
function loadProfile() {
  const profileDiv = document.getElementById("profile");
  profileDiv.innerHTML = "Loading..."; // show loading state

  fetch("https://randomuser.me/api/?results=1")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      // Drill into nested JSON
      const person = data.results[0]; // first result

      // Full name: title + first + last
      const fullName = `${person.name.title} ${person.name.first} ${person.name.last}`;

      // Photo
      const photo = person.picture.large;

      // Contact info
      const email = person.email;
      const phone = person.phone;

      // Address: street number + street name + city + country
      const address = `${person.location.street.number} ${person.location.street.name}, ${person.location.city}, ${person.location.country}`;

      // Extra fields: age + username
      const age = person.dob.age;
      const username = person.login.username;

      // Build HTML card
      profileDiv.innerHTML = `
        <img src="${photo}" alt="Profile Photo">
        <h2>${fullName}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Username:</strong> ${username}</p>
      `;
    })
    .catch(error => {
      profileDiv.innerHTML = "Failed to load profile. Please try again.";
      console.error("Error fetching profile:", error);
    });
}

// Load one profile on page load
window.onload = loadProfile;

// Load another profile when button is clicked
document.getElementById("newProfile").addEventListener("click", loadProfile);

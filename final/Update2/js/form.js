document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const from = document.getElementById("from").value;
  const comments = document.getElementById("comments").value;
  const rating = document.getElementById("rating").value;

  // 1. Validation for Name, From, and Comments
  if (!name || !from || !comments) {
    alert("Name, From, and Comments are required!");
    return;
  }

  // 2. Validation for age (ensure it's a number and >= 18)
  if (!age || isNaN(age) || age < 18) {
    alert("Please enter a valid age, 18 is the minimum age.");
    return;
  }

  // 3. Validation for rating (1-5)
  if (!rating || rating < 1 || rating > 5) {
    alert("Please rate your experience between 1 and 5.");
    return;
  }

  const data = {
    name: name,
    age: age,
    from: from,
    comments: comments,
    rating: rating,
  };

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "submit.json", true); // Using GET to fetch the message
  xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      try {
        const response = JSON.parse(xhr.responseText);
        document.getElementById("message").innerHTML = response.message;
      } catch (error) {
        alert("Unexpected response from the server");
      }
      document.getElementById("myForm").style.display = "none"; // Hide form after submission
    } else if (xhr.readyState === 4) {
      alert("Error! Try again later.");
    }
  };

  xhr.send(); // No need to send form data in GET, just retrieve the response
  console.log(data); // You can log form data if needed, but it's not being sent
});

// Discord API URL to get user information
const userId = "827031832155521030"; // Replace with the actual ID of the user you want to check
const token =
  "MTA2OTY4MTU3NDA5MTY5ODMwNw.GkJEe-.Arh-xFYSRJQsRceyeXxirmCKG-WF2KdeAOqg1U"; // Replace with your Discord bot token
const url = `https://discordapp.com/api/v6/users/${userId}`;

// Fetch user information from Discord API
fetch(url, { headers: { Authorization: `Bot ${token}` } })
  .then((response) => response.json())
  .then((data) => {
    // Check if user is online or offline
    const status = data.presence.status;
    const isOnline = status === "online";

    // Display result in HTML
    const statusElement = document.getElementById("status");
    statusElement.innerHTML = isOnline ? "Online" : "Offline";
  });

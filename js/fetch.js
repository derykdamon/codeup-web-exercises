"use strict";

function getUserDetails(username) {
    const url = `https://api.github.com/users/${username}`;

    return fetch(url, {
        headers: { 'Authorization': `token ${GH_KEY}` }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            } else {
                return response.json();
            }
        })
        .then(userDetails => {
            return userDetails; // This contains all the user details provided by GitHub's API.
        });
}

function getLastCommitDate(username) {
    const url = `https://api.github.com/users/${username}/events/public`;

    return fetch(url, {
        headers: { 'Authorization': `token ${GH_KEY}` }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            } else {
                return response.json();
            }
        })
        .then(events => {
            for (let event of events) {
                if (event.type === "PushEvent") {
                    return new Date(event.created_at);
                }
            }
            throw new Error('No push events found');
        });
}

function promptUsernameAndGetLastCommit() {
    const username = prompt("Please enter the GitHub username:");
    if (username) {
        getLastCommitDate(username)
            .then(date => {
                alert(`The last commit date of ${username} is: ${date}`);
                // After showing the date, ask the user if they want more details.
                if (confirm("Do you want to see more on this user?")) {
                    getUserDetails(username)
                        .then(userDetails => {
                            // Display user details. You can format this however you like.
                            alert(`User Details:\n\n` +
                                `Login: ${userDetails.login}\n` +
                                `Name: ${userDetails.name}\n` +
                                `Bio: ${userDetails.bio}\n` +
                                `Public Repos: ${userDetails.public_repos}\n` +
                                `Followers: ${userDetails.followers}\n` +
                                `Following: ${userDetails.following}\n` +
                                `URL: ${userDetails.html_url}\n` +
                                `Created at: ${new Date(userDetails.created_at)}`);
                        })
                        .catch(error => {
                            alert(`Error: ${error.message}`);
                        });
                }
            })
            .catch(error => {
                alert(`Error: ${error.message}`);
            });
    } else {
        alert("You did not enter a username.");
    }
}

// Run the function when the script loads
promptUsernameAndGetLastCommit();

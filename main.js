gsap.from('div', {duration: 1, y: -50, opacity: 0});
gsap.from('img', {duration: 1, y: 30, opacity: 0});

// An array of followers to be displayed
let followers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// The number of followers to display per page
const followersPerPage = 5;

// Initialize the current page
let currentPage = 1;

// Calculate the number of pages needed
let numberOfPages = Math.ceil(followers.length / followersPerPage);

// Display the followers for the current page
function displayFollowers() {
  let startIndex = (currentPage - 1) * followersPerPage;
  let endIndex = startIndex + followersPerPage;
  let followersToDisplay = followers.slice(startIndex, endIndex);
  let followersList = "";

  followersToDisplay.forEach(follower => {
    followersList += `<li class="text-center py-2 border-b border-gray-300">Follower ${follower}</li>`;
  });

  document.querySelector("#followers-container").innerHTML = `<ul class="text-left">${followersList}</ul>`;
}

// Show the previous page of followers
document.querySelector("#prev-button").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    displayFollowers();
  }
});

// Show the next page of followers
document.querySelector("#next-button").addEventListener("click", () => {
  if (currentPage < numberOfPages) {
    currentPage++;
    displayFollowers();
  }
});

// Display the followers for the first page
displayFollowers();
// Wait for the DOM to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', () => {
  // Array of objects representing different content to be displayed in cards
  const content = [
    { id: 1, userName: "name", prompName: 'New User', img: 'user-icon.png', content: 'A new user has signed up.' },
    { id: 2, userName: "name", prompName: 'Purchased', img: 'purchase-icon.png', content: 'A customer made a purchase.' },
    { id: 3, userName: "name", prompName: 'User Comment', img: 'comment-icon.png', content: 'A user left a comment.' },
    { id: 4, userName: "name", prompName: 'Order Shipped', img: 'ship-icon.png', content: 'An order has been shipped.' },
    { id: 5, userName: "name", prompName: 'Review Submitted', img: 'review-icon.png', content: 'A review has been submitted.' }
  ];

  // Get the container element where cards will be appended
  const container = document.getElementById('cardContainer');

  // Function to create a card element
  function createCard({ userName, prompName, img, content }) {
    // Create a new div element for the card
    const card = document.createElement('div');
    card.className = 'card'; // Assign class name for styling
    
    // Set the inner HTML of the card with content
    card.innerHTML = `
      <div>
        <img src="${img}" alt="${userName}"> <!-- Image for the card -->
        <div class="cardName">${prompName}</div> <!-- Prompt name displayed in the card -->
        <div class="content">${content}</div> <!-- Main content of the card -->
      </div>
    `;

    return card; // Return the created card element
  }

  // Generate cards and append them to the container
  content.forEach(item => {
    const card = createCard(item); // Create a card for each item in the content array
    container.appendChild(card); // Append the card to the container
  });

  // Duplicate cards for seamless scrolling effect
  content.forEach(item => {
    const card = createCard(item); // Create a duplicate card for each item
    container.appendChild(card); // Append the duplicate card to the container
  });
});

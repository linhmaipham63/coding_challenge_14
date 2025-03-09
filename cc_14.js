// Task 1: Creating the Base Structure


// Task 2: Adding Support Tickets Dynamically

// Write a function that uses createElement to build a support ticket
function createSupportTicket(id, name, issueDescription, priorityLevel) {
    const ticketContainer = document.getElementById("ticketContainer");
    const ticket = document.createElement("div"); 
    
    // Set attributes (such as class and id) using setAttribute
    ticket.setAttribute("id", id);
    ticket.setAttribute("class", "customer-ticket"); 
    
    // Add information in each support ticket
    const customerName = document.createElement("h2"); // Add a heading for the customer’s name
    customerName.textContent = name;
    const issue = document.createElement("p"); // Add a paragraph for the issue description
    issue.textContent = issueDescription; 
    const priority = document.createElement("label"); // A label indicating priority level
    priority.textContent = priorityLevel; 
    priority.setAttribute("class","priority-level"); 
    
    ticket.appendChild(customerName);
    ticket.appendChild(issue);
    ticket.appendChild(priority); 
    
    // Add a "Resolve" button to remove the ticket
    const resolveButton = document.createElement("button");
    resolveButton.textContent = "Resolve"; 

    // Task 4: Attach a click event listener to the "Resolve" button that removes its parent ticket using removeChild
    resolveButton.addEventListener("click", (event) => {
        ticketContainer.removeChild(ticket); 

        // Task 4: Use stopPropagation() to prevent the event from bubbling up to the container
        event.stopPropagation(); 
    })

    ticket.appendChild(resolveButton); 
    
    // Append the support ticket to "ticketContainer" using appendChild
    ticketContainer.appendChild(ticket); 
}
    
// Add new customer support tickets to the dashboard
createSupportTicket("customer1", "Alice Johnson", "Unable to reset password", "High");
createSupportTicket("customer2", "Bob Smith", "Page not loading correctly", "High");
createSupportTicket("customer3", "Charlie Davis", "Feature request for dark mode", "Low");


// Task 3: Converting NodeLists to Arrays for Bulk Updates

// Use document.querySelectorAll to select all tickets with a "High" priority class and convert the NodeList into an array using Array.from() 
ticketsList = document.querySelectorAll(".customer-ticket"); 
tickets = Array.from(ticketsList); 
const highPriorityTickets = tickets.filter(ticket => {
    const priorityLabel = ticket.querySelector(".priority-level"); // Find the priority label inside the ticket
    return priorityLabel && priorityLabel.textContent === "High"; // Check if the priority is "high"
});


// Use an array method (e.g., .forEach()) to update the appearance of high-priority tickets (e.g., change background color or add a border)
highPriorityTickets.forEach(ticket => {
    ticket.style.backgroundColor = "lightpink";
    ticket.style.border = "2px solid red";
})


// Task 4: Implementing Ticket Resolution with Event Bubbling

// Attach a click event listener to "ticketContainer" that logs a message when any ticket is clicked.
ticketContainer.addEventListener("click", () => {
    console.log("Ticket Container Clicked"); 
})


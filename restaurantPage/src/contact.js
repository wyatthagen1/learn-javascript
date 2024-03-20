function contactPage() {
    // Create contact form div
    const contactFormDiv = document.createElement('div');
    contactFormDiv.id = 'contact-form';

    const contactHeading = document.createElement('h2');
    contactHeading.textContent = 'Contact Us';

    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name:';
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');

    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email:';
    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');

    const messageLabel = document.createElement('label');
    messageLabel.textContent = 'Message:';
    const messageTextarea = document.createElement('textarea');

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';

    // Append form elements to the contact form div
    contactFormDiv.appendChild(contactHeading);
    contactFormDiv.appendChild(nameLabel);
    contactFormDiv.appendChild(nameInput);
    contactFormDiv.appendChild(emailLabel);
    contactFormDiv.appendChild(emailInput);
    contactFormDiv.appendChild(messageLabel);
    contactFormDiv.appendChild(messageTextarea);
    contactFormDiv.appendChild(submitButton);

    // Append the contact form to the content div
    const contentDiv = document.getElementById('content');

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');

    containerDiv.appendChild(contactFormDiv);

    contentDiv.appendChild(containerDiv);
}

// Call the function to create the Contact Us page
export default contactPage;
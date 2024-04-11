// script.js

document.getElementById('generateLinkBtn').addEventListener('click', function() {
    var noteContent = document.getElementById('noteTextarea').value;
    var encryptionOption = confirm("Do you want to encrypt the link?");
    var encryptedLink = encryptionOption ? encrypt(noteContent) : noteContent;
    var shareableLink = generateUniqueLink(encryptedLink);
    alert("Your shareable link is: " + shareableLink);
});

function generateUniqueLink(content) {
    // Implement logic to generate a unique link
    // For demonstration purposes, we'll generate a random link
    return 'https://yourdomain.com/' + Math.random().toString(36).substring(2, 15);
}

function encrypt(content) {
    // Implement encryption logic
    // For demonstration purposes, we'll return the content as encrypted
    return "Encrypted:" + content;
}

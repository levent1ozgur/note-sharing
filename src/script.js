// script.js

document.getElementById('generateLinkBtn').addEventListener('click', function() {
    var noteContent = document.getElementById('noteTextarea').value;
    
    // Generate a unique ID for the note
    var noteId = generateUUID();
    
    // Construct the shareable link with the noteId
    var shareableLink = window.location.origin + '/note.html?id=' + noteId;
    
    // Display the shareable link to the user
    document.getElementById('shareLink').innerText = shareableLink;
});

// Function to generate a UUID (Universally Unique Identifier)
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

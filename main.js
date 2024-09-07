function sendFeedback() {
    // Get the feedback from the textarea
    let feedback = document.getElementById('feedback').value;

    // Encode the feedback to be URL friendly
    let encodedFeedback = encodeURIComponent(feedback);

    // Replace '628XXXXXX' with your actual WhatsApp number
    let phoneNumber = '6285885497377'; // Contoh nomor Indonesia

    // Create the WhatsApp API link
    let waLink = `https://wa.me/${phoneNumber}?text=${encodedFeedback}`;

    // Open the link
    window.open(waLink, '_blank');
}

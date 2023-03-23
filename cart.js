function confirmPurchase(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const paymentMethod = document.getElementById("payment-method").value;
    const total = document.querySelector("tfoot td:last-of-type").textContent;
    const confirmationMessage = `Thank you for your purchase, ${name}!\n\nWe have received your payment of ${total} via ${paymentMethod} and will send a confirmation email to ${email}.\n\nYour order will be shipped within 1-2 business days.`;
    alert(confirmationMessage);
    event.target.reset();
   }
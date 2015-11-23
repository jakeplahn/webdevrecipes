<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8">
    <title>Awesome Web Development - Contact Us</title>
  </head>
  <body>

    <h2>Contact Us</h2>
    <p>
      Please fill out this quick form to send us an email. We are excited
      to hear from you!
    </p>

    <form id="contact-form" action="contact.php" method="post">
      
      <label for="name">Name</label>
      <input class="full-width" type="text" name="name">

      <label for="email">Your Email</label>
      <input class="full-width" type="text" name="email">

      <label for="subject">Subject</label>
      <input class="full-width" type="text" name="subject"
            value="Web Consulting Inquiry">
      
      <label for="body">Body</label>
      <textarea class="full-width" name="body"></textarea>

      <input type="submit" name="send" value="Send">

    </form>
  </body>
</html>

<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8">
    <title>Awesome Web Development - Contact Us</title>
    <style type="text/css">
      body {
        font-size: 12px;
        font-family: Verdana;
      }

      #contact-form {
        width: 320px;
      }

      #contact-form label {
        display: block;
        margin: 10px 0px;
      }

      #contact-form input, #contact-form textarea {
        padding: 4px;
      }

      #contact-form .full-width {
        width: 100%;
      }

      #contact-form textarea {
        height: 100px;
      }
    </style>
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

function sendEmailOnFormSubmit(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Form Responses 1");
  var lastRow = sheet.getLastRow();
  var data = sheet.getRange(lastRow, 1, 1, sheet.getLastColumn()).getValues()[0];

  var recipient = "youremail@gmail.com"; 
  var firstName = data[1];
  var lastName = data[2];
  var emailid = data[3];
  var messageCell = data[4]; 

  var subject = `Portfolio: ${firstName} wanted to contact you`;


  var htmlBody = `
  <div style="background-color: #000000; padding: 40px 20px; font-family: Arial, sans-serif; text-align: center; color: #ffffff; max-width: 650px; margin: 0 auto;">
    <h1 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 60px; line-height: 1.2;">
      Portfolio Site<br>Contact Form Response
    </h1>

    <div style="background-color: #f5f5f5; color: #333333; padding: 30px 30px; border-radius: 8px; max-width: 600px; margin: 0 auto;">
      <h2 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 40px; color: #333;">Hello <Name> <span style="font-size: 2.5rem;">👋</span></h2>

      <p style="font-size: 1.4rem; line-height: 1.5; margin-bottom: 40px; color: #333;">
        <b>${firstName}</b> <b style="color: #e74c3c;">${lastName}</b> has just tried contacting you through your Portfolio Site and has left this message.
      </p>

      <p style="font-size: 1.4rem; line-height: 1.5; margin-bottom: 40px; color: #333;">
        <b>${messageCell}</b>
      </p>

      <p style="font-size: 1.3rem; margin-bottom: 15px; color: #333;">
        You can get back to them at:
      </p>

      <p style="font-size: 1.6rem; font-weight: bold; color: #333;">
        ${emailid}
      </p>

      <p style="font-size: 2rem; font-weight: bold; color: #333; margin-top: 60px;">
        Have a Wonderful Day <span style="font-size: 2rem;">😊</span>
      </p>
    </div>

    <div style="margin-top: 60px;">
      <p style="font-size: 1rem; color: #ccc;">Made with <span style="color: #e74c3c;">❤️</span> by</p>
      <img src="https://raw.githubusercontent.com/SuhasReddy651/ssr-software-solutions/main/logo-white.png" alt="SSR Software Solutions Logo" style="height: 50px; margin-top: 10px;">
    </div>
  </div>
`;

  MailApp.sendEmail({
    to: recipient,
    subject: subject,
    htmlBody: htmlBody
  });
}

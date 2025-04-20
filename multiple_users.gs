/* File to send to mail to multiple users using Google Sheets
  - Send mail to multiple users
  - assume the data in Google Sheets 
  - Google sheet column 1 -> mail id
                 column 2 -> roll number 
                 column 3 -> message 
*/


function sendFeedbackEmails() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues(); // Get all rows

  var subject = "Feedback on Your Link Budget Calculation";

  for (var i = 0; i < data.length; i++) { // Start from row 1 (NOT row 2)
    var email = String(data[i][0]).trim();  // Column A (Student Email)
    var roll = String(data[i][1]).trim();
    var name = String(data[i][2]).trim();   // Column B (Student Name)
    var feedback = String(data[i][3]).trim(); // Column C (Feedback)

    if (email && email.includes("@")) { // Ensure valid email
      var body = "<p>Dear student,</p>" +
        "<p>Roll Number : " + roll + "</p>"+
        "<p>We have reviewed your link budget calculation and would like to share our feedback:</p>" +
        "<blockquote style='border-left: 3px solid #007bff; padding-left: 10px; margin-left: 0;'>" +
        feedback +
        "<br><br>" +
        "</blockquote>" +
        "<p><b>Next Steps:</b></p>" +
        "<ul>" +
        "<li>Please review the provided comments and make necessary adjustments.</li>" +
        "<li>If you have any questions, feel free to reach out.</li>" +
        "</ul>" +
        "<p>We appreciate your effort and encourage you to adjust your calculations accordingly.</p>" +
        "<br><br>" +
        "<p>Best regards,</p>" +
        "<p><b>TNPM TA's</b></p>";

      try {
        MailApp.sendEmail({
          to: email,
          subject: subject,
          htmlBody: body
        });
        Logger.log("✅ Email sent to: " + email);
      } catch (e) {
        Logger.log("❌ Failed to send email to: " + email + " | Error: " + e.toString());
      }
    }
  }

  Logger.log("✅ All feedback emails have been processed.");
}

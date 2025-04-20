/* Here we add a single user mail id 
    - send to single user only 
*/

function sendPlainTextEmail(){
  const recipient = 'gbadaraiah@gmail.com'
  const subject = 'Hello first time automating'
  const body = 'This email is sent automatically from Google Apps Scripst!'

    
  GmailApp.sendEmail(recipient, subject, body)
  console.log('Email sent to ' + recipient)
}
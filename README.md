# Simple Node Mailer

Simple promise wrapper for `nodemailer` npm package.

## Installation

`npm install simple-node-mailer`

## Usage

```javascript
const { sendMessage } = require('simple-node-mailer');

const serverOptions = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'username@gmail.com',
        pass: 'securePassword',
    },
};

const mailOptions = {
    to: 'myfriend@gmail.com',
    subject: 'Subject here',
    text: 'Body of email here',
};

const info = await sendMessage(serverOptions, mailOptions);

console.log('SMTP response: ' + info.response);
```

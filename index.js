// @ts-check

const { createTransport } = require('nodemailer');
const SMTPTransport = require('nodemailer/lib/smtp-transport');

/**
 * Promise Wrapper for Node Mailer Package
 * @param {SMTPTransport | SMTPTransport.Options | string} serverOptions 
 * @param {import('nodemailer/lib/stream-transport').MailOptions} mailOptions
 */
exports.sendMessage = (serverOptions, mailOptions) => {
    return new Promise((resolve, reject) => {
        const transporter = createTransport(serverOptions);

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                reject(error);
            } else {
                resolve(info);
            }
        });
    });
};

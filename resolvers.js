const sendgridMail = require("@sendgrid/mail");

const resolvers = {
  Mutation: {
    sendEmail: async (_, args, context) => {
      const { input } = args;
      sendgridMail.setApiKey(process.env.SENDGRID_API_KEY);
      const message = {
        to: "shanjairajdev@gmail.com",
        from: "rajsuthan666@gmail.com",
        subject: "Email from Contact form",
        text: `Email from ${input.from}, Message - ${input.message}`,
      };

      try {
        const email = await sendgridMail.send(message);
        console.log(email);
        return {
          success: true,
          message: "Successfully sent email",
          error: null,
        };
      } catch (error) {
        return {
          success: false,
          message: null,
          error: error,
        };
      }
    },
  },
};

module.exports = {
  resolvers,
};

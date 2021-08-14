const sendgridMail = require("@sendgrid/mail");

const resolvers = {
  Mutation: {
    sendEmail: async (_, args, context) => {
      const { input } = args;
      sendgridMail.setApiKey(
        "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"
      );
      const message = {
        to: "rajsuthan666@gmail.com",
        from: "shanjairajdev@gmail.com",
        subject: "Email from Contact form",
        text: `Email from ${input.from}, Message - ${input.message}`,
      };

      try {
        const email = await sendgridMail.send(message);

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

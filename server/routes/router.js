import express from "express";
import aws from "aws-sdk";

const router = express.Router();

const ses = new aws.SES({
  region: "us-west-2",
});

console.log(aws.config);

router.post("/email", (req, res) => {
  const { email, message, name } = req.body;
  sesTest("alecdrosu@yahoo.com", email, message, name)
    .then(() => {
      res.status(200).send("Email sent");
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

function sesTest(emailTo, emailFrom, message, name) {
  const params = {
    Destination: {
      ToAddresses: [emailTo],
    },
    Message: {
      Body: {
        Text: {
          Data: name + "\n" + message,
        },
      },
      Subject: {
        Data: "Name: " + emailFrom,
      },
    },
    Source: "drosualec@gmail.com",
  };
  return ses.sendEmail(params).promise();
}

export default router;

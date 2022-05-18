export const sendEmail = async (data, emailInfo) => {
  // await fetch("http://localhost:8080/sendemail", {
  await fetch("https://kchan-email-sender.herokuapp.com/sendemail", {
    mode: "cors",
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: "KCHANEMAILTOKEN",
      toemail: "kahonide@gmail.com",
      subject: emailInfo.subject,
      type: emailInfo.emailType,
      context: data,
    }),
  });
};

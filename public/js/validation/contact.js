function Contact() {
  this.uName = getName();
}
const uName = document.getElementById("uName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");

function check(e) {
  const value = e.target.value;
  let status;
  if (e.target === uName) status = checkName(value);
  else if (e.target === email) status = checkEmail(value);
  else if (e.target === phone) status = checkPhone(value);
  else if (e.target === message) status = checkMessage(value);
  if (!status) {
    // do error
  }
}

function checkName(uName) {
  const rgx = /([A-Za-z]){2,}/g;
  return rgx.test(uName);
}
function checkEmail(email) {
  const rgx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return rgx.check(email);
}
function checkPhone(phone) {
  const rgx = /^01[0125][0-9]{8}$/;
  return rgx.check(phone);
}
function checkMessage(message) {
  const rgx = /^[\s\w\.\:]{0,400}$/;
  return rgx.check(message);
}

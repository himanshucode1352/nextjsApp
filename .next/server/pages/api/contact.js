(function() {
var exports = {};
exports.id = 2091;
exports.ids = [2091];
exports.modules = {

/***/ 5923:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ contact; }
});

;// CONCATENATED MODULE: external "nodemailer"
var external_nodemailer_namespaceObject = require("nodemailer");;
var external_nodemailer_default = /*#__PURE__*/__webpack_require__.n(external_nodemailer_namespaceObject);
;// CONCATENATED MODULE: external "nodemailer-sendgrid-transport"
var external_nodemailer_sendgrid_transport_namespaceObject = require("nodemailer-sendgrid-transport");;
var external_nodemailer_sendgrid_transport_default = /*#__PURE__*/__webpack_require__.n(external_nodemailer_sendgrid_transport_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/contact.js


const transporter = {
  auth: {
    // Use SendGrid API key 
    api_key: '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'
  }
};
const mailer = external_nodemailer_default().createTransport(external_nodemailer_sendgrid_transport_default()(transporter));
/* harmony default export */ var contact = (async (req, res) => {
  console.log(req.body);
  const {
    name,
    email,
    number,
    subject,
    text
  } = req.body;
  const data = {
    to: 'muttakinfreelance@gmail.com',
    from: email,
    subject: 'Hi there',
    text: text,
    html: `
            <b>From:</b> ${name} <br /> 
            <b>Number:</b> ${number} <br /> 
            <b>Subject:</b> ${subject} <br /> 
            <b>Text:</b> ${text} 
        `
  };

  try {
    const response = await mailer.sendMail(data);
    console.log(response);
    res.status(200).send("Email send successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error proccessing charge");
  }
});

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(5923));
module.exports = __webpack_exports__;

})();
exports.id = 5703;
exports.ids = [5703];
exports.modules = {

/***/ 5703:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9008);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



const AppointmentForm = () => {
  const {
    0: startDate,
    1: setStartDate
  } = useState(new Date());
  return __jsx("div", {
    className: "appointment-area jarallax ptb-50"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "appointment-here-form"
  }, __jsx("span", {
    className: "top-title"
  }, "Make An Appointment"), __jsx("h2", null, "We Are Here For You"), __jsx("form", null, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-6 col-sm-6"
  }, __jsx("label", null, "Your Name"), __jsx("div", {
    className: "form-group"
  }, __jsx("input", {
    type: "text",
    className: "form-control",
    id: "Name",
    placeholder: "Enter Your Name"
  }), __jsx("i", {
    className: "flaticon-account"
  }))), __jsx("div", {
    className: "col-lg-6 col-sm-6"
  }, __jsx("label", null, "Your Email"), __jsx("div", {
    className: "form-group"
  }, __jsx("input", {
    type: "text",
    className: "form-control",
    id: "Email",
    placeholder: "Enter Your Email"
  }), __jsx("i", {
    className: "flaticon-email"
  }))), __jsx("div", {
    className: "col-lg-6 col-sm-6"
  }, __jsx("label", null, "Your Phone"), __jsx("div", {
    className: "form-group"
  }, __jsx("input", {
    type: "text",
    className: "form-control",
    id: "Phone",
    placeholder: "Enter Your Phone"
  }), __jsx("i", {
    className: "flaticon-smartphone"
  }))), __jsx("div", {
    className: "col-lg-6 col-sm-6"
  }, __jsx("label", null, "Select Service"), __jsx("div", {
    className: "form-group"
  }, __jsx("select", {
    className: "form-control"
  }, __jsx("option", {
    value: "0"
  }, "Select Service"), __jsx("option", {
    value: "1"
  }, "Surgery & Radiology"), __jsx("option", {
    value: "2"
  }, "Children Care"), __jsx("option", {
    value: "3"
  }, "Orthopedics"), __jsx("option", {
    value: "4"
  }, "Nuclear Magnetic"), __jsx("option", {
    value: "5"
  }, "Eye Treatment"), __jsx("option", {
    value: "6"
  }, "X-Ray")), __jsx("i", {
    className: "flaticon-heart"
  }))), __jsx("div", {
    className: "col-lg-6 col-sm-6"
  }, __jsx("label", null, "Appointment Date"), __jsx("div", {
    className: "form-group"
  }, __jsx("div", {
    className: "input-group date"
  }, __jsx(DatePicker, {
    selected: startDate,
    onChange: date => setStartDate(date),
    className: "form-control"
  })), __jsx("i", {
    className: "flaticon-appointment"
  }))), __jsx("div", {
    className: "col-lg-6 col-sm-6"
  }, __jsx("label", null, "Time"), __jsx("div", {
    className: "form-group"
  }, __jsx("select", {
    className: "form-control"
  }, __jsx("option", {
    value: "0"
  }, "Seclect Time"), __jsx("option", {
    value: "2"
  }, "09.00 AM To 10.00 AM"), __jsx("option", {
    value: "3"
  }, "10.00 AM To 11.00 AM"), __jsx("option", {
    value: "3"
  }, "11.00 AM To 12.00 PM"), __jsx("option", {
    value: "4"
  }, "12.00 PM To 01.00 PM"), __jsx("option", {
    value: "5"
  }, "01.00 PM To 03.00 PM"), __jsx("option", {
    value: "6"
  }, "04.00 PM To 06.00 PM"), __jsx("option", {
    value: "7"
  }, "07.00 PM To 10.00 PM"), __jsx("option", {
    value: "8"
  }, "10.00 PM To 11.00 PM")), __jsx("i", {
    className: "flaticon-clock"
  }))), __jsx("div", {
    className: "col-lg-12"
  }, __jsx("label", null, "Message"), __jsx("div", {
    className: "form-group"
  }, __jsx("textarea", {
    name: "message",
    className: "form-control",
    id: "Message",
    cols: "30",
    rows: "8",
    placeholder: "Your Message"
  }), __jsx("i", {
    className: "flaticon-edit"
  }))), __jsx("div", {
    className: "col-12"
  }, __jsx("button", {
    type: "submit",
    className: "default-btn"
  }, "Send Request")))), __jsx("div", {
    className: "shape"
  }, __jsx("img", {
    src: "/img/shape/appointment-shape.png",
    alt: "Image"
  })))));
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (AppointmentForm)));

/***/ })

};
;
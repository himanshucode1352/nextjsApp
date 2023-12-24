exports.id = 3789;
exports.ids = [3789,1288];
exports.modules = {

/***/ 1288:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

 // import  ModalVideo from 'react-modal-video';

const PageBanner = ({
  pageTitle,
  homePageUrl,
  homePageText,
  activePageText,
  imgClass
}) => {
  // // video modal
  // const [isOpen, setIsOpen] = React.useState(true);
  // const openModal = () => {
  //     setIsOpen(!isOpen);
  // }
  return __jsx("div", {
    className: `page-title-area ${imgClass}`
  }, __jsx("div", {
    className: "d-table"
  }, __jsx("div", {
    className: "d-table-cell"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "page-title-content"
  }, __jsx("h2", null, pageTitle), __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: homePageUrl
  }, __jsx("a", null, homePageText))), __jsx("li", {
    className: "active"
  }, activePageText)))))));
};

/* harmony default export */ __webpack_exports__["Z"] = (PageBanner);

/***/ }),

/***/ 4261:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


const Subscribe = () => {
  return __jsx("div", {
    className: "subscribe-area"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "row align-items-center"
  }, __jsx("div", {
    className: "col-lg-12"
  }, __jsx("h2", {
    style: {
      color: '#fff'
    }
  }, "Join the game!"), __jsx("p", {
    style: {
      color: '#fff',
      fontSize: '18px'
    }
  }, "When you hire a court or become a member, you know you\u2019re getting highly qualified", __jsx("br", null), " professionals who have the expertise and experience to make sure you get the best of everything"), __jsx("button", {
    className: "default-btn",
    type: "submit"
  }, "Book Now")))));
};

/* harmony default export */ __webpack_exports__["Z"] = (Subscribe);

/***/ }),

/***/ 4077:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2662);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(272);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1996);
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const MySwal = sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_4___default()((sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()));


const alertContent = () => {
  MySwal.fire({
    title: 'Congratulations!',
    text: 'Your message was successfully send and will back to you soon',
    icon: 'success',
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false
  });
}; // Form initial state


const INITIAL_STATE = {
  name: "",
  Emailid: "",
  Contact_No: "",
  subject: "",
  Description: ""
};

const ContactForm = () => {
  const {
    0: contact,
    1: setContact
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(INITIAL_STATE);
  const {
    register,
    handleSubmit,
    errors
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)();

  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setContact(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
      [name]: value
    }));
    console.log(contact);
  };

  const onSubmit = async e => {
    // e.preventDefault();
    try {
      const url = "http://148.72.214.135:5000/api/Contacts_data";
      const {
        name,
        Emailid,
        Contact_No,
        subject,
        Description
      } = contact;
      const payload = {
        name,
        Emailid,
        Contact_No,
        subject,
        Description
      };
      await axios__WEBPACK_IMPORTED_MODULE_2___default().post(url, payload);
      console.log(url);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.log("error hai");
      console.log(error);
    }
  };

  return __jsx("div", {
    className: "main-contact-area contact ptb-100"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "section-title"
  }, __jsx("span", {
    className: "top-title"
  }, "Contact Us"), __jsx("h2", null, "Drop us a message for any query"), __jsx("p", null, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque quibusdam deleniti porro praesentium. Aliquam minus quisquam velit in at nam.")), __jsx("div", {
    className: "contact-wrap contact-pages mb-0"
  }, __jsx("div", {
    className: "contact-form"
  }, __jsx("form", {
    id: "contactForm",
    onSubmit: handleSubmit(onSubmit)
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-6 col-md-6"
  }, __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "Name"), __jsx("input", {
    type: "text",
    name: "name",
    className: "form-control",
    placeholder: "Your Name",
    value: contact.name,
    onChange: handleChange,
    ref: register({
      required: true
    })
  }), __jsx("div", {
    className: "invalid-feedback",
    style: {
      display: 'block'
    }
  }, errors.name && 'Name is required.'))), __jsx("div", {
    className: "col-lg-6 col-md-6"
  }, __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "Email"), __jsx("input", {
    type: "text",
    name: "Emailid",
    className: "form-control",
    placeholder: "Your Email",
    value: contact.Emailid,
    onChange: handleChange,
    ref: register({
      required: true,
      pattern: /^\S+@\S+$/i
    })
  }), __jsx("div", {
    className: "invalid-feedback",
    style: {
      display: 'block'
    }
  }, errors.email && 'Email is required.'))), __jsx("div", {
    className: "col-lg-6 col-md-6"
  }, __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "Phone"), __jsx("input", {
    type: "text",
    name: "Contact_No",
    className: "form-control",
    placeholder: "Your Phone",
    value: contact.Contact_No,
    onChange: handleChange,
    ref: register({
      required: true
    })
  }), __jsx("div", {
    className: "invalid-feedback",
    style: {
      display: 'block'
    }
  }, errors.number && 'Number is required.'))), __jsx("div", {
    className: "col-lg-6 col-md-6"
  }, __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "Subject"), __jsx("input", {
    type: "text",
    name: "subject",
    className: "form-control",
    placeholder: "Your Subject",
    value: contact.subject,
    onChange: handleChange,
    ref: register({
      required: true
    })
  }), __jsx("div", {
    className: "invalid-feedback",
    style: {
      display: 'block'
    }
  }, errors.subject && 'Subject is required.'))), __jsx("div", {
    className: "col-lg-12 col-md-12"
  }, __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "Message"), __jsx("textarea", {
    name: "Description",
    className: "form-control",
    cols: "30",
    rows: "5",
    placeholder: "Your Message",
    value: contact.Description,
    onChange: handleChange,
    ref: register({
      required: true
    })
  }), __jsx("div", {
    className: "invalid-feedback",
    style: {
      display: 'block'
    }
  }, errors.text && 'Text body is required.'))), __jsx("div", {
    className: "col-lg-6 col-sm-6"
  }, __jsx("div", {
    className: "contact-num"
  }, __jsx("h3", null, "For Emergency"), __jsx("span", null, __jsx("a", {
    href: "tel:+442-456a-789"
  }, "+442-456a-789")))), __jsx("div", {
    className: "col-lg-6 col-sm-6"
  }, __jsx("button", {
    type: "submit",
    className: "default-btn btn-two"
  }, "Send Message"))))))));
};

/* harmony default export */ __webpack_exports__["Z"] = (ContactForm);

/***/ })

};
;
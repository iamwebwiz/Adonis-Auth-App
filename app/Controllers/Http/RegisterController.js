"use strict";

class RegisterController {
  index({ request, response, view }) {
    return view.render("auth.register");
  }

  register({ request, response }) {
    //
  }
}

module.exports = RegisterController;

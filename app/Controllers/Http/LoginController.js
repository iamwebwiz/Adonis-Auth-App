"use strict";

class LoginController {
  index({ request, response, view }) {
    return view.render("auth.login");
  }

  login({ request, response }) {
    //
  }
}

module.exports = LoginController;

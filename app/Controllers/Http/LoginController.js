"use strict";

class LoginController {
  index({ request, response, view }) {
    return view.render("auth.login");
  }

  login({ request, response }) {
    //
  }

  logout({ auth, response, session }) {
    auth.logout();

    session.flash({ message: "Logged out successfully." });

    return response.redirect("/");
  }
}

module.exports = LoginController;

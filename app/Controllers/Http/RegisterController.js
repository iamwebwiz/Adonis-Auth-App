"use strict";

const { validate } = use("Validator");
const User = use("App/Models/User");
const Hash = use("Hash");

class RegisterController {
  index({ request, response, view }) {
    return view.render("auth.register");
  }

  async register({ auth, request, response, session }) {
    const rules = {
      email: "required|email|unique:users,email",
      username: "required|unique:users,username",
      password: "required|min:6",
    };

    const validation = await validate(request.all(), rules);

    if (validation.fails()) {
      session.withErrors(validation.messages()).flashExcept(["password"]);

      return response.redirect("back");
    }

    const user = new User();
    user.username = request.input("username");
    user.email = request.input("email");
    user.password = request.input("password");

    await user.save();

    await auth.attempt(request.input("email"), request.input("password"));

    session.flash({ message: "User registered successfully" });

    return response.redirect("/");
  }
}

module.exports = RegisterController;

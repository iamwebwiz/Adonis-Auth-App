"use strict";

class ListController {
  index({ request, response, view }) {
    return view.render("welcome");
  }
}

module.exports = ListController;

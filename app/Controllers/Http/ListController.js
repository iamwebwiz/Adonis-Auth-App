"use strict";

class ListController {
  index({ request, response, view }) {
    const characters = {
      "Daenerys Targaryen": "Emilia Clarke",
      "Jon Snow": "Kit Harington",
      "Arya Stark": "Maisie Williams",
      Melisandre: "Carice Van Houten",
      "Khal Drogo": "Jason Momoa",
      "Tyrion Lannister": "Peter Dinklage",
      "Ramsay Bolton": "Iwan Rheon",
      "Petyr Baelish": "Aidan Gillen",
      "Brienne of Tarth": "Gwendoline Christie",
      "Lord Varys": "Conleth Hill",
    };

    return view.render("welcome", { characters });
  }
}

module.exports = ListController;

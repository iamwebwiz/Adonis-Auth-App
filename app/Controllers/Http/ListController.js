'use strict'

class ListController {
  index({request, response, view}) {
    console.log(response)
    return view.render('welcome')
  }
}

module.exports = ListController

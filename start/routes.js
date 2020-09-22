"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", "ListController.index");

Route.get("login", "LoginController.index");
Route.post("login", "LoginController.login");

Route.get("register", "RegisterController.index");
Route.post("register", "RegisterController.register");

Route.get("logout", "LoginController.logout");

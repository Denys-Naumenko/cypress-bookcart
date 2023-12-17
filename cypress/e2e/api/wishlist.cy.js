/// <reference types="cypress" />

import { addItemToWishlist, getWishlist, clearWishlist } from '../../models/wishlist';
import { userRegisterApi, userLoginApi } from '../../models/userApiRegister';

describe('CRUD WishList Api', () => {

  before(() => {
    userRegisterApi();
    userLoginApi();
  })

  it("Add new item to Wishlist", () => {
    addItemToWishlist();
    getWishlist();
  });

  it("Remove exist item from Wishlist", () => {
    addItemToWishlist();
    getWishlist();
  });

  it("Add Item and Clear the Wishlist", () => {
    addItemToWishlist();
    getWishlist();
    clearWishlist();
    getWishlist();
  });

});
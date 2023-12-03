/// <reference types="cypress" />

import { addItemToWishlist, getWishlist, clearWishlist } from '../../models/wishlist';
import { userLoginApi } from '../../models/userApiRegister';

describe('CRUD WishList Api', () => {

  before(() => {
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
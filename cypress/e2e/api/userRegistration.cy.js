/// <reference types="cypress" />
import { userRegisterApi, userLoginApi, setAuthToken, verifyUserLogin } from "../../models/userApiRegister"


describe('API User Login', () => {

    it("API Register new user", () => {
        userRegisterApi();
    });

    it("API Login followed by UI login verification", () => {
        userLoginApi();
        setAuthToken();
        verifyUserLogin();
    });
});
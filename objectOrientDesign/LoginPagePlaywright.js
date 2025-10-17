/**
 * -------------------------------
 * Program: Build a simple Page Object Model (POM) class for a fictional login page.
 *          LoginPage class models a login page structure using the Page Object Model pattern, 
 *          with sample locators and a simulated login action using Playwright.
 * Author: Kalyani Das
 * -------------------------------
 */

class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}

export default LoginPage;



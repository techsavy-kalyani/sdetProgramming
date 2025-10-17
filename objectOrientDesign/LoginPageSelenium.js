/**
 * -------------------------------
 * Program: Build a simple Page Object Model (POM) class for a fictional login page.
 *          LoginPage class models a login page structure using the Page Object Model pattern, 
 *          with sample locators and a simulated login action using Selenium WebDriver.
 * Author: Kalyani Das
 * -------------------------------
 */


class LoginPage {
    constructor(driver) {
        this.driver = driver;
        this.usernameInput = driver.findElement(By.id('username'));
        this.passwordInput = driver.findElement(By.id('password'));
        this.loginButton = driver.findElement(By.id('login'));
    }

    async login(username, password) {
        await this.usernameInput.sendKeys(username);
        await this.passwordInput.sendKeys(password);
        await this.loginButton.click();
    }
}

export default LoginPage;



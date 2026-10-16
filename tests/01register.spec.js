const {test,expect} = require ('@playwright/test')
import{RegistrationPage} from '../pages/registration';
import *as allure from 'allure-js-commons';

test('TC_01: Verify the user is able to to Register', async ({ page }) => {
    await test.step('registeruser', async () => {
    const register = new RegistrationPage(page);
    await register.GotoLoginpage();
    page.once('dialog', async dialog => {
        console.log(`Alert: ${dialog.message()}`);
        await dialog.accept();
    });
    await register.UserRegistration('jack','David','jamesdavid','PASSword@12345');
    await register.BackTologin();
    });
    //test

    
}); 

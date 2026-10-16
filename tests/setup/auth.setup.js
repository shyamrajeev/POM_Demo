import{test,expect} from '@playwright/test';
import { LoginPage } from '../../pages/Login';
import *as allure from 'allure-js-commons';

 test('TC_02 : Verify the user is able to logn.', async ({page}) => {
        const login = new LoginPage(page);
        await login.GotoLoginpage();
        await login.userlogin('jackdavid','PASSword@12345');
        await expect(login.loggedinusername).toHaveText('jackdavid');
        await page.waitForLoadState('networkidle');
       console.log('Expected username: jackdavid','Received username:',await login.loggedinusername.innerText());
    await page.context().storageState({path:'storageState.json'});
    
    });
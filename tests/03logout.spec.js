import{test,expect} from '@playwright/test';
import {userlogout} from '../pages/logout';
import *as allure from 'allure-js-commons';

test('TC_07 :Verify the user is able to  Logout from the application', async({page})=>
{
  const logout = new userlogout(page);
  await logout.logoutfunction();
  await expect(page).toHaveURL('https://demoqa.com/login');
});

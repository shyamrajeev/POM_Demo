const {test,expect} = require('@playwright/test')
import {Books} from '../pages/bookactions';
import *as allure from 'allure-js-commons';
test.describe.serial('Booking flows',()=>{
test('TC_03 : Verify the user is able to add a book', async({page})=>
{
    const addbook = new Books(page, 'Learning JavaScript Design Patterns');
    await test.step('Navigate to my profile',async()=>
    {
        await addbook.myprofile();
    });
    await test.step('Adding the book to collection',async()=>
    {
        page.once('dialog', async dialog => {
        console.log(`Alert: ${dialog.message()}`);
        await dialog.accept();
    });
    await addbook.addingbook();
    });  
});
test('TC_04 : Verify the user is able to delete the added book',async({page})=>
{
    const addbook = new Books(page, 'Learning JavaScript Design Patterns');
    await test.step('Deleting the book added to the collection',async()=>
    { 
        await addbook.deletebook();
    });
});
test('TC_05 : Verify the user is redirected to the correct books detail page',async({page})=>
{    
   const addbook = new Books(page, 'Learning JavaScript Design Patterns');
   await test.step('cheking the book details page',async()=>
    {  
        await addbook.bookverify();
        await expect(addbook.titledetailpage).toHaveText(addbook.bookname);
        const actualBookName = await addbook.titledetailpage.innerText();
        console.log(`Expected book name: ${addbook.bookname}`);
        console.log(`Actual book name: ${actualBookName}`);
    });
});
 test('TC_06 : Verify correct book URL opens on clicking the website option',async({page})=>
{
    const addbook = new Books(page, 'Learning JavaScript Design Patterns');
    await test.step('Checking the correct page is opened',async()=>
    { 
        await addbook.urlverify();
        const bookPage = await addbook.urlverify();
        await expect(bookPage).toHaveTitle(addbook.bookname);
        console.log(`Expected page title: ${addbook.bookname}`);
        console.log(`Actual page title: ${await bookPage.title()}`);
        await page.close();
        
    });
    
});
});

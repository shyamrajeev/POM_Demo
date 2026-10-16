 export class Books
{
    constructor(page, bookname)
    {
        this.page = page;
        this.bookname = bookname;
        this.goto_books =page.getByRole('button', { name: 'Go To Book Store' });
        this.searchbox =page.getByRole('textbox', { name: 'Type to search' });
        this.searchbutton = page.locator("//button[@class='btn btn-outline-secondary']//*[name()='svg']");
        this.selectbook = page.getByRole('link', {name: bookname});
        this.addtocollection = page.getByRole('button', { name: 'Add To Your Collection' });
        this.delete = page.locator("//*[name()='path' and contains(@d,'M864 256H7')]")
        this.delete_confirm = page.getByText('OK', { exact: true });
        this.titledetailpage = page.getByText(bookname, { exact: true });
        this.bookUrl = page.getByText(/^https?:\/\/.+$/);
    }
    async myprofile()
    {
        await this.page.goto('https://demoqa.com/profile');
    
    }

    async addingbook()
    {
        await this.goto_books.click();
        await this.searchbox.fill(this.bookname);
        await this.searchbutton.click();
        await this.selectbook.click();
        await this.addtocollection.click();
        await this.page.goto('https://demoqa.com/profile');
    }


    async deletebook()
    {
        await this.page.goto('https://demoqa.com/profile');
        await this.delete.click();
        await this.delete_confirm.click();
    }

    async bookverify()
    {
         await this.page.goto('https://demoqa.com/profile'); 
        await this.goto_books.click();
        await this.searchbox.fill(this.bookname);
        await this.searchbutton.click();
        await this.selectbook.click();
    } 
    async urlverify() {
    await this.page.goto('https://demoqa.com/profile');  
    await this.bookverify();

    const popupPromise = this.page.waitForEvent('popup');
    await this.bookUrl.click();

    const bookPage = await popupPromise;
    await bookPage.waitForLoadState();
    return bookPage;
}
}
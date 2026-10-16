export class userlogout
{
    constructor(page)
    {
       this.page = page;
       this.logout_button = page.getByRole('button', { name: 'Logout' });
    }

    async logoutfunction()
    {
        await this.page.goto('https://demoqa.com/profile');
        await this.logout_button.click();

    }
}
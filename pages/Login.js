export class LoginPage
{

constructor(page)
{
this.page = page;
this.user_name = page.getByRole('textbox', { name: 'UserName' });
this.password = page.getByPlaceholder('Password');
this.loginbutton = page.getByRole('button', { name: 'Login' });
this.loggedinusername = page.locator('#userName-value')
}
async GotoLoginpage()
    {
        await this.page.goto('https://demoqa.com/login')
    }
async userlogin(username, password)
{
    await this.user_name.fill(username);
    await this.password.fill(password);
    await this.loginbutton.click();
}

}
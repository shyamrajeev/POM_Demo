export class RegistrationPage{

    constructor(page)
    {
        this.page = page;
        this.newuser = page.getByRole('button', { name: 'New User' });
        this.first_name = page.getByRole('textbox', { name: 'First Name' });
        this.last_name =  page.getByRole('textbox', { name: 'Last Name' });
        this.user_name =  page.getByRole('textbox', { name: 'UserName' });
        this.create_password = page.getByPlaceholder('Password');
        this.register_button = page.getByRole('button', { name: 'Register' });
        this.backtologin_button = page.getByRole('button', { name: 'Back to Login' });
        this.logoutbutton = page.getByRole('button', { name: 'Log out' });
    }

    async GotoLoginpage()
    {
        await this.page.goto('https://demoqa.com/login')
    }
async UserRegistration(firstname, lastname, username, password)
{

    if(await this.page.url()=='https://demoqa.com/login')
        {
            await this.page.waitForLoadState('networkidle');
            await this.logoutbutton.click();
            await this.newuser.click();
             await this.page.waitForLoadState('networkidle');
             await this.first_name.pressSequentially(firstname);
             await this.last_name.fill(lastname);
             await this.user_name.fill(username);
             await this.create_password.fill(password);
             await this.register_button.click();
        }

     else
     {
        await this.newuser.click();
             await this.page.waitForLoadState('networkidle');
             await this.first_name.pressSequentially(firstname);
             await this.last_name.fill(lastname);
             await this.user_name.fill(username);
             await this.create_password.fill(password);
             await this.register_button.click(); 
     }   
  
}
async BackTologin()
{
    await this.backtologin_button.click();
}
}
exports.LoginPage=class LoginPage 
{
    //Locators
    constructor(page)
    {
        this.page=page;
        this.username='#email'; 
        this.password='#password';
        this.loginbutton='//button[normalize-space()="Login"]';
    }

    async gotoLoginPage()
    {
        //await this.page.goto('http://localhost:3000/');
        await this.page.goto('https://www.perplexity.ai/');
    }
   
    async login(username,password)
    { 
        await this.page.locator(this.username).fill(username);
        await this.page.locator(this.password).fill(password);
        await this.page.locator(this.loginbutton).click();
    }

    }


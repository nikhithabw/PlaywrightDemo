exports.HomePage=class HomePage
{
    //Element Locators
    constructor(page)
    {
      this.page=page;
      this.addLoan='//button[normalize-space()="Add Loan"]'; 
      this.loanId='#loan_id';
      this.transactionId='#transaction_id';
      this.priority="//div[@class='!p-0 h-10 text-sm px-3 py-1 css-hlgwow']";
      this.uploadFile="//label[normalize-space()='Choose File']";
      this.submit="button[type='submit']";
    }

    //Actions methods
    async add(loanId,transactionId,priority,uploadFile)
    {
        await this.page.locator(this.addLoan).click();
        await this.page.locator(this.loanId).fill(loanId.toString());
        await this.page.locator(this.transactionId).fill(transactionId.toString());
        await this.page.locator(this.priority).click();
        await this.page.getByRole('option', { name: priority }).click();
        await this.page.locator(this.uploadFile).setInputFiles(uploadFile);
        await this.page.locator(this.submit).click();    
    }
 
}

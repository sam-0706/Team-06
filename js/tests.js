const{By, Key, Builder}= require("selenium-webdriver");
require("chromedriver");

let x;
async function test_case(a,b){
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://erp.cbit.org.in/Login.aspx?ReturnUrl=%2fbeeserp%2flogin.aspx")
    await driver.findElement(By.name("txtUserName")).sendKeys(a,Key.RETURN);
    await driver.findElement(By.name("txtPassword")).sendKeys(b,Key.RETURN);
    s=driver.findElement(By.id("ctl00_cpStud_lblTotalPercentage")).getText();
    s.then(function(result){
        console.log(result)
        x=result;
        console.log(x)
        })
    setInterval(function(){
        driver.quit();

    },5000);    
}
test_case();
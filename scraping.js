const pt = require('puppeteer') 
const Scraper  =require('./class-based')
const go =async ()=>{
    let browser
    let page

    try {
        browser = await pt.launch({
            headless:false
        })
        page = await browser.newPage()
        await new Scraper(browser, page).main()
    } catch (error) {
        console.log(error.stack || error); 
    }
    await browser.close()
}
go()
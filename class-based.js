const fswrite = require('fs').writeFileSync

/**
 * @class Scraper
 */
class Scraper {
    /**
     * @constructor
     */
    constructor(browser, page){
        this.browser = browser
        this.page = page
        this.standings = []
        this.url = "http://127.0.0.1:8000/elearning"
    }
    /**
     * @method main
     */ 
    async main(){
        await this.page.goto(this.url, {waitUntil:"domcontentloaded"})

        this.standings = await this.page.evaluate(()=> Array.from(document.querySelectorAll('.e')).map(table =>{
            // table.querySelector('td')
            console.log("data eee"+table);
            
        })
        )
        // console.log("this data"+this.standings)
        this.writeToJson()
    }
    /**
     * @method writeToJson
     */
    writeToJson(){
        fswrite("./data.csv", "saut saut b")
    }
    
    
}
module.exports = Scraper
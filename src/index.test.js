import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';
const {JSDOM} = jsdom;


//Define a test with describe
describe('A dummy test', () => {

    //Define what we are testing
    it("True should be true", () => {
        expect(true).to.equal(true);
    })
})

describe('JSDOM Test Example', () => {
    it('should say this is it', ()=>{
        //Fetch a reference to the file we want to test
        const index = fs.readFileSync('./src/index.html', 'utf-8');
        //We will then use JSDOM to 'reference elements' of the html file 
                       //If we need and JS to run in our DOM, we pass array of js files as second ar
        
        let dom= new JSDOM(index);
        let window = dom.window;        
        const h1 = window.document.getElementsByTagName('h1')[0];
        expect(h1.innerHTML).to.equal("This is it");    
        window.close();  
    })
})
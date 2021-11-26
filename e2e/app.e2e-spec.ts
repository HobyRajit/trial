
import {browser,element,by,Key} from 'protractor';
import {AppPage} from './app.po';

describe('frontend App', ()=>{
    let page: AppPage;
    beforeEach(()=>{
        page = new AppPage();
         
    });

    it('should display title',()=>{
        page.navigateTo();
        expect(browser.getTitle()).toEqual('NewsApp');
    });

    it('should be redirected to /login route on opening the application',() => {
        expect(browser.getCurrentUrl()).toContain('/login')
    });

    it('should be redirected to /register route',()=>{
        browser.element(by.css('.register-button')).click()
        expect(browser.getCurrentUrl()).toContain('/register')
    });

    it('should be able to register user',()=>{
        browser.element(by.id("firstname")).sendKeys('Super User');
        browser.element(by.id("lastname")).sendKeys('Super lastUser');
        browser.element(by.id('userid')).sendKeys('Super User12');
        browser.element(by.id('password')).sendKeys('Super userPass');
        browser.element(by.css('.register-user')).click()
        expect(browser.getCurrentUrl()).toContain('/login');
    })

    it('should be able to login user and navigate to popular movies',()=>{
        browser.element(by.id("userid")).sendKeys('Super User12');
        browser.element(by.id('password')).sendKeys('Super userPass');
        browser.element(by.css('.login-user')).click()
        expect(browser.getCurrentUrl()).toContain('/news/headlines');
    })


    it('should be able to search for  movies',()=>{
        //browser.element(by.css('.search-button')).click()
        browser.element(by.id('search-button')).click()
        expect(browser.getCurrentUrl()).toContain('/news/search');
        browser.driver.sleep(5000);
        browser.element(by.id("search-button-input")).sendKeys('Super');
        browser.element(by.id("search-button-input")).sendKeys(Key.ENTER);
        browser.driver.sleep(10000);
        const searchItems = browser.element.all(by.css('.movie-image'));
       // expect(searchItems.count()).toBe(20);
       
    })

   // it('should be able to add movie to watch list', async ()=>{
        //browser.element(by.css('.search-button')).click()
  //      browser.driver.manage().window().maximize();
  //      browser.driver.sleep(1000);
  //      const searchItems = element.all(by.css('.movie-thumbnail'));
  //      searchItems.get(0).click();
   //     browser.element(by.id('addButton')).click();
       
   // })
});



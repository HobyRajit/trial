import {browser,element,by} from 'protractor';

export class AppPage{
    navigateTo(){
        browser.get('/') ;
    }

    getHeadingtext(){
        return element(by.css('app-root NewsApp')).getText();
    }
}
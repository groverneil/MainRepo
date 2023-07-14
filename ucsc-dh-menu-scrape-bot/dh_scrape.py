from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup as bs
import lxml
from time import sleep

dh_xpath_hash = {

    "jrl9" : '//*[@id="locationchoices"]/ul/li[1]/a',
    "cs" : '//*[@id="locationchoices"]/ul/li[2]/a',
    "pk" : '//*[@id="locationchoices"]/ul/li[4]/a'
}

def getBreakfast(link):

    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
    driver.get("https://nutrition.sa.ucsc.edu/")

    jlr = driver.find_element('xpath', link)


    jlr.click()

    soup = bs(driver.page_source, 'lxml');

    breakfast = driver.find_element('xpath', '/html/body/table[2]/tbody/tr[1]').get_attribute('innerHTML')

    soup = bs(breakfast, 'lxml')
    
    x = [x .text for x in soup.find_all("div", class_ = "shortmenurecipes")]

    for y in x:

        print(y.text);

def getlunch(link):

    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
    driver.get("https://nutrition.sa.ucsc.edu/")

    jlr = driver.find_element('xpath', link)


    jlr.click()

    soup = bs(driver.page_source, 'lxml');

    breakfast = driver.find_element('xpath', '/html/body/table[2]/tbody/tr[2]').get_attribute('innerHTML')

    soup = bs(breakfast, 'lxml')
    
    x = [x .text for x in soup.find_all("div", class_ = "shortmenurecipes")]

    for y in x:

        print(y.text);

def getDinner(link):

    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
    driver.get("https://nutrition.sa.ucsc.edu/")

    jlr = driver.find_element('xpath', link)


    jlr.click()

    soup = bs(driver.page_source, 'lxml');

    breakfast = driver.find_element('xpath', '/html/body/table[2]/tbody/tr[3]').get_attribute('innerHTML')

    soup = bs(breakfast, 'lxml')
    
    x = [x .text for x in soup.find_all("div", class_ = "shortmenurecipes")]

    for y in x:

        print(y.text);

def getLateNight(link):

    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
    driver.get("https://nutrition.sa.ucsc.edu/")

    jlr = driver.find_element('xpath', link)


    jlr.click()

    soup = bs(driver.page_source, 'lxml');

    breakfast = driver.find_element('xpath', '/html/body/table[2]/tbody/tr[4]').get_attribute('innerHTML')

    soup = bs(breakfast, 'lxml')
    
    x = [x .text for x in soup.find_all("div", class_ = "shortmenurecipes")]

    for y in x:

        print(y.text);

def getAll(link):

    meals = {}

    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
    driver.get("https://nutrition.sa.ucsc.edu/")

    jlr = driver.find_element('xpath', link)


    jlr.click()

    soup = bs(driver.page_source, 'lxml');

    breakfast = driver.find_element('xpath', '/html/body/table[2]/tbody/tr[1]').get_attribute('innerHTML')
    lunch = driver.find_element('xpath', '/html/body/table[2]/tbody/tr[2]').get_attribute('innerHTML')
    dinner = driver.find_element('xpath', '/html/body/table[2]/tbody/tr[3]').get_attribute('innerHTML')
    late = driver.find_element('xpath', '/html/body/table[2]/tbody/tr[3]').get_attribute('innerHTML')

    soup = bs(breakfast, 'lxml')
    
    meals["Breakfast"] = [x .text for x in soup.find_all("div", class_ = "shortmenurecipes")]

    soup = bs(lunch, 'lxml')
    
    meals["Lunch"] = [x .text for x in soup.find_all("div", class_ = "shortmenurecipes")]

    soup = bs(dinner, 'lxml')
    
    meals["Dinner"] = [x .text for x in soup.find_all("div", class_ = "shortmenurecipes")]

    soup = bs(late, 'lxml')
    
    meals["Late-Night"] = [x .text for x in soup.find_all("div", class_ = "shortmenurecipes")]

    return meals





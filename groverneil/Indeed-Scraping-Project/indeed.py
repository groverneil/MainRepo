from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from bs4 import BeautifulSoup as bs
import lxml
import time
import pandas as pd
from datetime import date

#selenium: Get to the website and search python jobs.
#beautifulsoup to iterate through each page and each item in each page
#time for time.sleep() which accounts for loading times (makes the program more reliable)
#pandas to store the table as a dataframe object that would be converted to a csv (excel file)
#lxml to read the incoming webpage

def mainScrape():
    driver = webdriver.Chrome("/Applications/chromedriver")

    url = "https://www.indeed.com"

    driver.get(url)

    base_url = driver.current_url

    #used in the while loop below

    search_box = driver.find_element("xpath", '//*[@id="text-input-what"]')
    search_box.send_keys("python")
    search_box.send_keys(Keys.ENTER)

    time.sleep(3)

    #This takes us to the search results of python jobs in indeed.com

    total_jobs = 0
    jobs_list = []
    salary_list = []
    cmpny_lst = []
    rate_lst = []
    isNew_lst = []
    apply_link_lst = []

    #Lists for various job fields
    #These will be added to the pandas dataframe

    while True:

        # popup = driver.find_element("class", "popover-foreground")

        # if popup is not None:

        #     button = popup.div.button
        #     button.click()


        soup = bs(driver.page_source, "lxml")

        jobs_in_page = soup.find_all("div", class_ = "job_seen_beacon") 

        #all div elements for the jobs

        total_jobs += len(jobs_in_page)

        for job in jobs_in_page:

        #scraping info for each job

            cmpny_name = job.find("span", class_ = "companyName")

            if cmpny_name is not None:
                cmpny_lst.append(job.find("span", class_ = "companyName").text)
            else:
                continue

            jobs_list.append(job.find("div", class_ = "css-1xpvg2o e37uo190").h2.text)
            
            apply_link_lst.append("https://www.indeed.com" + job.find("div", class_ = "css-1xpvg2o e37uo190").h2.a['href'])

            salary = job.find("div", class_ = "metadata salary-snippet-container")

            if salary is None:
                salary_list.append("Not Disclosed")
            else:
                salary_list.append(salary.text)

            #not all jobs have a posted salary

            rating = job.find("span", class_ = "ratingNumber")

            if rating is not None:
                rate_lst.append(rating.span.text)
            else:
                rate_lst.append("N/A")
            
            #jobs ratings (may or may not be present)

            isNew = job.find("div", class_ = "new css-ud6i3y eu4oa1w0")

            if isNew is not None:
                isNew_lst.append("Yes")
            else:
                isNew_lst.append("No")

            #some indeed jobs have a new tag to indicate a newly added job
            #these jobs can be filtered for seperate analysis


            #The company name
            #We have bigger problems if this doesn't exist

        page_buttons_section = soup.find("div", class_ = "pagination").find_all("li")

        #bottom nav section with page numbers and next/prev

        try:
            next = page_buttons_section[-1].a.attrs['href']
        except:
            break

        #If no link found, exits the loop
        #not required but makes the code run w/o any errors at the end

        print(f"Link : {next}")

        if page_buttons_section[-1].a.attrs['aria-label'] != 'Next':
            break

        #if no next page exits the loop

        url = base_url + next

        driver.get(url)

        time.sleep(2)

    df = pd.DataFrame({"Job Name" : jobs_list, 
                        "Company" : cmpny_lst, 
                        "Salary" : salary_list,
                        "Rating" : rate_lst,
                        "New Job" : isNew_lst,
                        "Apply Here" : apply_link_lst
    })

    #creating the dataframe which is identical to a python dict

    print(f"{total_jobs} found on the page today")

    #prints total number of enteries

    this_date = date.today()

    file_date = this_date.strftime("%m-%d-%y")
    full_file_name = "/Users/neilgrover/Documents/2022-Summer/Scraping/udemy/indeed-python-jobs/"  + file_date + "-indeed-python.csv" 


    df.to_csv(full_file_name)

#outputs the csv file. The datetime module allows us to save files by their date


if __name__ == "__main__":

    mainScrape()

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import json
from selenium.common.exceptions import StaleElementReferenceException, NoSuchElementException, TimeoutException

# This file does the work which is gathering cds, cfa, com, sar, sha, and sth 
# courses to feed into our hackathon python notebook. It should be only ran once
#to achieve this.

courses_list = []
colleges= ['CDS', 'CFA', 'COM', 'SAR', 'SHA', 'STH' ]
# ['CAS','CDS', 'CFA', 'COM', 'SAR', 'ENG', 'questrom', 'SHA', 'STH', 'wheelock' ]

def go_to_next_page(driver, current_page_number, base_url):
    # just go to the base url + /current_page_number
    next_page_url = base_url + str(current_page_number)
    # check if the next page exists
    driver.get(next_page_url)
    try:
        WebDriverWait(driver, 100).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, 'ul.course-feed'))
        )
        return True
    except TimeoutException:
        return False
    
def College_Scraper():
    # Set up the driver
    for college in colleges:

        driver = webdriver.Chrome()
        base_url = f'https://www.bu.edu/academics/{college}/courses/'
        print('Scraping course data from:', base_url)
        print(' ')
        current_page_number = 1

        driver.get(base_url)

        try: # Loop through all pages
            while(True):
                
                WebDriverWait(driver, 100).until(
                    EC.presence_of_element_located((By.CSS_SELECTOR, 'ul.course-feed'))
                )
                courses = driver.find_elements(By.CSS_SELECTOR, 'ul.course-feed > li')

                # Sleep
                time.sleep(0.5)

                # Check if that element exists
                if not courses:
                    print('No courses found on page:', current_page_number)
                    break
                
                
                
                for course_li in courses:
                    # Within each 'li', find the 'a' tag and extract the 'href' and also the pre-requisite text 
                    try:
                        # Attempt to find the prerequisite element
                        pre_requisite_element = course_li.find_element(By.TAG_NAME, 'span')  # Adjust your selector as needed
                        pre_requisite_text = pre_requisite_element.text
                    except NoSuchElementException:
                        # If the element is not found, handle the exception
                        pre_requisite_text = "No prerequisites listed"
                        
                    print(pre_requisite_text)
                    course_link = course_li.find_element(By.TAG_NAME, 'a')
                    href = course_link.get_attribute('href')
                    course_name = course_link.text
                    print('Scraping course:', course_name)

                    # Navigate to the course page
                    driver.get(href)

                    # prerequisites = driver.find_element(By.CSS_SELECTOR, 'your-prerequisites-selector').text
                    credits_selector = 'div#info-box.sidebar dd'
                    credits = driver.find_element(By.CSS_SELECTOR, credits_selector).text

                    college_selector = 'div#breadcrumbs a.crumb'
                    college1 = driver.find_element(By.CSS_SELECTOR, college_selector).text
                    print(college1)

            # Before navigating to the course page
            # Assume driver.get(href) is called to navigate to the course page

                    # Checking for the presence of 'div.cf-hub-ind'

                    try:
                        credits_element = driver.find_element(By.CSS_SELECTOR, 'div.cf-hub-ind')
                        credits3 = credits_element.text
                    except NoSuchElementException:
                        credits3 = "Not listed"

                    description_selector = 'div#course-content p'
                    description = driver.find_element(By.CSS_SELECTOR, description_selector).text
                    print("Description: " + description)
                    
                    course_detail = {
                        'name': course_name,
                        'url': href,
                        'credits': credits,
                        'college': college1,
                        'hub_units': credits3,
                        'description': description,
                        'prerequisites': pre_requisite_text
                    }
                    courses_list.append(course_detail)
                    print(' ')
                    driver.back()
                
                # Go to the next page
                print('Going to next page...')
                current_page_number += 1
                next_page_exists = go_to_next_page(driver, current_page_number, base_url)
                if not next_page_exists:
                    break
                print('On page:', current_page_number)
                print(' ')
                
        finally:
            driver.quit()

        print(f'{college} Scraping complete!')
        print(' ')

        with open(f'course_data{college}.json', 'w') as f:
            json.dump(courses_list, f, indent=4)
        
        courses_list.clear()
                    

College_Scraper()

# Save to JSON
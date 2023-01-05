# How to Run

- Run the following command: `python3 indeed.py`
- Alternatively configure cron to run the task automatically (What I have chosen).


# Files

- Indeed.py
    - Contains the main source code for the scaping project.
    - Uses the following libraries:
        - Selenium: Naviagates Google and presses links and buttons.
        - bs4: Finds the elements where the desired data is stored.
        - pandas: Converts the collected data to a dataframe and dumps it to a csv file.

- Indeed-python-jobs:

    - Contains the following files
        - Collected data outputs.
        - Cron log.

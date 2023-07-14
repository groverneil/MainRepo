import dh_scrape


def scrape_response(meals):


    ret_string = ""

    for meal in meals.keys():

        ret_string += f"\n-------------------------------------"
        ret_string += f"\n{meal}\n"
        ret_string += f"-------------------------------------\n"

        for x in meals[meal]:

            ret_string += f"{x}\n"

    return ret_string


def respond(message):

    print(message)

    message = message.lower()
    message_keys = message.split(" ")

    print(len(message_keys))

    if len(message_keys) != 2:

        return "Error: Invalid Cmd. Try again!"

    if message_keys[0] != "menu":

        return "Error: Invalid Cmd"
    
    if message_keys[1] not in dh_scrape.dh_xpath_hash:

        return "Error: Invalid Cmd"

    ret_dict = dh_scrape.getAll(dh_scrape.dh_xpath_hash[message_keys[1]])

    return scrape_response(ret_dict)



def main():

    respond("This is a message")


if __name__ == '__main__':

    main()



import random
import json
import torch
from .model import NeurNet
from .nltk_lib import bag_words, tokenize
import re

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

with open("fin_bot_backend/Finbot_model/chat-gpt-intents.json", "r") as f:

    intents = json.load(f)

FILE = "fin_bot_backend/Finbot_model/dat.pth"

data = torch.load(FILE)

in_size = data["in_size"]
out_size = data["out_size"]
hid_size = data["hid_size"]
all_words =  data["all_words"]
tags = data["tags"]
model_state = data["mod_state"]

model = NeurNet(in_size, hid_size, out_size).to(device)
model.load_state_dict(model_state)
model.eval()

bot_name = "Sammy"

def respond(sentences):

    response_buffer = []

    out_string = ""

    if sentences[-1] in [".", "?", ";"]:

        sentences = sentences[:-1]

    sentences = re.split('\.|\;|\?', sentences)

    for sentence in sentences:

        tok_sent = tokenize(sentence)

        X = bag_words(tok_sent, all_words)

        X = X.reshape(1, X.shape[0])

        X = torch.from_numpy(X)

        output = model(X)
        _, predicted = torch.max(output, dim = 1)

        tag = tags[predicted.item()]

        certainty = torch.softmax(output, dim=1)[0][predicted.item()]

        if certainty < 0.90:

            return "Please try again or contact the office."

        if tag not in response_buffer:

            response_buffer.append(tag)

    if len(response_buffer) > 1:

        if "greeting" in response_buffer:

            out_string += "Hello! "

            response_buffer.remove("greeting")

    for tag in response_buffer:

        for intent in intents["intents"]:

            if intent["tag"] == tag:

                out_string += f"{ random.choice(intent['responses'])}\n"

    return out_string

if __name__ == "__main__":

    print("How can I help you today")
    
    sentences = input("You: ")

    while(sentences != "quit"):

        print(respond(sentences))

        sentences = input("You: ")


        


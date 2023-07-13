import nltk
import numpy
from nltk.stem.porter import PorterStemmer

stemmer = PorterStemmer()

def tokenize(sentence):

    return nltk.word_tokenize(sentence)

def stem(word):

    return stemmer.stem(word.lower())

def stem_all(word_list, ignore_words):

    return [stem(w) for w in word_list if w not in ignore_words]

def bag_words(pattern_sent, all_words):

    pattern_sent = [stem(w) for w in pattern_sent]

    bag_words = numpy.zeros(len(all_words), dtype = numpy.float32)

    for idx, word in enumerate(all_words):

        if word in pattern_sent:

            bag_words[idx] = 1.0

    return bag_words
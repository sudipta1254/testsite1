from flask import Flask
# import random

app = Flask(__name__)

# print(random.__name__)
# print(__name__)


def make_bold(function):
    def wrapper():
        return "<b>" + function() + "</b>"
    return wrapper


def make_emphasis(function):
    def wrapper():
        return "<em>" + function() + "</em>"
    return wrapper


def make_underline(function):
    def wrapper():
        return "<u>" + function() + "</u>"
    return wrapper



@app.route('/')
@make_underline
@make_emphasis
def hello_world():
    return '<h1 style="text-align: center;font-family:sans-serif">Hello, World!</h1>' \
           '<img style="margin-left:34%" src="https://media.giphy.com/media/3GRwYzxwdceaI/giphy.gif">'

@app.route('/<name>')
def greet(name):
    return f'Hello there {name}!'

@app.route('/<path:name>/<int:number>')
def nme(name, number):
    return f'Hello {name}! you are {number} years old.'



if __name__ == '__main__':
    app.run(debug=True)



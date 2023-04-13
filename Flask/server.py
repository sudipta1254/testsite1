import random
from flask import Flask

app = Flask(__name__)
rn = random.randint(1, 8)


@app.route('/')
def guess():
    return "<h1>Guess a number between 0 and 9</h1>" \
    "<img src='https://media.giphy.com/media/3o7aCSPqXE5C6T8tBC/giphy.gif'>"

@app.route('/<name>')
def greet(name):
    return f'<h1>Hello there {name}!</h1>'\
        '\n<h1>Error! Enter a number between 0 & 9!</h1>'

@app.route('/<int:number>')
def nme(number):
    if rn == number:
        return f'<h1>Correct!</h1>' \
        "<img src='https://media.giphy.com/media/4T7e4DmcrP9du/giphy.gif'>"
    elif number > rn:
        return f'<h1>High! Try again</h1>' \
        "<img src='https://media.giphy.com/media/3o6ZtaO9BZHcOjmErm/giphy.gif'>"
    elif number < rn:
        return f'<h1>Low! Try again</h1>' \
        "<img src='https://media.giphy.com/media/jD4DwBtqPXRXa/giphy.gif'>"


if __name__ == '__main__':
    app.run(debug=True)



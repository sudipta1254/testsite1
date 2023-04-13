from flask import Flask, render_template
import random
import datetime
import requests

app = Flask(__name__)

@app.route('/')
def hello():
    curr_yr = datetime.datetime.now().year
    return '<h1 style="text-align:center;font-family:sans-serif">Hello World!</h1>' \
           '<img style="margin-left:34%" src="https://media.giphy.com/media/noyBeNjH4nbtXV5ZLA/giphy.gif">' \
           f'<p style="text-align:center;margin-top:23%">Copyright {curr_yr}. Sudipta Singha.</p>'

@app.route('/web')
def website():
    rand_num = random.randint(0, 10)
    curr_yr = datetime.datetime.now().year
    return render_template('index.html', num=rand_num, year=curr_yr)

@app.route('/guess/<path:name>')
def guess(name):
    g_url = f'https://api.genderize.io?name={name}'
    g_response = requests.get(g_url)
    g_data = g_response.json()
    gender = g_data['gender']
    a_url = f'https://api.agify.io?name={name}'
    a_response = requests.get(a_url)
    a_data = a_response.json()
    age = a_data['age']
    curr_yr = datetime.datetime.now().year
    return render_template('guess.html', name=name, gender=gender, age=age, year=curr_yr)

@app.route('/blog')
def get_blog():
    blog_url = 'https://api.npoint.io/c790b4d5cab58020d391'
    response = requests.get(blog_url)
    all_posts = response.json()
    curr_yr = datetime.datetime.now().year
    return render_template('blog.html', posts=all_posts, year=curr_yr)



if __name__ == '__main__':
    app.run(debug=True)


from flask import Flask
from flask import render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/books.html')
def books():
    return render_template('books.html')

@app.route('/movies.html')
def movies():
    return render_template('movies.html')

@app.route('/quotes.html')
def quotes():
    return render_template('quotes.html')

@app.route('/timer.html')
def timer():
    return render_template('timer.html')

@app.route('/book1.html')
def book1():
    return render_template('book1.html')

@app.route('/book2.html')
def book2():
    return render_template('book2.html')

@app.route('/movie1.html')
def movie1():
    return render_template('movie1.html')

@app.route('/movie2.html')
def movie2():
    return render_template('movie2.html')

@app.route('/readinghabit.html')
def readinghabit():
    return render_template('readinghabit.html')

@app.route('/index.html')
def main():
    return render_template('index.html')
       
if __name__ == '__main__':
    app.run(debug = True)
from flask import Flask, render_template,session,url_for,request,redirect,jsonify,after_this_request
import os

app = Flask(__name__)
app.secret_key = os.environ['validation']

#index page
@app.route('/',methods=["POST","GET"])
def index():
  return render_template("index.html")

#about page serverside processing
@app.route('/about',methods=["POST","GET"])
def about():
  return render_template("about.html")

#about page serverside processing
@app.route('/services',methods=["POST","GET"])
def services():
  return render_template("services.html")

#getting attention page serverside processing
@app.route('/gettingattention',methods=["POST","GET"])
def gettingattention():
  return render_template("gettingattention.html")

#business case page serverside processing
@app.route('/businesscase',methods=["POST","GET"])
def businesscase():
  return render_template("businesscase.html")

app.run(host='0.0.0.0', port=81)

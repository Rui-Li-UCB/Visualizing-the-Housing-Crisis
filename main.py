from flask import Flask, render_template

app = Flask(__name__,template_folder='Templates',static_folder = 'staticFiles')

@app.route("/")
def index():
    return render_template("index_v3.html")

if __name__ == "__main__":
    app.run(host='0.0.0.0',port=5000,debug=True)
from flask import Flask, render_template

app = Flask(__name__, template_folder='templates')


@app.route('/calculator')
def calculator():
    return render_template('calculator.html')


@app.route('/result/<zahl1>/<operation>/<zahl2>')
def result(zahl1, operation, zahl2):
    ergibniss = ""
    float1 = float(zahl1)
    float2 = float(zahl2)
    if operation == "+":
        ergibniss = float1 + float2
    elif operation == "-":
        ergibniss = float1 - float2
    elif operation == "*":
        ergibniss = float1 * float2
    elif operation == ":":
        if float2 == 0:
            ergibniss = "Zero Division"
        else:
            ergibniss = float1 / float2
    return str(ergibniss)

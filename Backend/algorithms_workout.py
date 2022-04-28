#!! this file should oly be triggered upon onpress of generate workout button !!#
import numpy as np
import pandas as pd
from flask import Flask, render_template, Response, request, redirect, url_for
app = Flask(__name__)

@app.route("/generate1")

def P1L1():
    ## retrieve data from db (to be replaced with the actual database)
    df = pd.read_csv('Exercises.csv')
    ## retrieve data from db (to be replaced with the actual database)
    legiso=df[(df['Type'])=='leg-isometric']
    legecc=df[(df['Type'])=='leg-eccentric']
    legcon=df[(df['Type'])=='leg-concentric']
    legply=df[(df['Type'])=='leg-plyo']
    movement=df[(df['Type'])=='movement']
    core=df[(df['Type'])=='Core']
    move = movement.sample(3)
    plyo = legply[(legply['Intensity'])<=0.40].sample(2)
    main = legiso.sample(2)
    frames = [move,plyo,main]
    final = pd.concat(frames)
    p1l1 = final.to_json(orient = 'records')
    return p1l1

@app.route("/generate2")

def P1L2():
    ## retrieve data from db (to be replaced with the actual database)
    df = pd.read_csv('Exercises.csv')
    ## retrieve data from db (to be replaced with the actual database)
    legiso=df[(df['Type'])=='leg-isometric']
    legecc=df[(df['Type'])=='leg-eccentric']
    legcon=df[(df['Type'])=='leg-concentric']
    legply=df[(df['Type'])=='leg-plyo']
    movement=df[(df['Type'])=='movement']
    core=df[(df['Type'])=='Core']
    flexibility=df[(df['Type'])=='Flexibility']
    move = movement.sample(3)
    plyo1 = legply[(legply['Intensity'])<=0.50].sample(2)
    plyo2 = legply[(legply['Intensity'])>0.50].sample(1)
    frames = [move,plyo1,plyo2]
    final = pd.concat(frames)
    p1l2 = final.to_json(orient = 'records')
    return p1l2

@app.route("/generate3")

def P1U():
    ## retrieve data from db (to be replaced with the actual database)
    df = pd.read_csv('Exercises.csv')
    ## retrieve data from db (to be replaced with the actual database)
    legiso=df[(df['Type'])=='leg-isometric']
    legecc=df[(df['Type'])=='leg-eccentric']
    legcon=df[(df['Type'])=='leg-concentric']
    legply=df[(df['Type'])=='leg-plyo']
    movement=df[(df['Type'])=='movement']
    core=df[(df['Type'])=='Core']
    flexibility=df[(df['Type'])=='Flexibility']
    core = core.sample(2)
    flex = flexibility.sample(4)
    frames = [core,flex]
    final = pd.concat(frames)
    p1u = final.to_json(orient = 'records')
    return p1u
## algorithms

if __name__ == '__main__':
    app.run(debug=True)


## test
a = P1L1()
b = P1L2()
c = P1U()

print(a)
print("\n")
print(b)
print("\n")
print(c)
print("\n")
## test
## export the json file to backend (display)
## test with front end first



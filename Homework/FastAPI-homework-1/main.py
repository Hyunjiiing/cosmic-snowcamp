from fastapi import FastAPI
from pydantic import BaseModel
import os

class AddItem(BaseModel):
    food_name: str
    description: str

class DeleteItem(BaseModel):
    food_name: str

app = FastAPI()

@app.post("/addfood")
def add_food(item: AddItem):
    with open(f'./foods/{item.food_name}.txt', "w", encoding='utf-8') as fp:
        fp.write(item.description)
    return item

@app.post("/deletefood")
def delete_food(item: DeleteItem):
    os.remove(f'./foods/{item.food_name}.txt')
    return item

@app.get("/foods")
def show_foods():
    res = []
    for name in os.listdir("./foods"):
        with open(f'./foods/{name}', "r", encoding='utf-8') as fp:
            res.append({"food_name": name[:-4], "description": fp.readline()})
    return res
    
@app.get("/foods-num")
def show_foods_num():
    return { "foodsNum" : len(os.listdir("./foods")) }
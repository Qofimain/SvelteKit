import numpy as np
import requests
import pandas as pd

def countrys():
   url="https://raw.githubusercontent.com/cs109/2014_data/master/countries.csv"
   df=pd.read_csv(url)
   regions = df.Region.unique()
   
   return {"alldata": df.to_numpy, "regions": regions}
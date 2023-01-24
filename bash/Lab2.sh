#!/bin/bash
#This program sends the data of covid, but 3 different data points. Not different APIs

DATA=$(curl https://api.covidtracking.com/v1/us/current.json)
POSITIVE=$(echo $DATA | jq '.[0].positive')
TODAY=$(date)
INCARE=$(echo $DATA | jq '.[0].inIcuCurrently')
NEGATIVE=$(echo $DATA | jq '.[0].negative')
DEATH=$(echo $DATA | jq '.[0].death')

echo "As of $TODAY, there are $POSITIVE positive Covid cases, $NEGATIVE negative cases, $INCARE people in the intensive care due to Covid, and $DEATH deaths caused by Covid."

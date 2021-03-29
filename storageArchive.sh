#!/bin/bash

echo -n "Provide name file that you want to print: "
read -r
file=${REPLY}.txt

echo -n "Provide the message you want to print in the file: "
read -r
message=$REPLY

echo -n "How many times you want this script to run ? "
read -r
number=$REPLY

for (( i=1; i<=${number}; i++))
do
  echo ${message} >> ${file}
done

echo "Finished!"

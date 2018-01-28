import serial
import time
import requests
import json

firebase_url = "https://mood-ring-she-hacks.firebaseio.com/temperature.json"

#Connect to Serial Port for communication
ser = serial.Serial('COM4', 9600, timeout=0)

#Setup a loop to send Temperature values at fixed intervals
#in seconds
fixed_interval = 10
while 1:
    try:
        #temperature value obtained from Arduino + LM35 Temp Sensor         

        temperature_c = ser.readline()
  
        #current time and date
        time_hhmmss = time.strftime('%H:%M:%S')
        date_mmddyyyy = time.strftime('%d/%m/%Y')
  
        # current location name
        # temperature_location = 'Mumbai-Kandivali';
        print(temperature_c )
  
        # insert record
        d=temperature_c.decode('ASCII')
        if len(d) > 0:
            result = requests.post(firebase_url, data=json.dumps(int(d)))
            print ('Record inserted. Result Code = ' + str(result.status_code) + ',' + str(result))
        #time.sleep(fixed_interval)
                               
    except EOFError:
        print ("EOF")
                               
        
       

   # time.sleep(fixed_interval)

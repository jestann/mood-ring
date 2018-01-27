import serial
import time
import requests
import json
firebase_url = 'https://mood-ring-she-hacks.firebaseio.com/'
#Connect to Serial Port for communication
ser = serial.Serial('COM4', 9600, timeout=0)
#Setup a loop to send Temperature values at fixed intervals
#in seconds
fixed_interval = 30
while 1:
    try:
        #vibration value obtained from Arduino + Sensor
        heart_rate = ser.readline()

        #current time and date
        time_hhmmss = time.strftime('%H:%M:%S')
        date_mmddyyyy = time.strftime('%d/%m/%Y')

        print heart_rate + ',' + time_hhmmss + ',' + date_mmddyyyy

        #insert record
        data = {'date':date_mmddyyyy,'time':time_hhmmss,'value':heart_rate }
        result = requests.post(firebase_url + '/heartrate.json', data=json.dumps(data))

        print 'Record inserted. Result Code = ' + str(result.status_code) + ',' + result.text
        time.sleep(fixed_interval)
    except IOError:
        print('Error! Something went wrong.')
    time.sleep(fixed_interval)
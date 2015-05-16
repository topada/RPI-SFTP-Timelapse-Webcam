# file uploader

import sys
import pysftp # to establish sftp connection
import time	# timestamp testing
import datetime # for timestamp

IMAGEFOLDER = "data/" # save directory for captured files
IMAGENAME = "slime" # root name of captured file
TIMESTAMP = 0

def upload(filename):
    with pysftp.Connection('yoursv', username='yourusrname', password='yourpass') as sftp: # enter your credentials here!
    	with sftp.cd('html/d_fhp/io-slime-mold/data'): #remote dir path
    		sftp.put(filename) #local file path


try:
	ts = time.time()
	TIMESTAMP = datetime.datetime.fromtimestamp(ts).strftime("%Y-%m-%d %H-%M-%S")
	
	filename = IMAGEFOLDER + IMAGENAME + TIMESTAMP + ".jpg"
	
	#
	# cam.capture(filename)
	#

	upload(filename)
	
except ImportError:
	print "Failed to upload file. Check your sftp connection."
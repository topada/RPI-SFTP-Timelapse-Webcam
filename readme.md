# Raspberry Pi Timelapse Webcam

The Python script uploads image files to your FTP server. The files will be dropped into the a data-subdirectory and parsed via PHP regularly.


## Install
include the python script in your experiment setup. You'll also need to install the pysftp module, which is only available via pip.

```
	#get pip
	sudo apt-get install python-pip
	
	#get pysftp
    sudo pip install pysftp
    
    #get crypto
    sudo pip install crypto
```

* in the python script (python/upload.py) enter your FTP server credentials:
```python
with pysftp.Connection('yoursv', username='yourusrname', password='yourpass') as sftp: # enter your credentials here!
```

## Example

* Check out [my example](http://topada.hercules.uberspace.de/d_fhp/io-slime-mold/)

## License

The MIT License (MIT)

Copyright (c) 2015 Jonas Koepfer @topada

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

# files in PKG currently hold the latest pypi release – should clean
# this up so it's build from the root instead of copying on releases

build:
	python3 setup.py build

register:
	python3 setup.py register -r pypi

upload:
	python3 setup.py sdist upload --sign -r pypi



# $ cat ~/.pypirc
#
# [distutils]
# index-servers = pypi
#
# [pypi]
# repository: https://pypi.python.org/pypi
# username: myusername
# password: mypassword

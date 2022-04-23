import os
import sys
from manage import main
import webbrowser
import subprocess

from note_react_server.settings import STATIC_PATH

GIT_REMOTE_URL = 'https://github.com/russionbear/russionbear.github.io.git'


def find_free_port():
    for i in range(5001, 65535):
        if not os.popen('netstat -an | findstr :' + str(i)).readlines():
            return i


if __name__ == "__main__":
    # used_port = find_free_port()
    # sys.argv = ['manage.py', 'runserver', str(used_port)]
    # webbrowser.open(f'http://127.0.0.1:{str(used_port)}/')
    # main()
    pass

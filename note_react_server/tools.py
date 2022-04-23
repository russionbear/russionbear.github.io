import os
import sys
import re
from note_react_server.settings import STATIC_PATH
from pathlib import Path


if len(sys.argv):
    if sys.argv[0] == __file__.split("/")[-1]:
        sys.argv.pop(0)


if sys.argv[0] == 'setgiturl':
    try:
        sys.argv[1]
    except IndexError:
        print('index error')

    if re.match(r'^[0-9a-zA-z-_]+$', sys.argv[1]) is None:
        print('url may not legal')

    # for i in os.listdir()


# print(sys.argv)

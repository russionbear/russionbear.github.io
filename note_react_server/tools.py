import json
import os
import sys
import re
from note_react_server.settings import STATIC_PATH
from pathlib import Path


def make_index():
    data = {}
    with open(STATIC_PATH+'/__setting.json', 'r', encoding='utf-8') as f:
        tmp_setting = json.load(f)
        books = tmp_setting['books']

    for i in books:
        data[i['key']] = i.copy()
        children = {}
        with open(STATIC_PATH+'/'+i['key']+'/__setting.json', 'r', encoding='utf-8') as f:
            notes = json.load(f)['notes']
        for j in notes:
            source = {}
            with open(STATIC_PATH+'/'+i['key']+'/'+j['key']+'/__source.json', 'r', encoding='utf-8') as f:
                source_ = json.load(f)['sources']
            for k in source_:
                source[k['sourceId']] = k
            children[j['key']] = j
            children[j['key']]['children'] = source
        data[i['key']]['children'] = children
    # print(data)

    with open(STATIC_PATH+'/__index.html', 'w', encoding='utf-8') as f:
        # tmp_setting['index'] = data
        # for i in tmp_setting['books']:
        #     if 'children' in i:
        #         del i['children']
        json.dump(data, f)
    # for i in os.listdir()


if len(sys.argv):
    if sys.argv[0] == __file__.split("/")[-1]:
        sys.argv.pop(0)


if sys.argv[0] == 'set-git-url':
    try:
        sys.argv[1]
    except IndexError:
        print('index error')

    if re.match(r'^[0-9a-zA-z-_]+$', sys.argv[1]) is None:
        print('url may not legal')

elif sys.argv[0] == 'make-index':
    make_index()


# print(sys.argv)

import requests
import json
from contextlib import closing

# response = requests.post('http://127.0.0.1:8000/books', data={'type': 'get'})

# response = requests.post('http://127.0.0.1:8000/books',
#                          data={
#                              'type': 'update',
#                              'newBooks': json.dumps([{"key": "11", "name": "name", "dsc": "dsc"}, {"key": "22", "name": "name", "dsc": "dsc"}])
#                          })


# response = requests.post('http://127.0.0.1:8000/notes', data={
#     'type': 'update',
#     'bookKey': '11',
#     "newNotes": json.dumps([{
#         'sourceId': 'sdf',
#         'type': 'mu',
#         'size': 123,
#         'title': 'ti',
#         'url': 'url',
#         'gitUrl': 'git'
#     }])
# })

# response = requests.post('http://127.0.0.1:8000/value', data={
#     'type': 'get',
#     'bookKey': '11',
#     'noteKey': 'sdf',
#     'value': 'valuesdfj84kldf'
# })

# response = requests.post('http://127.0.0.1:8000/source', data={
#     'type': 'add',
#     'bookKey': '11',
#     'noteKey': 'sdf',
#     'source': json.dumps({
#         'sourceId': 'string',
#         'type': 'string',
#         'size': 12123,
#         'title': 'title',
#         'url': 'url',
#         'gitUrl': ''
#     })
# }, files={'upload': open(r'E:\workspace\note_react_server\static\test.jpg', 'rb')})

# with closing(requests.get('http://127.0.0.1:8000/source', data={
#     'type': 'download',
#     'bookKey': '11',
#     'noteKey': 'sdf',
#     'source': json.dumps({
#         'sourceId': 'string',
#         'type': 'string',
#         'size': 12123,
#         'title': 'title',
#         'url': 'url',
#         'gitUrl': ''
#     })
# }, stream=True)) as response:
#     with open('./string', 'wb') as fd:
#         ''' chunk_size 的单位为B'''
#         try:
#             for chunk in response.iter_content(chunk_size=500):
#                 if chunk:
#                     fd.write(chunk)
#         except:
#             print('error', response.status_code, response.url)
#             # return
#
#         # print(response.text)

response = requests.post('http://127.0.0.1:8000/value', data={
    'type': 'get',
    'bookKey': '11',
    'noteKey': 'sdf',
    'value': 'valuesdfj84kldf'
})
from django.http import HttpResponse, JsonResponse, Http404, StreamingHttpResponse
from django.shortcuts import render
from .settings import STATIC_PATH, GIT_URL_ROOT

import os
import shutil
import json
import requests
from contextlib import closing
from django.core.management.commands.runserver import Command as Runserver


LOCAL_ADDRESS = 'http://' + Runserver.default_addr + ':' + Runserver.default_port + '/static'

print('runserver', Runserver.default_addr, Runserver.default_port)


def down_chunk_file_manager(file_path, chuck_size=1024):
    with open(file_path, "rb") as file:
        while True:
            chuck_stream = file.read(chuck_size)
            if chuck_stream:
                yield chuck_stream
            else:
                break


def init_localstorage():
    if os.path.exists(STATIC_PATH+'__setting.json'):
        return
    if os.path.exists(STATIC_PATH):
        shutil.rmtree(STATIC_PATH)
    os.mkdir(STATIC_PATH)

    # with open(STATIC_PATH+'/user.json', 'w', encoding='utf-8') as f:
    #     json.dump({}, f)

    with open(STATIC_PATH + '__setting.json', 'w', encoding='utf-8') as f:
        json.dump({'books': []}, f)

    with open(STATIC_PATH + '__index.html', 'w', encoding='utf-8') as f:
        json.dump({}, f)


init_localstorage()


def index(request):
    return render(request, 'index.html')
    # return HttpResponse("index keams")


def edit(request):
    return render(request, 'edit.html')


def browser(request):
    return render(request, 'edit.html')


def books(request):
    # bookKey = request.POST.get('bookKey', None)
    error = JsonResponse({'status': 100})
    request.POST = json.loads(request.body.decode('utf-8'))
    type_ = request.POST.get('type', None)
    print(request.POST.keys(), request.body)
    if type_ is None:
        return error

    if type_ == 'get':
        with open(STATIC_PATH + '__setting.json', 'r', encoding='utf-8') as f:
            return JsonResponse({'status': 0, 'books': json.load(f)['books']})

    elif type_ == 'update':
        newBooks = request.POST.get('newBooks', None)
        # newBooks = json.loads(newBooks)
        print(newBooks, 'sdf')
        if newBooks is None:
            return error

        all_keys = set([i['key'] for i in newBooks])
        all_files = set(os.listdir(STATIC_PATH))
        all_files.remove('__setting.json')
        all_files.remove('__index.html')

        for i in all_files - all_keys:
            shutil.rmtree(STATIC_PATH+i)

        for i in all_keys - all_files:
            os.mkdir(STATIC_PATH+i)
            with open(STATIC_PATH+i+'/__setting.json', 'w', encoding='utf-8') as f:
                json.dump({'notes': []}, f)

        with open(STATIC_PATH + '__setting.json', 'r', encoding='utf-8') as f:
            tmp_setting = json.load(f)
        with open(STATIC_PATH + '__setting.json', 'w', encoding='utf-8') as f:
            tmp_setting['books'] = newBooks
            json.dump(tmp_setting, f)

        return JsonResponse({'status': 0})


def notes(request):
    error = JsonResponse({'status': 100})
    print(request.body)
    request.POST = json.loads(request.body.decode('utf-8'))
    type_ = request.POST.get('type', None)
    bookKey = request.POST.get('bookKey', None)
    if type_ is None or bookKey is None:
        return error

    if type_ == 'get':
        with open(STATIC_PATH + bookKey + '/__setting.json', 'r', encoding='utf-8') as f:
            return JsonResponse({'status': 0, 'notes': json.load(f)['notes']})

    elif type_ == 'update':
        newNotes = request.POST.get('newNotes', None)
        # newNotes = json .loads(newNotes)
        # print('newNote')
        if newNotes is None:
            return error

        all_keys = set([i['key'] for i in newNotes])
        all_files = set(os.listdir(STATIC_PATH + bookKey))
        all_files.remove('__setting.json')

        for i in all_files - all_keys:
            shutil.rmtree(STATIC_PATH + bookKey + '/' + i)

        for i in all_keys - all_files:
            os.mkdir(STATIC_PATH + bookKey + '/' + i)
            with open(STATIC_PATH + bookKey + '/' + i + '/__source.json', 'w', encoding='utf-8') as f:
                json.dump({'sources': []}, f)
            with open(STATIC_PATH + bookKey + '/' + i + '/index.html', 'w', encoding='utf-8') as f:
                f.write('')
            # with open(STATIC_PATH + bookKey + '/' + i + '/__quote.j')

        with open(STATIC_PATH + bookKey + '/__setting.json', 'r', encoding='utf-8') as f:
            tmp_setting = json.load(f)
        with open(STATIC_PATH + bookKey + '/__setting.json', 'w', encoding='utf-8') as f:
            tmp_setting['notes'] = newNotes
            json.dump(tmp_setting, f)

        return JsonResponse({'status': 0})


def value(request):
    error = JsonResponse({'status': 100})
    request.POST = json.loads(request.body.decode('utf-8'))
    type_ = request.POST.get('type', None)
    bookKey = request.POST.get('bookKey', None)
    noteKey = request.POST.get('noteKey', None)
    if bookKey is None or noteKey is None or type_ is None:
        return error
    if type_ == 'get':
        with open(STATIC_PATH+bookKey+'/'+noteKey+'/index.html', 'r', encoding='utf-8') as f:
            return JsonResponse({'status': 0, 'value': f.read()})
    elif type_ == 'set':
        tmp_val = request.POST.get('value', None)
        if tmp_val is None:
            return
        with open(STATIC_PATH+bookKey+'/'+noteKey+'/index.html', 'w', encoding='utf-8') as f:
            f.write(tmp_val)

        tmp_source = request.POST.get('source', None)
        if tmp_source is None:
            return JsonResponse({'status': 0})

        with open(STATIC_PATH+bookKey+'/__setting.json', 'r', encoding='utf-8') as f:
            tmp_set = json.load(f)
        for i1, i in enumerate(tmp_set['notes']):
            if i['key'] == noteKey:
                tmp_set['notes'][i1] = tmp_source

        with open(STATIC_PATH+bookKey+'/__setting.json', 'w', encoding='utf-8') as f:
            json.dump(tmp_set, f)
        return JsonResponse({'status': 0, 'modified': True})


def source(request):
    error = JsonResponse({'status': 100})
    print(request.body, request.POST)
    type_ = request.POST.get('type', None)

    if type_ is None:
        request.POST = json.loads(request.body.decode('utf-8'))

        type_ = request.POST.get('type', None)
    else:
        pass

    # print(request.body, request.POST)
    bookKey = request.POST.get('bookKey', None)
    noteKey = request.POST.get('noteKey', None)
    # print(bookKey, noteKey, type_)
    if bookKey is None or noteKey is None or type_ is None:
        return error
    if type_ == 'get':
        with open(STATIC_PATH+bookKey+'/'+noteKey+'/__source.json', 'r', encoding='utf-8') as f:
            tmp_sources = json.load(f)['sources']
            for i1, i in enumerate(tmp_sources):
                tmp_sources[i1]['gitUrl'] = LOCAL_ADDRESS+'/'+bookKey+'/'+noteKey+'/'+i['sourceId']
            return JsonResponse({'status': 0, 'sources': tmp_sources})
    elif type_ == 'delete':
        tmp_val = request.POST.get('deleteIds', None)
        if tmp_val is None:
            return
        tmp_val = set(tmp_val)
        with open(STATIC_PATH+bookKey+'/'+noteKey+'/__source.json', 'r', encoding='utf-8') as f:
            tmp_sources = json.load(f)
        rlt = []
        for i in tmp_sources['sources']:
            if i['sourceId'] in tmp_val:
                continue
            rlt.append(i)

        for i in tmp_val:
            if os.path.exists(STATIC_PATH+bookKey+'/'+noteKey + '/'+i):
                os.remove(STATIC_PATH+bookKey+'/'+noteKey+'/'+i)

        with open(STATIC_PATH+bookKey+'/'+noteKey+'/__source.json', 'w', encoding='utf-8') as f:
            tmp_sources['sources'] = rlt
            json.dump(tmp_sources, f)
        return JsonResponse({'status': 0})
    elif type_ == 'add':
        source_ = request.POST.get('source', None)
        # print(request.FILES)
        # print(source_)
        if source_ is None:
            return JsonResponse({'status': 100})

        if type(source_) == str:
            source_ = json.loads(source_)

        if os.path.exists(STATIC_PATH + bookKey + '/' + noteKey + source_['sourceId']):
            return JsonResponse({'status': 0})

        if source_['type'] not in ['outer url', 'local url']:
            file_path = STATIC_PATH+bookKey+'/'+noteKey+'/' + source_['sourceId']
            try:
                myFile = request.FILES.get("upload", None)  # 获取上传的文件，如果没有文件，则默认为None
                if not myFile:
                    return JsonResponse({'status': 5})
                destination = open(file_path, 'wb+')  # 打开特定的文件进行二进制的写操作
                for chunk in myFile.chunks():  # 分块写入文件
                    destination.write(chunk)
                destination.close()
            except:
                if os.path.exists(file_path):
                    os.remove(file_path)
                return error

        with open(STATIC_PATH + bookKey + '/' + noteKey + '/__source.json', 'r', encoding='utf-8') as f:
            tmp_sources = json.load(f)
            source_['gitUrl'] = GIT_URL_ROOT + '/'.join([bookKey, noteKey, source_['sourceId']])

        with open(STATIC_PATH + bookKey + '/' + noteKey + '/__source.json', 'w', encoding='utf-8') as f:
            tmp_sources['sources'].append(source_)
            json.dump(tmp_sources, f)
        # print('gitUrl', source_['gitUrl'], '/'.join([LOCAL_ADDRESS, noteKey, source_['sourceId']]))
        return JsonResponse({'status': 0, 'gitUrl': '/'.join([LOCAL_ADDRESS, bookKey, noteKey, source_['sourceId']])})

    elif type_ == 'download':
        source_ = request.POST.get('source', None)
        if source_ is None:
            return JsonResponse({'status': 100})

        file_path = STATIC_PATH+bookKey+'/'+noteKey+'/'+source_['sourceId']

        if not os.path.exists(file_path):
            return JsonResponse({'status': 4})

        response = StreamingHttpResponse(down_chunk_file_manager(file_path))
        response['Content-Type'] = 'application/octet-stream'
        response['Content-Disposition'] = 'attachment;filename="{0}"'.format(source_['name'])
        return JsonResponse({'status': 0})

    elif type_ == 'uploadByUrl':
        source_ = request.POST.get('source', None)
        # outer_url = request.POST.get('url', None)
        if source_ is None:
            return error
        outer_url = source_.get('url', None)
        if outer_url is None or outer_url == '':
            return error
        file_path = STATIC_PATH + bookKey + '/' + noteKey + '/' + source_['sourceId']

        try:
            with closing(requests.get(outer_url, stream=True)) as response:
                with open(file_path, 'wb') as fd:
                    ''' chunk_size 的单位为B'''
                    for chunk in response.iter_content(chunk_size=500):
                        if chunk:
                            fd.write(chunk)
        except:
            if os.path.exists(file_path):
                os.remove(file_path)
            # print('error', response.status_code, response.url)
            return JsonResponse({'status': 3})

        with open(STATIC_PATH + bookKey + '/' + noteKey + '/__source.json', 'r', encoding='utf-8') as f:
            tmp_sources = json.load(f)
            source_['gitUrl'] = GIT_URL_ROOT + '/'.join([bookKey, noteKey, source_['sourceId']])

        with open(STATIC_PATH + bookKey + '/' + noteKey + '/__source.json', 'w', encoding='utf-8') as f:
            tmp_sources['sources'].append(source_)
            json.dump(tmp_sources, f)

        return JsonResponse({'status': 0, 'size': os.stat(file_path).st_size,
                             'gitUrl': '/'.join([LOCAL_ADDRESS, bookKey, noteKey, source_['sourceId']])})
    elif type_ == 'update':
        sourceId = request.POST.get('sourceId', None)
        newSource = request.POST.get('newSource', None)
        if sourceId is None or newSource is None:
            return

        with open(STATIC_PATH + bookKey + '/' + noteKey + '/__source.json', 'r', encoding='utf-8') as f:
            tmp_setting = json.load(f)
            source_ = tmp_setting['sources']

        for i1, i in enumerate(source_):
            if i['sourceId'] == sourceId:
                tmp_setting['sources'][i1] = newSource
                break
        else:
            return JsonResponse({'status': 87})

        with open(STATIC_PATH + bookKey + '/' + noteKey + '/__source.json', 'w', encoding='utf-8') as f:
            json.dump(tmp_setting, f)

        return JsonResponse({'status': 0})

        # newSource = request.POST.get('newSources', None)
        # # newNotes = json .loads(newNotes)
        # print('news', newSource)
        # if newSource is None:
        #     return error
        #
        # with open(STATIC_PATH + bookKey + '/' + noteKey + '/__setting.json', 'r', encoding='utf-8') as f:
        #     tmp_setting = json.load(f)
        #     source_ = tmp_setting['sources']
        #
        # if len(source_) != len(newSource):
        #     return JsonResponse({'status': 76})
        #
        # source_.sort(key=lambda arg: arg['sourceId'])
        # newSource.sort(key=lambda arg: arg['source'])
        # for i1, i in enumerate(source_):
        #     if i['sourceId'] != newSource[i1]['sourceId']:
        #         return JsonResponse({'status': 76})
        #
        # with open(STATIC_PATH + bookKey + '/' + noteKey + '/__setting.json', 'r', encoding='utf-8') as f:
        #     tmp_setting['sources'] = source_
        #     json.dump(tmp_setting, f)
        #
        # return JsonResponse({'status': 0})

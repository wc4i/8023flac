import urllib.request, urllib.parse, re
names=['最菲','十万个为什么','胡思乱想','迷']
for name in names:
    url='https://www.kuwo.cn/search/list?key='+urllib.parse.quote(name)
    req=urllib.request.Request(url, headers={'User-Agent':'Mozilla/5.0'})
    data=urllib.request.urlopen(req, timeout=10).read().decode('utf-8','ignore')
    print('===', name, '===')
    found=set(re.findall(r'https://img1\\.kuwo\\.cn/star/albumcover/[^"\\']+', data))
    for f in list(found)[:20]:
        print(f)
    print('count', len(found), '\n')

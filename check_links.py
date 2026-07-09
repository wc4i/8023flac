import json, urllib.request, ssl
path = r'F:\工具\新建文件夹\artists\cn-qiqin.json'
with open(path, encoding='utf-8') as f:
    data = json.load(f)
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE
for group_name, items in data.get('groups', {}).items():
    for item in items:
        link = item.get('link')
        if not link or 'pan.baidu.com' not in link:
            continue
        title = item.get('title') or item.get('name') or 'unknown'
        req = urllib.request.Request(link, headers={'User-Agent':'Mozilla/5.0'})
        try:
            with urllib.request.urlopen(req, context=ctx, timeout=20) as r:
                print(title, '=>', r.status, r.geturl())
        except Exception as e:
            print(title, '=> ERROR', type(e).__name__, e)

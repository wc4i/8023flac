import re, requests
from pathlib import Path
path = Path(r'F:\工具\新建文件夹\js\variety_data.js')
text = path.read_text(encoding='utf-8')
pattern = re.compile(r'{ title: "([^"]+)", link: "([^"]+)" }')

def fetch_cover(title):
    m = re.match(r'^(\d{4})\s*(.+)$', title)
    query = m.group(2).strip() if m else title
    try:
        r = requests.post('https://music.163.com/api/search/get/', data={'s': query, 'type': 10, 'limit': 5}, headers={'Referer': 'https://music.163.com'}, timeout=20)
        payload = r.json()
        albums = payload.get('result', {}).get('albums', [])
        if albums:
            pic = albums[0].get('picUrl') or ''
            if pic:
                return pic.replace('http://', 'https://') + '?param=640y640'
    except Exception:
        pass
    return ''

def repl(m):
    title = m.group(1)
    link = m.group(2)
    cover = fetch_cover(title)
    if cover:
        return f'{{ title: "{title}", link: "{link}", cover: "{cover}" }}'
    return f'{{ title: "{title}", link: "{link}" }}'

new_text = pattern.sub(repl, text)
path.write_text(new_text, encoding='utf-8')
print('updated')

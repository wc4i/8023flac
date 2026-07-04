import re, requests, json, os
from pathlib import Path
path = Path(r'F:\工具\新建文件夹\js\variety_data.js')
text = path.read_text(encoding='utf-8')
pattern = re.compile(r'{ title: "([^"]+)", link: "([^"]+)", cover: "([^"]+)" }')

def build_queries(title):
    base = title.strip()
    if re.match(r'^\d{4}\s*', base):
        base = re.sub(r'^\d{4}\s*', '', base).strip()
    queries = []
    queries.append(base)
    if re.search(r'第\d+季', base):
        queries.append(re.sub(r'第\d+季', '第1季', base))
    if re.search(r'第\d+期', base):
        queries.append(re.sub(r'第\d+期', '第1期', base))
    if '歌手' in base and '第' not in base:
        queries.append(base + ' 第1期')
    if '乘风' in base and '第' not in base:
        queries.append(base + ' 第1期')
    if '乐队' in base and '第' not in base:
        queries.append(base + ' 第1季')
    # remove duplicates preserving order
    seen = set()
    out = []
    for q in queries:
        if q not in seen:
            seen.add(q)
            out.append(q)
    return out


def fetch_cover(title):
    for q in build_queries(title):
        try:
            r = requests.post('https://music.163.com/api/search/get/', data={'s': q, 'type': 10, 'limit': 8}, headers={'Referer': 'https://music.163.com'}, timeout=20)
            payload = r.json()
            albums = payload.get('result', {}).get('albums', [])
            if albums:
                for album in albums:
                    name = album.get('name', '')
                    if '第1期' in name or '第1季' in name or '第一期' in name or '第一季' in name or q in name or title.replace(re.match(r'^\d{4}\s*', title).group(0) if re.match(r'^\d{4}\s*', title) else '', '') in name:
                        pic = album.get('picUrl') or ''
                        if pic:
                            return pic.replace('http://', 'https://') + '?param=640y640'
                pic = albums[0].get('picUrl') or ''
                if pic:
                    return pic.replace('http://', 'https://') + '?param=640y640'
        except Exception:
            continue
    return ''


def repl(m):
    title = m.group(1)
    link = m.group(2)
    cover = fetch_cover(title)
    return f'{{ title: "{title}", link: "{link}", cover: "{cover}" }}'

new_text = pattern.sub(repl, text)
path.write_text(new_text, encoding='utf-8')
print('updated')

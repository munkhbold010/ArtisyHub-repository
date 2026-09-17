"""Package the real production bundle as a single HTML file for offline review.
Run `npm run build` first, then `python3 scripts/create-preview.py`.
No mock UI, web services, extra dependencies, or browser automation are used.
"""
from pathlib import Path
import base64
import json
import mimetypes
import re

ROOT = Path(__file__).resolve().parent.parent
DIST = ROOT / 'dist'
html = (DIST / 'index.html').read_text()
html = re.sub(r'<base href="[^"]*">', '<base href="./">', html)
# The local review file should not send events to production analytics.
html = re.sub(r'<!-- Google Tag Manager -->.*?<!-- End Google Tag Manager -->', '', html, flags=re.S)
html = re.sub(r'<!-- Google Tag Manager \(noscript\) -->.*?<!-- End Google Tag Manager \(noscript\) -->', '', html, flags=re.S)
html = re.sub(r'<meta property="og:[^"]*"[^>]*>', '', html)
assets = {}

def data_url(path):
    mime = mimetypes.guess_type(str(path))[0] or 'application/octet-stream'
    return 'data:' + mime + ';base64,' + base64.b64encode(path.read_bytes()).decode('ascii')

def remember_asset(match):
    key = match.group(2)
    path = DIST / key.lstrip('/')
    if not path.is_file():
        raise FileNotFoundError(path)
    if key not in assets:
        assets[key] = data_url(path)
    return 'artisyPreviewAssets[' + json.dumps(key) + ']'

def inline_script(match):
    script = (DIST / match.group(1)).read_text()
    script = re.sub(r'''(["'])(/?assets/[^"']+)\1''', remember_asset, script)
    return '<script>' + script.replace('</script', '<\\/script') + '</script>'

def inline_style(match):
    css = (DIST / match.group(1)).read_text()
    def inline_url(m):
        url = m.group(1).strip('"\'')
        if url.startswith(('data:', 'http:', 'https:')):
            return m.group(0)
        p = DIST / url.lstrip('/')
        if not p.is_file():
            raise FileNotFoundError(p)
        return 'url("' + data_url(p) + '")'
    css = re.sub(r'url\(([^)]+)\)', inline_url, css)
    return '<style>' + css + '</style>'

html = re.sub(r'<script src="([^"]+)"[^>]*></script>', inline_script, html)
html = re.sub(r'<link rel="stylesheet" href="([^"]+)"[^>]*>', inline_style, html)
# Angular also inlines critical CSS into index.html. Embed its font URLs too.
def embed_critical_style(match):
    css = match.group(2)
    def embed_url(m):
        url = m.group(1).strip('"\'')
        if url.startswith(('data:', 'http:', 'https:')):
            return m.group(0)
        path = DIST / url.lstrip('/')
        if not path.is_file():
            raise FileNotFoundError(path)
        return 'url("' + data_url(path) + '")'
    return '<style' + match.group(1) + '>' + re.sub(r'url\(([^)]+)\)', embed_url, css) + '</style>'
html = re.sub(r'<style([^>]*)>(.*?)</style>', embed_critical_style, html, flags=re.S)
html = re.sub(r'<link rel="icon"[^>]*>', '<link rel="icon" href="'+data_url(DIST/'assets/logo/Logo.png')+'">', html)
html = html.replace('<body>', '<body><script>const artisyPreviewAssets=' + json.dumps(assets, separators=(',', ':')) + ';</script>')
output = ROOT / 'ArtisyHub-preview.html'
output.write_text(html)
print(json.dumps({'file': str(output), 'size_bytes': output.stat().st_size, 'embedded_images': len(assets)}))

#!/usr/bin/env python3
"""Generate API endpoint catalog from docs/swagger.yaml for Tactical RMM."""

from __future__ import annotations

from collections import defaultdict
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parents[1]
SWAGGER = ROOT / 'docs' / 'swagger.yaml'
OUTPUT = ROOT / 'docs' / 'api-catalog.md'

SKIP_PREFIXES = ('api/v3/', 'api/v4/', 'api/schema')

METHOD_ORDER = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']


def should_skip(path: str) -> bool:
    normalized = path.strip('/')
    return any(normalized.startswith(prefix) for prefix in SKIP_PREFIXES)


def main() -> None:
    with SWAGGER.open(encoding='utf-8') as handle:
        spec = yaml.safe_load(handle)

    by_tag: dict[str, list[tuple[str, str, str]]] = defaultdict(list)

    for path, path_ops in spec.get('paths', {}).items():
        if should_skip(path):
            continue
        for method, detail in path_ops.items():
            if method.upper() not in METHOD_ORDER:
                continue
            tag = (detail.get('tags') or ['other'])[0]
            op_id = detail.get('operationId', '')
            by_tag[tag].append((method.upper(), path, op_id))

    lines = [
        '# Tactical RMM API catalog',
        '',
        f'Generated from [`swagger.yaml`](swagger.yaml) (OpenAPI {spec.get("openapi", "?")}, '
        f'version {spec.get("info", {}).get("version", "?")}).',
        '',
        'Agent-facing `/api/v3/*` and `/api/v4/*` routes are omitted (not for API key automation).',
        '',
        'Use the **Custom API** resource in the n8n node for any endpoint below, or the curated resources where available.',
        '',
    ]

    total = 0
    for tag in sorted(by_tag.keys()):
        entries = sorted(by_tag[tag], key=lambda row: (row[1], row[0]))
        total += len(entries)
        lines.append(f'## {tag}')
        lines.append('')
        lines.append('| Method | Path | Operation ID |')
        lines.append('| --- | --- | --- |')
        for method, path, op_id in entries:
            op_cell = f'`{op_id}`' if op_id else '—'
            lines.append(f'| {method} | `{path}` | {op_cell} |')
        lines.append('')

    lines.append(f'**{total}** documented automation endpoints across **{len(by_tag)}** tags.')
    lines.append('')

    OUTPUT.write_text('\n'.join(lines), encoding='utf-8')
    print(f'Wrote {OUTPUT.relative_to(ROOT)} ({total} endpoints, {len(by_tag)} tags)')


if __name__ == '__main__':
    main()

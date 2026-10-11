"""Bundle a self-contained double-clickable review copy using only Python stdlib."""
from pathlib import Path
import hashlib
import re
import zipfile

root = Path(__file__).resolve().parents[1]
output = root / "artifacts"
output.mkdir(exist_ok=True)
version = re.search(r"EVOLUTION_VERSION = '([^']+)'", (root / "code/experiment1/js/experiment.js").read_text()).group(1)
archive = output / f"evolution-mockup-v{version}.zip"
include = [root / "README.md", root / "docs", root / "code" / "experiment1"]
with zipfile.ZipFile(archive, "w", zipfile.ZIP_DEFLATED) as z:
    for source in include:
        files = [source] if source.is_file() else sorted(source.rglob("*"))
        for path in files:
            if path.is_file() and path.name != ".DS_Store":
                z.write(path, Path("evolution-mockup") / path.relative_to(root))
print(archive)
print(f"{archive.stat().st_size:,} bytes")
print("SHA256 " + hashlib.sha256(archive.read_bytes()).hexdigest())

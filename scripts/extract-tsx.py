"""Rebuild editable TSX + CSS Modules from an unmodified local Figma archive."""
import pathlib,sys,tempfile,zipfile,subprocess
root=pathlib.Path(__file__).resolve().parents[1]
source=pathlib.Path(sys.argv[1] if len(sys.argv)>1 else root.parent/'ецс.fig').resolve()
with tempfile.TemporaryDirectory(prefix='ecs-tsx-') as tmp:
    canvas=pathlib.Path(tmp)/'canvas.fig';raw=pathlib.Path(tmp)/'raw.json'
    with zipfile.ZipFile(source) as z:canvas.write_bytes(z.read('canvas.fig'))
    subprocess.run(['node',str(root/'scripts/decode-full.cjs'),str(canvas),str(raw)],check=True)
    subprocess.run([sys.executable,str(root/'scripts/generate-tsx.py'),str(raw),str(source)],check=True)

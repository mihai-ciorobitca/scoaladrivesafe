# recursive print paths in views folder
import os
from json import dumps

routes = []

for root, dirs, files in os.walk("views"):
    for file in files:
        if file.endswith(".htm") or file.endswith(".html"):
            print(os.path.join(root, file))
            # rename file to .ejs
            os.rename(os.path.join(root, file), os.path.join(root, file[:-4] + ".ejs"))
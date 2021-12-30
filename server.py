import os
from http.server import HTTPServer, BaseHTTPRequestHandler

class Serv(BaseHTTPRequestHandler):

    def do_GET(self):
        try:
            file_to_open = open(os.path.abspath(
                'template/default/index.html')).read()
            self.send_response(200)
            print('\n\n\n\n\n\n\n\n\n\n')
            print('Compiled  successfully!\n')
            print('App running at:\n- Local: http://localhost:8080/\n\n\n\n\n\n\n\n')

        except:
            file_to_open = "File not found"
            self.send_response(404)
        self.end_headers()
        self.wfile.write(bytes(file_to_open, 'utf-8'))


httpd = HTTPServer(('localhost', 8080), Serv)
httpd.serve_forever()

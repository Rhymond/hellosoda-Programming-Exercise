#!/usr/bin/env python

import tornado.ioloop
import tornado.web
import os.path
import json
import sys

from tornado.log import app_log
from tornado.options import define, options, parse_command_line

define("port", default=8888, help="run on the given port", type=int)
define("debug", default=False, help="run in debug mode")

class PeopleHandler(tornado.web.RequestHandler):
    def get(self):
        path = os.path.join(os.path.dirname(__file__), "storage/people.json")
        data = json.load(open(path))
        self.write(data)

class LogHandler(tornado.web.RequestHandler):
    def post(self):
        data = json.loads(self.request.body)
        app_log.info(data)

def main():
    parse_command_line()
    app_log.info("Starting Tornado server on port %s" % (options.port))

    path = os.path.abspath(os.path.dirname(__file__))

    urls = [
        (r"/api/people", PeopleHandler),
        (r"/api/log", LogHandler),
        (r"/(.*)", tornado.web.StaticFileHandler,
            {"path" : os.path.join(path, 'app', 'index.html')}),
        (r"/partials/(.*)", tornado.web.StaticFileHandler,
            {"path" : os.path.join(path, 'app', 'partials')}),
    ]

    settings = dict(
        template_path=None,
        static_path=os.path.join(path, 'app'),
        debug=options.debug,
    )

    tornado.web.Application(urls, **settings).listen(options.port)
    tornado.ioloop.IOLoop.current().start()

if __name__ == "__main__":
    sys.exit(main())

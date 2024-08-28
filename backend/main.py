import asyncio

import socketio


from aiohttp import web

sio = socketio.AsyncServer(cors_allowed_origins="*")

app = web.Application()
sio.attach(app)

@sio.event
async def connect(sid,environ):
    print(f"Client connected: {sid}")


@sio.event
async def chat_message(sid,message):
    print(f"Message from {sid}", message)
    await sio.emit('chat_message',f"Server recived: {message}")

@sio.event
async def disconnect(sid):
    print(f"Client disconnected: {sid}")

if __name__ == "__main__":
    web.run_app(app,host="0.0.0.0",port=8001)


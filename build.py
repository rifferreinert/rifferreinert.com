import docker

client = docker.from_env()
df = open('docker/app/Dockerfile', 'rb')
client.images.build(tag='rifferreinert/rifferreinert_website_app', path='.', dockerfile='docker/app/Dockerfile', nocache=True)
df = open('docker/web/Dockerfile', 'rb')
client.images.build(tag='rifferreinert/rifferreinert_website_server', path='.', dockerfile='docker/web/Dockerfile', nocache=True)
print('Images Built')
client.images.push('rifferreinert/rifferreinert_website_app')
client.images.push('rifferreinert/rifferreinert_website_server')
print('Images Pushed')


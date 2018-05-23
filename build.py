"""Build and push our docker files"""

import docker

CLIENT = docker.from_env()


def build_images():
    """Build and tag docker images"""

    CLIENT.images.build(tag='rifferreinert/rifferreinert_website_app',
                        path='.', dockerfile='docker/app/Dockerfile', nocache=True)
    CLIENT.images.build(tag='rifferreinert/rifferreinert_website_server',
                        path='.', dockerfile='docker/web/Dockerfile', nocache=True)
    print('Images Built')


def push_images():
    """Push docker images"""

    CLIENT.images.push('rifferreinert/rifferreinert_website_app')
    CLIENT.images.push('rifferreinert/rifferreinert_website_server')
    print('Images Pushed')


if __name__ == '__main__':
    build_images()
    push_images()

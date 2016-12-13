FROM node:5.7.1

# Install libsass
RUN apt-get update
RUN apt-get install -y automake libtool ca-certificates build-essential
RUN wget https://github.com/sass/libsass/archive/3.3.3.tar.gz && \
    tar xvzf 3.3.3.tar.gz && \
    cd libsass-3.3.3/ && \
    autoreconf --force --install && \
    ./configure && \
    make -j5 && \
    make -j5 install

RUN mkdir /app
WORKDIR /app

ADD package.json package.json

ENV PATH $PATH:/app/node_modules/.bin

RUN npm install

CMD node index.js

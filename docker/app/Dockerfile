FROM ruby:2.5

ENV RAILS_ENV='production'
ENV RAKE_ENV='production'

# install Node environment
RUN apt-get update && \
    apt-get install -y gnupg apt-transport-https && \
    curl -sL https://deb.nodesource.com/setup_9.x | bash - && \
    apt-get install -y nodejs && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && apt-get install -y yarn

WORKDIR /app
COPY Gemfile .
COPY Gemfile.lock .

RUN bundle install --jobs 4 --retry 3 --without development test

COPY . .
RUN yarn install
RUN ./bin/rails assets:precompile

EXPOSE 3000

CMD ["bundle", "exec", "puma", "-C", "config/puma.rb"]
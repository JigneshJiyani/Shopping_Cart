import { createServer, Model } from 'miragejs';

export function makeServer({ environment = 'test' } = {}) {
  let server = createServer({
    environment,
    models: {
      notes: Model,
    },
    seeds(server) {
      server.create('note', {
        title: 'Main Note',
        body:
          'Hello Everyone I am Jignesh Jiyani',
      });
      server.create('note', {
        title: 'Second One',
        body:
          'This Is A sample note of this page',
      });
      server.create('note', {
        title: 'Third One',
        body:
          'This note is also sample one',
      });
    },
    routes() {
      this.namespace = 'api/notes';
      this.get('/', (schema, request) => {
        return schema.notes.all();
      });

      this.get('/:id', (schema, request) => {
        let id = request.params.id;

        return schema.notes.find(id);
      });

      this.post('/', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);

        return schema.notes.create(attrs);
      });

      this.patch('/:id', (schema, request) => {
        let newAttrs = JSON.parse(request.requestBody);
        let id = request.params.id;
        let note = schema.notes.find(id);

        return note.update(newAttrs);
      });

      this.delete('/:id', (schema, request) => {
        let id = request.params.id;

        return schema.notes.find(id).destroy();
      });
    },
  });
  return server;
}
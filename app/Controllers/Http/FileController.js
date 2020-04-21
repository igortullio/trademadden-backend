'use strict';

const Helpers = use('Helpers');
const File = use('App/Models/File');

class FileController {
  async store({ request, response }) {
    try {
      if (!request.file('file')) return;

      const upload = request.file('file', { size: '20mb' });

      const fileName = `${Date.now()}.${upload.subtype}`;

      await upload.move(Helpers.tmpPath('uploads'), {
        name: fileName,
      });

      if (!upload.moved()) {
        console.log(upload.error());
        return response
          .status(401)
          .send({ error: { message: upload.error().message } });
      }

      const file = await File.create({
        file: fileName,
        name: upload.clientName,
        type: upload.type,
        subtype: upload.subtype,
      });

      return file;
    } catch (err) {
      return response
        .status(err.status)
        .send({ error: { message: 'Erro no upload de arquivo' } });
    }
  }

  async show({ params, response }) {
    try {
      const file = await File.findOrFail(params.id);

      return response.download(Helpers.tmpPath(`uploads/${file.file}`));
    } catch (err) {
      return response
        .status(err.status)
        .send({ error: { message: 'Erro ao buscar arquivo' } });
    }
  }
}

module.exports = FileController;

import multer, { diskStorage } from 'multer';

import { logger } from '@helper/index';

/**
 * @TODO: Common Middleware for all File Upload Functions
 */

const fileUpload = (prefix = 'Document') => {
  const storage = diskStorage({
    destination: function (_request, _file, callback) {
      callback(null, './uploads');
    },
    filename: function (_request, file, callback) {
      const extension = file.originalname.split('.').pop();
      if (extension) {
        const fileName = `${prefix}-${Date.now()}.${extension}`;
        callback(null, fileName);
      } else logger.error(`File name Error`);
    },
  });

  return multer({ storage: storage }).any();
};

export { fileUpload };

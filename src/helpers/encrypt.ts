import crypto from 'node:crypto';

import CONFIG from '@config/index';

const algorithm = 'aes-256-cbc';

const encrypt = (text: string) => {
  const cipher = crypto.createCipheriv(
    algorithm,
    Buffer.from(CONFIG.AES.KEY, 'hex'),
    Buffer.from(CONFIG.AES.IV, 'hex')
  );
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return encrypted.toString('hex');
};

export const decrypt = (text: string) => {
  const decipher = crypto.createDecipheriv(
    algorithm,
    Buffer.from(CONFIG.AES.KEY, 'hex'),
    Buffer.from(CONFIG.AES.IV, 'hex')
  );
  let decrypted = decipher.update(text, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
};

export default encrypt;

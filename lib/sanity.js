// my-printing-site/lib/sanity.js

import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'ks5shz4l', // Thay bằng projectId từ Sanity.io
  dataset: 'production',        // Thay bằng dataset của bạn (thường là "production")
  useCdn: true,                 // Sử dụng CDN để tăng tốc độ
  apiVersion: '2023-11-10'      // Đảm bảo API version phù hợp
});

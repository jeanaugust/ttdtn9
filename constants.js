// constants.js
export const CONFIG = Object.freeze({
  // Phân quyền người dùng
  ROLES: {
    ADMIN: 'admin',
    AUTHOR: 'author',
    READER: 'reader'
  },

  // Trạng thái truyện (Novels)
  NOVEL_STATUS: {
    PENDING: 'pending',     // Chờ duyệt
    ONGOING: 'ongoing',     // Đang ra
    COMPLETED: 'completed', // Đã hoàn thành
    PAUSED: 'paused',       // Tạm dừng
    BANNED: 'banned'        // Bị khóa
  },

  // Trạng thái chương (Chapters)
  CHAPTER_STATUS: {
    DRAFT: 'draft',
    SCHEDULED: 'scheduled',
    PUBLISHED: 'published'
  },

  // Loại giao dịch
  TRANSACTION_TYPES: {
    DEPOSIT: 'deposit',     // Nạp tiền
    PURCHASE: 'purchase',   // Mua chương
    WITHDRAW: 'withdraw'    // Rút tiền
  },

  // Quy tắc dữ liệu (Validation)
  LIMITS: {
    TITLE_MAX_LENGTH: 100,
    MIN_WITHDRAW: 50000,    // Ít nhất 50k mới được rút
    PAGE_SIZE: 20           // Số truyện mỗi trang
  }
});

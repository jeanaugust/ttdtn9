// constants.js
export const CONFIG = Object.freeze({
  // 1. Phân quyền người dùng
  ROLES: {
    ADMIN: 'admin',
    AUTHOR: 'author',
    READER: 'reader'
  },

  // 2. Trạng thái truyện (Novels)
  NOVEL_STATUS: {
    PENDING: 'pending',     // Chờ duyệt
    ONGOING: 'ongoing',     // Đang ra
    COMPLETED: 'completed', // Đã hoàn thành
    PAUSED: 'paused',       // Tạm dừng
    BANNED: 'banned'        // Bị khóa
  },

  // 3. Trạng thái chương (Chapters)
  CHAPTER_STATUS: {
    DRAFT: 'draft',
    SCHEDULED: 'scheduled',
    PUBLISHED: 'published'
  },

  // 4. Loại giao dịch (Transactions)
  TRANSACTION_TYPES: {
    DEPOSIT: 'deposit',     // Nạp tiền
    PURCHASE: 'purchase',   // Mua chương
    REWARD: 'reward',       // Nhận thưởng
    WITHDRAW: 'withdraw'    // Rút tiền
  },
  
  TRANSACTION_STATUS: {
    PENDING: 'pending',
    SUCCESS: 'success',
    FAILED: 'failed'
  },

  // 5. Trạng thái rút tiền (Withdrawals)
  WITHDRAWAL_STATUS: {
    PENDING: 'pending',
    APPROVED: 'approved',
    REJECTED: 'rejected'
  },

  // 6. Target Types (Dùng cho Reports, Notifications)
  TARGET_TYPES: {
    NOVEL: 'novel',
    CHAPTER: 'chapter',
    COMMENT: 'comment',
    REVIEW: 'review'
  },

  // 7. Report Status
  REPORT_STATUS: {
    PENDING: 'pending',
    RESOLVED: 'resolved',
    DISMISSED: 'dismissed'
  },

  // 8. Notification Types
  NOTIFICATION_TYPES: {
    NEW_CHAPTER: 'new_chapter',
    MENTION: 'mention',
    REPORT_RESULT: 'report_result',
    PAYMENT: 'payment'
  },

  // 9. Quy tắc dữ liệu (Validation)
  LIMITS: {
    TITLE_MAX_LENGTH: 100,
    DESCRIPTION_MAX_LENGTH: 2000,
    MIN_WITHDRAW: 50000,    // Ít nhất 50k mới được rút
    PAGE_SIZE: 20,          // Số truyện mỗi trang
    AUTO_SAVE_INTERVAL: 30000 // 30 giây tự lưu nháp
  }
});

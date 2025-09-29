-- ==============================================
-- SAMPLE SYSTEM DATABASE - CLEANUP SCRIPT
-- ==============================================
USE sample_db;

-- Disable foreign key checks to allow truncation
SET FOREIGN_KEY_CHECKS = 0;

TRUNCATE TABLE users;

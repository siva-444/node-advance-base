-- ==============================================
-- SAMPLE SYSTEM DATABASE - INITIAL MIGRATION
-- ==============================================

-- Create database if not exists
CREATE DATABASE IF NOT EXISTS sample_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE sample_db;

-- ========================
-- USERS (Admin, User)
-- ========================
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'user') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ========================
-- INDEXES (performance optimization)
-- ========================
CREATE INDEX idx_users_role ON users(role);
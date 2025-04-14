CREATE TABLE users (
  id                INT AUTO_INCREMENT PRIMARY KEY                                  COMMENT 'ユーザーID',
  last_name         VARCHAR(100) NOT NULL DEFAULT ''                                COMMENT '姓',
  first_name        VARCHAR(100) NOT NULL DEFAULT ''                                COMMENT '名',
  last_name_kana    VARCHAR(100) NOT NULL DEFAULT ''                                COMMENT 'セイ',
  first_name_kana   VARCHAR(100) NOT NULL DEFAULT ''                                COMMENT 'メイ',
  login_id          VARCHAR(255) NOT NULL                                           COMMENT 'ログインID',
  email             VARCHAR(255) NOT NULL UNIQUE                                    COMMENT 'メールアドレス',
  password          VARCHAR(255) NOT NULL                                           COMMENT 'パスワード',
  role              TINYINT NOT NULL                                                COMMENT '権限',
  -- 0: オーナー, 1: 部長, 2: 社員
  created_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP                             COMMENT '作成日時', 
  updated_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新日時', 
  INDEX index_login_id(login_id), 
  INDEX index_email(email)
) COMMENT='従業員';


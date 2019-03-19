## membersテーブル

|Column|Type|Option|
|------|----|------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## userテーブル
|Column|Type|Option|
|------|----|------|
|name|string|null: false, foreign_key: true|
|user_email|string|null: false, unique: true|

### Association
- has_many :messages
- has_many :group_users
- has_many :groups, through: :group_users

## groupテーブル
|Column|Type|Option|
|------|----|------|
|name|string|null:false, unique: true|

### Association
-has_many :group_users
-has_many :users, through: :group_users
-has_many :messages

## group_userテーブル
|Column|Type|Option|
|------|----|------|
|group|references|foreign_key: true|
|user|references|foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## messageテーブル
|Column|Type|Option|
|------|----|------|
|content|text|
|image|string|
|group|references|foreign_key: true|
|user|references|foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

class Post < ApplicationRecord
  validate :title, :description, presence: true
end

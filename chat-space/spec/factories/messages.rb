FactoryBot.define do
  factory :message do
    content {Faker::Lorem.sentence}
    image {File.open(Rails.root, 'spec/fixtures/image/jpg')}
    user
    group
  end
end

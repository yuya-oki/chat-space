FactoryBot.define do
  factory :message do
    content {Faker::Lorem.sentence}
<<<<<<< HEAD
    image {File.open("#{Rails.root}/spec/fixtures/cat.jpg")}
=======
    image {File.open(Rails.root, 'spec/fixtures/image/jpg')}
>>>>>>> origin/master
    user
    group
  end
end

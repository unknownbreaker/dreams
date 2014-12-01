# Dreams

## Startup

1.  Your `db:seed` is broken

        rake aborted!
        NoMethodError: undefined method `dreams' for #<Array:0x007ff917471d10>
        /Users/sgharms/ospreys-review/dreams/db/seeds.rb:22:in `<top (required)>'
        /Users/sgharms/.gem/ruby/2.1.2/gems/activesupport-4.1.6/lib/active_support/dependencies.rb:241:in
        `load'
        /Users/sgharms/.gem/ruby/2.1.2/gems/activesupport-4.1.6/lib/active_support/dependencies.rb:241:in
        `block in load'
        /Users/sgharms/.gem/ruby/2.1.2/gems/activesupport-4.1.6/lib/active_support/dependencies.rb:232:in
        `load_dependency'
        /Users/sgharms/.gem/ruby/2.1.2/gems/activesupport-4.1.6/lib/active_support/dependencies.rb:241:in
        `load'
        /Users/sgharms/.gem/ruby/2.1.2/gems/railties-4.1.6/lib/rails/engine.rb:543:in
        `load_seed'
        /Users/sgharms/.gem/ruby/2.1.2/gems/activerecord-4.1.6/lib/active_record/tasks/database_tasks.rb:184:in
        `load_seed'
        /Users/sgharms/.gem/ruby/2.1.2/gems/activerecord-4.1.6/lib/active_record/railties/databases.rake:174:in
        `block (2 levels) in <top (required)>'
        Tasks: TOP => db:seed

Your syntax for using `.create` is incorrect.  You're actually creating
multiple users and that's returning an AssociationProxy (or an array-like
thing) on which there is no method `dreams`.

## Use

I can't sign in with my Gauth credentials.  That random feature is THE SHIZNIT.
I could watch that stuff all day.

## Tests

You have no RSpec tests and your Jasmine harness won't start.  You're also
testing, as far as I can tell, a lot about the JavaScript that's coming from
Google.  I trust Google's QA has already verified that their stuff works.  You
should be testing your models and your flows more.

## JavaScript

You clearly have the desire to write clear, modular JavaScript, however the
implementation is not fulfilling this dream.  You have good separation and
compartamentalization of the logic, but you're not taking advantage of the
power of classes.  To wit, there are 0 occurrences of the word prototype in
your code.  This should be a clue you're not doing OO JS.

## DB

You didn't use any constraints. :(  Didn't we talk about this?

## CSS

Clean up the commented out rules.  It looks amateurish.

## Git

Generally, your git log looks pretty good.  Generally.

## Recommendation

1.  Use OO JS, make that your learning experience.  I would counsel you to stop
adding features and try to consolidate your learning in the JS department.
Maybe you should split into two teams: one to handle the persistence of dreams
and the other to clean up the JS code.
2.  Test all the major paths in the app: what if i don't have a YT acccount,
what if I don't have any videos, does your app deal with that case gracefully?
3.  Video:  You're uploading a GIGANTIC video (swam.mp4) there may be some
problems running this on heroku.  Does this work?  You may need to test this
out early and or get external hosting for this image.

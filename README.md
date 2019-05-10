# Hello!

And welcome to our React coding challenge.

We started building a basic tic-tac-toe app, but got busy halfway through and haven't been able to finish it. Frankly, we need your help.

- [Instructions](#instructions)
- [Prioritizing](#prioritizing)
- [Tickets](#tickets)
- [Submitting](#submitting)

## Instructions

We built this first pass in a rush, and left basic functionality unfinished, a handful of bugs unfixed, and a lot of wishlist items on the table. It's also pretty ugly.

First, some setup:

- Read through this document and poke around the app. *Take your time exploring.* You can even `yarn install && yarn start` and spend a few minutes seeing how the app works in browser.
- [ ] Check (`[X]`) this box, and commit the change.
- Push the code to a Github/Gitlab repo.

Then:

- Check out a new branch.
- Start a timer.
- Work through the below tickets, in as many commits as you'd like.
- [Submit your work](#submitting).

We designed this challenge to give us a sense of your work without taking up too much of your time. _Please don't spend more than **4 hours** total_ on this project, and feel free to stop earlier if you'd like.

If you hit 4 hours, commit your code with a message indicating you hit the time limit. If you're *really* having fun with it, feel free to keep going, but please don't feel any pressure to do so, and make clear where you timed out.

### Getting Started

This is a relatively vanilla React app, built with `create-react-app`. It should work more or less "out of the box", by running:

```
$ yarn install
$ yarn start
```

To run tests:

```
$ yarn test
```

If you hit any issues getting it up and running, please let us know. Debugging systems issues is **not** part of this challenge, and we don't want to waste your time on it.

## Prioritizing

There are a lot of tickets -- likely more than you can get to in the allotted time. Consequently, prioritization is a core component of this challenge.

To help you out, we've ordered the below tickets roughly as we might prioritize them. If some of the later tickets call to you, feel free to jump ahead if you're running out of time.

Some prioritization notes:

- The ordering we propose is a loose guide. We suspect it may be more efficient to intermesh some of these tickets.
- Some later tickets (and designs) depend on certain architectural decisions, so consider your game plan before you charge in. Maybe even jot it down in the [thoughts.md](./thoughts.md) file.
- Not all tickets are 100% or nothing. If you're pressed for time, for example, you could tackle responsive for only one page, before moving onto some functionality.
- We like tests, and would love to see you tackle some testing -- but it is not the focal point of this challenge. If you break a test to add new functionality, and don't have time to fix it, that's fine.

## Tickets

### Core Implementation

#### Victory and Stalemate

The game doesn't really work, because we haven't built in victory or stalemate conditions.

- [ ] Test for victory.
- [ ] Test for basic stalemate -- when the game hasn't been won and there are no moves left.

> **Note:** Stalemate in tic-tac-toe is often referred to as a "Cat's Game", [for reasons that aren't entirely clear](https://english.stackexchange.com/questions/155621/why-is-a-tie-in-tic-tac-toe-called-a-cats-game). The designs reflect this.

#### Play Bugs

There are at least two bugs on the Play page that break basic gameplay functionality.

- [ ] Find them and fix them. (Consider listing what you found/fixed in the [thoughts](./thoughts.md) file.)
- [ ] Add to the limited test suite to make sure that your changes fix the issues, and they don't happen again.

#### Styling

The app is pretty ugly -- but we've got an excuse! We built our first pass version before final designs came in. Now that the full specs have arrived, we need to style the app.

- [ ] Take a look at the files in the [designs folder](./designs), and get the app to match designs.

> **Note:** We've set up some components, styling patterns, and utils in this app, based on previous design wireframes and an old logo. The fonts/colors and some components will have to change, but we hope the basic styling structures and patterns will be helpful.

- [ ] Make any functionality changes required to match the visual spec.

#### Responsive

We've only received desktop designs, but the app will be used on phones and tablets.

- [ ] Think through how the app should work on smaller devices. Feel free to jot down your thoughts in the [thoughts.md](./thoughts.md) file.
- [ ] Implement those responsive styles.

#### History

User research suggests that tic-tac-toe enthusiasts enjoy reliving the glory days. So our design team spec'd out a history page, where you can view a table of previous games. We've built the bare basics of an associated reducer, and stubbed out the route and file.

- [ ] Save games to history on win or stalemate.
- [ ] Implement the HistoryList route to match design.
- [ ] Add a HistoricalGame route, which is shown when you click on a row (historical game) in the table. It should display the end state of the specified game, without allowing additional moves.

### Bonus!

#### Bonus Victory and Stalemate

- [ ] Add a test for preemptive stalemate -- when the board still has open squares, but nobody can win.
- [ ] Test your victory/stalemate functions, to make sure they work reliably.
- [ ] Build your functions in such a way that they would work for 4x4, 5x5 or even 100x100 tic-tac-toe!

#### Bonus Styling

- [ ] People just seem to like animation. Add some fun, subtle animation wherever you feel would be nice.
- [ ] Style the board in such a way that it could easily be modified to be 4 x 4 or more.

#### Bonus History

Further user research suggests that static snapshots of historical games aren't all that fun. To *really* relive the glory days, players want something more interactive.

- [ ] Update the HistoricalGame route (and related app-wide reducers) so that players can move back and forth through each move in the game history, replaying (and reliving the glory of) each game.

Let's be honest: This history doesn't mean much if it's erased every time you refresh the page.

- [ ] Persist game history between browser refreshes.

History getting out of control?

- [ ] Build a UI for clearing history, and/or removing individual games from the history, in case you lose a game and are embarrassed for others to see it.

### Thoughts

See something you didn't have time to work on or don't like? Open up that [thoughts](./thoughts.md) file and:

- [ ] Let us know what you would have done if you had more time.
- [ ] Let us know what *we* should have done differently.

## Submitting

Please submit by linking us to your repo. Include instructions for running the app, if they've changed.

Bonus points: Deploy it, and give us a link.

Good luck, and, hopefully, enjoy!

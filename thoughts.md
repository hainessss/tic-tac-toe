### Thoughts / Feedback

<!-- Jot down your working notes here, and/or let us know what you thought! -->
###Bugs Found
First bug found was column '0' not being a valid choice. Probably a falsey bug.

Second bug found was that there is no validation around making moves on spaces that have already been filled.

###Libraries Used: 
**styled-components** - Decided to use this for speed of use, been utilizing this a lot lately and think that it simplifies styles quite a bit. Sass is perfectly fine as well. 

**react-flexbox-grid** - Always love to have a flexbox component at my disposal. Not crazy about this library because I like implementations that feel more like natural flexbox, but I know this is one of the most popular implementations.

**lodash** - utility library

###Notes:
I had never used hooks before and without realizing it I refactored them out of the code. Oops. Look forward to learning more about hooks in the future. If I could do it over, I would be more descerning about what is  stored in redux vs what stored in local state.  In fact, we might not need redux at all.  

The first page is fairly responsive with the exception of the header.  To fix this I would use media queries to change the header text size. I did not have time to get making the Tic Tac Toe board responsive. 

###ToDo: (couldn't get to these based on time)
* Add PropTypes valdiation
* Make tests passing
* Update modal styles
* create the winner/stalemate pages
* reset game button
* history page
* make the tictactoe board responsive 

###Feedback:
I think I went over the 4 hour limit and still had quite a bit to do, would consider removing some scope.

I couldn't find the asset for the new icon, so I just took a screenshot of the icon. Excuse the pixels.

Thanks!
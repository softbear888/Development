# Development

### Link to Deployed Website
https://softbear888.github.io/Development-Final/

### Goal and Value of the Application
The application is a silly adventuring party builder, except everyone in the party (besides you) is a frog. It doesn't serve a very practical purpose; it's just here to spark a bit of joy. Perhaps it could be used in a video game where you play as little frog characters!

### Usability Principles Considered
To better mimic a shopping site-like structure, I decided to have the party list (analogous to a shopping cart) always present on the right side of the screen. I also have two frog "cards" in every row. Both of these properties help reduce the need to scroll back and forth on the page.
I tried to consider what kind of symbol would be intuitive to use for a filter and sorting mechanism. I ultimately settled on a checkbox for filters and a toggle for sorting.
Generally, I tried to keep elements consistent: the images have been cropped/resized to all be the same size and have been vertically aligned, for example. Text that is meant to be higher in the visual hierarchy (for example, the "Welcome" and "Party" headers) have been given header tags, while other text has been given <p> tags.

### Organization of Components
There are four Components: App, FilteredList, Aggregator, and FrogCard. App oversees state changes involved in adding/removing a frog. It returns a FilteredList component, Aggregator component, and some extra elements to spruce up the page. The Aggregator component displays the names of the frogs that have been added, as well as a "Remove" button for each name. The FilteredList component handles the rendering of the frog cards, including filtering/sorting. Each FrogCard represents what the handout calls an "item card." Please note that the cards do not include a button to remove from the aggregator - instead, I have the functionality in the aggregator itself. When a frog is added to the party, there is a "Remove" button that allows the user to remove the frog. I thought that this would be more intuitive (and more in line with an actual shopping cart) than having a Remove button within the item card. I hope this is acceptable!

### How Data is Passed Down Through Components
App passes the data to the FilteredList alongside the "party" state variable and "setParty" state setter. It also passes "party," "setParty," and the "weight" state variable to the Aggregator. FilteredList passes down entries in the data (one entry representing one frog), "party," and "setParty" to create FrogCards. "party" and "setParty" allow the aggregator to respond when a user adds or removes a frog.

### How the User Triggers State Changes
The user can trigger state changes in several ways:
In App.js/FrogCard.js:
  - By pressing "Add to Party," they can change the "party" state variable, which keeps track of which frogs have been added to the aggregator.
In App.js/Aggregator.js:
  - By pressing "Remove," users once again change "party" by filtering out the matching frog.
  - When a user alters the party, they also change the "weight" state variable, which changes the total weight reported in the aggregator.
In FilteredList.js:
  - When users (un)check a filter or sorting mechanism, they change the "type" state variable, which keeps track of which filtering/sorting is active. In doing so, they also alter the "filteredList" state variable, which changes the list of frogs to show based on the state of "type."

### Extra Notes
- In my application, the way a user can "revert back to the original state without refreshing the page" is by unselecting all of the filters and mechanisms.  
- Because the "items" in this application are more like characters, I thought it wouldn't make much sense for users to infinitely add items. Thus, the aggregator works, but does not support adding more than one of each frog. I hope this is acceptable as well; I tried to keep the user's conceptual model of the application in mind.

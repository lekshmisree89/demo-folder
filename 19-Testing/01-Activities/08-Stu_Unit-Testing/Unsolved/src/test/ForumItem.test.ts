import ForumItem from '../classes/ForumItem.js';


//describe is a function that takes two arguments, 
//a string and a callback function
describe('ForumItem', () => {
  //
  // TODO: Add a comment describing this test.
//describe is a function that takes two arguments,
  describe('Instantiate', () => {
    //instantiates a new instance of the ForumItem class  

    it('should be an instance of ForumItem class', () => {
      const authorName = 'Jack Doe';
      const text = 'This is some random text';
      const createdOn = '07/15/2024';

      const forumItem = new ForumItem(
        authorName,
        text,
        createdOn
      );
// expect the forumItem to be an instance of the ForumItem class
      expect(forumItem).toBeInstanceOf(ForumItem);
      //toBeInstanceOf is a matcher that asserts the constructor of the object
    });
  });

  // TODO: Add a comment describing this test.
  describe('Initialize', () => {
    it('should set properties properly', () => {
      //instantiates a new instance of the ForumItem class
      const authorName = 'Jack Doe';
      const text = 'This is some random text';
      const createdOn = '07/15/2024';

      const forumItem = new ForumItem(
        authorName,
        text,
        createdOn
      );
// expect the forumItem to have the properties 
//authorName, text, and createdOn
      expect(forumItem.authorName).toBe(authorName);
      expect(forumItem.text).toBe(text);
      expect(forumItem.createdOn).toBe(createdOn);
    });
  });

  // TODO: Add a comment describing this test.
  //describe is a function that takes two arguments,
  describe('getMetaData() method', () => {
    //instantiates a new instance of the ForumItem class
    it('should return message with data', () => {
      //instantiates a new instance of the ForumItem class
      const authorName = 'Jack Doe';
      const text = 'This is some random text';
      const createdOn = '07/15/2024';
      const expectedMetaData = `Created by ${authorName} on ${createdOn}`;

      const forumItem = new ForumItem(
        authorName,
        text,
        createdOn
      );

      expect(forumItem.getMetaData()).toBe(expectedMetaData);
    });
  });
});

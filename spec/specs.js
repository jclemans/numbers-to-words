describe('numberIntoWords', function() {

  it('converts "1" into the word: "one"', function() {
    numberIntoWords(1).should.equal("one");
  });

  it('converts "12" into the word "twelve"', function() {
    numberIntoWords(12).should.equal("twelve");
  });

  it('converts "21" into multiple words "twenty one"', function() {
    numberIntoWords(21).should.equal("twenty one");
  });

  it('converts "99" into the words "ninety nine"', function() {
    numberIntoWords(99).should.equal("ninety nine");
  });
  it('converts "157" into the words "one hundred fifty seven"', function() {
    numberIntoWords(157).should.equal("one hundred fifty seven");
  });
  it('converts "1000" into the words "one thousand"', function() {
    numberIntoWords(1000).should.equal("one thousand");
  });
  it('converts "12965" into the words "twelve thousand nine hundred sixty five"', function() {
    numberIntoWords(12965).should.equal("twelve thousand nine hundred sixty five");
  });

});


var randomQuotes = [
  {
    author: "Jules",
    quote: '"What" ain\'t no country I\'ve ever heard of. They speak English in What?'
  },
  {
    author: "The Wolf",
    quote: "If I'm curt with you it's because time is a factor. I think fast, I talk fast and I need you guys to act fast if you wanna get out of this. So, pretty please, with sugar on top, clean the fucking car."
  },
  {
    author: "Jules",
    quote: "DOES HE LOOK LIKE A BITCH?"
  },
  {
    author: "Marsellus Wallace",
    quote: "I'mma get medieval on your ass."
  },
  {
    author: "Captain Koons",
    quote: "He'd be damned if any slopes gonna put their greasy yellow hands on his boy's birthright, so he hid it, in the one place he knew he could hide something: his ass."
  },
  {
    author: "Mia Wallace",
    quote: "I do believe Marsellus Wallace, my husband, your boss, told you to take me out and do whatever I wanted. Now I wanna dance, I wanna win. I want that trophy, so dance good."
  },
  {
    author: "Marsellus Wallace",
    quote: "The night of the fight, you may feel a slight sting. That's pride fucking with you. Fuck pride. Pride only hurts, it never helps."
  },
  {
    author: "Jules",
    quote: "Check out the big brain on Brett! You a smart motherfucker. That's right. The metric system."
  },
  {
    author: "Jules",
    quote: "I wouldn't go so far as to call the brother fat, I mean he got a weight problem. What's the nigger gonna do? He's Samoan."
  },
  {
    author: "Vincent",
    quote: "That's a pretty fucking good milkshake. I don't know if it's worth five dollars but it's pretty fucking good."
  },
  {
    author: "Jimmie",
    quote: "I'm gonna get fuckin' divorced. No marriage counselling, no trial separation, I'm gonna get fuckin' divorced."
  },
  {
    author: "Ezekiel 25:17",
    quote: "The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of the darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who attempt to poison and destroy My brothers. And you will know I am the Lord when I lay My vengeance upon you."
  },
  {
    author: "Butch",
    quote: "Zed's dead, baby. Zed's dead."
  },
  {
    author: "Butch",
    quote: " I'm American, honey. Our names don't mean shit."
  },
  {
    author: "Honey Bunny",
    quote: "Any of you fucking pricks move, and I'll execute every motherfucking last one of ya!"
  },
  {
    author: "Jules",
    quote: "Well, I'm a mushroom-cloud-layin' motherfucker, motherfucker!"
  },
  {
    author: "Vincent",
    quote: "Have you ever given a foot massage?"
  },
  {
    author: "Mia Wallace",
    quote: 'Three tomatoes are walking down the street- a poppa tomato, a momma tomato, and a little baby tomato. Baby tomato starts lagging behind. Poppa tomato gets angry, goes over to the baby tomato, and smooshes him... and says, "Catch up."'
  },
  {
    author: "Jules",
    quote: "Hamburgers! The cornerstone of any nutritious breakfast."
  },
  {
    author: "Vincent",
    quote: "Oh man, I shot Marvin in the face."
  },
  {
    author: "Jules",
    quote: "You're sending in The Wolf? Shit, yeah, Negro! That's all you had to say!"
  }
  
];

var getRandomQuote = function() {
  var quoteNumber = Math.floor(Math.random() * randomQuotes.length);
  return randomQuotes[quoteNumber];
};

var writeRandomQuote = function() {
  var randomQuote = getRandomQuote();
  var saying = randomQuote.quote;
  var author = randomQuote.author;
  $('#quote').text(saying);
  $('#author').text('- ' + author);
  $('#tweet a').attr('href', 'https://twitter.com/intent/tweet?text=' + saying + " - " + author);
};

$(document).ready(function() {
  writeRandomQuote();
  
  $('#quote-button').on('click', function() {
    writeRandomQuote();
  });
});

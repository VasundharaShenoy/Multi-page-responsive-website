var quotes = [
    '\"May the Force be with you. \"\n\n-Star Wars, 1977',
    '\"There\'s no place like home.\"\n-The Wizard of Oz, 1939',
    '\"Carpe diem. Seize the day, boys. Make your lives extraordinary. \"\n-Dead Poets Society, 1989',
    '\"My mama always said life was like a box of chocolates. You never know what you\'re gonna get.\"\n\n -Forrest Gump, 1994',
    '\"Keep your friends close, but your enemies closer\"\n\n-The Godfather Part II, 1974',
    '\"They may take our lives, but they\'ll never take our freedom!"\n -Braveheart, 1995',
    '\"To infinity and beyond!\"\n-Toy Story, 1995',
    '\"Love means never having to say you\'re sorry.\"\n -Love Story, 1970',
    '\"If you let my daughter go now, that\'ll be the end of it. I will not look for you, I will not pursue you. But if you don\'t, I will look for you, I will find you, and I will kill you.\"\n-Taken, 2008',
    '\"Wax on, wax off.\"\n-The karate kid, 1984',
    '\"Just keep swimming.\"\n-Finding Nemo, 2003',
    '\"Mama says, \'Stupid is as stupid does.\"\n-Forest Gump, 1994',
    '\"I\'m the king of the world!\"\n-Titanic,1997',
    '\"The greatest trick the devil ever pulled was convincing the world he didn\'t exist.\"\n-The Usual Suspects, 1995',
    '\"You had me at hello.\"\n-Jerry Maguire, 1996',
    '\"Houston, we have a problem..\"\n-Apollo 13, 1995',
    '\"This is the beginning of a beautiful friendship\"\n-Casablanca, 1942',
    '\"Why so serious?\"\n-The Dark Knight, 2008',
    '\"The first rule of Fight Club is: You do not talk about Fight Club.\"\n-Fight Club, 1999',
    '\"Frankly, my dear, I don\'t give a damn."\"\n-Gone with the Wind, 1939',
    '\"I don\'t have friends. I got family.\"\n-Furious 7, 2015',
    '\"You have bewitched me, body and soul.\"\n-Pride and Prejudice, 2005',
    '\"I am Groot.\"\n-Gaurdians of the Galaxy, 2014',
    '\"This is Sparta!\"\n-300, 2006',
    '\"You had my curiosity. But now you have my attention.\"\n-Django Unchained, 2012',
    '\"With great power comes great responsibility.\"\n-Spiderman, 2002',
    '\"Honey? Where\'s my super suit?\"\n-The incredibles, 2004',
    '\"Is this your king?\"\n-Black Panther, 2018',
    '\"I live my life a quarter mile at a time.\"\n-The fast and Furious, 2001',
]


function newQuote(){
    var randomNumber = Math.floor(Math.random()*quotes.length);
    document.getElementById('quotes').innerHTML = quotes[randomNumber];
}
var quote = [
    '\"It matters not what someone is born, but what they grow to be. \"\n\n-Harry Potter and the Goblet of Fire',
    '\"Whatever our souls are made of, his and mine are the same.\"\n-Wuthering Heights',
    '\"Whenever you feel like criticizing anyone … just remember that all the people in this world haven’t had the advantages that you’ve had. \"\n-The Great Gatsby',
    '\"Not all those who wander are lost.\"\n\n -The Lord of the Rings',
    '\"There is some good in this world, and it’s worth fighting for\"\n\n - The Two Towers',
    '\"It is only with the heart that one can see rightly; what is essential is invisible to the eye."\n -The Little Prince',
    '\"Beware; for I am fearless, and therefore powerful.\"\n- Frankenstein',
    '\"The only way out of the labyrinth of suffering is to forgive.\"\n-Looking for Alaska',
    '\"We accept the love we think we deserve.\"\n-The Perks of Being a Wallflower',
    '\"I am not afraid of storms, for I am learning how to sail my ship.\"\n-Little Women',
    '\"Memories warm you up from the inside. But they also tear you apart.\"\n-Kafka on the Shore',
    '\"Who controls the past controls the future. Who controls the present controls the past.\"\n- Nineteen Eighty-Four',
    '\"Life is to be lived, not controlled; and humanity is won by continuing to play in face of certain defeat.\"\n-Invisible Man',
    '\"There are some things you learn best in calm, and some in storm.\"\n- The Song of the Lark',
    '\"Nowadays people know the price of everything and the value of nothing.\"\n-The Picture of Dorian Grey',
    '\"And, when you want something, all the universe conspires in helping you to achieve it.\"\n-The Alchemist',
    '\"It is our choices, Harry, that show what we truly are, far more than our abilities.”\"\n- Harry Potter and the Chamber of Secrets',
    '\"For you, a thousand times over.\"\n-The Kite Runner',
    '\"And may the odds be ever in your favor.\"\n-The Hunger Games',
    '\"All human wisdom is summed up in these two words – Wait and hope.\"\n-The Count of Monte Cristo',
    '\"All the world is made of faith, and trust, and pixie dust.\"\n-Peter Pan',
    '\"Get busy living or get busy dying.\"\n-Rita Hayworth and Shawshank Redemption',
    '\"There is nothing like looking, if you want to find something. You certainly usually find something, if you look, but it is not always quite the something you were after.\"\n-The Hobbit',
    '\"All we can know is that we know nothing. And that’s the height of human wisdom.\"\n-War and Peace',
    '\"Anything worth dying for is certainly worth living for.\"\n-Catch-22',
    '\"There is no greater agony than bearing an untold story inside you.\"\n-I Know Why the Caged Bird Sings'
]

function newQuote2(){
    var randomNumber = Math.floor(Math.random()*quote.length);
    document.getElementById('quote').innerHTML = quote[randomNumber];
}
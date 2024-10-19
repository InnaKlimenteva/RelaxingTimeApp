const button = document.querySelector('#btn');
const par = document.querySelector('#par');
const quotes = ['Remember that wherever your heart is, there you will find your treasure.', 
    'You will never be able to escape from your heart. So it’s better to listen to what it has to say.',
    'It’s the simple things in life that are the most extraordinary; only wise men are able to understand them.',
    'When you can’t go back, you have to worry only about the best way of moving forward.',
    'There is only one thing that makes a dream impossible to achieve: the fear of failure.',
    'Don’t give in to your fears. If you do, you won’t be able to talk to your heart.',
    'It’s the possibility of having a dream come true that makes life interesting.',
    'The fear of suffering is worse than the suffering itself.',
    'Everything that happens once can never happen again. But everything that happens twice will surely happen a third time.',
    'When you want something, all the universe conspires in helping you to achieve it.',
    'One is loved because one is loved. No reason is needed for loving.',
    'If you start by promising what you don’t even have yet, you’ll lose your desire to work towards getting it.',
    'There is only one way to learn. It’s through action. Everything you need to know you have learned through your journey.',
    'There is only one thing that makes a dream impossible to achieve: the fear of failure.',
    'The secret of life, though, is to fall seven times and to get up eight times.',
    'The simple things are also the most extraordinary things, and only the wise can see them.',
    'People are capable, at any time in their lives, of doing what they dream of.',
    'Your eyes show the strength of your soul.”',
    'Listen to your heart, because wherever your heart is, that is where you will find your treasure.',
    'It was the pure Language of the World.',
    'Intuition is really a sudden immersion of the soul into the universal current of life.',
    'Maktub. It is written.',
    'What you seek, is seeking you...'];

    button.addEventListener('click', function(){
        let randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
        par.style.display = 'block';
        par.textContent = randomQuote;
    });

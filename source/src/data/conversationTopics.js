const conversationTopics = [
  {
    category: 'Travel & places',
    title: 'A place that surprised you',
    prompts: ['Where was it?', 'What did you expect before arriving?', 'What surprised you most?'],
  },
  {
    category: 'Travel & places',
    title: 'The perfect day in your hometown',
    prompts: ['Where would the day begin?', 'What local place would you show?', 'What would you eat together?'],
  },
  {
    category: 'Travel & places',
    title: 'A journey without a plan',
    prompts: ['Would that feel exciting or stressful?', 'What would you decide first?', 'Who would you invite?'],
  },
  {
    category: 'Travel & places',
    title: 'Sea, mountains, or a big city?',
    prompts: ['Which one gives you energy?', 'What would daily life be like there?', 'Could you stay for a whole year?'],
  },
  {
    category: 'Travel & places',
    title: 'A tourist attraction that is worth it',
    prompts: ['What makes it special?', 'When is the best time to visit?', 'What should visitors avoid?'],
  },
  {
    category: 'Travel & places',
    title: 'One month in another city',
    prompts: ['Which city would you choose?', 'What would you want to learn there?', 'How would you meet local people?'],
  },
  {
    category: 'Travel & places',
    title: 'A travel mistake that became a good story',
    prompts: ['What went wrong?', 'How did you solve it?', 'Can you laugh about it now?'],
  },
  {
    category: 'Travel & places',
    title: 'A place from your childhood',
    prompts: ['What do you remember most clearly?', 'Has the place changed?', 'Would you like to return?'],
  },
  {
    category: 'Travel & places',
    title: 'Slow travel or a packed schedule?',
    prompts: ['Which style suits you?', 'How much planning is enough?', 'What makes a trip memorable?'],
  },
  {
    category: 'Travel & places',
    title: 'A visitor’s first day in Budva',
    prompts: ['Where should they go first?', 'What should they taste?', 'What local detail should they notice?'],
  },
  {
    category: 'Culture & traditions',
    title: 'A tradition worth keeping',
    prompts: ['How did the tradition begin for you?', 'Who usually takes part?', 'Why does it still matter?'],
  },
  {
    category: 'Culture & traditions',
    title: 'An unwritten rule in your culture',
    prompts: ['How do people learn it?', 'What happens when someone breaks it?', 'Would you keep or change it?'],
  },
  {
    category: 'Culture & traditions',
    title: 'Design a new celebration',
    prompts: ['What would people celebrate?', 'What food or music would it include?', 'What would the main tradition be?'],
  },
  {
    category: 'Culture & traditions',
    title: 'Your most memorable culture shock',
    prompts: ['Where did it happen?', 'How did you react at first?', 'What did you understand later?'],
  },
  {
    category: 'Culture & traditions',
    title: 'Does language change your personality?',
    prompts: ['Do you sound different in another language?', 'Which feelings are easier to express?', 'What word describes you best?'],
  },
  {
    category: 'Culture & traditions',
    title: 'A local custom you would explain to a guest',
    prompts: ['When does it happen?', 'What should a guest do?', 'Why might it seem unusual?'],
  },
  {
    category: 'Culture & traditions',
    title: 'What makes someone a good host?',
    prompts: ['What makes guests feel welcome?', 'Is food important?', 'What should a host never do?'],
  },
  {
    category: 'Culture & traditions',
    title: 'Music that represents home',
    prompts: ['Which song or style would you choose?', 'What memories does it bring back?', 'Would visitors understand it?'],
  },
  {
    category: 'Culture & traditions',
    title: 'How traditions change over time',
    prompts: ['Which tradition has changed in your lifetime?', 'What caused the change?', 'Is the new version better?'],
  },
  {
    category: 'Culture & traditions',
    title: 'A festival you would love to attend',
    prompts: ['Where does it take place?', 'What would you most like to see?', 'Who would you go with?'],
  },
  {
    category: 'Everyday life',
    title: 'The best part of your morning',
    prompts: ['What is your first small ritual?', 'Are your mornings quiet or busy?', 'What improves the whole day?'],
  },
  {
    category: 'Everyday life',
    title: 'A small purchase that improved your life',
    prompts: ['What did you buy?', 'Why is it so useful?', 'Would you recommend it to everyone?'],
  },
  {
    category: 'Everyday life',
    title: 'Your ideal free evening',
    prompts: ['Would you stay home or go out?', 'Who would be there?', 'What makes the evening feel complete?'],
  },
  {
    category: 'Everyday life',
    title: 'A habit that actually works for you',
    prompts: ['How did you build it?', 'What makes it easy to continue?', 'What changes when you skip it?'],
  },
  {
    category: 'Everyday life',
    title: 'One thing you would simplify',
    prompts: ['Why has it become complicated?', 'What would you remove?', 'How much time would that save?'],
  },
  {
    category: 'Everyday life',
    title: 'How weather changes your mood',
    prompts: ['What weather gives you energy?', 'What do you do on a rainy day?', 'Could you live without seasons?'],
  },
  {
    category: 'Everyday life',
    title: 'Your favorite local walk',
    prompts: ['Where does it begin and end?', 'What do you notice along the way?', 'When is the best time to go?'],
  },
  {
    category: 'Everyday life',
    title: 'Household tasks: relaxing or annoying?',
    prompts: ['Which task do you secretly enjoy?', 'Which one do you postpone?', 'What makes chores easier?'],
  },
  {
    category: 'Everyday life',
    title: 'A completely screen-free day',
    prompts: ['What would you do first?', 'What would you miss most?', 'Would you feel calmer by evening?'],
  },
  {
    category: 'Everyday life',
    title: 'The ingredients of a perfect weekend',
    prompts: ['How much rest do you need?', 'Do you plan or improvise?', 'What should every weekend include?'],
  },
  {
    category: 'Friendship & community',
    title: 'Making friends as an adult',
    prompts: ['Where do adults meet new people?', 'What makes the first conversation easier?', 'Why can friendship take time?'],
  },
  {
    category: 'Friendship & community',
    title: 'What makes a conversation memorable?',
    prompts: ['Is it the topic or the person?', 'What makes someone a good listener?', 'Which conversation do you still remember?'],
  },
  {
    category: 'Friendship & community',
    title: 'Helping a newcomer feel welcome',
    prompts: ['What could you say first?', 'What information would be useful?', 'What helped you in a new place?'],
  },
  {
    category: 'Friendship & community',
    title: 'The qualities of a reliable friend',
    prompts: ['Which quality matters most?', 'Can reliability be learned?', 'How do you show up for friends?'],
  },
  {
    category: 'Friendship & community',
    title: 'Meeting people in a new city',
    prompts: ['Where would you start?', 'Which activities naturally connect people?', 'What advice would you give a shy person?'],
  },
  {
    category: 'Friendship & community',
    title: 'Friendship across different languages',
    prompts: ['How do people communicate without perfect words?', 'Can mistakes bring people closer?', 'What can language never replace?'],
  },
  {
    category: 'Friendship & community',
    title: 'A tradition for your community',
    prompts: ['What would happen regularly?', 'Who could join?', 'How would it bring people together?'],
  },
  {
    category: 'Friendship & community',
    title: 'Why asking for help can be difficult',
    prompts: ['What stops people from asking?', 'When is help easiest to accept?', 'How can you offer help respectfully?'],
  },
  {
    category: 'Friendship & community',
    title: 'Staying close across long distances',
    prompts: ['Which ways of staying in touch work?', 'How often is often enough?', 'What keeps the friendship real?'],
  },
  {
    category: 'Friendship & community',
    title: 'Plan a perfect group outing',
    prompts: ['Where would everyone go?', 'How would you include different interests?', 'What could make it unforgettable?'],
  },
  {
    category: 'Work & creativity',
    title: 'A project you would love to start',
    prompts: ['What problem would it solve?', 'Who would you work with?', 'What is the smallest first step?'],
  },
  {
    category: 'Work & creativity',
    title: 'A skill you enjoyed learning',
    prompts: ['Why did you choose it?', 'What was difficult at first?', 'How do you use it now?'],
  },
  {
    category: 'Work & creativity',
    title: 'Your most productive environment',
    prompts: ['What does the space look like?', 'Do you need silence or background noise?', 'When do your best ideas arrive?'],
  },
  {
    category: 'Work & creativity',
    title: 'Should a hobby become a job?',
    prompts: ['What could be gained?', 'What could be lost?', 'Which hobby would you protect from work?'],
  },
  {
    category: 'Work & creativity',
    title: 'Getting through a creative block',
    prompts: ['What usually causes the block?', 'Does a break help?', 'Where do you look for inspiration?'],
  },
  {
    category: 'Work & creativity',
    title: 'The role you naturally take in a team',
    prompts: ['Are you a planner, maker, or connector?', 'What role is hardest for you?', 'What makes a team work well?'],
  },
  {
    category: 'Work & creativity',
    title: 'A useful mistake',
    prompts: ['What happened?', 'What did the mistake teach you?', 'Would you make the same choice again?'],
  },
  {
    category: 'Work & creativity',
    title: 'A job that may exist in the future',
    prompts: ['What would the person do?', 'Which skills would they need?', 'Would you try that job?'],
  },
  {
    category: 'Work & creativity',
    title: 'An idea you are proud of',
    prompts: ['Where did the idea come from?', 'Did anyone help develop it?', 'What happened after you tried it?'],
  },
  {
    category: 'Work & creativity',
    title: 'Finding motivation on a difficult day',
    prompts: ['What helps you begin?', 'Do rewards work for you?', 'When is it better to rest?'],
  },
  {
    category: 'Films, music & books',
    title: 'A film you can watch again and again',
    prompts: ['What keeps bringing you back?', 'Which scene is unforgettable?', 'Who would you recommend it to?'],
  },
  {
    category: 'Films, music & books',
    title: 'A song connected to a strong memory',
    prompts: ['When did you first hear it?', 'What memory returns?', 'Has the song changed for you?'],
  },
  {
    category: 'Films, music & books',
    title: 'A book that influenced you',
    prompts: ['What idea stayed with you?', 'Did it change your behavior?', 'Would you read it differently now?'],
  },
  {
    category: 'Films, music & books',
    title: 'A fictional world you would visit',
    prompts: ['What would you explore first?', 'Which character would you meet?', 'How long would you stay?'],
  },
  {
    category: 'Films, music & books',
    title: 'One recommendation for this table',
    prompts: ['What are you recommending?', 'Why is it worth our time?', 'What mood is it perfect for?'],
  },
  {
    category: 'Films, music & books',
    title: 'Is the ending the most important part?',
    prompts: ['Can a bad ending ruin a good story?', 'Which ending surprised you?', 'Do you prefer clear or open endings?'],
  },
  {
    category: 'Films, music & books',
    title: 'Live music or perfect headphones?',
    prompts: ['Which experience feels stronger?', 'What was your best concert?', 'Where do you usually discover music?'],
  },
  {
    category: 'Films, music & books',
    title: 'A character you would invite for coffee',
    prompts: ['Who would you choose?', 'What would you ask?', 'Would you become friends?'],
  },
  {
    category: 'Films, music & books',
    title: 'A story from your culture',
    prompts: ['Who are the main characters?', 'What lesson does it carry?', 'Does it still feel relevant?'],
  },
  {
    category: 'Films, music & books',
    title: 'A documentary you wish existed',
    prompts: ['What would it investigate?', 'Who should appear in it?', 'What question should it answer?'],
  },
  {
    category: 'Food & lifestyle',
    title: 'A meal that represents home',
    prompts: ['What is in the meal?', 'Who usually prepares it?', 'What memory comes with it?'],
  },
  {
    category: 'Food & lifestyle',
    title: 'The meaning of comfort food',
    prompts: ['What is your comfort food?', 'When do you want it most?', 'Is comfort about taste or memory?'],
  },
  {
    category: 'Food & lifestyle',
    title: 'Cooking together',
    prompts: ['Is cooking social or stressful?', 'What dish works well for a group?', 'Who should clean afterward?'],
  },
  {
    category: 'Food & lifestyle',
    title: 'The perfect café for conversation',
    prompts: ['What atmosphere should it have?', 'How important is the menu?', 'What makes you stay longer?'],
  },
  {
    category: 'Food & lifestyle',
    title: 'A habit that gives you energy',
    prompts: ['When do you do it?', 'How quickly do you notice a difference?', 'Could it work for other people?'],
  },
  {
    category: 'Food & lifestyle',
    title: 'Trying a completely unfamiliar food',
    prompts: ['How adventurous are you?', 'What is the strangest thing you have tried?', 'What would you never order again?'],
  },
  {
    category: 'Food & lifestyle',
    title: 'The great breakfast debate',
    prompts: ['Sweet or savory?', 'Big breakfast or just coffee?', 'What breakfast would you serve a guest?'],
  },
  {
    category: 'Food & lifestyle',
    title: 'A food connected to a memory',
    prompts: ['Where were you?', 'Who shared it with you?', 'Can you recreate the same feeling?'],
  },
  {
    category: 'Food & lifestyle',
    title: 'A simple pleasure you never get tired of',
    prompts: ['What is it?', 'When do you enjoy it most?', 'Why do small pleasures matter?'],
  },
  {
    category: 'Food & lifestyle',
    title: 'What does a realistic healthy life look like?',
    prompts: ['Which habits matter most?', 'Where is balance difficult?', 'How do you avoid perfectionism?'],
  },
  {
    category: 'Technology & the future',
    title: 'A technology that genuinely helps you',
    prompts: ['How often do you use it?', 'What did it replace?', 'Could you live without it?'],
  },
  {
    category: 'Technology & the future',
    title: 'Twenty-four hours without a phone',
    prompts: ['What would become difficult?', 'What might become better?', 'Would you try it voluntarily?'],
  },
  {
    category: 'Technology & the future',
    title: 'How AI may change everyday life',
    prompts: ['Which task would you give it?', 'What should stay human?', 'What worries or excites you?'],
  },
  {
    category: 'Technology & the future',
    title: 'A better city of the future',
    prompts: ['How would people move around?', 'Where would nature fit?', 'What would make neighbors connect?'],
  },
  {
    category: 'Technology & the future',
    title: 'The future of remote work',
    prompts: ['What works well from home?', 'What do people lose?', 'What would the ideal balance be?'],
  },
  {
    category: 'Technology & the future',
    title: 'An invention you wish existed',
    prompts: ['What problem would it solve?', 'How would it work?', 'Could it create a new problem?'],
  },
  {
    category: 'Technology & the future',
    title: 'Privacy or convenience?',
    prompts: ['Where do you draw the line?', 'Which data feels most personal?', 'Can technology offer both?'],
  },
  {
    category: 'Technology & the future',
    title: 'Does social media connect us?',
    prompts: ['When does it create real connection?', 'When does it feel empty?', 'What would you change about it?'],
  },
  {
    category: 'Technology & the future',
    title: 'The most valuable skill in ten years',
    prompts: ['Which skill will matter?', 'How can someone practice it now?', 'Will technology make it more important?'],
  },
  {
    category: 'Technology & the future',
    title: 'An ordinary day in 2050',
    prompts: ['How will the morning begin?', 'What will people do for work?', 'What will still feel exactly the same?'],
  },
  {
    category: 'Choices & personal growth',
    title: 'Advice for your younger self',
    prompts: ['What age would you visit?', 'What would you say?', 'Would your younger self listen?'],
  },
  {
    category: 'Choices & personal growth',
    title: 'A risk that was worth taking',
    prompts: ['What made it risky?', 'What helped you decide?', 'What changed afterward?'],
  },
  {
    category: 'Choices & personal growth',
    title: 'A time you changed your mind',
    prompts: ['What did you believe before?', 'What changed your perspective?', 'Was it difficult to admit?'],
  },
  {
    category: 'Choices & personal growth',
    title: 'Your personal definition of success',
    prompts: ['Has your definition changed?', 'Can success be measured?', 'What does enough look like?'],
  },
  {
    category: 'Choices & personal growth',
    title: 'A fear you learned to manage',
    prompts: ['What helped most?', 'Did the fear disappear completely?', 'What would you tell someone similar?'],
  },
  {
    category: 'Choices & personal growth',
    title: 'Fast decisions or careful decisions?',
    prompts: ['Which type are you?', 'When is speed useful?', 'Which decision deserves more time?'],
  },
  {
    category: 'Choices & personal growth',
    title: 'A small achievement you are proud of',
    prompts: ['Why did it matter?', 'Who noticed it?', 'What did it lead to?'],
  },
  {
    category: 'Choices & personal growth',
    title: 'What makes a place feel like home?',
    prompts: ['Is it people, objects, or routines?', 'How quickly can a new place feel familiar?', 'Can you have more than one home?'],
  },
  {
    category: 'Choices & personal growth',
    title: 'Something you are still learning',
    prompts: ['Why did you start?', 'What keeps it interesting?', 'How do you notice progress?'],
  },
  {
    category: 'Choices & personal growth',
    title: 'A challenge for the next year',
    prompts: ['What would you like to attempt?', 'What support would help?', 'How would success feel?'],
  },
  {
    category: 'Imagine & play',
    title: 'A free plane ticket for tomorrow',
    prompts: ['Where would you fly?', 'What would you pack?', 'Who would receive your first message?'],
  },
  {
    category: 'Imagine & play',
    title: 'Dinner with a person from history',
    prompts: ['Who would you invite?', 'Where would you eat?', 'What would you ask first?'],
  },
  {
    category: 'Imagine & play',
    title: 'Open your own tiny café',
    prompts: ['What would it be called?', 'What would be on the menu?', 'What atmosphere would you create?'],
  },
  {
    category: 'Imagine & play',
    title: 'Invent a new public holiday',
    prompts: ['What would it celebrate?', 'How would people spend the day?', 'Which tradition would everyone follow?'],
  },
  {
    category: 'Imagine & play',
    title: 'A superpower for ordinary life',
    prompts: ['Which power would be most useful?', 'How would you use it today?', 'What funny problem could it cause?'],
  },
  {
    category: 'Imagine & play',
    title: 'Time travel for one day',
    prompts: ['Past or future?', 'What would you want to discover?', 'What would you bring back?'],
  },
  {
    category: 'Imagine & play',
    title: 'Three things for a very long island stay',
    prompts: ['Which practical item would you take?', 'Which item would keep you entertained?', 'Who would you want nearby?'],
  },
  {
    category: 'Imagine & play',
    title: 'Mayor of your city for one week',
    prompts: ['What would you change first?', 'Which place would get more attention?', 'How would you hear residents’ ideas?'],
  },
  {
    category: 'Imagine & play',
    title: 'Switch lives with a fictional character',
    prompts: ['Who would you choose?', 'What would you do in their world?', 'What part of their life would be difficult?'],
  },
  {
    category: 'Imagine & play',
    title: 'A mysterious door appears in Budva',
    prompts: ['Where does the door lead?', 'Would you open it alone?', 'What do you hope is on the other side?'],
  },
];

export default conversationTopics;

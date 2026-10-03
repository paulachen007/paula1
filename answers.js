/* =========================================================
   answers.js — 话题识别 + 英文答案库
   ---------------------------------------------------------
   设计稿的语气是「建议式」（I suggest going for ...），
   所以答案按这个口吻撰写，而不是塔罗牌义。
   文中用 {…} 包起来的部分会在卡片里渲染成金色高亮。
   ========================================================= */

var TOPICS = {

  love: {
    label: 'Love', icon: '💗',
    keys: ['love','like','likes','crush','dating','date','boyfriend','girlfriend','partner',
           'ex','breakup','break up','broke up','confess','confession','marry','marriage',
           'relationship','romance','romantic','valentine','soulmate','flirt','together',
           'feelings','text back','talking to','situationship','him','her'],
    up: [
      'Say it first. {The person you keep thinking about} has been waiting for a sign, and yours is the one they would notice.',
      'Give it three more weeks. {This connection} is warming up slowly, and rushing it now would break the spell.',
      'Yes — and the answer is nearer than you think. {Someone already in your everyday circle} looks at you a little differently.',
      'Reach out tonight. {One short, honest message} will do more than a perfectly crafted one sent next week.',
      'Let them come to you this time. {Your patience} is the very thing that will draw them closer.',
      'It is mutual. {The hesitation you keep sensing} is shyness, not disinterest.',
      'Plan something small together. {One ordinary shared afternoon} will tell you more than any long conversation.',
      'Be a little less available. {A little distance} reminds them what your presence actually feels like.',
      'Trust the pull you feel. {This one} is worth the risk of being honest.',
      'Say yes to the invitation. The next time they ask, {do not overthink it}.'
    ],
    rev: [
      'Not yet. {Their heart} is still sorting itself out, and pushing now would only close the door.',
      'Step back and watch. {The pattern you keep excusing} is the answer you have been avoiding.',
      'You are giving more than you are getting. {Name that imbalance out loud} before it hardens into resentment.',
      'Wait for actions, not words. {A promise with no date attached} is only a mood.',
      'Let this one go. {What you miss} is the version of them you hoped for, not the one who actually showed up.',
      'Distance and family are doing more damage than feelings. {The practical obstacle} is the real question here.',
      'Be careful of being someone\'s option. {Consistent effort} is the only proof worth accepting.',
      'Hold your boundary. {Saying no once} will tell you everything about how much you actually matter to them.',
      'Do not confuse comfort with love. {Familiarity} can feel like affection for months.',
      'Slow down. {Right now} is not the moment to make it official — give it one more season.'
    ]
  },

  career: {
    label: 'Work', icon: '💼',
    keys: ['job','work','career','boss','manager','interview','resume','cv','offer','promotion',
           'raise','salary','quit','resign','colleague','coworker','project','startup','business',
           'team','client','deadline','internship','hired','fired','layoff','meeting','overtime',
           'workplace','company','role','position','apply for'],
    up: [
      'Apply anyway. {The role} is a better fit than the job description makes it sound.',
      'Speak up in the next meeting. {Your idea} is stronger than you are giving it credit for.',
      'Ask for the number first. {Your rate} has been quietly undervalued for a while now.',
      'Take the smaller, stranger project. {The odd opportunity} is where the real door opens.',
      'Yes to the change. {This move} looks like a detour and behaves like a shortcut.',
      'Find one senior person and ask them for twenty minutes. {The advice} will save you a year.',
      'Finish the boring part first. {The unglamorous groundwork} is what makes the rest land.',
      'Say yes to leading it. {The responsibility} is being handed to you because someone already trusts you.',
      'Send the follow-up. {The silence} is administrative, not personal.',
      'Negotiate once more. {There is room} and they are waiting to see if you will ask.'
    ],
    rev: [
      'Pause before signing. {One clause} is vaguer than it should be, and it will matter later.',
      'Do not resign this week. {The frustration} is real, but the timing is doing the damage.',
      'Lower the bet. {This project} is carrying more risk than the brief admits.',
      'Protect your calendar. {Being the person who always says yes} is why the good work never reaches you.',
      'Ask for it in writing. {Verbal promises} have a short shelf life in organisations.',
      'Stop polishing, start shipping. {The last ten percent} is costing you the whole opportunity.',
      'This environment has a ceiling. {What you are learning here} is close to finished.',
      'Avoid the politics. {The fight between the two camps} is not yours to win.',
      'Take the rest day. {Your exhaustion} is now a business risk, not a personal weakness.',
      'Hold the offer loosely. {This one} may fall through, and you should have a second line ready.'
    ]
  },

  study: {
    label: 'Study', icon: '📚',
    keys: ['study','exam','test','grade','grades','score','school','college','university','class',
           'course','homework','thesis','paper','graduate','graduation','apply','application',
           'admission','scholarship','professor','dissertation','semester','quiz','finals',
           'revision','revise','major','degree','campus','student'],
    up: [
      'You will pass. {Your foundation} is steadier than your nerves are telling you.',
      'Send the application. {The programme} is more interested in your direction than your polish.',
      'Keep the current method. {What you are doing} is working — it just has not shown up in a grade yet.',
      'Ask the question in class. {The thing everyone else is confused about} is exactly what you should raise.',
      'Study the past papers, not the textbook. {The pattern in the questions} is the real syllabus.',
      'Take the harder elective. {This one} will be the course you actually remember.',
      'Protect two hours each morning. {Consistent early work} will beat any all-nighter.',
      'Email the professor. {That office hour} is the single highest-value hour of your week.',
      'Trust the slow subject. {The one that feels hardest now} is the one building your range.',
      'Yes to the exchange or the competition. {The application cost} is far smaller than the regret.'
    ],
    rev: [
      'Change the method before you change the goal. {How you are revising} is the problem, not the subject.',
      'Cut the target in half. {The plan you wrote} is admirable and unlivable.',
      'The weak chapter is still weak. {Chapter you have been avoiding} is where the marks are hidden.',
      'Turn the phone off for one hour. {Your attention} is the resource that is actually failing.',
      'Do not compare timelines. {Someone else\'s progress} is not data about your ability.',
      'Start tonight, imperfectly. {The version you keep planning} will never be started.',
      'Prepare a backup path. {This first choice} is competitive, and you should not be holding only one door.',
      'Sleep before you revise once more. {The last hour of cramming} is costing you more than it adds.',
      'Ask for help sooner. {Struggling quietly} has stopped being noble about three weeks ago.',
      'It is not too late — but it is this week. {Starting now} is the whole difference.'
    ]
  },

  money: {
    label: 'Money', icon: '💰',
    keys: ['money','cash','salary','income','save','savings','spend','spending','budget','invest',
           'investment','stock','stocks','fund','debt','loan','borrow','lend','rich','poor',
           'expensive','cheap','buy','purchase','afford','bonus','refund','pay','paid','cost',
           'price','rent','bills'],
    up: [
      'Buy it. {This purchase} will quietly pay for itself within the year.',
      'Start with the boring account. {An automatic transfer on payday} beats every budgeting app.',
      'Yes to the raise conversation. {The number you had in mind} is lower than what is available.',
      'Say yes to the small side income. {The modest start} is the part that compounds.',
      'Hold the position. {Your patience} is being paid for, just not on your schedule.',
      'Ask for the invoice to be itemised. {Something in the total} does not add up.',
      'Spend on the tool, not the treat. {The thing that saves you time} is the better buy this month.',
      'Lend it, but write the date. {A clear deadline} protects the friendship more than the money.',
      'Keep the current pace. {Your quiet consistency} is working faster than you realise.',
      'Learn the skill that bills. {This one} has a price tag attached to it already.'
    ],
    rev: [
      'Wait one week. {The urgency you feel} was manufactured by the listing, not by need.',
      'Read the terms again. {One clause} is doing more work than you think.',
      'Do not lend this one. {The amount} is more than the relationship can carry.',
      'Check the number before you agree. {The quoted figure} is not the final figure.',
      'Stop the subscription sweep. {Three small monthly charges} are quietly eating a real amount.',
      'Do not chase it. {This opportunity} has the shape of a loss with good manners.',
      'Set the floor. {A minimum price} will change how people treat your work.',
      'Delay the upgrade. {What you already own} is fully capable for another year.',
      'Write it down for a month. {Where the money actually goes} will surprise you twice.',
      'Say no to the favour. {Being generous with money} is not the same as being generous with yourself.'
    ]
  },

  social: {
    label: 'People', icon: '🤝',
    keys: ['friend','friends','friendship','family','mom','mum','dad','mother','father','parents',
           'roommate','classmate','sibling','brother','sister','neighbour','neighbor','social',
           'argument','fight','apologise','apologize','forgive','trust','gossip','lonely',
           'party','group','colleague','relationship with','awkward'],
    up: [
      'Message first. {The silence between you} is shyness on both sides, not a verdict.',
      'Say the awkward thing kindly. {This conversation} will be shorter and warmer than you fear.',
      'Accept the invitation. {The person who invited you} specifically wanted you there.',
      'Let them explain. {What looked like neglect} was probably just a bad month.',
      'Reach out to the old friend. {The years in between} matter less than you think.',
      'Keep this one close. {This friendship} is one of the rare ones that survives distance.',
      'Be the one who apologises first. {Being right} is worth less than being together.',
      'Ask the second question. {Curiosity} is the whole trick to being liked.',
      'Say no without the essay. {A plain, warm refusal} will be respected more than a long excuse.',
      'Let the group find its shape. {The awkward phase} passes faster than anyone admits.'
    ],
    rev: [
      'Let this one cool. {This relationship} is being held together mostly by habit.',
      'Do not explain yourself again. {The person who keeps misunderstanding you} has already decided.',
      'Set the boundary and expect a reaction. {Saying no} will reveal who was only ever there for the yes.',
      'Keep it off the group chat. {This problem} belongs in one private conversation.',
      'Stop over-giving. {Your constant availability} is why nobody notices the effort.',
      'It is not your job to fix it. {The family argument} has older roots than you.',
      'Distance is allowed. {Choosing quiet} is not the same as losing the friendship.',
      'Watch what they do after you say it. {The reaction} is the information you were missing.',
      'Do not take the comparison bait. {Being measured against someone else} is a game with no prize.',
      'Let one thing go. {The grudge you are carrying} costs you more than it costs them.'
    ]
  },

  health: {
    label: 'Health', icon: '🌿',
    keys: ['health','healthy','sick','ill','cold','fever','headache','migraine','pain','sleep',
           'insomnia','tired','exhausted','energy','diet','weight','exercise','workout','gym',
           'stress','stressed','anxious','anxiety','depressed','mood','doctor','hospital',
           'checkup','rest','burnout','recover','recovery','body'],
    up: [
      'Sleep is the whole treatment. {One week of real rest} will do what nothing else has.',
      'Start with ten minutes. {A walk you will actually repeat} beats a plan you will abandon.',
      'You are tired, not ill. {The fatigue} is a message about your schedule, not your body.',
      'Go for the check-up anyway. {The reassurance} is worth the appointment on its own.',
      'Eat something warm and cooked. {Real meals} have been missing from your week.',
      'Cut caffeine after two. {That single change} will hand you back your evenings.',
      'Say the feeling out loud to someone. {Naming it} takes away about a third of its weight.',
      'Keep going with the routine. {The consistency} is starting to show in how you carry yourself.',
      'Take the slow morning. {The pressure you feel} is external and can wait until noon.',
      'This is a good week to start. {Your energy} is coming back — use it gently.'
    ],
    rev: [
      'Stop pushing through. {The signal your body keeps sending} is the one to listen to now.',
      'Book the appointment. {Uncertainty} is costing you more sleep than the answer would.',
      'Cut the plan in half. {The routine you designed} was built for a version of you with more time.',
      'The problem is cumulative. {Weeks of short nights} do not get fixed by one good weekend.',
      'Put the phone down an hour earlier. {The scrolling} is where your rest is going.',
      'Do not make the big decision this week. {Your reserves} are too low to judge clearly.',
      'Tell someone how tired you are. {Hiding it} has become its own kind of work.',
      'Move your body, gently. {The stiffness} is asking for motion, not for more rest.',
      'Lower your own expectations first. {The standard you are holding} is the stressor.',
      'Give recovery more time than feels reasonable. {Healing} is running on its own clock.'
    ]
  },

  general: {
    label: 'General', icon: '✨',
    keys: [],
    up: [
      'Yes. {The thing you are asking about} is more possible than it looked last week.',
      'Start small and start today. {The first step} is the only one that is actually required.',
      'The timing is good. {What you are hesitating over} is a hesitation, not a warning.',
      'Say yes. {This particular door} will not stay open indefinitely.',
      'Trust your first instinct. {The answer you already had} was the right one.',
      'Ask one more person. {The perspective you are missing} is closer than you think.',
      'Do the version that scares you slightly. {That specific choice} is the one that grows.',
      'Let it be imperfect. {Finished and flawed} beats polished and imaginary.',
      'Give it a season. {The result you want} is forming, just below the surface.',
      'Take the risk. {The downside} is smaller and more survivable than your imagination says.'
    ],
    rev: [
      'Wait. {This is not the week} to decide something this size.',
      'You are missing a piece of information. {The thing nobody has told you yet} is the one that matters.',
      'Lower the stakes. {Your plan} assumes everything goes right at once.',
      'Not this one. {The pull you feel} is curiosity wearing the costume of certainty.',
      'Change the approach, not the goal. {The method} is what has stopped working.',
      'Do not decide out of tiredness. {How you feel tonight} is not how you will feel on Sunday.',
      'Protect your energy first. {This question} can wait until you have slept properly.',
      'Look at what you are avoiding. {The part you keep skipping} is the actual answer.',
      'Stop asking everyone else. {The opinions} are now just noise around your own.',
      'Say no for now. {A later yes} is still available, and a rushed yes is not.'
    ]
  }
};

var TOPIC_ORDER = ['love','career','study','money','social','health','general'];

/* 按关键词命中计分，长关键词权重更高；无命中则回退到 general */
function detectTopic(q){
  if (!q) return { topic: 'general', hits: 0 };
  var text = ' ' + q.toLowerCase().replace(/[^a-z0-9' ]/g, ' ').replace(/\s+/g, ' ') + ' ';
  var best = 'general', bestScore = 0, bestHits = 0;

  for (var i = 0; i < TOPIC_ORDER.length; i++){
    var key = TOPIC_ORDER[i];
    if (key === 'general') continue;
    var words = TOPICS[key].keys, score = 0, hits = 0;
    for (var j = 0; j < words.length; j++){
      var w = words[j];
      if (text.indexOf(' ' + w + ' ') >= 0 || text.indexOf(' ' + w) >= 0){
        score += w.length;
        hits++;
      }
    }
    if (score > bestScore){ bestScore = score; best = key; bestHits = hits; }
  }
  return { topic: best, hits: bestHits };
}

function pickAnswer(topicKey, reversed){
  var t = TOPICS[topicKey] || TOPICS.general;
  var bank = reversed ? t.rev : t.up;
  return bank[Math.floor(Math.random() * bank.length)];
}

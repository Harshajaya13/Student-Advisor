// DATABASE OF STORIES
const storiesData = {
    "debug": {
        tag: "THE DEBUGGING PAIN",
        title: "The Brain Pattern Reality",
        text: "You aren't the only one. Almost every senior developer has cried over a missing semicolon. Debugging feels hard because you are doing three things at once: Logic + Syntax + Tools. Your brain is currently building patterns, and that takes friction.",
        truth: "STRATEGY: Keep going if you feel curiosity after the frustration. Rethink if you hate the process even when you understand the logic.",
        fix: "Walk away for 10 minutes. The solution is usually simple, but your tired brain can't see it."
    },
    "slow": {
        tag: "THE COMPARISON TRAP",
        title: "The Tortoise Wins",
        text: "Some people learn fast but forget fast. Others learn slow but build unshakable depth. You are watching their 'Highlight Reel' (results), not their 'Behind the Scenes' (practice hours). Your pace is different, not wrong.",
        truth: "REALITY: Speed is not the metric; Depth is. If you are learning slower, you are likely retaining more.",
        fix: "Stop looking at LinkedIn/Status updates. Compare your code to what you wrote last week, not what they wrote today."
    },
    "path": {
        tag: "THE DOUBT",
        title: "Confusion is Data",
        text: "Most students choose their path without clarity. Confusion isn't a failure—it's your brain asking for better questions. You might just be learning from boring sources, or you haven't seen what this skill can actually create.",
        truth: "CHECK: Keep going if you feel even 10% spark when you see a real project. Rethink if you only code because of pressure, with 0% curiosity.",
        fix: "Build one tiny thing (a simple calculator or button) today. Small wins kill big doubts."
    },
    "fail": {
        tag: "THE SETBACK",
        title: "Failure is Feedback",
        text: "Failing an exam or lab feels like a verdict on your intelligence. It isn't. It is just data. It tells you that your *strategy* had a gap, not that your *brain* is broken. Even the creators of Angry Birds failed 51 times before they succeeded.",
        truth: "MINDSET: You aren't 'useless'. You are just 'inexperienced'. Those are very different things.",
        fix: "Find the exact question you missed. Solve it now without a timer. Prove to yourself you can do it."
    },
    "memory": {
        tag: "THE MEMORY MYTH",
        title: "Understanding > Memorizing",
        text: "Einstein didn't memorize his phone number. Developers don't memorize syntax; they use Google and IDEs. You are struggling because you are trying to rote-learn code like it's history dates. It's not.",
        truth: "REALITY: If you understand the LOGIC (loops, if-else), you are fine. Syntax comes with muscle memory, not brain memory.",
        fix: "Stop trying to memorize. Create a 'Cheat Sheet' file and copy-paste from there. That is allowed."
    },
    "family": {
        tag: "THE EXTERNAL WEIGHT",
        title: "Love vs. Fear",
        text: "Your family pushes you because they worry about your survival, not your code. Their fear is heavy, but remember: It is *their* fear, not yours. You cannot code well while carrying someone else's anxiety.",
        truth: "BOUNDARY: Keep going if YOU want this path. If you choose a new path with awareness, that is also courage, not disappointment.",
        fix: "Communicate a 'Win', not a 'Struggle'. Show them a small project you made. Visual proof calms their fear."
    },
    "switch": {
        tag: "THE TUTORIAL LOOP",
        title: "The Dip",
        text: "You keep switching because when it gets hard (The Dip), you start a new language to feel the 'Beginner's High' again. But value is only found *after* the hard part. Switching ensures you stay a beginner forever.",
        truth: "DISCIPLINE: 1 language mastered is worth 10 languages 'started'. Depth wins.",
        fix: "Commit to NOT switching for 14 days. Stick to this one thing, even if it sucks."
    }
};
// DOM ELEMENTS
const selectionScreen = document.getElementById('selection-screen');
const storyScreen = document.getElementById('story-screen');

// Elements to fill
const storyTag = document.getElementById('scenario-tag');
const storyTitle = document.getElementById('story-title');
const storyText = document.getElementById('story-text');
const storyTruth = document.getElementById('story-truth');
const storyFix = document.getElementById('story-fix');

// FUNCTION TO SHOW STORY
function showStory(key) {
    const data = storiesData[key];

    // 1. Fill Data
    storyTag.innerText = data.tag;
    storyTitle.innerText = data.title;
    storyText.innerText = data.text;
    storyTruth.innerText = data.truth;
    storyFix.innerText = data.fix;

    // 2. Animate Transition
    // Hide Selection
    selectionScreen.classList.remove('active');
    selectionScreen.classList.add('hidden');

    // Show Story (Small delay for smooth effect)
    setTimeout(() => {
        storyScreen.classList.remove('hidden');
        storyScreen.classList.add('active');
        window.scrollTo(0,0);
    }, 300);
}

// FUNCTION TO GO BACK
function goBack() {
    // Hide Story
    storyScreen.classList.remove('active');
    storyScreen.classList.add('hidden');

    // Show Selection
    setTimeout(() => {
        selectionScreen.classList.remove('hidden');
        selectionScreen.classList.add('active');
    }, 300);
}
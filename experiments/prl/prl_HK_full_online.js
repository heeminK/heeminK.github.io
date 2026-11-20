/*************************** 
 * Prl_Hk_Full_Online Test *
 ***************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2022.2.5.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'prl_HK_full_online';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'session': '',
    'drug order': '',
};

// Start code blocks for 'Before Experiment'
// Pick n random items without replacement

function sampleN(arr, n) {
  var copy = arr.slice();
  util.shuffle(copy);
  return copy.slice(0, n);
}


var dir;
var files;
function stimuliPrep(block) {
  var dir, files;
  if (block === 'social') {
    dir = face_img_dir;
    files = face_files;
  } else {
    dir = shape_img_dir;
    files = shape_files;
  }
  // A pair of stimuli, e.g. 'faceStim/face01.jpg'
  return sampleN(files, 2).map(function (f) { return dir + '/' + f; });
}

// Poisson sampler (Knuth's algorithm), replacing np.random.poisson

function poissonSample(lambda) {
  var L = Math.exp(-lambda), k = 0, p = 1;
  do {
    k++;
    p *= Math.random();
  } while (p > L);
  return k - 1;
}

// Python's (numpy) randint(lo, hi): hi is excluded

function randint(lo, hi) {
  return Math.floor(Math.random() * (hi - lo)) + lo;
}
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 0.3726), (- 0.3726), (- 0.3726)]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(WelcomeRoutineBegin());
flowScheduler.add(WelcomeRoutineEachFrame());
flowScheduler.add(WelcomeRoutineEnd());
flowScheduler.add(Instruction1RoutineBegin());
flowScheduler.add(Instruction1RoutineEachFrame());
flowScheduler.add(Instruction1RoutineEnd());
flowScheduler.add(Instruction2RoutineBegin());
flowScheduler.add(Instruction2RoutineEachFrame());
flowScheduler.add(Instruction2RoutineEnd());
flowScheduler.add(Instruction3RoutineBegin());
flowScheduler.add(Instruction3RoutineEachFrame());
flowScheduler.add(Instruction3RoutineEnd());
flowScheduler.add(Instruction4RoutineBegin());
flowScheduler.add(Instruction4RoutineEachFrame());
flowScheduler.add(Instruction4RoutineEnd());
flowScheduler.add(Instruction5RoutineBegin());
flowScheduler.add(Instruction5RoutineEachFrame());
flowScheduler.add(Instruction5RoutineEnd());
flowScheduler.add(Instruction6RoutineBegin());
flowScheduler.add(Instruction6RoutineEachFrame());
flowScheduler.add(Instruction6RoutineEnd());
const blocksLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blocksLoopBegin(blocksLoopScheduler));
flowScheduler.add(blocksLoopScheduler);
flowScheduler.add(blocksLoopEnd);
flowScheduler.add(DoneRoutineBegin());
flowScheduler.add(DoneRoutineEachFrame());
flowScheduler.add(DoneRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'shapeStim.new/abstract5.png', 'path': 'shapeStim.new/abstract5.png'},
    {'name': 'feedbackStim/smile.png', 'path': 'feedbackStim/smile.png'},
    {'name': 'faceStim/f_easian.jpg', 'path': 'faceStim/f_easian.jpg'},
    {'name': 'faceStim/m_white.jpg', 'path': 'faceStim/m_white.jpg'},
    {'name': 'example-slides/example_nonsocial_new.png', 'path': 'example-slides/example_nonsocial_new.png'},
    {'name': 'feedbackStim/face.png', 'path': 'feedbackStim/face.png'},
    {'name': 'faceStim/f_wasian.jpg', 'path': 'faceStim/f_wasian.jpg'},
    {'name': 'faceStim/m_easian.jpg', 'path': 'faceStim/m_easian.jpg'},
    {'name': 'shapeStim.new/abstract3.png', 'path': 'shapeStim.new/abstract3.png'},
    {'name': 'shapeStim.new/abstract6.png', 'path': 'shapeStim.new/abstract6.png'},
    {'name': 'shapeStim.new/abstract4.png', 'path': 'shapeStim.new/abstract4.png'},
    {'name': 'example-slides/example_social_new.png', 'path': 'example-slides/example_social_new.png'},
    {'name': 'shapeStim.new/abstract2.png', 'path': 'shapeStim.new/abstract2.png'},
    {'name': 'faceStim/f_african.jpg', 'path': 'faceStim/f_african.jpg'},
    {'name': 'shapeStim.new/abstract1.png', 'path': 'shapeStim.new/abstract1.png'},
    {'name': 'faceStim/m_african.jpg', 'path': 'faceStim/m_african.jpg'},
    {'name': 'faceStim/m_wasian.jpg', 'path': 'faceStim/m_wasian.jpg'},
    {'name': 'faceStim/f_white.jpg', 'path': 'faceStim/f_white.jpg'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.2.5';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);


  return Scheduler.Event.NEXT;
}


var WelcomeClock;
var text_welcome;
var resp_welcome;
var Instruction1Clock;
var text_instr1;
var image_instr1;
var image_instr2;
var resp_instr1;
var Instruction2Clock;
var text_instr2;
var resp_instr2;
var Instruction3Clock;
var text_instr3;
var resp_instr3;
var Instruction4Clock;
var text_instr4;
var resp_instr4;
var Instruction5Clock;
var text_instr5;
var resp_instr5;
var Instruction6Clock;
var text_instr6;
var resp_instr6;
var SetupClock;
var face_img_dir;
var shape_img_dir;
var feedback_img_dir;
var face_files;
var shape_files;
var iti_dist;
var conditions;
var blockCounter;
var nBlocks;
var maxReversals;
var maxTrials;
var newClock;
var fixation;
var PictureClock;
var condition;
var prev_cond;
var feedback_color;
var left_image;
var right_image;
var resp_task;
var ResultsClock;
var feedback_text;
var image_feedback;
var end_trialClock;
var iti;
var BlockEndClock;
var text_blockend;
var resp_blockend;
var DoneClock;
var done_text;
var done_response;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Welcome"
  WelcomeClock = new util.Clock();
  text_welcome = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_welcome',
    text: 'Velkommen til eksperimentet!\n\nTrykk på mellomromstasten for å begynne.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  resp_welcome = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instruction1"
  Instruction1Clock = new util.Clock();
  text_instr1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instr1',
    text: 'På skjermen vil et par ansikter eller figurer dukke opp, som vist i eksemplene nedenfor.\n\nTrykk på mellomromstasten for å fortsette.',
    font: 'Arial',
    units: undefined, 
    pos: [0.0, 0.2], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  image_instr1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_instr1', units : undefined, 
    image : 'example-slides/example_nonsocial_new.png', mask : undefined,
    ori : 0.0, pos : [0.45, (- 0.15)], size : [0.5, 0.35],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  image_instr2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_instr2', units : undefined, 
    image : 'example-slides/example_social_new.png', mask : undefined,
    ori : 0.0, pos : [(- 0.45), (- 0.15)], size : [0.5, 0.35],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  resp_instr1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instruction2"
  Instruction2Clock = new util.Clock();
  text_instr2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instr2',
    text: 'Ett av bildene er oftere forbundet med en belønning, mens det andre oftere er forbundet med et tap. Disse assosiasjonene kan imidlertid endre seg av og til. Din oppgave er å avgjøre hvilket bilde som gir deg en belønning.\n\nTrykk på mellomromstasten for å fortsette.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  resp_instr2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instruction3"
  Instruction3Clock = new util.Clock();
  text_instr3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instr3',
    text: 'Husk: Bildenes verdier er ikke konstante. Selv om et bilde tidligere har vært forbundet med en belønning, kan det likevel av og til føre til et tap. På samme måte, kan et bilde som tidligere har vært forbundet med et tap, av og til føre til en belønning.\n\nDerfor bør du kun velge det andre bildet hvis du er sikker på at bildenes verdier er byttet om på.\n\nTrykk på mellomromstasten for å fortsette.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  resp_instr3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instruction4"
  Instruction4Clock = new util.Clock();
  text_instr4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instr4',
    text: 'Du må svare innen 2 sekunder. Du får tilbakemelding etter hvert valg du foretar.\n\nTrykk på mellomromstasten for å fortsette.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  resp_instr4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instruction5"
  Instruction5Clock = new util.Clock();
  text_instr5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instr5',
    text: 'Først vil du gjennomføre to øvelsesrunder. Etter du er ferdig med disse øvelsesrundene, skal du gjennomføre to runder av selve eksperimentet.\n\nTrykk på mellomromstasten for å fortsette.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  resp_instr5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instruction6"
  Instruction6Clock = new util.Clock();
  text_instr6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instr6',
    text: 'Du vil snart begynne på din første øvelsesrunde.\n\nVennligst plasser venstre pekefinger på ‘f’-tasten og høyre pekefinger på ‘j’-tasten.\n\nVed å trykke på ‘f’-tasten velges bildet til venstre, og ved å trykke på ‘j’-tasten velges bildet til høyre.\n\nTrykk på mellomromstasten for å starte.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  resp_instr6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Setup"
  SetupClock = new util.Clock();
  // Run 'Begin Experiment' code from setup_code
  // Relative folders next to index.html
  face_img_dir = 'faceStim';
  shape_img_dir = 'shapeStim.new';
  feedback_img_dir = 'feedbackStim';
  
  // Filenames
  face_files = [
    'f_african.jpg', 'f_easian.jpg', 'f_wasian.jpg', 'f_white.jpg',
    'm_african.jpg', 'm_easian.jpg', 'm_wasian.jpg', 'm_white.jpg'
  ];
  shape_files = [
    'abstract1.png', 'abstract2.png', 'abstract3.png',
    'abstract4.png', 'abstract5.png', 'abstract6.png'
  ];
  iti_dist = [];
  for (var i = 0; i < 1000; i++) {
    iti_dist.push(poissonSample(2));
  }
  
  conditions = ['social', 'nonsocial'];
  util.shuffle(conditions);
  blockCounter = 0;
  nBlocks = 4;
  maxReversals = 9;
  maxTrials = 1000;
  newClock = new util.Clock();
  fixation = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Picture"
  PictureClock = new util.Clock();
  // Run 'Begin Experiment' code from code_feedback
  // Resetting following variables every trial
  condition = "";
  prev_cond = "";
  feedback_color = "";
  left_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'left_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.45), 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512.0, interpolate : true, depth : -1.0 
  });
  right_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.45, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 512.0, interpolate : true, depth : -2.0 
  });
  resp_task = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Results"
  ResultsClock = new util.Clock();
  feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  image_feedback = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_feedback', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "end_trial"
  end_trialClock = new util.Clock();
  iti = new visual.TextStim({
    win: psychoJS.window,
    name: 'iti',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "BlockEnd"
  BlockEndClock = new util.Clock();
  text_blockend = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_blockend',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  resp_blockend = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Done"
  DoneClock = new util.Clock();
  done_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'done_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  done_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _resp_welcome_allKeys;
var WelcomeComponents;
function WelcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Welcome' ---
    t = 0;
    WelcomeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    resp_welcome.keys = undefined;
    resp_welcome.rt = undefined;
    _resp_welcome_allKeys = [];
    // Run 'Begin Routine' code from text_align
    text_welcome.alignText = "left";
    
    // keep track of which components have finished
    WelcomeComponents = [];
    WelcomeComponents.push(text_welcome);
    WelcomeComponents.push(resp_welcome);
    
    for (const thisComponent of WelcomeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function WelcomeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Welcome' ---
    // get current time
    t = WelcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_welcome* updates
    if (t >= 0.0 && text_welcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_welcome.tStart = t;  // (not accounting for frame time here)
      text_welcome.frameNStart = frameN;  // exact frame index
      
      text_welcome.setAutoDraw(true);
    }

    
    // *resp_welcome* updates
    if (t >= 0.0 && resp_welcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_welcome.tStart = t;  // (not accounting for frame time here)
      resp_welcome.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { resp_welcome.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { resp_welcome.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { resp_welcome.clearEvents(); });
    }

    if (resp_welcome.status === PsychoJS.Status.STARTED) {
      let theseKeys = resp_welcome.getKeys({keyList: ['space'], waitRelease: false});
      _resp_welcome_allKeys = _resp_welcome_allKeys.concat(theseKeys);
      if (_resp_welcome_allKeys.length > 0) {
        resp_welcome.keys = _resp_welcome_allKeys[_resp_welcome_allKeys.length - 1].name;  // just the last key pressed
        resp_welcome.rt = _resp_welcome_allKeys[_resp_welcome_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of WelcomeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function WelcomeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Welcome' ---
    for (const thisComponent of WelcomeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(resp_welcome.corr, level);
    }
    psychoJS.experiment.addData('resp_welcome.keys', resp_welcome.keys);
    if (typeof resp_welcome.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('resp_welcome.rt', resp_welcome.rt);
        routineTimer.reset();
        }
    
    resp_welcome.stop();
    // the Routine "Welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _resp_instr1_allKeys;
var Instruction1Components;
function Instruction1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instruction1' ---
    t = 0;
    Instruction1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    resp_instr1.keys = undefined;
    resp_instr1.rt = undefined;
    _resp_instr1_allKeys = [];
    // Run 'Begin Routine' code from text_align2
    text_instr1.alignText = "left";
    
    // keep track of which components have finished
    Instruction1Components = [];
    Instruction1Components.push(text_instr1);
    Instruction1Components.push(image_instr1);
    Instruction1Components.push(image_instr2);
    Instruction1Components.push(resp_instr1);
    
    for (const thisComponent of Instruction1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instruction1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instruction1' ---
    // get current time
    t = Instruction1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_instr1* updates
    if (t >= 0.0 && text_instr1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instr1.tStart = t;  // (not accounting for frame time here)
      text_instr1.frameNStart = frameN;  // exact frame index
      
      text_instr1.setAutoDraw(true);
    }

    
    // *image_instr1* updates
    if (t >= 0.0 && image_instr1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_instr1.tStart = t;  // (not accounting for frame time here)
      image_instr1.frameNStart = frameN;  // exact frame index
      
      image_instr1.setAutoDraw(true);
    }

    
    // *image_instr2* updates
    if (t >= 0.0 && image_instr2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_instr2.tStart = t;  // (not accounting for frame time here)
      image_instr2.frameNStart = frameN;  // exact frame index
      
      image_instr2.setAutoDraw(true);
    }

    
    // *resp_instr1* updates
    if (t >= 0.0 && resp_instr1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_instr1.tStart = t;  // (not accounting for frame time here)
      resp_instr1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { resp_instr1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { resp_instr1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { resp_instr1.clearEvents(); });
    }

    if (resp_instr1.status === PsychoJS.Status.STARTED) {
      let theseKeys = resp_instr1.getKeys({keyList: ['space'], waitRelease: false});
      _resp_instr1_allKeys = _resp_instr1_allKeys.concat(theseKeys);
      if (_resp_instr1_allKeys.length > 0) {
        resp_instr1.keys = _resp_instr1_allKeys[_resp_instr1_allKeys.length - 1].name;  // just the last key pressed
        resp_instr1.rt = _resp_instr1_allKeys[_resp_instr1_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instruction1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instruction1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instruction1' ---
    for (const thisComponent of Instruction1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(resp_instr1.corr, level);
    }
    psychoJS.experiment.addData('resp_instr1.keys', resp_instr1.keys);
    if (typeof resp_instr1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('resp_instr1.rt', resp_instr1.rt);
        routineTimer.reset();
        }
    
    resp_instr1.stop();
    // the Routine "Instruction1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _resp_instr2_allKeys;
var Instruction2Components;
function Instruction2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instruction2' ---
    t = 0;
    Instruction2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    resp_instr2.keys = undefined;
    resp_instr2.rt = undefined;
    _resp_instr2_allKeys = [];
    // Run 'Begin Routine' code from text_align3
    text_instr2.alignText = "left";
    
    // keep track of which components have finished
    Instruction2Components = [];
    Instruction2Components.push(text_instr2);
    Instruction2Components.push(resp_instr2);
    
    for (const thisComponent of Instruction2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instruction2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instruction2' ---
    // get current time
    t = Instruction2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_instr2* updates
    if (t >= 0.0 && text_instr2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instr2.tStart = t;  // (not accounting for frame time here)
      text_instr2.frameNStart = frameN;  // exact frame index
      
      text_instr2.setAutoDraw(true);
    }

    
    // *resp_instr2* updates
    if (t >= 0.0 && resp_instr2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_instr2.tStart = t;  // (not accounting for frame time here)
      resp_instr2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { resp_instr2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { resp_instr2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { resp_instr2.clearEvents(); });
    }

    if (resp_instr2.status === PsychoJS.Status.STARTED) {
      let theseKeys = resp_instr2.getKeys({keyList: ['space'], waitRelease: false});
      _resp_instr2_allKeys = _resp_instr2_allKeys.concat(theseKeys);
      if (_resp_instr2_allKeys.length > 0) {
        resp_instr2.keys = _resp_instr2_allKeys[_resp_instr2_allKeys.length - 1].name;  // just the last key pressed
        resp_instr2.rt = _resp_instr2_allKeys[_resp_instr2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instruction2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instruction2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instruction2' ---
    for (const thisComponent of Instruction2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(resp_instr2.corr, level);
    }
    psychoJS.experiment.addData('resp_instr2.keys', resp_instr2.keys);
    if (typeof resp_instr2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('resp_instr2.rt', resp_instr2.rt);
        routineTimer.reset();
        }
    
    resp_instr2.stop();
    // the Routine "Instruction2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _resp_instr3_allKeys;
var Instruction3Components;
function Instruction3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instruction3' ---
    t = 0;
    Instruction3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    resp_instr3.keys = undefined;
    resp_instr3.rt = undefined;
    _resp_instr3_allKeys = [];
    // Run 'Begin Routine' code from text_align4_2
    text_instr3.alignText = "left";
    
    // keep track of which components have finished
    Instruction3Components = [];
    Instruction3Components.push(text_instr3);
    Instruction3Components.push(resp_instr3);
    
    for (const thisComponent of Instruction3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instruction3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instruction3' ---
    // get current time
    t = Instruction3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_instr3* updates
    if (t >= 0 && text_instr3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instr3.tStart = t;  // (not accounting for frame time here)
      text_instr3.frameNStart = frameN;  // exact frame index
      
      text_instr3.setAutoDraw(true);
    }

    
    // *resp_instr3* updates
    if (t >= 0.0 && resp_instr3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_instr3.tStart = t;  // (not accounting for frame time here)
      resp_instr3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { resp_instr3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { resp_instr3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { resp_instr3.clearEvents(); });
    }

    if (resp_instr3.status === PsychoJS.Status.STARTED) {
      let theseKeys = resp_instr3.getKeys({keyList: ['space'], waitRelease: false});
      _resp_instr3_allKeys = _resp_instr3_allKeys.concat(theseKeys);
      if (_resp_instr3_allKeys.length > 0) {
        resp_instr3.keys = _resp_instr3_allKeys[_resp_instr3_allKeys.length - 1].name;  // just the last key pressed
        resp_instr3.rt = _resp_instr3_allKeys[_resp_instr3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instruction3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instruction3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instruction3' ---
    for (const thisComponent of Instruction3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(resp_instr3.corr, level);
    }
    psychoJS.experiment.addData('resp_instr3.keys', resp_instr3.keys);
    if (typeof resp_instr3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('resp_instr3.rt', resp_instr3.rt);
        routineTimer.reset();
        }
    
    resp_instr3.stop();
    // the Routine "Instruction3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _resp_instr4_allKeys;
var Instruction4Components;
function Instruction4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instruction4' ---
    t = 0;
    Instruction4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    resp_instr4.keys = undefined;
    resp_instr4.rt = undefined;
    _resp_instr4_allKeys = [];
    // Run 'Begin Routine' code from text_align5
    text_instr4.alignText = "left";
    
    // keep track of which components have finished
    Instruction4Components = [];
    Instruction4Components.push(text_instr4);
    Instruction4Components.push(resp_instr4);
    
    for (const thisComponent of Instruction4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instruction4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instruction4' ---
    // get current time
    t = Instruction4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_instr4* updates
    if (t >= 0.0 && text_instr4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instr4.tStart = t;  // (not accounting for frame time here)
      text_instr4.frameNStart = frameN;  // exact frame index
      
      text_instr4.setAutoDraw(true);
    }

    
    // *resp_instr4* updates
    if (t >= 0.0 && resp_instr4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_instr4.tStart = t;  // (not accounting for frame time here)
      resp_instr4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { resp_instr4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { resp_instr4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { resp_instr4.clearEvents(); });
    }

    if (resp_instr4.status === PsychoJS.Status.STARTED) {
      let theseKeys = resp_instr4.getKeys({keyList: ['space'], waitRelease: false});
      _resp_instr4_allKeys = _resp_instr4_allKeys.concat(theseKeys);
      if (_resp_instr4_allKeys.length > 0) {
        resp_instr4.keys = _resp_instr4_allKeys[_resp_instr4_allKeys.length - 1].name;  // just the last key pressed
        resp_instr4.rt = _resp_instr4_allKeys[_resp_instr4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instruction4Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instruction4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instruction4' ---
    for (const thisComponent of Instruction4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(resp_instr4.corr, level);
    }
    psychoJS.experiment.addData('resp_instr4.keys', resp_instr4.keys);
    if (typeof resp_instr4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('resp_instr4.rt', resp_instr4.rt);
        routineTimer.reset();
        }
    
    resp_instr4.stop();
    // the Routine "Instruction4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _resp_instr5_allKeys;
var Instruction5Components;
function Instruction5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instruction5' ---
    t = 0;
    Instruction5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    resp_instr5.keys = undefined;
    resp_instr5.rt = undefined;
    _resp_instr5_allKeys = [];
    // Run 'Begin Routine' code from text_align6
    text_instr5.alignText = "left";
    
    // keep track of which components have finished
    Instruction5Components = [];
    Instruction5Components.push(text_instr5);
    Instruction5Components.push(resp_instr5);
    
    for (const thisComponent of Instruction5Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instruction5RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instruction5' ---
    // get current time
    t = Instruction5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_instr5* updates
    if (t >= 0.0 && text_instr5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instr5.tStart = t;  // (not accounting for frame time here)
      text_instr5.frameNStart = frameN;  // exact frame index
      
      text_instr5.setAutoDraw(true);
    }

    
    // *resp_instr5* updates
    if (t >= 0.0 && resp_instr5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_instr5.tStart = t;  // (not accounting for frame time here)
      resp_instr5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { resp_instr5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { resp_instr5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { resp_instr5.clearEvents(); });
    }

    if (resp_instr5.status === PsychoJS.Status.STARTED) {
      let theseKeys = resp_instr5.getKeys({keyList: ['space'], waitRelease: false});
      _resp_instr5_allKeys = _resp_instr5_allKeys.concat(theseKeys);
      if (_resp_instr5_allKeys.length > 0) {
        resp_instr5.keys = _resp_instr5_allKeys[_resp_instr5_allKeys.length - 1].name;  // just the last key pressed
        resp_instr5.rt = _resp_instr5_allKeys[_resp_instr5_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instruction5Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instruction5RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instruction5' ---
    for (const thisComponent of Instruction5Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(resp_instr5.corr, level);
    }
    psychoJS.experiment.addData('resp_instr5.keys', resp_instr5.keys);
    if (typeof resp_instr5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('resp_instr5.rt', resp_instr5.rt);
        routineTimer.reset();
        }
    
    resp_instr5.stop();
    // the Routine "Instruction5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _resp_instr6_allKeys;
var Instruction6Components;
function Instruction6RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instruction6' ---
    t = 0;
    Instruction6Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    resp_instr6.keys = undefined;
    resp_instr6.rt = undefined;
    _resp_instr6_allKeys = [];
    // Run 'Begin Routine' code from text_align7
    text_instr6.alignText = "left";
    
    // keep track of which components have finished
    Instruction6Components = [];
    Instruction6Components.push(text_instr6);
    Instruction6Components.push(resp_instr6);
    
    for (const thisComponent of Instruction6Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instruction6RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instruction6' ---
    // get current time
    t = Instruction6Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_instr6* updates
    if (t >= 0.0 && text_instr6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instr6.tStart = t;  // (not accounting for frame time here)
      text_instr6.frameNStart = frameN;  // exact frame index
      
      text_instr6.setAutoDraw(true);
    }

    
    // *resp_instr6* updates
    if (t >= 0.0 && resp_instr6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_instr6.tStart = t;  // (not accounting for frame time here)
      resp_instr6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { resp_instr6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { resp_instr6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { resp_instr6.clearEvents(); });
    }

    if (resp_instr6.status === PsychoJS.Status.STARTED) {
      let theseKeys = resp_instr6.getKeys({keyList: ['space'], waitRelease: false});
      _resp_instr6_allKeys = _resp_instr6_allKeys.concat(theseKeys);
      if (_resp_instr6_allKeys.length > 0) {
        resp_instr6.keys = _resp_instr6_allKeys[_resp_instr6_allKeys.length - 1].name;  // just the last key pressed
        resp_instr6.rt = _resp_instr6_allKeys[_resp_instr6_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instruction6Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instruction6RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instruction6' ---
    for (const thisComponent of Instruction6Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(resp_instr6.corr, level);
    }
    psychoJS.experiment.addData('resp_instr6.keys', resp_instr6.keys);
    if (typeof resp_instr6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('resp_instr6.rt', resp_instr6.rt);
        routineTimer.reset();
        }
    
    resp_instr6.stop();
    // the Routine "Instruction6" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var blocks;
function blocksLoopBegin(blocksLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    blocks = new TrialHandler({
      psychoJS: psychoJS,
      nReps: nBlocks, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'blocks'
    });
    psychoJS.experiment.addLoop(blocks); // add the loop to the experiment
    currentLoop = blocks;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBlock of blocks) {
      snapshot = blocks.getSnapshot();
      blocksLoopScheduler.add(importConditions(snapshot));
      blocksLoopScheduler.add(SetupRoutineBegin(snapshot));
      blocksLoopScheduler.add(SetupRoutineEachFrame());
      blocksLoopScheduler.add(SetupRoutineEnd(snapshot));
      const trialsLoopScheduler = new Scheduler(psychoJS);
      blocksLoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      blocksLoopScheduler.add(trialsLoopScheduler);
      blocksLoopScheduler.add(trialsLoopEnd);
      blocksLoopScheduler.add(BlockEndRoutineBegin(snapshot));
      blocksLoopScheduler.add(BlockEndRoutineEachFrame());
      blocksLoopScheduler.add(BlockEndRoutineEnd(snapshot));
      blocksLoopScheduler.add(blocksLoopEndIteration(blocksLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: maxTrials, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(PictureRoutineBegin(snapshot));
      trialsLoopScheduler.add(PictureRoutineEachFrame());
      trialsLoopScheduler.add(PictureRoutineEnd(snapshot));
      trialsLoopScheduler.add(ResultsRoutineBegin(snapshot));
      trialsLoopScheduler.add(ResultsRoutineEachFrame());
      trialsLoopScheduler.add(ResultsRoutineEnd(snapshot));
      trialsLoopScheduler.add(end_trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(end_trialRoutineEachFrame());
      trialsLoopScheduler.add(end_trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function blocksLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(blocks);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function blocksLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var var_trial;
var corrCounter;
var revCounter;
var numCorr;
var numReversals;
var block_condition;
var stimuli;
var a_reward;
var b_reward;
var image_a;
var image_b;
var SetupComponents;
function SetupRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Setup' ---
    t = 0;
    SetupClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from setup_code
    // Reset timer
    if (blocks.thisN >= 1) {
      newClock.reset();
    }
    
    // Reset counters
    var_trial = 0;
    corrCounter = 0; // count number of correct choices
    revCounter = 0; // count number of reversals
    
    // for training, set numCorr to 5 with one reversal
    if (blocks.thisN <= 1) {
      numCorr = 5;
      numReversals = 0;
    } else if (blocks.thisN > 1) {
      numCorr = randint(10, 16); // number of correct choices before reversal
      numReversals = maxReversals; // number of reversals in a block
    }
    
    block_condition = conditions[blockCounter % 2];
    stimuli = stimuliPrep(block_condition);
    psychoJS.experiment.addData("block_condition", block_condition);
    
    // Assign reward/loss rule (50%)
    if (randint(0, 2) === 0) {
      a_reward = 1;
      b_reward = 0;
    } else {
      a_reward = 0;
      b_reward = 1;
    }
    
    // Use new stimuli for each block
    image_a = stimuli[0];
    image_b = stimuli[1];
    
    // Shuffle iti
    util.shuffle(iti_dist);
    // keep track of which components have finished
    SetupComponents = [];
    SetupComponents.push(fixation);
    
    for (const thisComponent of SetupComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function SetupRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Setup' ---
    // get current time
    t = SetupClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation* updates
    if (t >= 0.0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation.tStart = t;  // (not accounting for frame time here)
      fixation.frameNStart = frameN;  // exact frame index
      
      fixation.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of SetupComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function SetupRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Setup' ---
    for (const thisComponent of SetupComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var a_left;
var b_left;
var corr_ans;
var left_file;
var right_file;
var _resp_task_allKeys;
var PictureComponents;
function PictureRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Picture' ---
    t = 0;
    PictureClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_feedback
    // Shuffle image locations
    if (randint(0, 2) === 0) {
      a_left = 1;
      b_left = 0;
    } else {
      a_left = 0;
      b_left = 1;
    }
    
    if (a_reward === 1 && a_left === 1) {
      corr_ans = "f";
    } else if (b_reward === 1 && b_left === 1) {
      corr_ans = "f";
    } else if (a_reward === 1 && a_left === 0) {
      corr_ans = "j";
    } else if (b_reward === 1 && b_left === 0) {
      corr_ans = "j";
    }
    
    left_image.setOpacity(1);
    right_image.setOpacity(1);
    if (a_left === 1) {
      left_file = image_a;
      right_file = image_b;
    } else if (b_left === 1) {
      left_file = image_b;
      right_file = image_a;
    }
    
    psychoJS.experiment.addData("image_a", image_a);
    psychoJS.experiment.addData("image_b", image_b);
    psychoJS.experiment.addData("corr_ans", corr_ans);
    left_image.setImage(left_file);
    right_image.setImage(right_file);
    resp_task.keys = undefined;
    resp_task.rt = undefined;
    _resp_task_allKeys = [];
    // keep track of which components have finished
    PictureComponents = [];
    PictureComponents.push(left_image);
    PictureComponents.push(right_image);
    PictureComponents.push(resp_task);
    
    for (const thisComponent of PictureComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function PictureRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Picture' ---
    // get current time
    t = PictureClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *left_image* updates
    if (t >= 0.0 && left_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_image.tStart = t;  // (not accounting for frame time here)
      left_image.frameNStart = frameN;  // exact frame index
      
      left_image.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (left_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      left_image.setAutoDraw(false);
    }
    
    // *right_image* updates
    if (t >= 0.0 && right_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_image.tStart = t;  // (not accounting for frame time here)
      right_image.frameNStart = frameN;  // exact frame index
      
      right_image.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (right_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      right_image.setAutoDraw(false);
    }
    
    // *resp_task* updates
    if (t >= 0.0 && resp_task.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_task.tStart = t;  // (not accounting for frame time here)
      resp_task.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { resp_task.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { resp_task.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { resp_task.clearEvents(); });
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (resp_task.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      resp_task.status = PsychoJS.Status.FINISHED;
  }

    if (resp_task.status === PsychoJS.Status.STARTED) {
      let theseKeys = resp_task.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _resp_task_allKeys = _resp_task_allKeys.concat(theseKeys);
      if (_resp_task_allKeys.length > 0) {
        resp_task.keys = _resp_task_allKeys[_resp_task_allKeys.length - 1].name;  // just the last key pressed
        resp_task.rt = _resp_task_allKeys[_resp_task_allKeys.length - 1].rt;
        // was this correct?
        if (resp_task.keys == corr_ans) {
            resp_task.corr = 1;
        } else {
            resp_task.corr = 0;
        }
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of PictureComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var no_resp;
var feedback_text1;
var r;
var feedback_image;
function PictureRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Picture' ---
    for (const thisComponent of PictureComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_feedback
    if (typeof resp_task.keys === 'undefined' || resp_task.keys.length === 0) {
      no_resp = true;
      feedback_text1 = "Vennligst svar raskere!";
    } else {
      no_resp = false;
      feedback_text1 = "";
    }
    
    // Add to counter if correct choice else reset counter
    if (resp_task.corr) {
      corrCounter += resp_task.corr;
    } else {
      corrCounter = 0;
    }
    
    psychoJS.experiment.addData("corrCounter", corrCounter);
    psychoJS.experiment.addData("numCorr", numCorr);
    
    // 80:20 Probabilistic reward
    r = Math.random();
    
    if (no_resp) {
      condition = "no_resp"; // no response
    } else if (r <= 0.8) {
      if (resp_task.corr) {
        condition = "corr_reward";
      } else {
        condition = "err_loss";
      }
    } else {
      if (resp_task.corr) {
        condition = "corr_loss";
      } else {
        condition = "err_reward";
      }
    }
    console.log(condition);
    
    psychoJS.experiment.addData("condition", condition);
    psychoJS.experiment.addData("prev_cond", prev_cond);
    
    prev_cond = condition; // changed the order
    
    // add points to running total
    if (condition === "corr_loss" || condition === "err_loss") {
      feedback_image = feedback_img_dir + "/face.png";
    } else if (condition === "corr_reward" || condition === "err_reward") {
      feedback_image = feedback_img_dir + "/smile.png";
    } else {
      feedback_color = "white";
      feedback_image = undefined;
    }
    // was no response the correct answer?!
    if (resp_task.keys === undefined) {
      if (['None','none',undefined].includes(corr_ans)) {
         resp_task.corr = 1;  // correct non-response
      } else {
         resp_task.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(resp_task.corr, level);
    }
    psychoJS.experiment.addData('resp_task.keys', resp_task.keys);
    psychoJS.experiment.addData('resp_task.corr', resp_task.corr);
    if (typeof resp_task.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('resp_task.rt', resp_task.rt);
        }
    
    resp_task.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ResultsComponents;
function ResultsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Results' ---
    t = 0;
    ResultsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    feedback_text.setText(feedback_text1);
    image_feedback.setImage(feedback_image);
    // keep track of which components have finished
    ResultsComponents = [];
    ResultsComponents.push(feedback_text);
    ResultsComponents.push(image_feedback);
    
    for (const thisComponent of ResultsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ResultsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Results' ---
    // get current time
    t = ResultsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback_text* updates
    if (t >= 0.0 && feedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_text.tStart = t;  // (not accounting for frame time here)
      feedback_text.frameNStart = frameN;  // exact frame index
      
      feedback_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_text.setAutoDraw(false);
    }
    
    // *image_feedback* updates
    if (t >= 0.0 && image_feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_feedback.tStart = t;  // (not accounting for frame time here)
      image_feedback.frameNStart = frameN;  // exact frame index
      
      image_feedback.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_feedback.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_feedback.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ResultsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ResultsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Results' ---
    for (const thisComponent of ResultsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ITI_dur;
var end_trialComponents;
function end_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end_trial' ---
    t = 0;
    end_trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from demo_reversal
    // When number of correct responses passes threshold
    if (corrCounter === numCorr) {
        // While revCounter has not reached the max reversal
        if (revCounter < numReversals) {
            // Reverse the reward contingency
            if (a_reward) {
                a_reward = 0;
                b_reward = 1;
            } else {
                a_reward = 1;
                b_reward = 0;
            }
    
            // Add reversal counter
            revCounter += 1;
    
            // Reset the required number of correct answers
            if (blocks.thisN < 2) {
                numCorr = 5;
            } else {
                numCorr = randint(10, 16)
            }
    
            // Reset the correct answer counter
            corrCounter = 0;
    
        // If reached maximum reversals
        } else if (revCounter === numReversals) {
            // One trial (i.e., block) is over
            trials.finished = true;
        }
    }
    
    // If it is an experiment block
    if (numReversals > 0) {
    
        // When learning hasn't been reached
        if (corrCounter < numCorr) {
            console.log(revCounter);
    
            // Register revCounter
            psychoJS.experiment.addData("revCounter", revCounter);
    
        // When learning has been reached
        } else if (corrCounter === numCorr) {
            console.log(revCounter - 1);
    
            // Register revCounter - 1
            psychoJS.experiment.addData("revCounter", revCounter - 1);
        }
    
    // If it is a demo block
    } else {
        // Register revCounter (= 0)
        psychoJS.experiment.addData("revCounter", revCounter);
    }
    
    ITI_dur = iti_dist[var_trial];
    var_trial += 1;
    // keep track of which components have finished
    end_trialComponents = [];
    end_trialComponents.push(iti);
    
    for (const thisComponent of end_trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function end_trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end_trial' ---
    // get current time
    t = end_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from demo_reversal
    if ((blocks.thisN > 1)) {
        if ((newClock.getTime() >= 600)) {
            trials.finished = true;
            if ((blockCounter === 4)) {
                blocks.finished = true;
            }
        }
    }
    
    
    // *iti* updates
    if (t >= 0.0 && iti.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      iti.tStart = t;  // (not accounting for frame time here)
      iti.frameNStart = frameN;  // exact frame index
      
      iti.setAutoDraw(true);
    }

    frameRemains = 0.0 + ITI_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (iti.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      iti.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of end_trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function end_trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end_trial' ---
    for (const thisComponent of end_trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "end_trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var end_block_txt;
var _resp_blockend_allKeys;
var BlockEndComponents;
function BlockEndRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'BlockEnd' ---
    t = 0;
    BlockEndClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_blockend
    
    blockCounter += 1;
    
    if (blockCounter === 1) {
        end_block_txt = "Du vil snart begynne på den andre delen av treningen.";
        end_block_txt += "\n\nVennglist plasser venstre pekefinger på 'f'-tasten og høyre pekefinger på 'j'-tasten.";
        end_block_txt += "\n\nTrykk på mellomromstasten for å starte.";
    
    } else if (blockCounter === 2) {
        end_block_txt = "Du vil snart begynne på den første delen av selve oppgaven.";
        end_block_txt += "\n\nVennligst plasser venstre pekefinger på 'f'-tasten og høyre pekefinger på 'j'-tasten.";
        end_block_txt += "\n\nTrykk på mellomromstasten når du har forstått disse instruksjonene og er klar for å fortsette.";
    
    } else if (blockCounter === 3) {
        end_block_txt = "Du har nå fullført den første delen av oppgaven.";
        end_block_txt += "\nDu kan ta en kort pause.";
        end_block_txt += "\n\nTrykk på mellomromstasten når du er klar til å starte den andre delen.";
    
    } else {
        blocks.finished = true; // One block over when reached the max reversal
    
        end_block_txt = "Du har nå fullført oppgaven.";
        end_block_txt += "\n\nTrykk på mellomromstasten for å fortsette.";
    }
    
    text_blockend.setText(end_block_txt);
    resp_blockend.keys = undefined;
    resp_blockend.rt = undefined;
    _resp_blockend_allKeys = [];
    // Run 'Begin Routine' code from text_align4
    text_blockend.alignText = "left";
    
    // keep track of which components have finished
    BlockEndComponents = [];
    BlockEndComponents.push(text_blockend);
    BlockEndComponents.push(resp_blockend);
    
    for (const thisComponent of BlockEndComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function BlockEndRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'BlockEnd' ---
    // get current time
    t = BlockEndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_blockend
    if (blocks.thisN > 1) {
        if (newClock.getTime() >= 600) {
            trials.finished = true;
    
            if (blockCounter === 4) {
                blocks.finished = true;
            }
        }
    }
    
    
    // *text_blockend* updates
    if (t >= 0.0 && text_blockend.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_blockend.tStart = t;  // (not accounting for frame time here)
      text_blockend.frameNStart = frameN;  // exact frame index
      
      text_blockend.setAutoDraw(true);
    }

    
    // *resp_blockend* updates
    if (t >= 0.0 && resp_blockend.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_blockend.tStart = t;  // (not accounting for frame time here)
      resp_blockend.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { resp_blockend.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { resp_blockend.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { resp_blockend.clearEvents(); });
    }

    if (resp_blockend.status === PsychoJS.Status.STARTED) {
      let theseKeys = resp_blockend.getKeys({keyList: ['space'], waitRelease: false});
      _resp_blockend_allKeys = _resp_blockend_allKeys.concat(theseKeys);
      if (_resp_blockend_allKeys.length > 0) {
        resp_blockend.keys = _resp_blockend_allKeys[_resp_blockend_allKeys.length - 1].name;  // just the last key pressed
        resp_blockend.rt = _resp_blockend_allKeys[_resp_blockend_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of BlockEndComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BlockEndRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'BlockEnd' ---
    for (const thisComponent of BlockEndComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(resp_blockend.corr, level);
    }
    psychoJS.experiment.addData('resp_blockend.keys', resp_blockend.keys);
    if (typeof resp_blockend.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('resp_blockend.rt', resp_blockend.rt);
        routineTimer.reset();
        }
    
    resp_blockend.stop();
    // the Routine "BlockEnd" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var end_text;
var _done_response_allKeys;
var DoneComponents;
function DoneRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Done' ---
    t = 0;
    DoneClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from done_code
    end_text = "\n\nTrykk p\u00e5 mellomromstasten for \u00e5 avslutte denne delen og fortsette til neste del av studien.";
    
    done_text.setText(end_text);
    done_response.keys = undefined;
    done_response.rt = undefined;
    _done_response_allKeys = [];
    // keep track of which components have finished
    DoneComponents = [];
    DoneComponents.push(done_text);
    DoneComponents.push(done_response);
    
    for (const thisComponent of DoneComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function DoneRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Done' ---
    // get current time
    t = DoneClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *done_text* updates
    if (t >= 0.0 && done_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      done_text.tStart = t;  // (not accounting for frame time here)
      done_text.frameNStart = frameN;  // exact frame index
      
      done_text.setAutoDraw(true);
    }

    if (done_text.status === PsychoJS.Status.STARTED && Boolean((done_response.keys == 'space'))) {
      done_text.setAutoDraw(false);
    }
    
    // *done_response* updates
    if (t >= 0.0 && done_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      done_response.tStart = t;  // (not accounting for frame time here)
      done_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { done_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { done_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { done_response.clearEvents(); });
    }

    if (done_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = done_response.getKeys({keyList: ['space'], waitRelease: false});
      _done_response_allKeys = _done_response_allKeys.concat(theseKeys);
      if (_done_response_allKeys.length > 0) {
        done_response.keys = _done_response_allKeys[_done_response_allKeys.length - 1].name;  // just the last key pressed
        done_response.rt = _done_response_allKeys[_done_response_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of DoneComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function DoneRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Done' ---
    for (const thisComponent of DoneComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(done_response.corr, level);
    }
    psychoJS.experiment.addData('done_response.keys', done_response.keys);
    if (typeof done_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('done_response.rt', done_response.rt);
        routineTimer.reset();
        }
    
    done_response.stop();
    // the Routine "Done" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}

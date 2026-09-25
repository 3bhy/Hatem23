const questions = [

  {
    emoji: "🏍️",

    question:
      `كنا رايحين نبيع المكنة، وحاتم كان بيصور فيديو وبيقول:
            «المكنة أصيلة...»
            وفجأة حصلت المفاجأة 😂
            إيه اللي حصل؟`,

    answers: [
      "المكنة بطلت",
      "البنزين خلص",
      "الكاوتش فرقع",
      "المكنة وقعت"
    ],

    correct: 2,

    success:
      "😂صح! المكنة كانت أصيلة يا فقر. 💀"
  },


  {
    emoji: "🔎",

    question:
      `في يوم حاجة وقعت مننا على الأرض،
            ونزلنا ندور عليها وإحنا مش في حالتنا الطبيعية 😂
            إيه اللي كنا بندور عليه؟`,

    answers: [
      "مفتاح الموتوسيكل",
      "فلوس",
      "البنزين",
      "الموبايل"
    ],

    correct: 2,

    success:
      "😂 البنزين فين يالا."
  },


  {
    emoji: "🐐",

    question:
      `كان لكل واحد فينا اسم مختلف لما نقعد مع بعض...
            انت كان اسمه إيه؟`,

    answers: [
      "هركليز",
      "هتلر",
      "هوجان",
      "الازر"
    ],

    correct: 1,

    success:
      "🫡 هاااي هتلر! 🐐 مــــاع"

  },


  {
    emoji: "🎵",

    question:
      `وإحنا مستنيين واحد نعرفه،
            كنا بنغنى اى:`
    ,

    answers: [
      "عمده زمانها جايه جايه بعد شويه",
      "راحت راحت من شوية",
      "قاعدة قاعدة في البيت",
      "نامت نامت من بدري"
    ],

    correct: 0,

    success:
      "🎤 عمدة زمانها جاية جاية بعد شوية... جايبة حشيش وحاجات 😂"
  },


  {
    emoji: "🟫",

    question:
      `كنا ماشيين بالموتوسيكل، وأنا اللي سايق.
            حاتم قال:
            «دي طينة بتزحلق...»
            وإحنا عملنا إيه؟`,

    answers: [
      "رجعنا",
      "نزلنا من الموتوسيكل",
      "دخلنا فيها ووقعنا",
      "استنينا الطينة تنشف"
    ],

    correct: 2,

    success:
      "💀 حاتم حذّر... أحمد سمع... أحمد دخل... الاتنين بقوا طينة."
  },


  {
    emoji: "😂",

    question:
      `بعد 13 سنة صحوبية...
            مين فينا غالبًا بيكون سبب المصيبة؟`,

    answers: [
      "أحمد",
      "حاتم",
      "الاتنين مع بعض",
      "المصيبة بتحصل لوحدها"
    ],

    correct: 3,

    success:
      "😂 بالظبط... المصايب عندنا عندها حياة مستقلة."
  },


  {
    emoji: "🤦‍♂️",

    question:
      ` مين فينا بيعالج التانى نفسيا
             : `,

    answers: [
      "انا",
      "انت",
      "احنا الاتنين بايظين",
      "امك"
    ],

    correct: 2,

    success:
      "😂 اشطا يا عيان."
  },


  {
    emoji: "💀",

    question:
      `بعد كل اللي شوفناه في الـ13 سنة...
            مستواك  في اتخاذ القرارات:`,

    answers: [
      "ممتاز جدًا",
      "كويس",
      "عالمى",
      "بهيمه"
    ],

    correct: 3,

    success:
      "💀بهيمه فعلا."
  },


  {
    emoji: "❤️",

    question:
      `بعد حوالي 13 سنة من الصحوبية...
            لو رجعنا لأول يوم اتعرفنا فيه،
            هتختار تعيش نفس الـ13 سنة تاني؟`,

    answers: [
      "آه ❤️",
      "طبعًا",
      "بعد كل البلاوي دي؟ آه 😂",
      "للأسف... أيوه 💀"
    ],

    correct: null,

    success:
      "❤️ أي إجابة صح. المهم إننا عملنا الـ13 سنة دي سوا."
  }

];


let currentQuestion = 0;

let score = 0;

let answered = false;


/* =========================
   LOGIN
========================= */

function login() {

  const password =
    document.getElementById("passwordInput").value.trim();

  /*
      دي مؤقتة للتجربة فقط.

      بعد ما نعمل Backend:
      هنشيل الباسورد من هنا نهائيًا.
  */

  const DEMO_PASSWORD = "Hatem23";


 if (password === DEMO_PASSWORD) {

    document.getElementById("loginMessage")
        .textContent = "";

    showScreen("quizScreen");

    startBackgroundMusic();

    loadQuestion();

}

  else {

    document.getElementById("loginMessage")
      .textContent =
      "❌ كلمة السر غلط يا حاتم 😂";

  }

}


/* =========================
   SHOW SCREEN
========================= */

function showScreen(screenId) {

  document
    .querySelectorAll(".screen")
    .forEach(screen => {

      screen.classList.remove("active");

    });


  document
    .getElementById(screenId)
    .classList.add("active");

}


/* =========================
   LOAD QUESTION
========================= */

function loadQuestion() {

  answered = false;

  const question =
    questions[currentQuestion];


  document.getElementById("questionNumber")
    .textContent =
    `السؤال ${currentQuestion + 1} من ${questions.length}`;


  document.getElementById("score")
    .textContent =
    `النقاط: ${score}`;


  document.getElementById("progressBar")
    .style.width =
    `${(currentQuestion / questions.length) * 100}%`;


  document.getElementById("questionEmoji")
    .textContent =
    question.emoji;


  document.getElementById("questionText")
    .textContent =
    question.question;


  document.getElementById("feedback")
    .textContent = "";


  document.getElementById("nextButton")
    .classList.add("hidden");


  const answersContainer =
    document.getElementById("answersContainer");


  answersContainer.innerHTML = "";


  question.answers.forEach(
    (answer, index) => {

      const button =
        document.createElement("button");

      button.classList.add("answer");

      button.textContent =
        `${getArabicLetter(index)}) ${answer}`;


      button.onclick =
        () => checkAnswer(index, button);


      answersContainer.appendChild(button);

    }
  );

}

let musicStarted = false;

const backgroundMusic =
    document.getElementById("backgroundMusic");

const goatSound =
    document.getElementById("goatSound");


function startBackgroundMusic() {

    if (musicStarted) {
        return;
    }

    musicStarted = true;

    backgroundMusic.volume = 0.35;

    backgroundMusic
        .play()
        .catch(error => {

            console.log(
                "Music could not start:",
                error
            );

        });

}
/* =========================
   ARABIC LETTERS
========================= */

function getArabicLetter(index) {

  const letters = [
    "أ",
    "ب",
    "ج",
    "د"
  ];

  return letters[index];

}


/* =========================
   CHECK ANSWER
========================= */

function checkAnswer(selectedIndex, selectedButton) {

    if (answered) {
        return;
    }

    answered = true;

    const question = questions[currentQuestion];

    const buttons = document.querySelectorAll(".answer");

    buttons.forEach(button => {
        button.disabled = true;
    });


    if (question.correct === null) {

        score++;

        selectedButton.classList.add("correct");

        document.getElementById("feedback")
            .textContent = question.success;

    }

    else if (selectedIndex === question.correct) {

        score++;

        selectedButton.classList.add("correct");

        document.getElementById("feedback")
            .textContent = question.success;

    }

    else {

        selectedButton.classList.add("wrong");

        buttons[question.correct]
            .classList.add("correct");

        document.getElementById("feedback")
            .textContent =
            "❌ لأ يا حاتم 😂 حاول تفتكرها كويس.";

    }


    // تحديث النقاط
    document.getElementById("score")
        .textContent = `النقاط: ${score}`;


    // إظهار زر السؤال التالي
    document.getElementById("nextButton")
        .classList.remove("hidden");


    // تحديث الـ Progress Bar
    document.getElementById("progressBar")
        .style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;


    // 🐐 سؤال المعزة
    if (currentQuestion === 2) {

        playGoatSound();

    }

}



/* =========================
   NEXT QUESTION
========================= */

function nextQuestion() {

  currentQuestion++;


  if (currentQuestion < questions.length) {

    loadQuestion();

  }

  else {

    showResult();

  }

}


/* =========================
   RESULT
========================= */

function showResult() {

  showScreen("resultScreen");


  document.getElementById("finalScore")
    .textContent =
    `نتيجتك: ${score} / ${questions.length} 🎉`;

}


/* =========================
   GIFT
========================= */

function showGift() {

  showScreen("giftScreen");

}


/* =========================
   ENTER KEY
========================= */

document
  .getElementById("passwordInput")
  .addEventListener(
    "keydown",
    function(event) {

      if (event.key === "Enter") {

        login();

      }

    }

  );
function playGoatSound() {

    // نوقف الأغنية مؤقتًا
    backgroundMusic.pause();

    // نرجع صوت المعزة للبداية
    goatSound.currentTime = 0;

    goatSound.volume = 1;

    // لما صوت المعزة يخلص
    goatSound.onended = () => {

        // الأغنية تكمل من نفس المكان
        backgroundMusic
            .play()
            .catch(error => {

                console.log(
                    "Music could not resume:",
                    error
                );

            });

    };

    // نشغل صوت المعزة
    goatSound
        .play()
        .catch(error => {

            console.log(
                "Goat sound could not play:",
                error
            );

            // لو صوت المعزة فشل
            // الأغنية تكمل
            backgroundMusic
                .play()
                .catch(() => {});

        });

}
function openGift() {

    const gift = document.querySelector(".gift");
    const memoryPhoto = document.getElementById("memoryPhoto");

    // حركة فتح الهدية
    gift.classList.add("opened");

    setTimeout(() => {

        // إظهار الصورة
        memoryPhoto.classList.remove("hidden");

    }, 700);

}

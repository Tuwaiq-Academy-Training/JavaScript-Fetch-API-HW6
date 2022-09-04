// Ideal Weight
const heightInput = document.getElementById("height-input");
const maleInput = document.getElementById("male-input");
const femaleInput = document.getElementById("female-input");
const calButton = document.getElementById("cal-button");
const out = document.getElementById("ideal-weight");

// Body Fat Percentage
const ageInput = document.getElementById("age-input");
const weightInput = document.getElementById("weight-input");
const height2Input = document.getElementById("height2-input");
const neckInput = document.getElementById("neck-input");
const waistInput = document.getElementById("waist-input");
const hipInput = document.getElementById("hip-input");
const male2Input = document.getElementById("male2-input");
const female2Input = document.getElementById("female2-input");
const bodyFatPercentageCalButton = document.getElementById(
  "body-fat-percentage-cal-button"
);
const outBodyFatPercentage = document.getElementById("body-fat-percentage");

// Daily Calory Requirements
const age2Input = document.getElementById("age2-input");
const weight2Input = document.getElementById("weight2-input");
const height3Input = document.getElementById("height3-input");
const activityLevelInput = document.getElementById("activity-level");
const male3Input = document.getElementById("male3-input");
const female3Input = document.getElementById("female3-input");
const dailyCaloryRequirementsCalButton = document.getElementById(
  "daily-calory-requirements-cal-button"
);
const outDailyCaloryRequirements = document.getElementById(
  "daily-calory-requirements"
);

// ----------------
const divContnt = document.getElementById("content");
const idealWeightButton = document.getElementById("ideal-weight-button");
const bodyFatPercentageButton = document.getElementById(
  "body-fat-percentage-button"
);
const dailyCaloryRequirementsButton = document.getElementById(
  "daily-calory-requirements-button"
);

const bodyFatPercentageContent = document.getElementById(
  "body-fat-percentage-content"
);
const dailyCaloryRequirementsContent = document.getElementById(
  "daily-calory-requirements-content"
);
const idealWeightContent = document.getElementById("ideal-weight-content");

//--------------------------------------------------------

// Calculate function
const calIdealWeight = () => {
  let value = Number(heightInput.value);
  let isMale = maleInput.checked;
  let isFemale = femaleInput.checked;

  if (isMale) {
    getData(value, "male");
  } else if (isFemale) {
    getData(value, "female");
  }
  heightInput.value = "";
};
const calBodyFatPercentage = () => {
  let ageValue = Number(ageInput.value);
  let weightValue = Number(weightInput.value);
  let height2Value = Number(height2Input.value);
  let neckValue = Number(neckInput.value);
  let waistValue = Number(waistInput.value);
  let hipValue = Number(hipInput.value);

  let isMale2 = male2Input.checked;
  let isFemale2 = female2Input.checked;

  if (isMale2) {
    getBodyFatPercentage(
      ageValue,
      weightValue,
      height2Value,
      neckValue,
      waistValue,
      hipValue,
      "male"
    );
  } else if (isFemale2) {
    getBodyFatPercentage(
      ageValue,
      weightValue,
      height2Value,
      neckValue,
      waistValue,
      hipValue,
      "female"
    );
  }
  heightInput.value = "";
};
const calDailyCaloryRequirements = () => {
  let age2Value = Number(age2Input.value);
  let weight2Value = Number(weight2Input.value);
  let height3Value = Number(height3Input.value);
  let activityLevelValue = Number(activityLevelInput.selectedIndex + 1);

  let isMale3 = male3Input.checked;
  let isFemale3 = female3Input.checked;

  if (isMale3) {
    getDailyCaloryRequirements(
      age2Value,
      weight2Value,
      height3Value,
      activityLevelValue,
      "male"
    );
  } else if (isFemale3) {
    getDailyCaloryRequirements(
      age2Value,
      weight2Value,
      height3Value,
      activityLevelValue,
      "female"
    );
  }
  heightInput.value = "";
};

// get data
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3d856cba9cmsha56a361adcae52ap10b962jsnc4fae1250fc4",
    "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
  },
};
const getData = (h, g) => {
  fetch(
    `https://fitness-calculator.p.rapidapi.com/idealweight?gender=${g}&height=${h}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      out.innerText = response.data.Devine;
    })
    .catch((err) => console.error(err));
};
const getBodyFatPercentage = (
  ageValue,
  weightValue,
  height2Value,
  neckValue,
  waistValue,
  hipValue,
  gender
) => {
  fetch(
    `https://fitness-calculator.p.rapidapi.com/bodyfat?age=${ageValue}&gender=${gender}&weight=${weightValue}&height=${height2Value}&neck=${neckValue}&waist=${waistValue}&hip=${hipValue}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      outBodyFatPercentage.innerText = response.data["Body Fat (BMI method)"];
    })
    .catch((err) => console.error(err));
};
const getDailyCaloryRequirements = (
  age2Value,
  weight2Value,
  height3Value,
  activityLevelValue,
  gender
) => {
  fetch(
    `https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${age2Value}&gender=${gender}&height=${height3Value}&weight=${weight2Value}&activitylevel=level_${activityLevelValue}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      outDailyCaloryRequirements.innerText = response.data.BMR;
    })
    .catch((err) => console.error(err));
};

// Event Listener
calButton.addEventListener("click", calIdealWeight);
bodyFatPercentageCalButton.addEventListener("click", calBodyFatPercentage);
dailyCaloryRequirementsCalButton.addEventListener(
  "click",
  calDailyCaloryRequirements
);

idealWeightButton.addEventListener("click", () => {
  idealWeightContent.style.display = "block";
  bodyFatPercentageContent.style.display = "none";
  dailyCaloryRequirementsContent.style.display = "none";
});
bodyFatPercentageButton.addEventListener("click", () => {
  idealWeightContent.style.display = "none";
  bodyFatPercentageContent.style.display = "block";
  dailyCaloryRequirementsContent.style.display = "none";
});
dailyCaloryRequirementsButton.addEventListener("click", () => {
  idealWeightContent.style.display = "none";
  bodyFatPercentageContent.style.display = "none";
  dailyCaloryRequirementsContent.style.display = "block";
});

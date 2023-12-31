// My code

//Declaring variables
var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");
var subType = "basic";
var subDuration = 1;

// Creating Change Event Listeners

//When the user accesses the subscripton drop down menu, the subscripton type
// is reassigned the option value the user selects (the default option value
// is "basic").
subTypeElement.addEventListener("change", function (e) {
  subType = e.target.value;
  updateSubscriptionDiv();
});

//When the user accesses the duration drop down menu, the subscripton duration
// is reassigned the option value the user selects (the default option value
// is 1 month).
subDurationElement.addEventListener("change", function (e) {
  subDuration = Number(e.target.value);
  updateSubscriptionDiv();
});

// Defining functions

//When the updateSubscriptionDiv function is called or executed, the default
//monthly cost for is set to $5 for basic subscription type.  If the user
//selects the standard subscription type, then the monthly cost is set to $7.
//However, if the user chooses to select the premium subscription type,
//then the monthly cost is set to $10.
var updateSubscriptionDiv = function () {
  var monthlyCost = 5;
  if (subType === "standard") {
    monthlyCost = 7;
  } else if (subType === "premium") {
    monthlyCost = 10;
  }
  // The main purpose of this function is to calculate the total cost
  //based upon the subscripton type and subscription duration the user chooses.
  //Also the text will change, informing the user of that total.
  var total = subDuration * monthlyCost;
  result.innerText = `You have chosen a ${subDuration} month ${subType} plan for $${total}.`;
};


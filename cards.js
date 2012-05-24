var PMPuzzle = PMPuzzle || {};

// Creates pseudo-constants PMPuzzle.COLUMN_HEADERS, PMPuzzle.ROW_HEADERS, and PMPuzzle.CARDS.

var I = 'B';
var P = 'C';
var E = 'D';
var M = 'E';
var C = 'F';

var INTEGRATION = 1;
var SCOPE = 2;
var TIME= 3;
var COST = 4;
var QUALITY = 5;
var HUMAN_RESOURCE = 6;
var COMMUNICATIONS = 7;
var RISK = 8;
var PROCUREMENT = 9;

PMPuzzle.COLUMN_HEADERS = {
  "Initiating" : "B0",
  "Planning" : "C0",
  "Executing" : "D0",
  "Monitoring and Controlling" : "E0",
  "Closing" : "F0",
};

PMPuzzle.ROW_HEADERS = {
  "Integration" : "A1",
  "Scope" : "A2" ,
  "Time" : "A3" ,
  "Cost" : "A4" ,
  "Quality" : "A5",
  "Human Resource" : "A6",
  "Communications" : "A7",
  "Risk" : "A8",
  "Procurement" : "A9",
};

PMPuzzle.CARDS = {
  "Develop Project Charter" : I+INTEGRATION, // 1
  "Identify Stakeholders" : I+COMMUNICATIONS,
  "Develop Project Management Plan" : P+INTEGRATION,
  "Collect Requirements" : P+SCOPE,
  "Define Scope" : P+SCOPE,
  "Create WBS" : P+SCOPE,
  "Define Activities" : P+TIME,
  "Sequence Activities" : P+TIME,
  "Estimate Activity Resources" : P+TIME,
  "Estimate Activity Durations" : P+TIME, // 10
  "Develop Schedule" : P+TIME,
  "Estimate Costs" : P+COST,
  "Determine Budget" : P+COST,
  "Plan Quality" : P+QUALITY,
  "Develop Human Resource Plan" : P+HUMAN_RESOURCE,
  "Plan Communications" : P+COMMUNICATIONS,
  "Plan Risk Management" : P+RISK,
  "Identify Risks" : P+RISK,
  "Perform Qualitative Risk Analysis" : P+RISK,
  "Perform Quantitative Risk Analysis" : P+RISK, // 20
  "Plan Risk Responses" : P+RISK,
  "Plan Procurements" : P+PROCUREMENT,
  "Direct and Manage Project Execution" : E+INTEGRATION,
  "Perform Quality Assurance" : E+QUALITY,
  "Acquire Project Team" : E+HUMAN_RESOURCE,
  "Develop Project Team" : E+HUMAN_RESOURCE,
  "Manage Project Team" : E+HUMAN_RESOURCE,
  "Distribute Information" : E+COMMUNICATIONS,
  "Manage Stakeholder Expectations" : E+COMMUNICATIONS,
  "Conduct Procurements" : E+PROCUREMENT, // 30
  "Monitor and Control Project Work" : M+INTEGRATION,
  "Perform Integrated Change Control" : M+INTEGRATION,
  "Verify Scope" : M+SCOPE,
  "Control Scope" : M+SCOPE,
  "Control Schedule" : M+TIME,
  "Control Costs" : M+COST,
  "Perform Quality Control" : M+QUALITY,
  "Report Performance" : M+COMMUNICATIONS,
  "Monitor and Control Risks" : M+RISK,
  "Administer Procurements" : M+PROCUREMENT, //40
  "Close Project or Phase" : C+INTEGRATION,
  "Close Procurements" : C+PROCUREMENT //42
};


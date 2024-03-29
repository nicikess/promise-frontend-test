const participants = [
  //Participant 1
  {
    name: "Participant 1",
    userStory:
    "\"Starts by reading artifacts silently. (00:00-06:00)\
    Then he goes to Celonis and looks at the activities of the most common variants in the Variant Explorer and Process Explorer to familiarize, to get an initial understanding of the sequence of the process and the most common variants. He also makes a few assumptions about what he observes, for example \"\"so from Create Fine to Payment, this means that they received the fine directly on the place, right?\"\". (06:00-09:30)\
    Then, he looks at the research question to see what is expected and where to focus. (09:30-10:30)\
    He begins the analysis focusing on the Send for Credit Collection activity in Variant Explorer, which he had identified from the activity description as one circumstance for not paying. He filters for cases containing the Send for Credit Collection activity and explores variants. He then notices that some variants still contain the Payment activity and filters for cases without Payment. (10:30-14:00)\
    He mentions creating an OLAP table and looks at attributes to know what to put in, but quickly abandons that goal. (14:00-15:00) \
    [Replanning] Then, he decides to use the conformance checker as a fast solution to find reasons.\
    Since he doesn\'t have a desired model, he uses the one discovered automatically by Celonis, removes the Send for Credit Collection activity to get the desired BPMN model and uses it as input for the conformance checker. Then he scrolls through the list of violations and stops at the first one, the Send for Credit Collection activity which was the one he wanted to drill down to. He performs root cause analysis for the Send for Credit Collection activity but doesn\'t get any specific reason. Looks also at the other violations. (15:00-21:30)\
    [Replanning] He remembers about temporal constraints in the artifacts.\
    Applies throughput time selection filters to check the 90-day temporal constraint to find the answers. Then he moves on to check the temporal constraints about the prefecture. Checks the dismissal attribute and builds an OLAP table to check for dismissed cases. He\'s satisfied with his findings. (21:30-33:00)\"",
    pmExpertise: "Good",
    analysisExpertise: "Basic",
    tool: ["Celonis"],
  },

  //Participant 2
  {
    name: "Participant 2",
    pmExpertise: "Average",
    userStory:"\"Starts by reading the artifacts to get an understanding of the data (00:00-04:00) \
    Then he reads the guiding question (04:00-06:00). \
    Then he goes to Disco and looks the process map and general statistics to get a basic understanding of the process flow. (06:00 - 08:00). Then he switches between the guiding question and the artifacts attempting to find an activity that corresponds to not paying. Since he cannot find it, he looks into the attributes but then asks for help. The interviewer clarifies the question (08:00 - 13:00). \
    He continues searching in the attributes for something that could indicate not paying [seems not to know where to visualize attributes in Disco or raw data. He is encouraged by the interviewer]. (13:00-17:00) \
    Then he filters for cases that do not include the Payment activity and compares the DFG of the filtered event log in with the original one to find patterns [but he does not seem to find any] (17:00-24:30) \
    He asks the interviewer to clarify once more the concept of circumstance and decides that \"\"no Payment activity\"\" is then a circumstance. (24:00-27:00) \
    He seems to struggle to find reasons for it by looking at the DFG and goes to Celonis to look into some example cases to find the reasons for not having a Payment activity. He performs root cause analysis. (27:00-31:30) Starts switching between Celonis and Disco and mentions having some difficulties with understanding the root cause analysis results (31:30-34:30) \
    Then he goes to the conformance overview and tries to mine the model with the Payment activity and compares the results of the conformance checking, going through the violation list but he is unsure about the result and asks to move on with the questions (34:30-39:00)\"",
    analysisExpertise: "Average",
    tool: ["Disco", "Celonis"],
  },

  //Participant 3
  {
    name: "Participant 3",
    pmExpertise: "Good",
    userStory:"\"Starts by opening the event log as CSV to understand how the data is formatted and what it contains. (00:00-02:00)\
    Inspects the process map, looking at the activities and the main paths (02:00-06:30)\
    Opens the artifacts to have an idea of the context (06:30-11:00) \
    Then, she checks the guiding question and connects the \"\"reasons\"\" to the temporal constraints in the artifacts, which she thinks may hint to possible reasons (11:00-12:00)\
    She then explores the process map looking at the performance, finding bottlenecks (paths exhibiting long total and median duration) and rework. (13:00-18:00). She quickly checks the question to see if her findings answer it or not (18:00-18:30).\
    Then, she focuses on statistics [related to time] and starts looking at example cases in the variants, reflecting on the time constraints shown in the artifacts and the duration of transitions between activities [She never checks if the time constraints are respected or not] (18:30-27:00).\
    Notes down the first circumstance, i.e., that the police takes too long to send the fine (27:00-29:30)\
    Follows the same approach of looking at the variants and paths exhibiting long duration, finding the second circumstance in the delay between \"\"Add Penalty\"\" and \"\"Send for Credit Collection\"\" (19:30-32:00)\
    Then, she focuses on event attributes thinking that there must be something indicating how much the offender had to pay. She looks at the attribute distribution in Disco and notices that for one third of the cases the amount of the fine is empty. She thinks that the police is sending the fine without amount to pay and writes this as third circumstance (32:00-34:00).\
    \"",
    analysisExpertise: "Average",
    tool: ["Disco"],
  },

  //Participant 4
  {
    name: "Participant 4",
    pmExpertise: "Average",
    userStory:"\"Starts by opening the event log as CSV to better understand the data and relate it to the question. He checks the guiding questions and decides to perform the analysis in Disco. (00:00-04:30)\
    In Disco, the participant starts by loading the event log for which he checks the artifacts again to decide which attributes he wants to include. He only loads a subset of the available attributes with the note to maybe adapt this later in the analysis, in case he notices that the selection is not enough to answer the question. (04:30-08:30)\
    After the event log is loaded, the participant reads and understands the activities in the process map. He is missing something and takes a few minutes to understand that there is no activity specific to missing payments and that he can find additional process variants not ending with the Payment activity by increasing the path-slider. (08:30-20:00)\
    After the analysis of the activities and variants, the participant explains to the interviewer how he would analyze the circumstances in more detail in PM4Py, in case he had more time (20:00-25:00).\
    To provide root causes of the circumstances, the participant uses ProM in which he tests a couple of methods: Inductive Visual Miner, Petri Net & Interactive Data-aware Heuristic Miner to identify \"\"this very explainable structure\"\" [understand the circumstances and provide root causes]. [He is not successful.] (25:00-29:00)\
    Afterwards, he decides to continues looking at the process map in Disco and takes notes regarding the three circumstances and his assumption regarding the root causes of the circumstances, solely based on the activities and variants displayed. (29:00-35:30)\
    The participant opens ProM again to test the Social Networking Mining in order to identify the most critical node for the variants leading to a missing payment. He create a Social Network (HoW) in ProM and notice that he missed to add a filter to the event log beforehand to be able to interpret results [not successful -  the interpretation is not clear and he is not able to identify any root causes]. (35:30 - 44:30)\
    The participant was stopped before performing a further analysis to continue with the questions & interview.\"",
    analysisExpertise: "Average",
    tool: ["Disco", "ProM"],
  },

  //Participant 5
  {
    name: "Participant 5",
    pmExpertise: "Average",
    userStory:"\"After some connection problems, the participant starts from reading the artifacts and familiarize herself with the activities. Some activities and translation problems are clarified with help of the interviewer (00:00-08:00).\
    Afterwards, the analyst starts the analysis in the Process Explorer in Celonis, by following and understanding the activities. First, the visible connections are selected to a minima while in a second step she extends them, to get a feeling for the process (08:00-11:00).\
    Afterwards, the analyst searches for promising attributes for the analysis in the artifact documentation. She searches for the attributes to be able to compare amount to be paid vs. actual paid amount (11:00-14:30).\
    The analysts starts creating an OLAP table but seems to struggling with the selection of columns to be included in that table. She didn\'t add any fields. [Replanning] She checks the documentation and the variant explorer in Celonis again. Additionally, she invests in understanding the different process variants and specially the end activities of the process (14:30-23:00). \
    [Replanning] She looks into the documents and reminds herself of the goals of the analysis. She explains her thought process about continuing the analysis with help of conformance checking. (23:00-27:30).\
    After another look at the Variant and Process Explorer, she switches to the Conformance View and starts adapting the to-be BPMN model. [A structured approach or a clear reason for the performed edits is not clear] [The analysis leads to no outcomes /insights about circumstances or root causes] (27:30 - 40:00).\
    She filters the process to cases with payment and uses the process overview to look at temporal aspects like the case distribution per month and the throughput time. Based on the case distribution, the analyst is able to identify a circumstance based on peaks in the distribution and ends the analysis (40:00-45:00)\"",
    analysisExpertise: "Average",
    tool: ["Celonis"],
  },

  //Participant 6
  {
    name: "Participant 6",
    pmExpertise: "Good",
    userStory:"\"The participant starts by reading the artifacts aloud (00:00-04:00).  \
    After that she reads the guiding question and clarifies some open questions with the interviewer (04:00-06:30) .  \
    Then she opens Disco where she starts making sense of the control flow of the process and the involved activities by using the process map. She jumps back and forth between the activity descriptions in the artifacts and the process map. (06:00-13:00).  \
    While still using the process map, she starts to hypothesize about potential root causes [not data driven] about certain paths of the process (e.g. payment before fine is send). (13:00-14:00) \
    Now she focuses on the control-flow again and considers the frequency of events and the duration between events. She takes notes to capture her findings in between (14:00-18:30). \
    She dives deeper into performance related details and notices the temporal constraints within the process. [Even though the noticed the temporal constraints, it seems like she is not sure how to analyse it]. Still using the Process Map, she jumps between checking the performance, the number of events and temporal constraints/activity descriptions based on the provided artifacts. Before setting the filter, she mentioned that she is interested in checking if fines are not paid due to the late notification (18:30-24:00).\
    Therefore, she filters the data for a specific path . She uses the case view and observes that the payment still occurs in her selection, which she confirms in the Process Map (24:00-26:30). She switches back to the unfiltered event log where she checks further paths with and without payment and activities which can be followed after “Send Fine” (26:30-29:30). \
    [Brief interruption (29:30-33:00)].  \
    She decides to use performance metrics instead of frequency metrics to see the minimum and maximum durations [seems to not draw any conclusions based on the information]. She switches back to frequency metrics and changes the level of detail a couple of times [without any notably insights gained?] (33:00 - 37:30).  \
    She applies an endpoint filtering (“send fine”). By viewing the cases, she emits an hypothesis for a root cause of fines not being paid [fines are being sent too late because of a resource management problem,  which leads to a lot of fines not being paid] (37:30-45:00).  \
    She goes back to the unfiltered log and browses through the process map and explains using absolute frequency how many payments are not performed. She applies different levels of details and checks activities. [Seems like she is trying to come up with a valid hypothesis on activities following the payment, but everything seems a bit random] (45:00:56:00).\
    She uses the statistics view to check additional patterns and is interested in the number of events per case. (56:00-59:00).  \
    After going back to the process map and considering the flow at the full level of detail, she filters for cases being paid to understand the paths to payment. [Thanks to this step, she is able to understand why the payment activity is redundant in some cases]. (59:00-1:10).  \
    She later tries to explain why some cases are being sent to credit collection after payment [Unsuccessfully?] (1:10:00-1:16:30). \
     She starts to explain her main findings: (1) in a lot of cases, the fine is being sent very late, resulting in fines not being paid [the amount is unclear] (2) some payments are performed in two or three phases, (3) the system sometimes believes that the payment is not done, sending a message to credit collection [she assumes that it is an external process], while some partial payments do not require the credit collection step . [Connection interrupted] (1:16:30-1:19:30). \
    She finally switches to ProM, using the dotted chart to differentiate between activities, and finds that most are being sent to credit collection, which she confirms in Disco by observing the control flow of the process . She tries a similar approach for the payment activity but is stopped by time (1:19:30-1:27:00). \"",
    analysisExpertise: "Good",
    tool: ["Disco"],
  },

  //Participant 7
  {
    name: "Participant 7",
    pmExpertise: "Advanced",
    userStory:
    "\"The participants carefully reads all information available from in the provided pdf files, i.e. the instruction, all information in the artifacts. (00:00-08:30). Then he looks at the guiding question, thinking about what patterns in the data could help answering the question. (08:30-11:00)\
    Afterwards, he elaborates his tool selection and decides to perform the analysis in Disco. From the Process Map, he follows the different activities and variants and re-checks some of the activity explanations in the artifacts (11:00-20:00). [It seems like the participant is happy with his understanding and was able to generate some hypothesis/ideas on what to check next. These ideas are not explicitly stated.]\
    He analyzes the end activities of the process and filters on the most common end activity. After realizing that he is looking at a complicated subset of the event log and decides that also filtering for other end activities might not help him, he switches to the Cases View [because he noticed that the analysis of the end activities is not as promising as expected] (20:00-24:30).\
    [Replanning] By analyzing the most common variant, the participant identifies his first finding and interprets this variant [interpretation is not fully based on the data]. He now dives deeper into the different variants and captures his findings for the top 10 variants. Selectively, he filters on a few of the variants and checks the statistics on attributes, without any additional insights (24:30-42:00). [His findings and the circumstances are based on the most common variants identified without full payment.]\"",
    analysisExpertise: "Average",
    tool: ["Disco"],
  },

  //Participant 8
  {
    name: "Participant 8",
    pmExpertise: "Advanced",
    userStory:
    "\"After having only a quick look at the guiding question, the participant starts his analysis using ProM. He immediately analysis the variants and notices that the most coming variant could be interesting for him. (00:00-05:00)\
    When he wants to analyze cases from the first variant in more detail, ProM crashes and he switches to Celonis, but he is not comfortable using the tool and can not quickly achieve what he wants. He switches back to ProM. (05:00-13:00)\
    He continues checking the variants in ProM and manually compares the amounts and paid amounts of exemplary traces of the variants (13:00-15:00)\
    [Replanning] The participant notices that he is might be looking at the wrong variants and switches to the action menu to add filters [he is not fully aware of what he is looking for and ends up clicking just any function]. While the selection (split traces) loads, he switches back to Celonis (15:00-16:30).\
    The participant is switching between the Dashboards and tries to find filtering options. After expressing the need for filtering on cases without payment, the interviewer helped him and guided him to the process explorer from where he set the filter. With the filter applied, he switches again through the Dashboards, trying to identify any patterns. He checks different cases and attributes [he is not following any hypothesis/structured exploration]. After adding an additional filter for cases ending with send fine, he notices the throughput time and formulates his first insight from the analysis [he noticed the throughput time rather by chance] (16:30-26:30).\
    He now wants to dive into more details to analyses the connection between Create Fine - Send Fine. However, while he filters for the connection, he notices that he has missed to consider some other activities (slider in process explorer was at 0%) that he is interested in and focuses on different other activities [gets distracted from his original goal/lost in details] (26:30-29:30).\
    Then he wants to check if there are any attributes that could helm him understanding the appeal to judge. He jumps back in the documentation and identifies the dismissal attribute, which he considers as very important. He states that he should have checked the activity and attribute descriptions earlier. He jumps back into Celonis and looks at the dismissal attribute  (29:30-33:00).\
    Then he reminds himself about the guiding question and starts summarizing the circumstances he could identify so far. However, [get distracted again ?] he is diving into the dismissal attribute again and tries different filtering options [not successful]. He gets reminded about the time and decides to stop the analysis [33:00-38:00]\"",
    analysisExpertise: "Good",
    tool: ["Celonis", "ProM"],
  },

  //Participant 9
  {
    name: "Participant 9",
    pmExpertise: "Good",
    userStory:"\"The participants starts from reading the Artifacts & the guiding question (00:00-04:00).\
    Then he opens Celonis and starts his analysis from the overview dashboards, notices the timespan in from which the data originates and switches to the process explorer. By increasing the activities he step by steps notices the different activities and variants and jumps back to the artifacts to understand them better (04:00-07:00).\
    He starts setting filters and make first conclusions based on the statistics (i.e. majority of cases have no payment activity). Immediately afterwards, he starts creating an OLAP table [but struggles with the data structure] to compare the amount to be paid vs. the total payment. He is not successful. Instead, he starts looking at example cases to better understand the data and it\'s structure (07:00-14:30).\
    Afterwards he starts describing three circumstances. [He notices that so far he has only identified two, so he is now working switching his approach and try to understand if the third circumstance/hypothesis is correct]. Even though he is not able to find support for his third circumstance in the data, he switches to the second part of the question, namely to give a reason for each circumstance (14:30-15:30). \
    [Replanning] The participants continues with trying to identify how many cases are not paid in full with the help of setting up a OLAP table. He is not successful and notice that he might be able to identify reasons without knowing how many cases are affected (15:30-24:00).\
    However, he notices again that he needs the number of cases not paid in full to be able to continue. He explains why he needs it but also states, that his Dashboard capabilities ends there. Nevertheless, he continues trying to set up a PU-Function on the OLAP table (24:00-28:30). He is not successful.\
    He opens the raw data [but it seems like he is not getting anything out of it] but switches back to Celonis and continues working with the PU-Function. He is not successful and decides to continue with the follow-up questions (28:30-33:00).\
    \"",
    analysisExpertise: "Good",
    tool: ["Celonis"],
  },
];

export default participants;

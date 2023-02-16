const participants = [

    //Participant 1
    {
        name: "Participant 1",
        userStory:
        "Starts by reading artifacts silently. (00:00-06:00)" +
        "Then he goes to Celonis and looks at the activities of the most common variants in the Variant Explorer and Process Explorer to familiarize, to get an initial understanding of the sequence of the process and the most common variants. He also makes a few assumptions about what he observes, for example so from Create Fine to Payment, this means that they received the fine directly on the place, right?. (06:00-09:30)" +
        "Then, he looks at the research question to see what is expected and where to focus. (09:30-10:30)" +
        "He begins the analysis focusing on the Send for Credit Collection activity in Variant Explorer, which he had identified from the activity description as one circumstance for not paying. He filters for cases containing the Send for Credit Collection activity and explores variants. He then notices that some variants still contain the Payment activity and filters for cases without Payment. (10:30-14:00)" +
        "He mentions creating an OLAP table and looks at attributes to know what to put in, but quickly abandons that goal. (14:00-15:00)" +
        "[Replanning] Then, he decides to use the conformance checker as a fast solution to find reasons." +
        "Since he doesn't have a desired model, he uses the one discovered automatically by Celonis, removes the Send for Credit Collection activity to get the desired BPMN model and uses it as input for the conformance checker. Then he scrolls through the list of violations and stops at the first one, the Send for Credit Collection activity which was the one he wanted to drill down to. He performs root cause analysis for the Send for Credit Collection activity but doesn't get any specific reason. Looks also at the other violations. (15:00-21:30)" +
        "[Replanning] He remembers about temporal constraints in the artifacts." +
        "Applies throughput time selection filters to check the 90-day temporal constraint to find the answers. Then he moves on to check the temporal constraints about the prefecture. Checks the dismissal attribute and builds an OLAP table to check for dismissed cases. He's satisfied with his findings. (21:30-33:00)",
        pmExpertise: "Good",
        analysisExpertise: "Basic",
        tool: ["Disco"]
    },

    //Participant 2
    {
        name: "Participant 2",
        pmExpertise: "Average",
        analysisExpertise: "Average",
        tool: ["Disco", "Celonis"]
    },

    //Participant 3
    {
        name: "Participant 3",
        pmExpertise: "Good",
        analysisExpertise: "Average",
        tool: ["Disco"]
    },

    //Participant 4
    {
        name: "Participant 4",
        pmExpertise: "Average",
        analysisExpertise: "Average",
        tool: ["Disco", "ProM"]
    },

    //Participant 5
    {
        name: "Participant 5",
        pmExpertise: "Average",
        analysisExpertise: "Average",
        tool: ["Celonis"]
    },

    //Participant 6
    {
        name: "Participant 6",
        pmExpertise: "Good",
        analysisExpertise: "Good",
        tool: ["Disco"]
    },

    //Participant 7
    {
        name: "Participant 7",
        pmExpertise: "Advanced",
        analysisExpertise: "Average",
        tool: ["Disco"]
    },

    //Participant 8
    {
        name: "Participant 8",
        pmExpertise: "Advanced",
        analysisExpertise: "Good",
        tool: ["Celonis", "ProM"]
    },

    //Participant 9
    {
        name: "Participant 9",
        pmExpertise: "Good",
        analysisExpertise: "Good",
        tool: ["Celonis"]
    }

]

export default participants;
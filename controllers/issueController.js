import Issue from "../models/Issue.js";
import Student from "../models/Student.js";

const issueController = {
  createIssue: async (req, res) => {
    try {
      const { email, name, phone, department, place, issueDetails } = req.body;

      // Get the count of existing issues
      const count = await Issue.countDocuments();

      // Generate the next issue number
      const issueNumber = count + 1;

      // Find the student who created the issue
      const student = await Student.findOne({ email });

      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }

      // Create a new issue
      const issue = new Issue({
        issueNumber,
        issueDetails,
        status: "pending",
        assigned: null,
        createdBy: student._id,
        name,
        email,
        phone,
        department,
        place,
      });

      await issue.save();

      // Update the student's issues array
      student.issues.push(issue._id);
      await student.save();

      res.status(201).json(issue);
    } catch (error) {
      console.error("Error creating issue:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  // Update an issue
  updateIssue: async (req, res) => {
    try {
      const { issueId } = req.params;
      const { issueDetails, status, assigned } = req.body;

      // Find the issue by ID
      const issue = await Issue.findById(issueId);

      if (!issue) {
        return res.status(404).json({ message: "Issue not found" });
      }

      // Update the issue details
      issue.issueDetails = issueDetails;
      issue.status = status;
      issue.assigned = assigned;

      await issue.save();

      res.json(issue);
    } catch (error) {
      console.error("Error updating issue:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  // Other issue-related methods (getIssues, getIssue, updateIssue, etc.)
};

export default issueController;

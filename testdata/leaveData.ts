// leaveData.ts
export const leaveScenarios = [
    { type: "Casual", actionBy: "Admin", action: "ApproveCancel" },
    { type: "Casual", actionBy: "Manager", action: "ApproveCancel" },
    { type: "Casual", actionBy: "Admin", action: "Reject" },
    { type: "Casual", actionBy: "Manager", action: "Reject" },
    { type: "Casual", actionBy: "Admin", action: "ApproveCancel" },
    { type: "Casual", actionBy: "Admin", action: "cancelBeforeApproval" },
    { type: "Sick", actionBy: "Admin", action: "ApproveCancel" },
    { type: "Sick", actionBy: "Manager", action: "Reject" },
    { type: "Optional", actionBy: "Manager", action: "ApproveCancel" },
    { type: "Optional", actionBy: "Admin", action: "Reject" },
    { type: "Optional", actionBy: "Admin", action: "cancelBeforeApproval" },
    { type: "comp-off", actionBy: "Admin", action: "ApproveCancel" },
    { type: "comp-off", actionBy: "Manager", action: "Reject" },
    { type: "comp", actionBy: "Admin", action: "cancelBeforeApproval" }
  ];
  
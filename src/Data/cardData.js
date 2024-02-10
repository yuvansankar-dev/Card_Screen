var proUser = {
  type: "PRO",
  cost: 49,
  applicableFeatures: [
    "Unlimited Users",
    "50GB Storage",
    "Unlimted Public Projects",
    "Community Access",
    "Unlimted Private Projects",
    "Dedicated Phone Support",
    "Free Subdomain",
    "Monthly Status Reports",
  ],
  nonApplicableFeatures: [],
};

var plusUser = {
  type: "PLUS",
  cost: 9,
  applicableFeatures: [
    "Unlimited Users",
    "50GB Storage",
    "Unlimted Public Projects",
    "Community Access",
    "Unlimted Private Projects",
    "Dedicated Phone Support",
    "Free Subdomain",
  ],
  nonApplicableFeatures: ["Monthly Status Reports"],
};

var freeUser = {
  type: "FREE",
  cost: 0,
  applicableFeatures: [
    "Unlimited Users",
    "50GB Storage",
    "Unlimted Public Projects",
    "Community Access",
  ],
  nonApplicableFeatures: [
    "Unlimted Private Projects",
    "Dedicated Phone Support",
    "Free Subdomain",
    "Monthly Status Reports",
  ],
};

const planInfo = [freeUser, plusUser, proUser];

export default planInfo;

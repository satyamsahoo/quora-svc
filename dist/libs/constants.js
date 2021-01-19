"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMessages = exports.ErrorsByCodes = exports.StatusCodes = exports.EnvVars = exports.DeploymentType = exports.ABOUT = exports.API_PREFIX = exports.SWAGGER_URL = void 0;
exports.SWAGGER_URL = '/api-docs';
exports.API_PREFIX = '/api';
exports.ABOUT = {
    description: 'Kitchen sink API with Swagger',
    in: 'Headers',
    name: 'Authorization',
    title: 'DAN Kitchen sink API',
    type: 'apiKey',
};
const errors_1 = require("./errors");
var DeploymentType;
(function (DeploymentType) {
    DeploymentType["local"] = "local";
    DeploymentType["test"] = "test";
    DeploymentType["dev"] = "dev";
})(DeploymentType = exports.DeploymentType || (exports.DeploymentType = {}));
var EnvVars;
(function (EnvVars) {
    EnvVars["TEST"] = "test";
    EnvVars["LOCAL"] = "local";
    EnvVars["DEV"] = "dev";
    EnvVars["STG"] = "stg";
    EnvVars["PROD"] = "prod";
})(EnvVars = exports.EnvVars || (exports.EnvVars = {}));
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["OK"] = 200] = "OK";
    StatusCodes[StatusCodes["CREATED"] = 201] = "CREATED";
    StatusCodes[StatusCodes["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    StatusCodes[StatusCodes["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    StatusCodes[StatusCodes["FORBIDDEN"] = 403] = "FORBIDDEN";
    StatusCodes[StatusCodes["NOT_FOUND"] = 404] = "NOT_FOUND";
    StatusCodes[StatusCodes["CONFLICT"] = 409] = "CONFLICT";
    StatusCodes[StatusCodes["UNPROCESSABLE"] = 422] = "UNPROCESSABLE";
    StatusCodes[StatusCodes["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(StatusCodes = exports.StatusCodes || (exports.StatusCodes = {}));
exports.ErrorsByCodes = {
    401: errors_1.UnauthorizedError,
    400: errors_1.BadRequestError,
    404: errors_1.NotFoundError,
    500: errors_1.InternalServerError,
};
exports.ErrorMessages = {
    AUDIENCE_SELECTED: "Audience is already selected for this project",
    AUDIENCE_DESELECTED: "Audience is already deselected for this project",
    AUDIENCE_IN_USE: "Audience is in use for another plan",
    AUDIENCE_RE_USE: "Audience cannot be reused for this plan",
    DIFFERING_AUDIENCE_PROJECT_IDS: "The project id associated to the audience differs from the id provided",
    DUPLICATE_AUDIENCE: "Audience with the same name already exists",
    DUPLICATE_PHASE: "Phase with same name already exists",
    DUPLICATE_SCENARIO: "Scenario with the same name already exists",
    NAME_MIN_LENGTH: "name should have minimum 3 letters",
    NO_BODY: "Empty request body",
    NOT_ENOUGH_SCENARIOS: "2 scenarios must be provided for comparison",
    NOT_FOUND_AUDIENCE: "Audience not found",
    NOT_FOUND_BUY_AUDIENCE: "Please try with different buying audience",
    NOT_FOUND_CHANNELS: "Could not find any project channels",
    NOT_FOUND_FORMAT: "Please try with different format",
    NOT_FOUND_PHASE: "Phase not found",
    NOT_FOUND_PROJECT: "Project not found",
    NOT_FOUND_SCENARIO: "Scenario not found",
    NOT_FOUND_SCENARIOS: "Could not find any project scenarios",
    NO_AUDIENCE_ID: "Empty audience ID",
    NO_DEFAULT_AUDIENCE: "No default audience found for project with ID",
    NO_PROJECT_ID: "Empty project ID",
    NO_SCENARIOS: "Scenarios to compare not provided",
    NO_SCENARIO_ID: "Empty scenario ID",
    NO_SCENARIO_NAME: "Empty scenario name",
    INVALID_RESPONDENT_IDS: "Invalid respondent IDs",
    INVALID_SCENARIO_ID: "Invalid scenario ID",
    PHASE_CREATE_ERROR: "Unable to create phase",
    PHASE_GET_ERROR: "Unable to get phase",
    PLAN_EXISTS: "Plan with the same name already exist",
    PLAN_CREATE_ERROR: "Could not create a project",
    PLAN_UPDATE_ERROR: "Failed to update project at PL",
    PLAN_NAME_REQUIRED: "Plan name required",
    START_DATE_SMALLER: "StartDate should be smaller than or equal to EndDate",
    START_DATE_ERROR: "StartDate should be greater than or equal to current date",
    END_DATE_ERROR: "EndDate should be greater than or equal to current date",
    START_GREATER_THAN_END: "StartDate should be smaller than or equal to EndDate",
    INVALID_CHANNEL_COUNT: "channelIds must be greater than 2 and less than 4",
    INVALID_CHANNEL_ID: "channelIds must be valid project channels",
    UNABLE_TO_GET_COMPARE_DATA: "Unable to get compare data",
    UNABLE_TO_GET_REACH_OVERLAP: "Unable to get reach overlap",
    UNABLE_TO_GET_COMPARE_STATISTICS: "Unable to get compare statistics",
    DOWNLOAD_FORMAT: "Unsupported download format",
    INTERNAL_SERVER: "Something went wrong",
};
//# sourceMappingURL=constants.js.map
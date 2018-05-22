"use strict";
/*****************************AutoGenerated Code : Do not edit *******************************/
// Type generated from Swagger definition
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const superAgent = __importStar(require("superagent"));
class Client {
    constructor(_agent = superAgent.agent()) {
        this._agent = _agent;
        this.errorProcessor = (e) => e;
    }
    get agent() {
        return this._agent;
    }
    GetAssignments(courthouseId, startDate, endDate) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                "courthouseId": courthouseId,
                "startDate": startDate,
                "endDate": endDate
            };
            try {
                const response = yield this.agent.get(`/Assignments`)
                    .query(params);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    CreateAssignment(model) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.post(`/Assignments`)
                    .send(model);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    GetAssignmentById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.get(`/Assignments/${id}`);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    UpdateAssignment(id, model) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.put(`/Assignments/${id}`)
                    .send(model);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    ExpireAssignment(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.post(`/Assignments/${id}`);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    DeleteAssignment(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.delete(`/Assignments/${id}`);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    GetRegions() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.get(`/regions`);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    CreateRegion(model) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.post(`/regions`)
                    .send(model);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    GetRegionById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.get(`/regions/${id}`);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    UpdateRegion(id, model) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.put(`/regions/${id}`)
                    .send(model);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    DeleteRegion(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.delete(`/regions/${id}`);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    GetCourthouses() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.get(`/courthouses`);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    CreateCourthouse(model) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.post(`/courthouses`)
                    .send(model);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    GetCourthouseById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.get(`/courthouses/${id}`);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    UpdateCourthouse(id, model) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.put(`/courthouses/${id}`)
                    .send(model);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    DeleteCourthouse(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.delete(`/courthouses/${id}`);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    GetSheriffs(courthouseId) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                "courthouseId": courthouseId
            };
            try {
                const response = yield this.agent.get(`/sheriffs`)
                    .query(params);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    CreateSheriff(model) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.post(`/sheriffs`)
                    .send(model);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    GetSheriffById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.get(`/sheriffs/${id}`);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    UpdateSheriff(id, model) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.put(`/sheriffs/${id}`)
                    .send(model);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    DeleteSheriff(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.delete(`/sheriffs/${id}`);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    GetCourtrooms(courthouseId) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                "courthouseId": courthouseId
            };
            try {
                const response = yield this.agent.get(`/courtrooms`)
                    .query(params);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    CreateCourtroom(model) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.post(`/courtrooms`)
                    .send(model);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    GetCourtroomById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.get(`/courtrooms/${id}`);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    UpdateCourtroom(id, model) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.put(`/courtrooms/${id}`)
                    .send(model);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    DeleteCourtroom(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.delete(`/courtrooms/${id}`);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    GetJailRoleCodes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.get(`/codes/jailroles`);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    GetOtherAssignCodes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.get(`/codes/otherassign`);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    GetWorkSectionCodes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.get(`/codes/worksection`);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    GetSheriffRankCodes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.get(`/codes/sheriffrank`);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    GetRuns(courthouseId) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                "courthouseId": courthouseId
            };
            try {
                const response = yield this.agent.get(`/runs`)
                    .query(params);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    CreateRun(model) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.post(`/runs`)
                    .send(model);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    GetRunById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.get(`/runs/${id}`);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    UpdateRun(id, model) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.put(`/runs/${id}`)
                    .send(model);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    DeleteRun(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.delete(`/runs/${id}`);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    GetShifts(courthouseId) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                "courthouseId": courthouseId
            };
            try {
                const response = yield this.agent.get(`/Shifts`)
                    .query(params);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    CreateShift(model) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.post(`/Shifts`)
                    .send(model);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    GetShiftById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.get(`/Shifts/${id}`);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    UpdateShift(id, model) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.put(`/Shifts/${id}`)
                    .send(model);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    DeleteShift(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.delete(`/Shifts/${id}`);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    UpdateMultipleShifts(model) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.post(`/Shifts/multiple`)
                    .send(model);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    GetDutyRecurrences(startDate, endDate) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = {
                "startDate": startDate,
                "endDate": endDate
            };
            try {
                const response = yield this.agent.get(`/DutyRecurrences`)
                    .query(params);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    CreateDutyRecurrence(model) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.post(`/DutyRecurrences`)
                    .send(model);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    GetDutyRecurrenceById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.get(`/DutyRecurrences/${id}`);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    UpdateDutyRecurrence(id, model) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.put(`/DutyRecurrences/${id}`)
                    .send(model);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    ExpireDutyRecurrence(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.post(`/DutyRecurrences/${id}`);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    DeleteDutyRecurrence(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.delete(`/DutyRecurrences/${id}`);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    GetDuties() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.get(`/Duty`);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    CreateDuty(model) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.post(`/Duty`)
                    .send(model);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    GetDutyById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.get(`/Duty/${id}`);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    UpdateDuty(id, model) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.put(`/Duty/${id}`)
                    .send(model);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    DeleteDuty(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.delete(`/Duty/${id}`);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    ImportDefaultDuties(body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.post(`/Duty/import`)
                    .send(body);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    GetSheriffDuties() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.get(`/SheriffDuty`);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    CreateSheriffDuty(model) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.post(`/SheriffDuty`)
                    .send(model);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    GetSheriffDutyById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.get(`/SheriffDuty/${id}`);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    UpdateSheriffDuty(id, model) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.put(`/SheriffDuty/${id}`)
                    .send(model);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
    DeleteSheriffDuty(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.agent.delete(`/SheriffDuty/${id}`);
                return response.body;
            }
            catch (error) {
                if (this.errorProcessor) {
                    throw this.errorProcessor(error);
                }
                else {
                    throw error;
                }
            }
        });
    }
}
exports.default = Client;
//# sourceMappingURL=/Users/roughdraft/Projects/CGI/jag-shuber-api/dist/client/Client.js.map
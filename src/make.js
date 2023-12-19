"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("@decisionrules/decisionrules/dist/defs/enums");
const decisionrules_1 = __importDefault(require("@decisionrules/decisionrules"));
//ruleIds & versions & nodeIds
const ruleId = "f0e4bab9-6089-a4a8-2b11-e548bd015386";
const decisionTableId = "a76c167e-14f4-c2f7-ea23-273128aa1271";
const ruleIdWithDependencies = "bf4bab06-3a84-ee96-ac50-883deb9b2543";
const ruleIdToLock = "111c633e-78e9-49b6-de2b-bb939b607e06";
const version = "1";
const ruleIdToDelete = "1378c970-4a7d-54a5-58b3-96e297edefef";
const nodeId = "0f04dfbb-4b30-3832-4fc0-de9f10a16d6f";
//apiKeys
const solverKey = "B4mARhpSfieJ9ZQ7qXVJO63CPYAX_fZPGvfNhdbW8lQgmRq81loL6jH_Q5GjRfzT";
const managementKey = "QoPIdYlO5ZBgN7cdy0FtOyCoUNKgRESqJ5chvvlJuNbzke2zvXHzPw5rkj4EvaUz";
const businessIntKey = "X9XO9Ffbp0STyw_8Fs4bIcNIsM_Eh2fnHyG2EbFPHr1pK_7X5mt7bfbSKZ0rZUF9";
//correlation Ids
const correlationId = "6063782c-ff80-0f11-d211-52cf102d0825";
//tags
const tags = ["red"];
const tagsToDelete = ["blue"];
const tagsToUpdate = ['{"tagName": "green","color": "green"}'];
//solverOpt
let solverOpt;
//dr & opt for dr class definition
const opt = {
    solverKey: solverKey,
    managementKey: managementKey,
    businessIntKey: businessIntKey,
    host: enums_1.HostEnum.GLOBAL_CLOUD || "domain",
    bi_host: enums_1.HostEnum.GLOBAL_CLOUD || "bi_domain"
};
const dr = new decisionrules_1.default(opt);
//audit logs options
const auditLogsOptions = {
    page: "1",
    page_size: "5",
    limit: "10",
    corrIds: [correlationId],
    rules: [ruleId],
    // solver_keys: [solverKey],
    // tags: ["t1"],
    //  date_gte: "2023-02",
    //  date_lte: "2023-02",
    order: "asc",
    include_debug: "false",
    status_code: "200"
};
const auditLogsToDeleteOptions = {
    page: "2",
    page_size: "5",
    limit: "1",
    // corrIds: [correlationId],
    rules: [ruleId],
    // solver_keys: [solverKey],
    // tags: ["t1"],
    //  date_gte: "2023-02",
    //  date_lte: "2023-02",
    order: "asc",
    include_debug: "false",
    status_code: "200"
};
//data for locking the rule
const dataToLockTheRule = {
    "locked": true
};
//testing rules data
const decisionTreeData = {
    value1: 2,
    value2: 5,
};
const decisionTableData = {
    productType: "basic",
    period: "month",
    promoCode: "SUMMER SALE"
};
const decisionTableDataExc = {
    productType: "basicaefsgrdthzjzhtgrew",
    period: "month",
    promoCode: "SUMMER SALE"
};
const decisionTableDataInc = {
    productType: "basic",
    period: "monthADfaedfsd",
    promoCode: "SUMMER SALEADFEFEF"
};
const ruleToUpdate = {
    name: 'skript',
    description: 'Updated from SDK library',
    inputSchema: { value1: {}, value2: {} },
    outputSchema: { result: {} },
    script: '/* \n' +
        '    1.  Input variables\n' +
        '    Input body is set in input variable \n' +
        '*/\n' +
        'let a = input.value1;\n' +
        'let b = input.value2;\n' +
        '\n' +
        '/*\n' +
        '    2.  Define simple "multiply" function\n' +
        '*/\n' +
        'function multiply(a, b) {\n' +
        '    return a * b;\n' +
        '}\n' +
        '\n' +
        '/*\n' +
        '    3.  Execute multiply function and store value result variable\n' +
        '*/\n' +
        'let resultMultiply = multiply(a, b);\n' +
        '\n' +
        '/*\n' +
        '    4.  Set output model which is returned in REST API\n' +
        '*/\n' +
        'output.result = resultMultiply;\n' +
        '\n' +
        '/*\n' +
        '    Optionally: It is possible print values to console\n' +
        '*/\n' +
        "log('Result multiply:', resultMultiply);\n" +
        '\n' +
        '/*\n' +
        '    5.  Return output  \n' +
        '*/\n' +
        'return output;',
    type: 'complex-rule',
    status: 'published',
    auditLog: { active: false, debug: { active: false }, ttl: 14 },
    ruleAlias: 'witty-pinniped',
    createdIn: '2023-12-18T10:00:13.665Z',
    lastUpdate: '2023-12-18T10:00:13.665Z',
    locked: false,
    ruleId: 'f0e4bab9-6089-a4a8-2b11-e548bd015386',
    baseId: 'f0e4bab9-6089-a4a8-2b11-e548bd015386',
    version: 1,
    tags: []
};
const ruleToCreate = {
    name: 'skript created from SDK library',
    description: 'Updated from SDK library',
    inputSchema: { value1: {}, value2: {} },
    outputSchema: { result: {} },
    script: '/* \n' +
        '    1.  Input variables\n' +
        '    Input body is set in input variable \n' +
        '*/\n' +
        'let a = input.value1;\n' +
        'let b = input.value2;\n' +
        '\n' +
        '/*\n' +
        '    2.  Define simple "multiply" function\n' +
        '*/\n' +
        'function multiply(a, b) {\n' +
        '    return a * b;\n' +
        '}\n' +
        '\n' +
        '/*\n' +
        '    3.  Execute multiply function and store value result variable\n' +
        '*/\n' +
        'let resultMultiply = multiply(a, b);\n' +
        '\n' +
        '/*\n' +
        '    4.  Set output model which is returned in REST API\n' +
        '*/\n' +
        'output.result = resultMultiply;\n' +
        '\n' +
        '/*\n' +
        '    Optionally: It is possible print values to console\n' +
        '*/\n' +
        "log('Result multiply:', resultMultiply);\n" +
        '\n' +
        '/*\n' +
        '    5.  Return output  \n' +
        '*/\n' +
        'return output;',
    type: 'complex-rule',
    status: 'published',
    auditLog: { active: false, debug: { active: false }, ttl: 14 },
    ruleAlias: 'from-sdk',
    createdIn: '2023-12-18T10:00:13.665Z',
    lastUpdate: '2023-12-18T10:00:13.665Z',
    locked: false,
    ruleId: 'f0e4bab9-6089-a4a8-2b11-e548bd015731',
    baseId: 'f0e4bab9-6089-a4a8-2b11-e548bd015731',
    version: 1,
    tags: []
};
// // SOLVER API
//
// //Decision Script call
//
// ///all arguments
//
// solverOpt = {
//     debug: false,
//     //corrId: "mycorrId",
//     strategy: "STANDARD",
//     audit: true,
//     auditTtl: "14"
// }
//
// dr.solve(ruleId, decisionTreeData, version, solverOpt).then((result: any) => {
//     console.log('Decision Script call all arguments result', result)
// }).catch((e: any) => {
//     console.log('Decision Script call all arguments error', e)
// })
//
// //Decision Tree call
//
// ///2 arguments (ruleId, data)
// ///no options, no version
// dr.solve(ruleId, decisionTreeData).then((result: any) => {
//     console.log('Decision Script no options, no version call result', result)
// }).catch((e: any) => {
//     console.log('Decision Script no options, no version call error', e)
// })
//
// //Decision Table call
//
// ///all arguments - excludeColumns
// solverOpt = {
//     cols: {
//         excludedConditionCols: ["productType"]
//     },
//     debug: false,
//     corrId: "197d5d5a-f6f7-35de-1afb-dc26237ebfc9",
//     strategy: "STANDARD",
//     audit: true,
//     auditTtl: "14"
// }
//
// dr.solve(decisionTableId, decisionTableDataExc, version, solverOpt).then((result: any) => {
//     console.log('Decision Table excludeColumns call result', result)
// }).catch((e: any) => {
//     console.log('Decision Table excludeColumns call error', e)
// })
//
// ///all arguments - includedColumns
// solverOpt = {
//     cols: {
//         includedConditionCols: ["productType"]
//     },
//     debug: false,
//     corrId: "197d5d5a-f6f7-35de-1afb-dc26237ebfc9",
//     strategy: "STANDARD",
//     audit: true,
//     auditTtl: "14"
// }
//
// dr.solve(decisionTableId, decisionTableDataInc, version, solverOpt).then((result: any) => {
//     console.log('Decision Table includedColumns call result', result)
// }).catch((e: any) => {
//     console.log('Decision Table includedColumns error', e)
// })
//
// ///all arguments - Array strategy
// solverOpt = {
//     debug: false,
//     corrId: "197d5d5a-f6f7-35de-1afb-dc26237ebfc9",
//     strategy: "ARRAY",
//     audit: true,
//     auditTtl: "14"
// }
//
// dr.solve(decisionTableId, decisionTableData, version, solverOpt).then((result: any) => {
//     console.log('Decision Table Array Strategy result', result)
//     console.log('result.prices.finalPrice', result[0].prices.finalPrice)
//     console.log('result.prices.crudePrice', result[0].prices.crudePrice)
// }).catch((e: any) => {
//     console.log('Decision Table Array Strategy error', e)
// })
//
// ///all arguments - First Match strategy
// solverOpt = {
//     debug: false,
//     corrId: "197d5d5a-f6f7-35de-1afb-dc26237ebfc9",
//     strategy: "FIRST_MATCH",
//     audit: true,
//     auditTtl: "14"
// }
//
// dr.solve(decisionTableId, decisionTableData, version, solverOpt).then((result: any) => {
//     console.log('Decision Table FirstMatch Strategy result', result)
// }).catch((e: any) => {
//     console.log('Decision Table FirstMatch Strategy error', e)
// })
//
// ///all arguments - Evaluate all strategy
// solverOpt = {
//     debug: false,
//     corrId: "197d5d5a-f6f7-35de-1afb-dc26237ebfc9",
//     strategy: "EVALUATE_ALL",
//     audit: true,
//     auditTtl: "14"
// }
//
// dr.solve(decisionTableId, decisionTableData, version, solverOpt).then((result: any) => {
//     console.log('Decision Table EvaluateAll Strategy result', result)
// }).catch((e: any) => {
//     console.log('Decision Table EvaluateAll Strategy error', e)
// })
//
// ///no options
// dr.solve(decisionTableId, decisionTableData, version).then((result: any) => {
//     console.log('Decision Table no options result', result)
// }).catch((e: any) => {
//     console.log('Decision Table no options error', e)
// })
//
//---------------------------------------------------------------
//
// MANAGEMENT API
//
// //getRule
// dr.management.getRule(ruleId, version).then((result: any) => {
//     console.log('getRule test result', result)
// }).catch((e: any) => {
//     console.log('getRule test error', e)
// });
//
// //updateRuleStatus
// dr.management.updateRuleStatus(ruleId, 'published', version).then((result: any) => {
//     console.log('updateRuleStatus test result', result)
// }).catch((e: any) => {
//     console.log('updateRuleStatus test error', e)
// });
//
// //updateRule
// dr.management.updateRule(ruleId, ruleToUpdate, version).then((result: any) => {
//     console.log('updateRule test result', result)
// }).catch((e: any) => {
//     console.log('updateRule test error', e)
// });
//
//
// //createRule
// dr.management.createRule(ruleToCreate).then((result: any) => {
//     console.log('createRule test result', result)
// }).catch((e: any) => {
//     console.log('createRule test error', e)
// });
//
// //deleteRule
// dr.management.deleteRule(ruleIdToDelete).then((result: any) => {
//     console.log('deleteRule test result', result)
// }).catch((e: any) => {
//     console.log('deleteRule test error', e)
// });
//
// //getRulesForSpace
// dr.management.getRulesForSpace().then((result: any) => {
//     console.log('getRulesForSpace test result', result)
// }).catch((e: any) => {
//     console.log('getRulesForSpace test error', e)
// });
//
// //getTags
// dr.management.getTags(tags).then((result: any) => {
//     console.log('getTags test result', result)
// }).catch((e: any) => {
//     console.log('getTags test error', e)
// });
//
// //updateTags
// dr.management.updateTags(ruleId, tagsToUpdate).then((result: any) => {
//     console.log('updateTags test result', result)
// }).catch((e: any) => {
//     console.log('updateTags test error', e)
// });
//
// //deleteTags
// dr.management.deleteTags(decisionTableId, tagsToDelete, version).then((result: any) => {
//     console.log('deleteTags test result', result)
// }).catch((e: any) => {
//     console.log('deleteTags test error', e)
// });
//
// //exportFolder
// dr.management.exportFolder(nodeId).then((result: any) => {
//     console.log('exportFolder test result', result)
//     console.log('rules in exported folder', result.export.data.rules)
// }).catch((e: any) => {
//     console.log('exportFolder test error', e)
// });
//
// //importFolder
// dr.management.importFolder(nodeId).then((result: any) => {
//     console.log('importFolder test result', result)
//     console.log('rules in imported folder', result.data.rules)
// }).catch((e: any) => {
//     console.log('importFolder test error', e)
// });
//
// //findDuplicates
// dr.management.findDuplicates(decisionTableId).then((result: any) => {
//     console.log('findDuplicates test result', result)
//    // console.log('result.rule', result.rule)
//     console.log('result.duplicates[0].rows', result.duplicates[0].rows)
//     console.log('result.duplicates[0].indices', result.duplicates[0].indices)
// }).catch((e: any) => {
//     console.log('findDuplicates test error', e)
// });
//
// //findDependencies
// dr.management.findDependencies(ruleIdWithDependencies).then((result: any) => {
//     console.log('findDependencies test result', result)
// }).catch((e: any) => {
//     console.log('findDependencies test error', e)
// });
//
// //lockRule
// dr.management.lockRule(ruleIdToLock, dataToLockTheRule, version).then((result: any) => {
//     console.log('lockRule test result', result)
// }).catch((e: any) => {
//     console.log('lockRule test error', e)
// });
//
// BI Api calls
//
// //getAuditLogs
// dr.bi.getAuditLogs(auditLogsOptions).then((result: any) => {
//     console.log('logs', result)
// }).catch((e: any) => {
//     console.log('getAuditLog error', e)
// });
//deleteAuditLogs
dr.bi.deleteAuditLogs(auditLogsToDeleteOptions).then((result) => {
    console.log('delete logs', result);
}).catch((e) => {
    console.log('deleteAuditLogs error', e);
});

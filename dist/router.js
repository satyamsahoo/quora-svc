"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/health-check', (req, res) => {
    res.send('I am OK');
});
exports.default = router;
//# sourceMappingURL=router.js.map
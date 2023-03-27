"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeExpressController(controller) {
    return function expressController(req, res, next) {
        controller(req)
            .then((response) => {
            res.type("json");
            res.status(response.statusCode).send(response.body);
        })
            .catch((error) => {
            res.status(error.statusCode).send(error.body);
            next(error);
        });
    };
}
exports.default = makeExpressController;
//# sourceMappingURL=express-controller.js.map
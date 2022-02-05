const Supervisor = require('../models/supervisor.model');
const { er, sr } = require('../helper/response');

module.exports = {
    //Supervisor Update Controller
    // update: async (req, res) => {
    //     try {
    //         if (!req.isAuth) throw new Error(401);
    //         if (req._type !== 0) throw new Error(401);
    //         const supervisor = new Supervisor(req.body);
    //         const data = await Supervisor.findByIdAndUpdate(req.params.id, supervisor);
    //         sr(res, data);
    //     } catch (error) {
    //         er(res, error);
    //     }
    // },

    //Supervisor Delete Controller
    // delete: async (req, res) => {
    //     try {
    //         if (!req.isAuth) throw new Error(401);
    //         if (req._type !== 0) throw new Error(401);
    //         await Supervisor.findByIdAndDelete(req.params.id);
    //         sr(res, true);
    //     } catch (error) {
    //         er(res, error);
    //     }
    // },

    //Supervisor Find Controller
    find: async (req, res) => {
        try {
            if (!req.isAuth) throw new Error(401);
            if (req._type !== 0) throw new Error(401);
            let data;
            if (req.body.req) {
                data = await Supervisor.find({}).sort({ createdAt: -1 });
            } else {
                data = await Supervisor.findById(req._id);
            }
            data.password = null;
            sr(res, data);
        } catch (error) {
            er(res, error);
        }
    }
};
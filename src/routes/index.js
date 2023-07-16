var express = require("express"),
scrapController = require("../controller/scrapController"),
router = express.Router()

router.get("/",scrapController.home);
router.post("/",scrapController.homePost);
router.get("/show",scrapController.show);
//router.post("/home",scrapController.homePost);


module.exports = router;

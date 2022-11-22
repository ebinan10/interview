const express = require('express');
const PollingUnit = require('../../controller/pollingUnit/PollingUnit');
const PollingUnitDetail = require('../../controller/pollingUnit/PollingUnitDetails');
const router = express.Router();

router.post('/create', PollingUnit.createPollingUnit);

router.post('/info', PollingUnitDetail.unitInfo);

router.post('/find', PollingUnit.getPollingUnit);

router.post('/result', PollingUnit.getLocalGovtResullt);

module.exports = router;
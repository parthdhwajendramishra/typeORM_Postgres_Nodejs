import express from 'express';
import { Location } from '../entities/Location';

const router = express.Router();

router.delete('/api/deleteLocation', async (req, res) => {

    const {
        _Location
    } = req.body;



    const location=await Location.delete({Location_Name:_Location})
    return res.json(location);

});


export { router as deleteLocationRouter };
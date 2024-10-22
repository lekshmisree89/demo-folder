import express from 'express';
import type { Request, Response } from 'express';
import { Volunteer } from '../../models/volunteer.js';

const router = express.Router();

// GET /volunteers - Get all volunteers
router.get('/', async (_req: Request, res: Response) => {
  try{
    const volunteers = await Volunteer.findAll();
    res.status(200).json(volunteers);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server  Error' });

  }

  
  // TODO: Update code to return all Volunteers
});

// GET /volunteers/:id - Get a volunteer by ID
router.get('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  try{
    const volunteer = await Volunteer.findByPk(id);
    if (volunteer) {
      res.status(200).json(volunteer);
    } else {
      res.status(404).json({ error: 'Volunteer not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
  // TODO: Update code to return one Volunteer based on ID
});

// POST /volunteers - Create a new volunteer
router.post('/', async (req: Request, res: Response) => {
  const { volunteerName} = req.body;
  try {
    const volunteer = await Volunteer.create({ volunteerName});
    res.status(201).json(volunteer);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// PUT /volunteers/:id - Update a volunteer by ID
router.put('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
 const { Volunteer} = req.body;
  try{
    const volunteer = await Volunteer.findByPk(id);
    if (volunteer) {
      
      await volunteer.save();
      res.status(200).json(volunteer);
    } else {
      res.status(404).json({ error: 'Volunteer not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
  // TODO: Update code to retrieve one Volunteer based on id and username and return an updated Volunteer object
});

// DELETE /volunteers/:id - Delete a volunteer by ID

router.delete('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  try{
    const volunteer = await Volunteer.findByPk(id);
    if (volunteer) {
      await volunteer.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Volunteer not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
  // TODO: Update code to delete Volunteer based on ID
});


export { router as volunteerRouter };

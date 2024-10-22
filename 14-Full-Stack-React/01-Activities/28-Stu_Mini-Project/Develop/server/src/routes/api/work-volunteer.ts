import express from 'express';
import type { Request, Response } from 'express';
import { Work, Volunteer } from '../../models/index.js';


const router = express.Router();

//  GET /works - Get all Works
router.get('/', async (_req: Request, res: Response) => {
  try {
    const works = await Work.findAll({
      include: Volunteer,
    });
    res.status(200).json(works);

  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
);// TODO: Update code to retrieve all Work objects with associated Volunteer







// GET /works/:id - Get work by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const work = await Work.findByPk(id, {
      include: Volunteer,
    });
    if (work) {
      res.status(200).json(work);
    } else {
      res.status(404).json({ error: 'Work not found' });

    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
);

// TODO: Update code to retrieve work object with associated Volunteer based on passing ID of Work


// POST /works - Create new work
router.post('/', async (req: Request, res: Response) => {
  const { name, status, description, assignedVolunteerId } = req.body;
  try {
    const volunteer = await Volunteer.findByPk(assignedVolunteerId);
    if (volunteer) {
      const work = await Work.create({ name, status, description, assignedVolunteerId });
      res.status(201).json(work);
    } else {
      res.status(404).json({ error: 'Volunteer not found' });
    }
    // TODO: Update code to create new Work based on passing name, status, description, and assignedVolunteerId
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }

}
);

// PUT /works/:id - Update work by ID
router.put('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const { name, status, description, assignedVolunteerId } = req.body;
  try {
    const work = await Work.findByPk(id);
    if (work) {
      work.name = name;
      work.status = status;
      work.description = description;
      work.assignedVolunteerId = assignedVolunteerId;
      await work.save();
      res.status(200).json(work);
    } else {
      res.status(404).json({ error: 'Work not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
  
  // TODO: Update code to update already existing work by passing values of name, status, description, assignedVolunteerId.
});

// DELETE /works/:id - Delete work by ID
router.delete('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const work = await Work.findByPk(id);
    if (work) {
      await work.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Work not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }

  // TODO: Update code to delete work based on passing ID of Work
});

export { router as workRouter };

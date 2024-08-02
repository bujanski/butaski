import { connectToDb } from "../lib/utils";
import { Project } from "../lib/models/Project";

export default async function handler(req, res) {
    await connectToDb();
  
    if (req.method === 'POST') {
      try {
        const project = new Project(req.body);
        await project.save();
        res.status(201).json({ success: true, data: project });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
    } else {
      res.status(405).json({ success: false, message: 'Method not allowed' });
    }
  }
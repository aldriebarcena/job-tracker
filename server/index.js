const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Create a job application
app.post("/api/jobs", async (req, res) => {
  const { userId, company, position, status, appliedDate, notes } = req.body;
  try {
    const job = await prisma.jobApplication.create({
      data: {
        userId,
        company,
        position,
        status,
        appliedDate: new Date(appliedDate),
        notes,
      },
    });
    res.json(job);
  } catch (error) {
    res.status(500).json({ error: "Failed to create job application" });
  }
});

// Get all job applications
app.get("/api/jobs", async (req, res) => {
  try {
    const jobs = await prisma.jobApplication.findMany();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch job applications" });
  }
});

// Update a job application
app.put("/api/jobs/:id", async (req, res) => {
  const { id } = req.params;
  const { company, position, status, appliedDate, notes } = req.body;
  try {
    const job = await prisma.jobApplication.update({
      where: { id: parseInt(id) },
      data: {
        company,
        position,
        status,
        appliedDate: new Date(appliedDate),
        notes,
      },
    });
    res.json(job);
  } catch (error) {
    res.status(500).json({ error: "Failed to update job application" });
  }
});

// Delete a job application
app.delete("/api/jobs/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.jobApplication.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: "Job application deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete job application" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

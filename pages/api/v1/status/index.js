import database from "infra/database.js";

async function status(resquest, response) {
  const updatedAt = new Date().toISOString();
  response.status(200).json({
    updated_at: updatedAt,
  });
}

export default status;

